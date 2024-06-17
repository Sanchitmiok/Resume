"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/UI/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
           <Menu setActive={setActive}>
           <Link href={"/"}>
           <MenuItem setActive={setActive} active={active} item="Home">
           </MenuItem>
           </Link>
           <MenuItem setActive={setActive} active={active} item="Our courses">
           <div className="flex flex-col space-y-5 mt-1">
           <HoveredLink href="/courses">All courses</HoveredLink>
           <HoveredLink href="/courses">Basic Music</HoveredLink>
           <HoveredLink href="/courses">Paid courses</HoveredLink>
           </div>
           </MenuItem>
           <Link href={"/ContactUs"}>
           <MenuItem setActive={setActive} active={active} item="Contact us">
           </MenuItem>
           </Link>
           </Menu>
        </div>
    )
}

export default Navbar
