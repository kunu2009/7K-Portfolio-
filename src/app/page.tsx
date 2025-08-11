
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
    <div 
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/night-sky-bg-2.svg')"}}
    >
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
  );
}
