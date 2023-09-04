"use client";

import { Menu } from "lucide-react";

import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

interface IMobileSidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const MobileSidebar = ({ apiLimitCount, isPro = false }: IMobileSidebarProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button >
            </SheetTrigger>
            <SheetContent side="left" className="p-0 text-white">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;