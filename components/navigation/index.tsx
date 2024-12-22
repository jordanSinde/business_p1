"use client";

import { Search, User, FileText, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import { Notifications } from "./notifications";
import { NavigationItem } from "./types";

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Recherche", href: "/search", icon: Search },
  { name: "Formulaires", href: "/forms", icon: FileText },
  { name: "Tableau de bord", href: "/dashboard", icon: User },
];

export default function Navigation() {
  const [notifications] = useState(3);
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">PartnershipHub</span>
            </Link>
            <DesktopMenu items={navigation} currentPath={pathname} />
          </div>

          <div className="flex items-center space-x-4">
            <Notifications count={notifications} />
            <LanguageSwitcher />
            <ThemeSwitcher />
            <MobileMenu items={navigation} />
          </div>
        </div>
      </div>
    </nav>
  );
}