/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import tele from "@/assets/icons/tele.svg";
import usePharmacyStore, { PharmacyStore } from "@/stores/pharmacy-store";
import { useRouter } from "next/navigation";
import { getUser } from "@/utils/action/get-user";

import Warpper from "@/components/ui/Warpper";
import Link from "next/link";
import icon from "@/assets/icons/tele.svg";
import { useGetStreamingLink } from "@/service";
import screenfull from "screenfull";
import { BellIcon, BellOffIcon, Fullscreen } from "lucide-react";
import dynamic from "next/dynamic";

const Watermark = dynamic(() => import("./_components/water-mark"), { ssr: false });
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function page() {
    const { pharmacy, setPharmacy } = usePharmacyStore() as PharmacyStore;
    const router = useRouter();
    const { data: link } = useGetStreamingLink();
    const [muted, setMuted] = useState(true);

    const checkUser = async () => {
        const res = await getUser();
        if (res.success) {
            setPharmacy(res.data.data);
            return;
        }
        router.push("/");
    };

    useEffect(() => {
        try {
            if (!pharmacy) {
                void checkUser();
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    if (!link?.link) {
        return (
            <Warpper className="flex items-center justify-center h-screen">
                <Link
                    href={"https://www.pharmacycouncil.org/#gsc.tab=0"}
                    className="top-12 hidden md:block right-4 absolute px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D]"
                >
                    เว็บไซต์สภาเภสัชกรรม
                </Link>
                <div className="w-[578px] min-h-full place-content-center place-self-center space-y-6">
                    <div className="space-y-3 md:space-y-8 flex flex-col items-center">
                        <Image
                            src={icon}
                            alt="icon"
                            className="w-[70px] h-[70px] md:w-[140px] md:max-w-[150px] md:h-[140px] md:max-h-[150px]"
                        />
                        <div className="text-2xl font-semibold text-center">{"ขณะนี้ไม่มีการ Live Stream"}</div>
                    </div>
                </div>
            </Warpper>
        );
    }
    return (
        <>
            <div className="flex flex-col items-center justify-start md:justify-center min-h-screen w-full !z-[100] relative overflow-hidden p-4 space-y-6">
                <Image src={tele} alt="logo" width={100} height={100} className=" top-12 left-12" />
                <ReactPlayer
                    className="react-player pointer-events-none w-[1000px] max-w-full aspect-video"
                    muted={muted}
                    playing
                    url={link.link}
                />
                {pharmacy && <Watermark pharmacy={pharmacy} />}
                <p className="text-center text-[#23260D] text-[14px] md:text-base">
                    สำนักงานเลขาธิการสภาเภสัชกรรม
                    <br />
                    เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                    <br />
                    โทรศัพท์ 02-591-9992 Email: pharthai@pharmacycouncil.org
                </p>
            </div>
            <div className="flex fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] gap-4 justify-center items-center">
                <button
                    className="bg-gradient-to-tr from-[#80862A] to-[#5D6222] text-white size-12 flex justify-center items-center rounded-2xl"
                    onClick={() => setMuted(!muted)}
                >
                    {muted ? <BellOffIcon /> : <BellIcon />}
                </button>
                <button
                    className="bg-gradient-to-tr from-[#80862A] to-[#5D6222] text-white size-12 flex justify-center items-center rounded-2xl"
                    onClick={() => screenfull.request(document.querySelector(".react-player")!)}
                >
                    <Fullscreen />
                </button>
            </div>
        </>
    );
}

export default page;
