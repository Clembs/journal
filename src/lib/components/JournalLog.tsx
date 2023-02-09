import { JournalLog, Mood } from "@prisma/client";

export function JournalLog({ log }: { log: JournalLog }) {
  const moodColorClass: Record<Mood, string> = {
    AVERAGE: "amber",
    BOTHERED: "purple",
    HAPPY: "yellow",
    LAZY: "grey",
    SAD: "blue",
  };

  const className = `bg-${moodColorClass[log.mood]}-300`;

  return <div className={className}>{log.mood}</div>;
}
