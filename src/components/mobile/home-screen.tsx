
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, MoreVertical } from "lucide-react";
import { AppDock } from "./app-dock";

const tasks = [
    { label: "Learn 5 legal terms" },
    { label: "Practice 5 legal maxims" },
    { label: "Watch 1 GK news recap", date: "01-Jul-2026" },
    { label: "Read GK PDF (1 page)", date: "Aug 6" },
    { label: "Solve 10 direction sense questions" },
    { label: "Solve 10 number series questions" },
];


const ClockWidget = () => (
    <div className="text-center font-sans text-white my-4">
        <p className="text-[90px] font-light leading-none tracking-tighter">0216</p>
        <p className="text-sm tracking-widest">friday08august</p>
        <div className="flex items-center justify-center gap-1 text-xs opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
            <span>fri0800</span>
        </div>
    </div>
);

const TodoWidget = () => (
    <div className="px-4 text-white">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">what</h2>
            <div className="flex items-center gap-2">
                <Plus className="w-5 h-5"/>
                <MoreVertical className="w-5 h-5"/>
            </div>
        </div>
        <div className="space-y-3">
            {tasks.map((task) => (
                <div key={task.label} className="flex items-center gap-3">
                    <Checkbox className="w-5 h-5 rounded-sm border-white/80 data-[state=checked]:bg-white data-[state=checked]:text-black" />
                    <div className="flex-1">
                        <p className="text-base">{task.label}</p>
                        {task.date && <p className="text-xs text-orange-400">{task.date}</p>}
                    </div>
                </div>
            ))}
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
                <div className="flex-grow overflow-y-auto">
                    <TodoWidget />
                </div>
                <AppDock />
            </div>
        </div>
    )
}
