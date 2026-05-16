'use client'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [name, setName] = useState("")

    const handleSignUp = async () => {
        const result = await authClient.signUp.email({
            email,
            password,
            name,
        })
        console.log(result)
        router.push("/")
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign In</button>
        </div>
    )
}