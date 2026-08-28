import type { JobId } from "./types";

export type SiteKind =
  | "inbox"
  | "workspace"
  | "sheet"
  | "sources"
  | "document";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const inbox = { id: "inbox", host: "workspace.example", label: "Inbox" };
const workspace = {
  id: "workspace",
  host: "workspace.example",
  label: "Campaign",
};
const sheet = { id: "sheet", host: "sheets.example", label: "Readiness" };
const sources = { id: "sources", host: "sources.example", label: "Sources" };
const document = { id: "document", host: "docs.example", label: "Media note" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening approved inputs",
      host: inbox.host,
      path: "/campaigns/meridian",
      title: "Meridian campaign",
      site: "inbox",
      tabs: [inbox, workspace, sheet],
    },
    m2: {
      pill: "Checking required fields",
      host: workspace.host,
      path: "/campaigns/meridian/inputs",
      title: "Campaign inputs",
      site: "workspace",
      tabs: [inbox, workspace, sheet],
    },
    m3: {
      pill: "Readiness sheet complete",
      host: sheet.host,
      path: "/meridian/readiness",
      title: "Measurement readiness",
      site: "sheet",
      tabs: [inbox, workspace, sheet],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening delivery check",
      host: workspace.host,
      path: "/delivery/creative-id",
      title: "Delivery field check",
      site: "workspace",
      tabs: [workspace, sources, document],
    },
    m2: {
      pill: "Tracing approved sources",
      host: sources.host,
      path: "/trace/creative-id",
      title: "Creative ID source trace",
      site: "sources",
      tabs: [workspace, sources, document],
    },
    m3: {
      pill: "Source trace complete",
      host: document.host,
      path: "/trace/creative-id/review",
      title: "Completed source trace",
      site: "document",
      tabs: [workspace, sources, document],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Opening planning request",
      host: inbox.host,
      path: "/planning/meridian",
      title: "Cross-platform planning",
      site: "inbox",
      tabs: [inbox, sources, document],
    },
    m2: {
      pill: "Gathering approved context",
      host: sources.host,
      path: "/planning/meridian/sources",
      title: "Approved source set",
      site: "sources",
      tabs: [inbox, sources, document],
    },
    m3: {
      pill: "Media note complete",
      host: document.host,
      path: "/planning/meridian/note",
      title: "Cross-platform media note",
      site: "document",
      tabs: [inbox, sources, document],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
