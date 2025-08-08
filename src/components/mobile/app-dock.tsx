
import { Button } from "@/components/ui/button";
import Image from "next/image";

const apps = [
  { name: "Obsidian", icon: "/images/icon-obsidian.svg" },
  { name: "Chess", icon: "/images/icon-chess.svg" },
  { name: "ChatGPT", icon: "/images/icon-chatgpt.svg" },
  { name: "Phone", icon: "/images/icon-phone.svg" },
  { name: "7K-1", icon: "/images/icon-7k-1.svg" },
  { name: "7K-2", icon: "/images/icon-7k-2.svg" },
];

export function AppDock() {
  return (
    <div className="w-full h-24 flex justify-center items-center backdrop-blur-md bg-black/20">
        <div className="grid grid-cols-6 gap-3 p-4">
            {apps.map(app => (
                 <Button key={app.name} variant="ghost" size="icon" className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 hover:bg-white p-1.5">
                    <Image src={app.icon} alt={app.name} width={48} height={48} className="w-full h-auto" />
                </Button>
            ))}
        </div>
    </div>
  )
}
