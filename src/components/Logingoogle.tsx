"use client";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export const LoginGoogle = () => {

    const BottomGradient = () => {
        return (
            <>
                <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </>
        );
    };

    return (
        <div>
            <button
                onClick={() => signIn("google", { redirectTo: "/dashboard/user" })}
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="submit"
            >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Google
                </span>
                <BottomGradient />

            </button>
        </div>
    );
}