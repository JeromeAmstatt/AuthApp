"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
    const { data: session } = useSession()
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {session?.user ? (
                    <div>
                        {session.user.image && (
                            <Image src={session.user.image} width={50} height={50} alt={""} className="rounded-full"/>
                        )}
                        {session.user.name && (
                            <p>{session.user.name}</p>
                        )}
                        <button onClick={() => signOut()}>Déconnexion</button>
                    </div>
                ) : (
                    <Link href="/login" >
                        <Button>Connexion</Button>
                    </Link>
                )}
            </div>
        </div>
    )
}