import LessonCard from "@/components/custom/lesson-card";

export default function Home() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        {[...new Array(6)].map((_, idx) => (
          <LessonCard key={idx} />
        ))}
      </div>
    </section>
  );
}
