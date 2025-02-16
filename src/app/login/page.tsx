import Warpper from '@/components/ui/Warpper'
import Image from 'next/image'
import React from 'react'

import icon from '@/assets/icons/tele.svg'
import InputBox from './_components/input-box'
import Button from '@/components/ui/Button'


const page = () => {
    return (
        <Warpper className=' space-y-2 md:space-y-4 flex flex-col md:items-center'>
            <div className='space-y-3 md:space-y-8 flex flex-col items-center'>
                <Image src={icon} alt='icon' className='w-[70px] h-[70px] md:w-[140px] md:max-w-[150px] md:h-[140px] md:max-h-[150px]' />
                <div className='text-standard text-center space-y-6'>
                    <div className='font-semibold '>
                        <h1 className='text-xl md:text-4xl lg:text-[40px]'>ระบบประชุมสภาเภสัชกรรม</h1>
                        <span className='text-lg md:text-2xl lg:text-[32px]'>the Pharmacy Council of Thailand Meeting System</span>
                    </div>
                </div>
            </div>
            <div className='text-[#464646] font-semibold space-y-4 px-4 flex flex-col items-center w-full md:w-[70%] lg:w-[479px]'>
                <span className='text-center md:text-2xl'>กรุณาเข้าสู่ระบบ</span>
                <InputBox required title='USERNAME' placeholder='USERNAME' type='text' />
                <InputBox required title='PASSWORD' placeholder='PASSWORD' type='password' />
                <span className='hidden md:block text-lg text-[#737300] font-normal place-self-end'>ลืมรหัสผ่าน?</span>
            </div>
            <div className='!mt-4 md:!mt-4 grow flex flex-col justify-between md:justify-center  gap-4 md:gap-12 items-center md:w-[70%]'>
                <Button title='เข้าสู่ระบบ' path='/home' />
                <p className='text-[10px] md:text-sm text-primary font-medium text-center'>สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข<br />
                    เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000 <br />
                    โทรศัพท์ 0 2591 9992 (คู่สายอัตโนมัติ) โทรสาร 0 2591 9996 <br />
                    Email: pharthai@pharmacycouncil.org</p>
            </div>
        </Warpper>
    )
}

export default page