"use client";

import { FooterLinks } from "./footer-links";
import { FooterSocial } from "./footer-social";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterLinks />
          <FooterSocial />
          <FooterNewsletter />
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PartnershipHub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}