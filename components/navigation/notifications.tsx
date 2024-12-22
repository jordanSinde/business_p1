"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationsProps {
  count: number;
}

export function Notifications({ count }: NotificationsProps) {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Bell className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
          {count}
        </span>
      )}
    </Button>
  );
}