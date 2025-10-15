"use client";

import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";
import React, { useState } from "react";
import QuestionModal from "./QuestionModal";
import { LessonSelect } from "@/types";

interface QuestionModalButtonProps {
  lesson: LessonSelect;
}

export default function QuestionModalButton({
  lesson,
}: QuestionModalButtonProps) {
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setShowQuestionModal(true)}>
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
