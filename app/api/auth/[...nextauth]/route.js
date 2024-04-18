import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import DB from "@/services/database";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email: {label: "Email", type:"email", placeholder:"email@gmail.com"},
                password: {label: "Password", type:"password"}
            },

            async authorize(credentials, req) {
                const { User } =  await DB();
                const userFound = await User.findOne({
                    email: credentials?.email,
                }).select("+password");

                if (!userFound) throw new Error ("Los datos son incorrectos");

                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    userFound.password
                );

                if (!passwordMatch) throw new Error ("La contraseña es inválida");

                const { first_name, last_name } = userFound;

                return { ...userFound, email: credentials.email, first_name, last_name };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },

        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };