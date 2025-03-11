import Input from "@/components/ui/Input";
import React from "react";

interface Props {
  title?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function InputBox({ title, placeholder, type, required }: Props) {
  return (
    <div className="space-y-1 flex flex-col md:flex-row w-full md:gap-4">
      <span className="text-lg font-semibold text-nowrap">
        {title} {required && <sup className="text-red-500">*</sup>}
      </span>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
}

export default InputBox;
