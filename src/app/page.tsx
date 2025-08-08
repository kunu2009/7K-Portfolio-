
"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HomeScreen } from '@/components/mobile/home-screen';
import { PortfolioScreen } from '@/components/mobile/portfolio-screen';
import { StatusBar } from '@/components/mobile/status-bar';

export default function MobileShellPage() {
  return (
    <div className="bg-zinc-800 flex items-center justify-center min-h-dvh p-4 sm:p-8">
      <div className="relative mx-auto h-[800px] w-[380px] rounded-[40px] border-[12px] border-black bg-black overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/webp/Monochrome Phone Wallpaper 9_16.webp')"}}
        >
           <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          <StatusBar />
          <div className="flex-grow overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent className="-ml-0">
                <CarouselItem className="pl-0">
                  <HomeScreen />
                </CarouselItem>
                <CarouselItem className="pl-0">
                  <PortfolioScreen />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
