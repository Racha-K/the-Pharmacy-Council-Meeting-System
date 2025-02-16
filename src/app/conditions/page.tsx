import Warpper from '@/components/ui/Warpper'
import Image from 'next/image'
import React from 'react'

import icon from '@/assets/icons/tele.svg'
import Button from '@/components/ui/Button'


function page() {
    return (
        <Warpper className='space-y-2 lg:!px-[56px]'>
            <div className='flex flex-col h-full'>
                <div className='flex gap-8 items-center min-h-max' >
                    <Image src={icon} alt='icon' className='m-4 w-16 h-16 md:w-24 md:h-24' />
                    <div className='text-[#2B2C2D] text-xl md:text-2xl lg:text-4xl font-semibold md:text-center md:w-full'>
                        <h6>ข้อกำหนดและเงื่อนไข</h6>
                        <h6>Term and Conditions</h6>
                    </div>
                    <div className='m-4 w-16 h-16 md:w-24 md:h-24 hidden md:block' />
                </div>

                <div className='grow max-h-full relative flex flex-col overflow-auto gap-4 md:gap-12 lg:gap-8 lg:mb-4'>
                    <p className='overflow-auto p-4 rounded-xl bg-[#F1F1E8] grow'>
                        “ข้อมูลส่วนบุคคล” หมายถึง ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ<br />
                        “ข้อมูลส่วนบุคคลที่อ่อนไหว” หมายถึง ข้อมูลส่วนบุคคลที่เกี่ยวกับเชื้อชาติ เผ่าพันธุ์ ความคิดเห็นทางการเมือง ความเชื่อในลัทธิ ศาสนาหรือปรัชญา พฤติกรรมทางเพศ ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน ข้อมูลพันธุกรรม ข้อมูลชีวภาพ (เช่น ข้อมูลภาพจำลองใบหน้า ข้อมูลจำลองม่านตา ข้อมูลจำลองลายนิ้วมือ) หรือข้อมูลอื่นใดที่กระทบต่อเจ้าของข้อมูลส่วนบุคคลในทำนองเดียวกันตามที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลประกาศกำหนด<br />
                        “ประมวลผล” หมายถึง เก็บรวบรวม ใช้ หรือเปิดเผย<br />
                        “ผู้ควบคุมข้อมูลส่วนบุคคล” หมายถึง บุคคลหรือนิติบุคคลที่มีอํานาจในการตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล<br />
                        “ผู้ประมวลผลข้อมูลส่วนบุคคล” หมายถึง บุคคลหรือนิติบุคคลซึ่งดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของผู้ควบคุมข้อมูลส่วนบุคคล ทั้งนี้ บุคคลหรือนิติบุคคลซึ่งดำเนินการดังกล่าวไม่เป็นผู้ควบคุมข้อมูลส่วนบุคคล<br />
                        <br />
                        สภาเภสัชกรรม หมายถึง องค์กรที่เป็น ตัวแทนของผู้ประกอบวิชาชีพเภสัชกรรมในประเทศไทย มี วัตถุประสงค์และอำนาจ หน้าที่ตามที่บัญญัติไว้ในพระราชบัญญัติวิชาชีพเภสัชกรรม พ.ศ.2537<br />
                        “ข้อมูลส่วนบุคคล” หมายถึง ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ<br />
                        “ข้อมูลส่วนบุคคลที่อ่อนไหว” หมายถึง ข้อมูลส่วนบุคคลที่เกี่ยวกับเชื้อชาติ เผ่าพันธุ์ ความคิดเห็นทางการเมือง ความเชื่อในลัทธิ ศาสนาหรือปรัชญา พฤติกรรมทางเพศ ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน ข้อมูลพันธุกรรม ข้อมูลชีวภาพ (เช่น ข้อมูลภาพจำลองใบหน้า ข้อมูลจำลองม่านตา ข้อมูลจำลองลายนิ้วมือ) หรือข้อมูลอื่นใดที่กระทบต่อเจ้าของข้อมูลส่วนบุคคลในทำนองเดียวกันตามที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลประกาศกำหนด<br />
                        “ประมวลผล” หมายถึง เก็บรวบรวม ใช้ หรือเปิดเผย<br />
                        “ผู้ควบคุมข้อมูลส่วนบุคคล” หมายถึง บุคคลหรือนิติบุคคลที่มีอํานาจในการตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล<br />
                        “ผู้ประมวลผลข้อมูลส่วนบุคคล” หมายถึง บุคคลหรือนิติบุคคลซึ่งดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของผู้ควบคุมข้อมูลส่วนบุคคล ทั้งนี้ บุคคลหรือนิติบุคคลซึ่งดำเนินการดังกล่าวไม่เป็นผู้ควบคุมข้อมูลส่วนบุคคล<br />
                        <br />
                        สภาเภสัชกรรม หมายถึง องค์กรที่เป็น ตัวแทนของผู้ประกอบวิชาชีพเภสัชกรรมในประเทศไทย มี วัตถุประสงค์และอำนาจ หน้าที่ตามที่บัญญัติไว้ในพระราชบัญญัติวิชาชีพเภสัชกรรม พ.ศ.2537<br />
                    </p>
                    <div className='flex gap-8 sm:gap-16 lg:gap-[160px] min-h-max justify-center'>
                        <Button title='ยอมรับ' path='/login' />
                        <Button title='ไม่ยอมรับ' path='/' />
                    </div>
                </div>
            </div>
        </Warpper >
    )
}

export default page
