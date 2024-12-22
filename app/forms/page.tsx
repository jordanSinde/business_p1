"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const forms = [
  {
    id: 1,
    title: "Rapport mensuel - Mars 2024",
    status: "pending",
    dueDate: "31 Mars 2024",
    type: "monthly",
  },
  {
    id: 2,
    title: "Rapport mensuel - Février 2024",
    status: "completed",
    dueDate: "29 Février 2024",
    type: "monthly",
  },
  {
    id: 3,
    title: "Rapport trimestriel - Q1 2024",
    status: "draft",
    dueDate: "31 Mars 2024",
    type: "quarterly",
  },
];

export default function FormsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "draft":
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const filteredForms = forms.filter(form => 
    activeTab === "all" || form.status === activeTab
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion des Formulaires</h1>
        <Button>Nouveau Formulaire</Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="draft">Brouillons</TabsTrigger>
          <TabsTrigger value="completed">Complétés</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredForms.map((form) => (
            <Card key={form.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{form.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Date limite: {form.dueDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {getStatusIcon(form.status)}
                  <Button variant="outline">
                    {form.status === "completed" ? "Voir" : "Éditer"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}