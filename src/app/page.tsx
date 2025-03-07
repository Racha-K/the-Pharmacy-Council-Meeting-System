'use client'

import icon from '@/assets/icons/tele.svg'
import Image from 'next/image';
import StepLogin from './_components/step-login';
import Wrapper from '@/components/ui/Wrapper';
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DialogClose } from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react';



export default function Home() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const [isOk, setIsOk] = useState<boolean>(false)

  const scrollToRef = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (!ref.current) {
      setIsOk(true);
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = ref.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsOk(true);
    }
  };


  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setIsOk(scrollTop + clientHeight >= scrollHeight - 5);
    };

    element.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <div className='flex-col !p-4 lg:content-center justify-self-center h-full'>
          <div className='space-y-4 md:space-y-2 2xl:space-y-4 flex flex-col items-center'>
            <Image src={icon} alt='icon' className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] 2xl:w-[140px] 2xl:h-[140px]' />
            <div className='text-standard text-center space-y-6 md:!mt-4 2xl:!mt-8'>
              <div className='font-semibold text-[#23260D]'>
                <h1 className='text-2xl md:text-xl lg:text-3xl 2xl:text-[40px]'>ระบบประชุมสภาเภสัชกรรม</h1>
                <span className='text-xl md:text-lg lg:text-xl 2xl:text-2xl'>the Pharmacy Council of Thailand <br />
                  Meeting System</span>
              </div>
              <div className='space-y-8 2xl:space-y-10'>
                <h6 className='text-lg md:text-2xl font-semibold text-[#5D6222]'>ขั้นตอนการเข้าห้องประชุม</h6>
                <StepLogin />
              </div>
            </div>
          </div>
          <div className='space-y-6 flex flex-col items-center 2xl:space-y-8'>
            <Dialog>
              <DialogTrigger className='flex relative w-full justify-center items-center mt-12 md:mt-8 2xl:mt-12 lg:w-[528px] bg-gradient-main text-2xl font-semibold text-white py-4 rounded-2xl'>
                <span>เข้าสู่ระบบ</span>
              </DialogTrigger>
              <DialogContent aria-describedby='เงื่อนไขและข้อกำหนด' className='max-w-[calc(100vw-48px)] lg:space-y-4 p-4 rounded-3xl'>
                <DialogTitle className='text-center flex flex-col gap-1'>
                  <span className='lg:text-[32px]'>ข้อกำหนดและเงื่อนไข</span>
                  <span className='lg:text-[28px]'>Term and Conditions</span>
                </DialogTitle>
                <div
                  ref={ref}
                  onScroll={handleScroll}
                  className='bg-[#F1F1E8] relative rounded-lg lg:rounded-3xl p-4 max-h-[calc(100vh-20rem)] lg:max-h-[calc(100vh-40rem)] min-h-[400px] overflow-hidden overflow-y-auto'>
                  <p className='h-full xl:text-lg'>
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
                    สภาเภสัชกรรม หมายถึง องค์กรที่เป็น ตัวแทนของผู้ประกอบวิชาชีพเภสัชกรรมในประเทศไทย มี วัตถุประสงค์และอำนาจ หน้าที่ตามที่บัญญัติไว้ในพระราชบัญญัติวิชาชีพเภสัชกรรม พ.ศ.2537
                  </p>
                  <div
                    onClick={scrollToRef}
                    className='grid cursor-pointer place-content-center fixed bottom-[11rem] md:bottom-[7rem] lg:bottom-[8rem] right-8 w-14 aspect-square rounded-full bg-[#464646]'>
                    <ArrowDown size={32} color='white' />
                  </div>
                </div>
                <DialogFooter className='flex gap-4 lg:gap-8 !place-self-center !justify-center w-full font-semibold'>
                  <DialogClose onClick={() => { setIsOk(false) }} className='grow lg:grow-0 border w-full lg:w-[305px] p-4 rounded-2xl lg:text-2xl text-[#23260D]'>
                    <span>
                      ไม่ยินยอม
                    </span>
                  </DialogClose>
                  <button
                    disabled={!isOk}
                    onClick={() => { router.push('/login') }}
                    className={`border grow lg:flex-grow-0 lg:w-[305px] p-4 rounded-2xl lg:text-2xl text-[#ffffff] ${isOk ? 'cursor-pointer bg-gradient-to-r from-[#80862A] to-[#4F5321]' : 'cursor-not-allowed disabled:opacity-50 disabled:bg-[#C1C457]'}`}>
                    <span>
                      ยินยอม
                    </span>
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <p className='text-[10px] md:text-[12px] text-[#23260D] text-center'>สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข<br />
              เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000 <br />
              โทรศัพท์ 0 2591 9992 (คู่สายอัตโนมัติ) โทรสาร 0 2591 9996 <br />
              Email: pharthai@pharmacycouncil.org
            </p>
          </div>
        </div>
      </Wrapper >

    </>
  );
}
