
import { prisma } from "@/lib/prisma";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export default {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Google ({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),

        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "exemple@domaine.com" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                // Conversion explicite en string pour éviter les erreurs de type
                const email = credentials?.email as string;
                const password = credentials?.password as string;

                // Vérification de la présence d'un email et d'un mot de passe
                if (!email || !password) {
                    throw new Error("Email et mot de passe requis");
                }

                // Recherche de l'utilisateur dans la base de données via Prisma
                const user = await prisma.user.findUnique({
                    where: { email }
                });

                if (!user) {
                    throw new Error("Utilisateur non trouvé");
                }

                // Vérification que le mot de passe stocké n'est pas null
                if (!user.password) {
                    throw new Error("Mot de passe non défini pour cet utilisateur");
                }

                // Comparaison du mot de passe fourni avec celui en base (user.password est ici garanti d'être une string)
                const isValid = await bcrypt.compare(password, user.password as string);
                if (!isValid) {
                    throw new Error("Mot de passe incorrect");
                }

                // Retour de l'utilisateur validé pour la création de la session
                return user;
            }
        }),
    ]
} satisfies NextAuthConfig;