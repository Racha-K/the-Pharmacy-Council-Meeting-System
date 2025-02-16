

import icon from '@/assets/icons/tele.svg'
import Image from 'next/image';
import StepLogin from './_components/step-login';
import Button from '@/components/ui/Button';
import Warpper from '@/components/ui/Warpper';



export default function Home() {
  return (
    <>
      <Warpper className='space-y-16'>
        <div className='space-y-3  flex flex-col items-center'>
          <Image src={icon} alt='icon' className='w-[140px] h-[140px]' />
          <div className='text-standard text-center space-y-6'>
            <div className='font-semibold '>
              <h1 className='text-2xl '>ระบบประชุมสภาเภสัชกรรม</h1>
              <span className='text-xl'>the Pharmacy Council of Thailand Meeting System</span>
            </div>
            <div className='space-y-6'>
              <h6 className='text-base font-semibold'>ขั้นตอนการเข้าห้องประชุม</h6>
              <StepLogin />
            </div>
          </div>
        </div>
        <div className='space-y-12 flex flex-col items-center '>
          <Button title='เข้าสู่ระบบ' path='/conditions' />
          <p className='text-[12px] text-primary text-center'>สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข<br />
            เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000 <br />
            โทรศัพท์ 0 2591 9992 (คู่สายอัตโนมัติ) โทรสาร 0 2591 9996 <br />
            Email: pharthai@pharmacycouncil.org</p>
        </div>
      </Warpper>

    </>
  );
}
