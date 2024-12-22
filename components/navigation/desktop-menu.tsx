"use client";

import Link from "next/link";
import { NavigationItem } from "./types";

interface DesktopMenuProps {
  items: NavigationItem[];
  currentPath: string;
}

export function DesktopMenu({ items, currentPath }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex ml-10 space-x-4">
      {items.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent"
            }`}
          >
            <item.icon className="h-4 w-4 mr-2" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}