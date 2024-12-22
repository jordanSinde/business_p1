"use client";

import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function FooterSocial() {
  return (
    <div>
      <h3 className="font-semibold mb-4">Suivez-nous</h3>
      <div className="flex space-x-4">
        {socials.map((social) => (
          <Button key={social.name} variant="ghost" size="icon" asChild>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}