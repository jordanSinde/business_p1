"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, AlertCircle, CheckCircle2 } from "lucide-react";

const recentForms = [
  {
    id: 1,
    title: "Rapport mensuel - Mars 2024",
    status: "pending",
    dueDate: "31 Mars 2024",
  },
  {
    id: 2,
    title: "Rapport mensuel - Février 2024",
    status: "completed",
    dueDate: "29 Février 2024",
  },
  {
    id: 3,
    title: "Rapport mensuel - Janvier 2024",
    status: "completed",
    dueDate: "31 Janvier 2024",
  },
];

export function RecentForms() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Formulaires récents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentForms.map((form) => (
            <div
              key={form.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{form.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Date limite: {form.dueDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {form.status === "pending" ? (
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                <Button variant="outline" size="sm">
                  {form.status === "pending" ? "Compléter" : "Voir"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}