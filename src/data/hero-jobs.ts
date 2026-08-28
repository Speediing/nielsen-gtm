export type HeroJobIcon =
  | "audience"
  | "schedule"
  | "delivery"
  | "methodology"
  | "cross-platform"
  | "client"
  | "metadata"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Audience Brief",
    icon: "audience",
    account: "Meridian campaign",
    signal: "Approved media brief added",
    work: "I checked the brief, media plan, and placement export. Channels, markets, and dates align. One creative ID still needs an owner.",
    result: "Measurement readiness sheet ready",
    user: "open the readiness sheet",
    bot: "opened. the review item is marked.",
  },
  {
    name: "Schedule Watch",
    icon: "schedule",
    account: "Fictional streaming lineup",
    signal: "A schedule file changed",
    work: "I compared the latest schedule with the approved version and isolated the programs whose timing or episode labels changed.",
    result: "Schedule change note ready",
    user: "show me only the changed rows",
    bot: "filtered. the source file stays attached.",
  },
  {
    name: "Delivery Trace",
    icon: "delivery",
    account: "Meridian delivery check",
    signal: "Creative ID mismatch found",
    work: "I traced the field across the schedule, placement export, and delivery file. One row uses a package label where the creative ID is expected.",
    result: "Cross-platform source trace ready",
    user: "route it to the mapping owner",
    bot: "drafted. nothing sent without approval.",
  },
  {
    name: "Methodology Finder",
    icon: "methodology",
    account: "Planning workspace",
    signal: "Method question entered the queue",
    work: "I gathered the selected Nielsen media methodology pages and placed the relevant sections beside the planning question.",
    result: "Sourced method note ready",
    user: "add it to the review packet",
    bot: "added with links to every source.",
  },
  {
    name: "Cross-Platform Note",
    icon: "cross-platform",
    account: "Meridian media plan",
    signal: "Connected TV and digital video added",
    work: "I organized the approved channel inputs, documented the source of record, and prepared a short path for the human reviewer.",
    result: "Cross-platform planning note ready",
    user: "open the client version",
    bot: "opened. working notes are hidden.",
  },
  {
    name: "Client Q&A",
    icon: "client",
    account: "Fictional client workspace",
    signal: "A measurement question arrived",
    work: "I searched the approved brief, plan, and methodology set, then drafted a concise answer with the supporting sources beside it.",
    result: "Sourced response draft ready",
    user: "hold it for my review",
    bot: "held. no message has been sent.",
  },
  {
    name: "Metadata Check",
    icon: "metadata",
    account: "Fictional content catalog",
    signal: "New program metadata uploaded",
    work: "I checked titles, episode labels, dates, and identifiers against the approved catalog and collected the rows that need a person.",
    result: "Metadata review queue ready",
    user: "sort by source file",
    bot: "sorted. each row keeps its source.",
  },
  {
    name: "Media Chief of Staff",
    icon: "chief-of-staff",
    account: "Daily media review",
    signal: "Three artifacts await review",
    work: "I gathered the readiness sheet, source trace, and planning note from the agent fleet, then prepared the decisions that need attention.",
    result: "Media review brief ready",
    user: "open the decision list",
    bot: "opened. the source agents are linked.",
  },
];
