
"use client";

import { Wifi, Signal, BatteryFull, AlarmClock, BellOff } from "lucide-react";
import { useState, useEffect } from 'react';

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    update();
    const timer = setInterval(update, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-8 px-4 flex items-center justify-between text-white text-xs font-sans">
      <div className="flex items-center gap-1.5">
        <span>{time}</span>
        <span>0.1KB/s</span>
        <BellOff className="w-3 h-3" />
        <AlarmClock className="w-3 h-3" />
      </div>
      <div className="flex items-center gap-1.5">
        <span>VoLTE</span>
        <Signal className="w-4 h-4" />
        <BatteryFull className="w-4 h-4" />
        <span>75%</span>
      </div>
    </div>
  );
}
