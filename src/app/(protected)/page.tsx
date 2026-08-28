import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/nielsen-watercolor-header.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report report-paper">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <HeroDemo />
          </section>

          <RosterChart />

          <section className="usecase-framing">
            <p className="eyebrow">Three sample routines</p>
            <h2>
              Work starts from an event, continues on an agent&apos;s computer,
              and ends with an artifact a person can check.
            </h2>
            <p>These scenes show the shape of the work, not a current Nielsen program.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/nielsen-watercolor-signal.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Nielsen x SpaceXAI</p>
          <p>Fictional media workflows for discussion</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Madeline Ingleby</strong>
          <a href="mailto:madeline.ingleby@cursor.com">
            madeline.ingleby@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
