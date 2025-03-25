"use client";

import SigninForm from "@/components/signin-form-demo";
import Navbar2 from "@/components/Navbar2";

export default function SignInPage() {
    
    return (
        <div className="flex flex-1 justify-center items-center min-h-screen max-screen">
            <Navbar2 />
            <SigninForm />
        </div>
    )
}
