'use client'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSignIn = async () => {
        const result = await authClient.signIn.email({
            email,
            password,
            name,
        })
        console.log(result)
        router.push("/")
    }

    return (
        <div>
            <h1>Sign In</h1>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
}