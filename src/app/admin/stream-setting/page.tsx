"use client";
import Wrapper from "@/components/ui/Wrapper";
import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/icons/tele.svg";
import StreamSettingClient from "./client";
import { authClient } from "@/lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetOnline, useGetStreamingLink } from "@/service";

export default function StreamSettingPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  useEffect(() => {
    if (!session && !isPending) {
      router.push("/admin");
    }
  }, [session, router, isPending]);
  const { data } = useGetStreamingLink();
  const { data: online } = useGetOnline();

  if (isPending || !data) {
    return (
      <Wrapper className=" space-y-2 md:space-y-4 flex flex-col items-center relative">
        <div>Loading...</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className=" space-y-2 md:space-y-4 flex flex-col items-center relative">
      <Link
        href={"https://www.pharmacycouncil.org/#gsc.tab=0"}
        className="top-12 hidden md:block right-4 absolute px-3 py-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full text-[#23260D]"
      >
        เว็บไซต์สภาเภสัชกรรม
      </Link>
      <div className="max-w-[578px] min-h-full place-content-center place-self-center space-y-6">
        <div className="space-y-3 md:space-y-8 flex flex-col items-center">
          <Image
            src={icon}
            alt="icon"
            className="w-[70px] h-[70px] md:w-[140px] md:max-w-[150px] md:h-[140px] md:max-h-[150px]"
          />
          <div className="text-2xl font-semibold text-center">
            Online Users: <span className="text-blue-600">{online?.online}</span>
          </div>
          <div className="text-2xl font-semibold text-center">
            {data.link
              ? `Current Streaming Link: ${data.link}`
              : "ขณะนี้ไม่มีการ Live Stream กรุณาใส่ Link เพื่อเริ่มการ Live Stream"}
          </div>
        </div>
        <StreamSettingClient link={data.link} />
      </div>
    </Wrapper>
  );
}
