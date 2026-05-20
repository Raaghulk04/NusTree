'use client'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'

export default function MajorTracker() {
    const { data, isPending } = authClient.useSession()
    const [majors, setMajors] = useState([])
    const [major, setMajor] = useState("")

    useEffect(() => {
        authClient.getSession().then(s => console.log('manual session:', s))
    }, [])

    return (
        <div>       
        </div>
    )
}