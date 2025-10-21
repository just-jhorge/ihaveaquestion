"use client";

import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";
import React, { useState } from "react";
import QuestionModal from "./QuestionModal";
import { LessonSelect } from "@/types";
import { toast } from "sonner";

interface QuestionModalButtonProps {
  lesson: LessonSelect;
}

export default function QuestionModalButton({
  lesson,
}: QuestionModalButtonProps) {
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  function openModal() {
    if (!lesson.isActive) {
      toast.info("Sorry, this lesson is no longer accepting questions.");
      return;
    }

    setShowQuestionModal(true);
  }

  return (
    <>
      <Button variant="outline" onClick={openModal}>
        <HandIcon /> Ask Question
      </Button>
      <QuestionModal
        open={showQuestionModal}
        onClose={() => setShowQuestionModal(false)}
        lesson={lesson}
      />
    </>
  );
}
