import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const Tilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 15;
    const tiltY = (relativeX - 0.5) * -15;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full ">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="z-10 flex size-full flex-col justify-between  relative p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-sm md:text-base max-w-64">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black sm:pb-36 ">
      <div className="container mx-auto px-3 md:px-10 py-26">
        <div className="px-5">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className=" max-w-md font-circular-web mb-32 text-lg text-blue-50 opacity-90">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <Tilt className="border-hsla mx-auto mb-7 relative h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                r<b>a</b>dia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </Tilt>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 h-auto md:h-[135vh] gap-7">
          <Tilt className="bento-tilt_1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  <b>z</b>igm<b>a</b>
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </Tilt>
          <Tilt className="bento-tilt_2  aspect-16/10 ms-32 md:ms-0 md:aspect-auto">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>x<b>u</b>s
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </Tilt>
          <Tilt className="bento-tilt_2 aspect-16/10 me-32 md:me-0 md:aspect-auto">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="cross-world AI Agent - elevating your gameplay."
            />
          </Tilt>

          <Tilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="text-black bento-title special-font max-w-64">
                M<b>o</b>re
                <br /> co<b>m</b>ing
                <br /> so<b>o</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </Tilt>
          <Tilt className="bento-tilt_2">
            <video
              loop
              muted
              autoPlay
              src="videos/feature-5.mp4"
              className="size-full object-cover object-center"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
