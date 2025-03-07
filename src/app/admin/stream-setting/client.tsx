/* eslint-disable react/no-children-prop */
"use client";

import { authClient } from "@/lib/auth";
import { useUpdateStreamingLink } from "@/service";
import { useForm } from "@tanstack/react-form";
import { Link } from "lucide-react";

export default function StreamSettingClient({ link }: { link?: string }) {
  const { mutate: updateLink } = useUpdateStreamingLink();
  const form = useForm({
    defaultValues: {
      link: "",
    },
    onSubmit: async ({ value }) => {
      updateLink(value.link);
      form.reset();
    },
  });
  const onLogout = async () => {
    await authClient.signOut();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-8"
    >
      {!link && (
        <div className="relative w-full h-14 px-6 py-2 bg-[#FAFAEB] flex items-center border border-[#E7E6AF] rounded-2xl">
          <Link size={32} />
          <div className="w-[1px] h-full mx-4 bg-[#5D6222]" />
          <form.Field
            name="link"
            children={(field) => (
              <input
                className="w-full h-full bg-transparent outline-none text-lg"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          <div className="absolute -top-0.5 left-20 -translate-y-1/2 px-2 bg-[#FAFAEB] border border-[#E7E6AF] rounded-full">
            <span className="text-[12px] font-bold">Youtube Link</span>
          </div>
        </div>
      )}
      {!link ? (
        <button
          type="submit"
          className="bg-gradient-to-tr from-[#80862A] to-[#5D6222] text-white w-full py-4 rounded-2xl font-semibold text-2xl"
        >
          เริ่มการ Live Stream
        </button>
      ) : (
        <button
          onClick={() => {
            updateLink("");
            form.reset();
          }}
          type="button"
          className="bg-gradient-to-tr from-[#FF0000] to-[#990000] text-white w-full py-4 rounded-2xl font-semibold text-2xl"
        >
          หยุดการ Live Stream
        </button>
      )}
      <button
        onClick={onLogout}
        type="button"
        className="bg-gradient-to-tr from-[#808080] to-[#505050] text-white w-full py-4 rounded-2xl font-semibold text-2xl"
      >
        ออกจากระบบ
      </button>
    </form>
  );
}
