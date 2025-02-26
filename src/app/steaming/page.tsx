import React from 'react'

function page() {
    return (
        <div className='flex items-center justify-center min-h-screen w-full !z-[100] relative'>
            {/* YouTube Iframe */}
            <iframe
                className="w-[1100px] max-w-full aspect-video"
                src="https://www.youtube.com/embed/jvNRmnrott8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="YouTube video"
            ></iframe>

            {/* ลายน้ำ (Watermark) */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -rotate-45 opacity-30 z-20 pointer-events-none">
                <div className="text-white text-6xl font-bold transform w-full h-full flex items-center justify-center">
                    Your Watermark
                </div>
            </div>
        </div>
    )
}

export default page
