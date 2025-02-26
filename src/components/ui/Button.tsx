'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { cn } from '../../lib/cn';

interface Props {
    title?: string
    path?: string
    onClick?: () => void
    className?: string
}

const Button = ({ title, path, className, onClick }: Props) => {
    const router = useRouter()
    return (
        <button
            onClick={path ? () => router.push(path) : onClick}
            className={cn(className, 'bg-primary md:max-w-[300px] text-white w-full py-4 rounded-full font-semibold text-lg')}>{title}</button>
    )
}

export default Button