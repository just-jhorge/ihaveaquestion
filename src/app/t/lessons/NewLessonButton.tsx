"use client";

import { useState } from "react";
import { ListCheck } from "lucide-react";
import NewLessonModal from "./NewLessonModal";
import { Button } from "@/components/ui/button";

export default function NewLessonButton({ userId }: { userId: string }) {
  const [showNewLessonModal, setShowNewLessonModal] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setShowNewLessonModal(true)}
      >
        <ListCheck className="size-4" /> New
      </Button>
      <NewLessonModal
        userId={userId}
        open={showNewLessonModal}
        onClose={() => setShowNewLessonModal(false)}
      />
    </>
  );
}
