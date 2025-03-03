import React from 'react'
import Watermark from './_components/water-mark'
import Image from 'next/image'

import tele from "@/assets/icons/tele.svg"

function page() {
    return (

        <div className='flex flex-col items-center justify-center min-h-screen w-full !z-[100] relative overflow-hidden p-4 space-y-4' >
            <Image src={tele} alt="logo" width={100} height={100} className='absolute top-12 left-12' />
            {/* YouTube Iframe */}
            <iframe
                className="w-[1000px] max-w-full aspect-video"
                src="https://www.youtube.com/embed/vKNo0Ucx5CU"
                // https://www.youtube.com/watch?v=vKNo0Ucx5CU
                // https://www.youtube.com/embed/jvNRmnrott8
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="YouTube video"
            ></iframe>

            {/* ลายน้ำ (Watermark) */}
            <Watermark />
            <p className='text-center text-[#23260D] text-[14px] md:text-base'>
                สำนักงานเลขาธิการสภาเภสัชกรรม<br />
                เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000<br />
                โทรศัพท์ 02-591-9992  Email: pharthai@pharmacycouncil.org
            </p>
        </div>
    )
}

export default page
