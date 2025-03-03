/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Warpper from '@/components/ui/Warpper'
import Image from 'next/image'
import React from 'react'

import icon from '@/assets/icons/tele.svg'
import { LockOpen, User } from 'lucide-react'
import Link from 'next/link'
import { Switch } from '@/components/ui/switch'
import { useRouter } from 'next/navigation'


const page = () => {
    const router = useRouter()
    return (
        <Warpper className=' space-y-2 md:space-y-4 flex flex-col items-center relative'>
            <Link href={"####"} className='top-12 hidden md:block right-4 absolute px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D]'>เว็บไซต์สภาเภสัชกรรม</Link>
            <div className='max-w-[578px] min-h-full place-content-center place-self-center space-y-6'>
                <div className='space-y-3 md:space-y-8 flex flex-col items-center'>
                    <Image src={icon} alt='icon' className='w-[70px] h-[70px] md:w-[140px] md:max-w-[150px] md:h-[140px] md:max-h-[150px]' />
                    <div className='text-standard text-center space-y-6'>
                        <div className='font-semibold '>
                            <h1 className='text-xl md:text-4xl lg:text-[40px]'>ระบบประชุมสภาเภสัชกรรม</h1>
                            <span className='text-lg md:text-2xl lg:text-[32px]'>the Pharmacy Council of Thailand<br /> Meeting System</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <h4 className='text-[#5D6222] text-2xl font-semibold text-center'>เข้าสู่ระบบ</h4>
                    <div className='space-y-4'>
                        <div className='relative w-full h-14 px-6 py-2 bg-[#FAFAEB] flex items-center border border-[#E7E6AF] rounded-2xl'>
                            <User size={32} />
                            <div className='w-[1px] h-full mx-4 bg-[#5D6222]' />
                            <input className='w-full h-full bg-transparent outline-none text-lg' />
                            <div className='absolute -top-0.5 left-20 -translate-y-1/2 px-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full'>
                                <span className='text-[12px] font-bold'>Username</span>
                            </div>
                        </div>
                        <div className='relative w-full h-14 px-6 py-2 bg-[#FAFAEB] flex items-center border border-[#E7E6AF] rounded-2xl'>
                            <LockOpen size={32} />
                            <div className='w-[1px] h-full mx-4 bg-[#5D6222]' />
                            <input type='password' className='w-full h-full bg-transparent outline-none text-lg' />
                            <div className='absolute -top-0.5 left-20 -translate-y-1/2 px-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full'>
                                <span className='text-[12px] font-bold'>Password</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center !mt-4 lg:!mt-8'>
                        <div className='flex items-center gap-2'>
                            <Switch />
                            <span>Remember me</span>
                        </div>
                        <span className='text-[#5D6222] text-lg font-bold'>ลืมรหัสผ่าน?</span>
                    </div>
                    <div className='space-y-6'>
                        <button
                            onClick={() => router.push('/steaming')}
                            className='bg-gradient-to-tr from-[#80862A] to-[#5D6222] text-white w-full py-4 rounded-2xl font-semibold text-2xl'>
                            เข้าสู่ระบบ
                        </button>
                        <p className='text-center text-[#23260D] text-[14px] md:text-base'>
                            สำนักงานเลขาธิการสภาเภสัชกรรม<br />
                            เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000<br />
                            โทรศัพท์ 02-591-9992  Email: pharthai@pharmacycouncil.org
                        </p>
                    </div>
                </div>
            </div>
        </Warpper>
    )
}

export default page