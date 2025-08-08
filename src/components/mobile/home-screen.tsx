
import { AppDock } from "./app-dock";
import { ArrowRight } from "lucide-react";


const ClockWidget = () => (
    <div className="text-right font-sans text-black my-4 pr-6">
        <p className="text-7xl font-light leading-none tracking-tighter">0216</p>
        <p className="text-xs tracking-widest">friday08august</p>
        <div className="flex items-center justify-end gap-1 text-xs opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
            <span>fri0800</span>
        </div>
    </div>
);

const WelcomeWidget = () => (
    <div className="px-4 text-white">
        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-2">Hello, Welcome!</h2>
            <p className="text-white/80">
                Swipe right to explore my different portfolios.
            </p>
            <div className="flex items-center text-xs mt-2 text-white/60 animate-pulse">
                <span>Swipe</span>
                <ArrowRight className="w-3 h-3 mx-1"/>
            </div>
            <p className="text-white/80 mt-4">
                Or check out some of my live apps in the dock below.
            </p>
        </div>
    </div>
);


export function HomeScreen() {
    return (
        <div className="h-full w-full relative pt-4 flex flex-col overflow-hidden">
            <div 
                className="absolute top-10 left-4 w-40 h-20 bg-contain bg-no-repeat z-0"
                style={{backgroundImage: "url('/images/capitol-silhouette.png')"}}
            />
            <div 
                className="absolute bottom-24 right-0 w-60 h-[300px] bg-contain bg-no-repeat z-0"
                 style={{backgroundImage: "url('/images/deer-silhouette.png')"}}
            />
            <div className="relative z-10 flex flex-col flex-grow">
                <ClockWidget />
                <div className="flex-grow overflow-y-auto mt-4 px-4">
                    <WelcomeWidget />
                </div>
                <AppDock />
            </div>
        </div>
    )
}
