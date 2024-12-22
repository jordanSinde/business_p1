"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Heart, Send } from "lucide-react";

const stats = [
  {
    title: "Formulaires en attente",
    value: "3",
    icon: FileText,
    description: "Formulaires à compléter",
  },
  {
    title: "Entreprises favorites",
    value: "12",
    icon: Heart,
    description: "Partenaires potentiels",
  },
  {
    title: "Demandes envoyées",
    value: "5",
    icon: Send,
    description: "En cours de traitement",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}