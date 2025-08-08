
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Landmark, Languages, Bot, Gamepad2, Settings, GraduationCap, AppWindow } from 'lucide-react';

const apps = [
  { name: "Life App", icon: "7klife.webp", href: "https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/" },
  { name: "LawPrep", icon: "file_00000000fcf861f88ee676b0b0264225.webp", href: "https://7klawprep.me/" },
  { name: "Itihaas", icon: Landmark, href: "https://7-k-itihaas.vercel.app/" },
  { name: "Polyglot", icon: Languages, href: "https://7-k-polyglot.vercel.app/" },
  { name: "Stan AI", icon: Bot, href: "/story#projects" },
  { name: "Arcade", icon: Gamepad2, href: "/arcade" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function AppDock() {
  return (
    <div className="w-full flex-shrink-0 h-24 flex justify-center items-center backdrop-blur-md bg-black/20 mt-4">
        <div className="grid grid-cols-7 gap-1 p-2 w-full">
            {apps.map(app => (
                 <Link key={app.name} href={app.href} target={app.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-white text-[10px] font-medium">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                        {typeof app.icon === 'string' ? (
                          <Image src={`/images/webp/${app.icon}`} alt={`${app.name} icon`} width={24} height={24} />
                        ) : (
                          <app.icon className="w-6 h-6" />
                        )}
                    </div>
                    <span>{app.name}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}
