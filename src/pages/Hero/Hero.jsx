import React, { useRef, useEffect } from "react";


const Hero = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <>
            <div className="relative mx-auto max-w-full w-full h-fit">
                <video
                    loop
                    muted
                    className='w-full'
                    src="https://mamihost-bucket.s3.ap-southeast-1.amazonaws.com/Hero/Mamihost+Video+Marketing+(cut).mp4"
                    alt="Hero Landing Page"
                    ref={videoEl} />
            </div>
        </>
    )
}

export default Hero