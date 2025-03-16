"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { menuOptions } from "@/lib/constant"
import { cn } from "@/lib/utils"

import {ModeToggle} from "@/components/global/mode-toggle";

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("flex h-screen w-16 flex-col justify-between border-r bg-background p-3", className)}>
            <div className="flex flex-col items-center space-y-6">
                <Link
                    href="/"
                    className="flex h-10 items-center justify-center rounded-md font-bold transition-colors "
                >
                    <span className="sr-only">Automake</span>
                    <span className="text-sm font-bold">A.</span>
                </Link>

                <TooltipProvider>
                    <nav className="flex flex-col items-center space-y-2">
                        {menuOptions.map((menuItem) => (
                            <Tooltip key={menuItem.name} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={menuItem.href}
                                        className={cn(
                                            "flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-accent",
                                            pathname === menuItem.href ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                        )}
                                    >
                                        <menuItem.Component selected={pathname === menuItem.href} />
                                        <span className="sr-only">{menuItem.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-background/80 backdrop-blur-sm text-white">
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </nav>
                </TooltipProvider>
            </div>

            <div className="flex flex-col items-center space-y-4 py-4">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Sidebar

