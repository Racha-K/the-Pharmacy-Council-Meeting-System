/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect } from 'react'
import Watermark from './_components/water-mark'
import Image from 'next/image'

import tele from "@/assets/icons/tele.svg"
import usePharmacyStore, { PharmacyStore } from '@/stores/pharmacy-store'
import { useRouter } from 'next/navigation'
import { getUser } from '@/utils/action/get-user'

function page() {
    const { pharmacy, setPharmacy } = usePharmacyStore() as PharmacyStore
    const router = useRouter()

    const checkUser = async () => {
        const res = await getUser()
        if (res.success) {
            setPharmacy(res.data.data)
            return
        }
        router.push("/")
    }

    useEffect(() => {
        try {
            if (!pharmacy) {
                void checkUser()
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (

        <div className='flex flex-col items-center justify-start md:justify-center min-h-screen w-full !z-[100] relative overflow-hidden p-4 space-y-6' >
            <Image src={tele} alt="logo" width={100} height={100} className=' top-12 left-12' />
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
            {pharmacy && <Watermark pharmacy={pharmacy} />}
            <p className='text-center text-[#23260D] text-[14px] md:text-base'>
                สำนักงานเลขาธิการสภาเภสัชกรรม<br />
                เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000<br />
                โทรศัพท์ 02-591-9992  Email: pharthai@pharmacycouncil.org
            </p>
        </div>
    )
}

export default page
