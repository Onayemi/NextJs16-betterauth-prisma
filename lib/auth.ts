import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { nextCookies } from "better-auth/next-js";
// If your Prisma file is located elsewhere, you can change the path
// import { PrismaClient } from "@/generated/prisma/client";

// const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {  provider: "mysql",  }), // or "mysql", "postgresql", ...etc
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 8,
        autoSignIn: true,
    },
    account: {
        accountLinking: {
        enabled: true,
        }
    },
    // socialProviders: {
    //     github: {
    //         clientId: "",
    //         clientSecret: "",
    //         //   clientId: process.env.GITHUB_CLIENT_ID!, // OR
    //         //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //     },
    //     google: {
    //         clientId: "",
    //         clientSecret: "",    
    //     },
    // },
    plugins: [nextCookies()]
});
