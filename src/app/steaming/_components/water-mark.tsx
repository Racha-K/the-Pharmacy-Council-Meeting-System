const Watermark = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full grid xl:grid-cols-6 2xl:grid-cols-7 grid-cols-5 grid-rows-7  opacity-30 !z-20 pointer-events-none">
            {Array.from({ length: 48 }).map((_, index) => {
                const randomX = Math.random() * 10 - 5;
                const randomY = Math.random() * 10 - 5;
                const randomRotate = -45;

                return (
                    <div
                        key={index}
                        className="text-white lg:text-2xl xl:text-3xl text-nowrap font-bold flex items-center justify-center"
                        style={{
                            transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`,
                        }}
                    >
                        Your Watermark
                    </div>
                );
            })}
        </div>
    );
};

export default Watermark;
