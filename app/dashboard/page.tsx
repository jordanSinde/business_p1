"use client";

import { StatsCards } from "@/components/dashboard/stats-card";
import { CompanyProfile } from "@/components/dashboard/company-profile";
import { RecentForms } from "@/components/dashboard/recent-forms";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>

      <div className="space-y-8">
        {/* Quick Stats */}
        <StatsCards />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Profile */}
          <CompanyProfile />

          {/* Recent Forms */}
          <RecentForms />
        </div>
      </div>
    </div>
  );
}