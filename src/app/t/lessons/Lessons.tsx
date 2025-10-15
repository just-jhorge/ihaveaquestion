"use client";

import { Button } from "@/components/ui/button";
import { ListCheck } from "lucide-react";

export default function Lessons() {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl xl:text-2xl font-semibold">
          Lessons you have created (3)
        </h3>
        <Button className="" size="sm" variant="outline">
          <ListCheck /> New Lesson
        </Button>
      </div>
      <div className="space-y-3">
        {[...new Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex-1">Lesson</div>
            <div>Action Buttons</div>
          </div>
        ))}
      </div>
    </div>
  );
}
