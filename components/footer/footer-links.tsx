"use client";

import Link from "next/link";

const links = [
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Mentions légales", href: "/legal" },
  { name: "Confidentialité", href: "/privacy" },
];

export function FooterLinks() {
  return (
    <div>
      <h3 className="font-semibold mb-4">Liens utiles</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}