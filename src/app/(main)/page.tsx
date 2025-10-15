import Link from "next/link";
import { DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/custom/navbar";
import Lessons from "./Lessons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Lessons />
    </>
  );
}
