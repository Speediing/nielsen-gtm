import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "review",
    name: "Human review",
    blurb: "People set the boundaries and approve the finished work.",
    color: "#F0E9DC",
    mark: "You",
    seat: true,
  },
  {
    id: "signal",
    name: "Signal",
    blurb: "Its computer checks media briefs and turns missing inputs into a clean readiness sheet.",
    jobId: "standardize-room",
    color: "#D94F70",
  },
  {
    id: "source",
    name: "Source",
    blurb: "Its computer traces schedule and delivery fields back to the approved source.",
    jobId: "legal-redlines",
    color: "#F2A541",
  },
  {
    id: "brief",
    name: "Brief",
    blurb: "Its computer gathers approved context and assembles a client-ready media note.",
    jobId: "attach-engine",
    color: "#1F9D8A",
  },
];
