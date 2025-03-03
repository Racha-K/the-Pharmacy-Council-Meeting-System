import React from 'react'
import Watermark from './_components/water-mark'

function page() {
    return (
        <div className='flex items-center justify-center min-h-screen w-full !z-[100] relative overflow-hidden p-4'>
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
            <Watermark />
        </div>
    )
}

export default page
