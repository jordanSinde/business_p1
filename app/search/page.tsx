"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Dummy data for demonstration
const dummyCompanies = [
  {
    id: 1,
    name: "TechCorp Cameroun",
    sector: "Technology",
    location: "Douala",
    description: "Spécialiste en solutions technologiques innovantes",
  },
  {
    id: 2,
    name: "AgroPlus SARL",
    sector: "Agriculture",
    location: "Yaoundé",
    description: "Leader en production agricole durable",
  },
  {
    id: 3,
    name: "IndustrieMax",
    sector: "Manufacturing",
    location: "Garoua",
    description: "Fabrication d'équipements industriels",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sector, setSector] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Rechercher un Partenaire</h1>

      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        {/* Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Filtres</h3>
            <div className="space-y-4">
              <Input
                placeholder="Rechercher une entreprise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Secteur d'activité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technologie</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="manufacturing">Industrie</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">Appliquer les filtres</Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Résultats</h3>
          <div className="space-y-4">
            {dummyCompanies.map((company) => (
              <Card key={company.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">{company.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {company.sector} • {company.location}
                      </p>
                      <p className="mt-2">{company.description}</p>
                    </div>
                    <Button variant="outline">Contacter</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}