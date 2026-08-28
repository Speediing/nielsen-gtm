"use client";

import { useState } from "react";
import { HERO_JOBS, type HeroJobIcon } from "@/data/hero-jobs";

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="11"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="9"
        y="3.5"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3M9 20h6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function JobIcon({ kind }: { kind: HeroJobIcon }) {
  switch (kind) {
    case "audience":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "schedule":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h3M13 13h3M8 16h3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "delivery":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 7h11M13 4l3 3-3 3M19 17H8M11 14l-3 3 3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "methodology":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m15 15 4.5 4.5M8 9h5M8 12h3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "cross-platform":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3.5" y="5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <rect x="10" y="11" width="10.5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "client":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 6.5h14v9H9l-4 3v-12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "metadata":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
          <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
          <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M14 17h6M17 14v6" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "chief-of-staff":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 4.5c.65 4.15 2.85 6.35 7 7-.4.07-.78.15-1.14.25-3.35.92-5.02 3.1-5.86 6.75-.84-3.65-2.51-5.83-5.86-6.75-.36-.1-.74-.18-1.14-.25 4.15-.65 6.35-2.85 7-7Z"
            fill="currentColor"
          />
        </svg>
      );
    default: {
      const exhaustiveIcon: never = kind;
      return exhaustiveIcon;
    }
  }
}

export function HeroDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const job = HERO_JOBS[activeIndex];

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">Nielsen x SpaceXAI</p>
        <h1>A fleet that keeps media work moving.</h1>
        <p className="hero-intro">
          Grok Bot agents use their own computers to follow saved routines,
          work across approved sources, and return finished artifacts for
          review. These Nielsen media examples are fictional.
        </p>
        <div className="hero-phone-jobs" aria-label="Choose a Grok Bot job">
          {HERO_JOBS.map((candidate, index) => (
            <button
              key={candidate.name}
              className={index === activeIndex ? "is-active" : undefined}
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex ? (
                <span aria-hidden>
                  <JobIcon kind={candidate.icon} />
                </span>
              ) : null}
              {candidate.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="hero-bot-demo" aria-label="Live Grok Bot phone demo">
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden />
          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden>
              <BackIcon />
            </span>
            <span className="hero-phone-agent" aria-hidden>
              <JobIcon kind={job.icon} />
            </span>
            <p>
              <strong>{job.name} Agent</strong>
              <small>
                <span aria-hidden /> Working in the cloud
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden>
              <DesktopIcon />
            </span>
          </header>

          <div className="hero-phone-thread" key={job.name}>
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden />
                New signal detected
              </p>
              <p className="hero-phone-work-meta">
                <span>Workspace</span>
                {job.account}
              </p>
              <p className="hero-phone-work-meta">
                <span>Signal</span>
                {job.signal}
              </p>
              <p className="hero-phone-work-copy">{job.work}</p>
              <strong>{job.result}</strong>
            </article>
            <p className="hero-phone-message is-user">{job.user}</p>
            <p className="hero-phone-message is-bot">{job.bot}</p>
          </div>

          <footer className="hero-phone-composer">
            <span aria-hidden>
              <PlusIcon />
            </span>
            <p>Message {job.name} Agent</p>
            <span aria-hidden>
              <MicIcon />
            </span>
          </footer>
        </div>
      </aside>
    </>
  );
}
