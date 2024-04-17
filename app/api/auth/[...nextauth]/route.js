import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import DB from "@/services/database";
import bcrypt from "bcryptjs";

export const authOption = NextAuth({
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
            console.log(userFound);

            const passwordMatch = await bcrypt.compare(
                credentials.password,
                userFound.password
            );

            if (!passwordMatch) throw new Error ("La contraseña es inválida");

            return { userFound, email: credentials.email };
        }
        })
    ],
    callbacks: {
        async jwt({ token, user }){
            if (user) {
                token.user = {
                    email: user.email,
                };
            }
            return token;
        },
        async session({ session, token, user }){
            if (user){
                session.user = {
                    session: token.user, 
                } 
            }
            return session;
        }
    }
});

export { authOption as GET, authOption as POST };