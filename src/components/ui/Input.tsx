import React from 'react'

interface Props {
    placeholder?: string
    type?: string
}

const Input = ({ placeholder, type }: Props) => {
    return (
        <input type={type} className='bg-white w-full py-3 px-4 rounded-lg border border-[#CFCFCF] focus:outline-primary' placeholder={placeholder} />
    )
}

export default Input