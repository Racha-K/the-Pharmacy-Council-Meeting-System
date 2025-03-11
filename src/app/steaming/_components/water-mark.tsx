import { Pharmacy } from "@/types/pharmacy-type";

const Watermark = ({ pharmacy }: { pharmacy: Pharmacy }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-10 sm:grid-cols-5 sm:grid-rows-7 lg:grid-cols-6 lg:grid-rows-6 xl:grid-cols-8  opacity-30 !z-20 pointer-events-none">
      {Array.from({ length: 48 }).map((_, index) => {
        const randomX = Math.random() * 10 - 5;
        const randomY = Math.random() * 10 - 5;
        const randomRotate = -45;

        return (
          <div
            key={index}
            className="text-[#979797] text-[10px] sm:text-base md:text-xl lg:text-xl xl:text-xl text-nowrap font-bold flex items-center justify-center"
            style={{
              transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`,
            }}
          >
            {pharmacy.title_th} {pharmacy.first_name_th} {pharmacy.last_name_th}
          </div>
        );
      })}
    </div>
  );
};

export default Watermark;
