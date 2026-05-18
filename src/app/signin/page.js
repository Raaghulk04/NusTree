'use client'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { LoginForm } from '@/components/login-form'

export default function SignIn() {
    return (
        <div>
            <LoginForm />
        </div>
    )
}