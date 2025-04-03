/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import tele from "@/assets/icons/tele.svg";
import usePharmacyStore, { PharmacyStore } from "@/stores/pharmacy-store";
import { useRouter } from "next/navigation";
import { getUser } from "@/utils/action/get-user";
import Watermark from "@uiw/react-watermark";
import Link from "next/link";
import icon from "@/assets/icons/tele.svg";
import { useGetStreamingLink, usePostOnline } from "@/service";
import screenfull from "screenfull";
import { BellIcon, BellOffIcon, Fullscreen, LogOut } from "lucide-react";
import dynamic from "next/dynamic";
import Wrapper from "@/components/ui/Wrapper";
import LoginOutBtn from "@/components/loginout-btn";
import TextMarquee from "@/components/ui/text-marquee";
import { cn } from "@/lib/cn";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function page() {
  const { pharmacy, setPharmacy } = usePharmacyStore() as PharmacyStore;
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  // const [image, setImage] = useState<string>("");
  const { data: link } = useGetStreamingLink();
  const [muted, setMuted] = useState<boolean>(true);

  const checkUser = async () => {
    const res = await getUser();
    if (res.success) {
      setPharmacy(res.data.data);
      return;
    }
    router.push("/");
  };

  const handleFullscreen = () => {
    console.log("handleFullscreen");
    setIsFullscreen(!isFullscreen);
  };

  // const getWaterMark = async () => {
  //   if (!pharmacy?.first_name_th || !pharmacy?.last_name_th) {
  //     return;
  //   }
  //   const response = await fetch(
  //     `/api/watermark?name=${pharmacy?.first_name_th} ${pharmacy?.last_name_th}`,
  //     { method: "GET" }
  //   );
  //   const data = await response.json();
  //   setImage(data.image);
  //   return;
  // };

  useEffect(() => {
    try {
      if (!pharmacy) {
        void checkUser();
      } else {
        // void getWaterMark();
      }
    } catch (error) {
      console.log(error);
    }
  }, [pharmacy]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.shiftKey && event.key === "K") ||
        (event.ctrlKey && event.shiftKey && event.key === "L") ||
        (event.ctrlKey && event.shiftKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  usePostOnline({ userId: pharmacy?.license_id || "" });

  if (!link?.link) {
    return (
      <Wrapper className="flex items-center justify-center h-screen relative">
        {/* {pharmacy && (
          <TextMarquee
            text={`สวัสดี คุณ ${pharmacy?.first_name_th} ${pharmacy?.last_name_th} (${pharmacy?.license_id}) เข้าร่วมประชุมสภาเภสัชกรรม`}
          />
        )} */}
        <LoginOutBtn className="absolute top-28 right-4" />
        <Link
          href={"https://www.pharmacycouncil.org/#gsc.tab=0"}
          className="top-12 hidden md:block right-4 absolute px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D]"
        >
          เว็บไซต์สภาเภสัชกรรม
        </Link>
        <div className="w-max min-h-full place-content-center place-self-center space-y-6">
          <div className="space-y-3 md:space-y-8 flex flex-col items-center">
            <Image
              src={icon}
              alt="icon"
              className="w-[70px] h-[70px] md:w-[140px] md:max-w-[150px] md:h-[140px] md:max-h-[150px]"
            />
            <div className="text-2xl font-semibold text-center">{"ขณะนี้ไม่มีการ Live Stream"}</div>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-start md:justify-center min-h-screen w-full !z-[100] relative overflow-hidden",
          !isFullscreen && "p-4 space-y-6"
        )}
      >
        {/* Watermark */}
        {/* {image && <Image src={image} alt="watermark" fill objectFit="cover" />} */}
        {/* {!isFullscreen && (
          <TextMarquee
            text={`สวัสดี คุณ ${pharmacy?.first_name_th} ${pharmacy?.last_name_th} (${pharmacy?.license_id}) เข้าร่วมประชุมสภาเภสัชกรรม`}
          />
        )} */}
        {/* Loginout BTN */}
        <LoginOutBtn className="top-12 right-4" />
        {!isFullscreen && (
          <Image src={tele} alt="logo" width={100} height={100} className=" top-12 left-12" />
        )}
        <Watermark
          gapX={5}
          gapY={80}
          height={5}
          fontSize={12}
          fontColor="#8c95a3bb"
          content={`${pharmacy?.first_name_th} ${pharmacy?.last_name_th}`}
        >
          <ReactPlayer
            className={cn(
              "react-player pointer-events-none w-[1000px] max-h-screen aspect-video",
              isFullscreen && "!w-[calc(100%-200px)] h-full"
            )}
            muted={muted}
            playing={true}
            controls={false}
            url={link.link}
            {...(isFullscreen && { width: "100%", height: "100%" })}
          />
        </Watermark>
        {/* {pharmacy && <Watermark pharmacy={pharmacy} />} */}
        {!isFullscreen && (
          <p className="text-center text-[#23260D] text-[14px] md:text-base">
            สำนักงานเลขาธิการสภาเภสัชกรรม
            <br />
            เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
            <br />
            โทรศัพท์ 02-591-9992 Email: pharthai@pharmacycouncil.org
          </p>
        )}
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
          // onClick={() => screenfull.request(document.querySelector(".react-player")!)}
          onClick={() => handleFullscreen()}
        >
          <Fullscreen />
        </button>
      </div>
    </>
  );
}

export default page;
