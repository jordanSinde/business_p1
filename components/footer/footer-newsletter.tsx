"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  return (
    <div>
      <h3 className="font-semibold mb-4">Newsletter</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Restez informé des dernières opportunités de partenariat
      </p>
      <form className="flex space-x-2">
        <Input
          type="email"
          placeholder="Votre email"
          className="max-w-[200px]"
        />
        <Button type="submit">S'inscrire</Button>
      </form>
    </div>
  );
}