"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

const companyData = {
  name: "TechCorp Cameroun",
  type: "Entreprise Locale",
  email: "contact@techcorp.cm",
  phone: "+237 123 456 789",
  address: "123 Rue de l'Innovation, Douala",
  description: "Spécialiste en solutions technologiques innovantes pour le marché camerounais.",
};

export function CompanyProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Profil de l'entreprise</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{companyData.name}</h3>
            <p className="text-sm text-muted-foreground">{companyData.type}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{companyData.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{companyData.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{companyData.address}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{companyData.description}</p>

        <Button className="w-full">Modifier le profil</Button>
      </CardContent>
    </Card>
  );
}