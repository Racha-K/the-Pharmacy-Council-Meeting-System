/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Wrapper from '@/components/ui/Wrapper'
import Image from 'next/image'
import React, { useState } from 'react'

import icon from '@/assets/icons/tele.svg'
import { LockOpen, User } from 'lucide-react'
import Link from 'next/link'
import { Switch } from '@/components/ui/switch'
import { login } from '@/utils/action/login'
import { getUser } from '@/utils/action/get-user'
import usePharmacyStore from '@/stores/pharmacy-store'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


const page = () => {
    const [licenseId, setLicenseId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setPharmacy } = usePharmacyStore()
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!licenseId || !password) {
            toast.error("กรุณากรอกข้อมูลให้ครบ")
            return
        }
        const data = await login({ license: licenseId, password })
        if (data.success) {
            const res = await getUser()
            setPharmacy(res.data.data)
            toast.success("เข้าสู่ระบบสำเร็จ")
            router.push("/steaming")
        } else {
            toast.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
        }
    }

    return (
        <Wrapper className=' space-y-2 md:space-y-4 flex flex-col items-center'>
            <Link href={"https://www.pharmacycouncil.org/#gsc.tab=0"} className='top-12 hidden md:block right-12 absolute px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D]'>เว็บไซต์สภาเภสัชกรรม</Link>
            <div className='max-w-[578px] min-h-full place-content-center place-self-center space-y-6 md:space-y-4'>
                <div className='space-y-3 lg:space-y-6 flex flex-col items-center'>
                    <Image src={icon} alt='icon' className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] 2xl:w-[140px] 2xl:h-[140px]' />
                    <div className='text-standard text-center space-y-6'>
                        <div className='font-semibold '>
                            <h1 className='text-2xl md:text-xl lg:text-3xl 2xl:text-[40px]'>ระบบประชุมสภาเภสัชกรรม</h1>
                            <span className='text-xl md:text-lg lg:text-xl 2xl:text-2xl'>the Pharmacy Council of Thailand<br /> Meeting System</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleLogin} className='space-y-8 md:space-y-8 2xl:space-y-8'>
                    <h4 className='text-[#5D6222] text-lg xl:text-xl font-semibold text-center'>เข้าสู่ระบบ</h4>
                    <div className='space-y-6'>
                        <div className='relative w-full h-14  px-6 py-2 bg-[#FAFAEB] flex items-center border border-[#E7E6AF] rounded-2xl'>
                            <User size={32} />
                            <div className='w-[1px] h-full mx-4 bg-[#5D6222]' />
                            <input
                                type='text'
                                value={licenseId}
                                onChange={(e) => setLicenseId(e.target.value)}
                                className='w-full h-full bg-transparent outline-none text-lg' />
                            <div className='absolute -top-0.5 left-20 -translate-y-1/2 px-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full'>
                                <span className='text-[12px] font-bold'>Username</span>
                            </div>
                        </div>
                        <div className='relative w-full h-14  px-6 py-2 bg-[#FAFAEB] flex items-center border border-[#E7E6AF] rounded-2xl'>
                            <LockOpen size={32} />
                            <div className='w-[1px] h-full mx-4 bg-[#5D6222]' />
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full h-full bg-transparent outline-none text-lg' />
                            <div className='absolute -top-0.5 left-20 -translate-y-1/2 px-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full'>
                                <span className='text-[12px] font-bold'>Password</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center !mt-4 2xl:!mt-8'>
                        <div className='flex items-center gap-2 text-sm'>
                            <Switch />
                            <span>Remember me</span>
                        </div>
                        <span className='text-[#5D6222] text-sm font-bold'>ลืมรหัสผ่าน?</span>
                    </div>
                    <div className='space-y-6  md:space-y-4'>
                        <button
                            type='submit'
                            className='bg-gradient-to-tr from-[#80862A] to-[#5D6222] text-white w-full py-4 rounded-2xl font-semibold text-lg 2xl:text-2xl'>
                            <span>เข้าสู่ระบบ</span>
                        </button>
                        <p className='text-[10px] 2xl:text-[12px] text-[#23260D] text-center'>สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข<br />
                            เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000 <br />
                            โทรศัพท์ 0 2591 9992 (คู่สายอัตโนมัติ) โทรสาร 0 2591 9996 <br />
                            Email: pharthai@pharmacycouncil.org
                        </p>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default page