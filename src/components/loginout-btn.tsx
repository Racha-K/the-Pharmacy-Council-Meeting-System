'use client'
import usePharmacyStore from '@/stores/pharmacy-store'
import { Pharmacy } from '@/types/pharmacy-type'
import { removeCookie } from '@/utils/cookie'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface LoginOutBtnProps {
  className?: string
}



function LoginOutBtn({ className }: LoginOutBtnProps) {
  const router = useRouter()
  const { clearPharmacy } = usePharmacyStore()

  async function loginOut() {
    clearPharmacy()
    await removeCookie({ name: 'access_token' })
    await removeCookie({ name: 'license_id' })
    router.push('/')
  }


  return (
    <button onClick={loginOut} className={`absolute top-12 right-12 flex flex-row items-center gap-2 px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D] ${className}`}>
      <LogOut />
      <span className='hidden md:block'>ออกจากระบบ</span>
    </button>
  )
}

export default LoginOutBtn