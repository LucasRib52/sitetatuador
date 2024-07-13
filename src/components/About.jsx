import React, { useEffect, useRef } from 'react';
import { aboutData } from '../data';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '../variants';

export default function About() {
  const { title, subtitle1, subtitle2, video } = aboutData;
  const videoRef = useRef(null);
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, amount: 0.6 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="lg:py-16 xl:pb-[160px] mt-16 lg:mt-32 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          id="about"
          className="flex flex-col lg:flex-row gap-x-[30px] items-center bg-white p-6 lg:p-12 rounded-lg shadow-xl"
          ref={aboutRef}
        >
          {/* video */}
          <div className="flex-1 lg:flex-row mt-4 lg:mt-0">
            <div className="w-full h-auto max-w-[250px] lg:max-w-[350px] mx-auto aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                playsInline
                preload="auto"
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* text */}
          <div className="flex-1 h-full mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <div className="flex flex-col items-start">
              <div className="max-w-[530px] text-gray-600 leading-relaxed">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
