import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [_hasClicked, setHasClicked] = useState(false);
  const [_isLoading, _setIsLoading] = useState(true);
  const [_loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const nextVideoRef = useRef(null);
  const centeredVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useEffect(() => {
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.load();
      backgroundVideoRef.current.play().catch((error) => {
        console.error("Error playing background video:", error);
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden  bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={centeredVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="centered-video"
                className="size-64 origin-center scale-150 object-cover object-center "
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            ref={backgroundVideoRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          g<b>am</b>i<b>n</b>g
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 sm:px-10">
            <h1 className="special-font hero-heading text-blue-75">
              re<b>d</b>efi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass = "bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
