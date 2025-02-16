import Image from 'next/image'
import React from 'react'

import doc from '@/assets/images/doc.png'
import live from '@/assets/images/live.png'
import user from '@/assets/images/user.png'

function StepLogin() {
    return (
        <div className='grid grid-cols-3 gap-4 font-semibold overflow-hidden relative'>
            <div className='w-[60%] h-[2.9px] bg-[#2A2A2A] absolute top-9 left-1/2 -translate-x-1/2' />
            <div className='flex flex-col items-center space-x-2 space-y-2 relative'>
                <div className='bg-[#DEDBDB] z-10 relative w-[72px] aspect-square rounded-full grid place-content-center'>
                    <Image src={doc} alt='icon' width={42} height={42} />
                </div>
                <span className='text-[10px] text-nowrap'>ยินยอมข้อมูลส่วนตัว</span>
            </div>
            <div className='flex flex-col items-center space-x-2 space-y-2'>
                <div className='bg-[#DEDBDB] z-10 w-[72px] aspect-square rounded-full grid place-content-center'>
                    <Image src={user} alt='icon' width={42} height={42} />
                </div>
                <span className='text-[10px] text-nowrap'>เข้าสู่ระบบ</span>
            </div>
            <div className='flex flex-col items-center space-x-2 space-y-2'>
                <div className='bg-[#DEDBDB] z-10 w-[72px] aspect-square rounded-full grid place-content-center'>
                    <Image src={live} alt='icon' width={42} height={42} />
                </div>
                <span className='text-[10px] text-nowrap'>รับชม Live ผ่าน Zoom</span>
            </div>
        </div>
    )
}

export default StepLogin