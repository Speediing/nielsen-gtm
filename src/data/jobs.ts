import type { Artifact, CroJob } from "./types";

export const MEASUREMENT_READINESS: Extract<Artifact, { kind: "table" }> = {
  kind: "table",
  title: "Meridian campaign readiness",
  caption: "Fictional example. Ready for a person to review.",
  columns: ["Input", "Status", "Source"],
  rows: [
    ["Channels", "Connected TV, streaming, digital video", "Approved media plan"],
    ["Markets", "Named in brief", "Campaign brief"],
    ["Flight dates", "Aligned", "Media plan and placement export"],
    ["Creative IDs", "Needs one owner", "Placement export"],
  ],
};

export const DELIVERY_TRACE: Extract<Artifact, { kind: "packet" }> = {
  kind: "packet",
  title: "Cross-platform source trace",
  fields: [
    {
      label: "Field checked",
      value: "Creative ID in the connected TV delivery file.",
    },
    {
      label: "Approved source",
      value: "Placement export is the source of record for this example.",
    },
    {
      label: "Difference found",
      value: "One row uses a package label where the creative ID is expected.",
    },
    {
      label: "Next review",
      value: "Confirm the mapping owner, then rerun the delivery check.",
    },
  ],
};

export const CLIENT_MEDIA_NOTE: Extract<Artifact, { kind: "one-pager" }> = {
  kind: "one-pager",
  title: "Meridian cross-platform planning note",
  eyebrow: "Fictional completed artifact",
  sections: [
    {
      heading: "Planning question",
      body: "How should connected TV, streaming, and digital video inputs be organized before measurement begins?",
    },
    {
      heading: "Approved context",
      body: "Campaign brief, media plan, placement export, and the selected Nielsen methodology pages.",
    },
    {
      heading: "Working path",
      body: "Align markets and dates, confirm identifiers, document the source of record, then send the packet for human review.",
    },
  ],
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Check a media brief before work begins",
    trigger: "An approved campaign brief lands",
    backgroundAction: "Checking channels, markets, dates, and identifiers",
    problem:
      "Media work slows down when a brief, plan, and placement file describe the same campaign in different ways.",
    botJob:
      "Signal opens the approved inputs on its computer, compares the required fields, and prepares a readiness sheet for review.",
    storyboard: [
      {
        when: "9:02",
        label: "A fictional campaign brief enters the approved folder.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Meridian campaign workspace",
          subject: "Measurement planning brief",
          questions: 4,
        },
      },
      {
        when: "9:04",
        label: "Signal checks the brief, media plan, and placement export.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Campaign brief", answer: "Markets and dates found" },
            { name: "Media plan", answer: "Channels aligned" },
            { name: "Placement export", answer: "Identifier owner needed" },
          ],
          status: "Sources reviewed",
        },
      },
      {
        when: "9:06",
        label: "The final frame is a completed readiness sheet.",
        scene: "deck",
        artifact: MEASUREMENT_READINESS,
      },
    ],
    unlock:
      "The reviewer starts with one checked sheet instead of comparing three files by hand.",
    outcome:
      "A brief enters the folder. A measurement readiness sheet comes back for review.",
    clips: [],
    demo: {
      title: "Signal",
      subtitle: "Brief check on its own computer",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "signal",
          name: "Signal",
          role: "bot",
          persona: "Checks approved campaign inputs and returns a clean readiness sheet",
          color: "#D94F70",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "signal",
          kind: "routine",
          body: "Approved brief detected. I opened the campaign brief, media plan, and placement export on my computer.",
        },
        {
          id: "m2",
          from: "signal",
          kind: "text",
          body: "Channels, markets, and dates align. One creative ID still needs an owner. I marked the source for each field.",
        },
        {
          id: "m3",
          from: "signal",
          kind: "draft",
          draftLabel: "Completed readiness sheet",
          artifact: MEASUREMENT_READINESS,
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Trace a reporting field to its source",
    trigger: "A delivery check finds a mismatched field",
    backgroundAction: "Tracing the field across approved source files",
    problem:
      "A small label mismatch can create a long search across schedules, placement exports, and delivery files.",
    botJob:
      "Source follows the field across the approved files on its computer and records what changed, where it came from, and who should review it.",
    storyboard: [
      {
        when: "14:10",
        label: "A delivery check flags one creative identifier.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Meridian delivery check",
          sources: ["Schedule", "Placement export", "Delivery file"],
          signal: "Creative ID mismatch",
        },
      },
      {
        when: "14:13",
        label: "Source compares the field against the approved source of record.",
        scene: "map",
        visual: {
          kind: "three-why",
          items: [
            { label: "Expected", answer: "Creative ID" },
            { label: "Found", answer: "Package label" },
            { label: "Review", answer: "Mapping owner" },
          ],
        },
      },
      {
        when: "14:15",
        label: "The final frame is a completed source trace.",
        scene: "deck",
        artifact: DELIVERY_TRACE,
      },
    ],
    unlock:
      "The reviewer sees the source, the difference, and the next check in one place.",
    outcome:
      "A mismatched field becomes a source trace with a clear review step.",
    clips: [],
    demo: {
      title: "Source",
      subtitle: "Field trace on its own computer",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "source",
          name: "Source",
          role: "bot",
          persona: "Traces delivery fields back to the approved source",
          color: "#F2A541",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "source",
          kind: "routine",
          body: "The delivery check flagged one creative identifier. I opened the schedule, placement export, and delivery file.",
        },
        {
          id: "m2",
          from: "source",
          kind: "text",
          body: "The placement export is the source of record in this example. One delivery row uses a package label instead.",
        },
        {
          id: "m3",
          from: "source",
          kind: "draft",
          draftLabel: "Completed source trace",
          artifact: DELIVERY_TRACE,
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Assemble a client-ready media note",
    trigger: "A planning question enters the queue",
    backgroundAction: "Gathering approved context and writing the review draft",
    problem:
      "A straightforward planning question can require context from several approved files and methodology pages.",
    botJob:
      "Brief gathers the approved context on its computer, keeps source notes beside the draft, and returns a short media note for human review.",
    storyboard: [
      {
        when: "16:20",
        label: "A fictional cross-platform planning question enters the queue.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Meridian planning workspace",
          subject: "Cross-platform input question",
          questions: 1,
        },
      },
      {
        when: "16:24",
        label: "Brief gathers only the approved files and methodology pages.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Campaign brief", answer: "Scope confirmed" },
            { name: "Media plan", answer: "Channels confirmed" },
            { name: "Methodology pages", answer: "Review path noted" },
          ],
          status: "Context assembled",
        },
      },
      {
        when: "16:28",
        label: "The final frame is a completed client-ready note.",
        scene: "deck",
        artifact: CLIENT_MEDIA_NOTE,
      },
    ],
    unlock:
      "The reviewer gets a concise note with the approved source set already attached.",
    outcome:
      "A planning question becomes a short media note with a clear review path.",
    clips: [],
    demo: {
      title: "Brief",
      subtitle: "Planning note on its own computer",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "brief",
          name: "Brief",
          role: "bot",
          persona: "Builds a client-ready note from approved media context",
          color: "#1F9D8A",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "brief",
          kind: "routine",
          body: "A cross-platform planning question entered the queue. I opened the approved brief, plan, and methodology pages.",
        },
        {
          id: "m2",
          from: "brief",
          kind: "text",
          body: "The source set is complete. I kept the working path short and left the final decision with the reviewer.",
        },
        {
          id: "m3",
          from: "brief",
          kind: "draft",
          draftLabel: "Completed media note",
          artifact: CLIENT_MEDIA_NOTE,
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
