import type { DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { ArtifactCard } from "./ArtifactCard";

function ScreenHeader({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <header>
      <strong>{title}</strong>
      <span>{status}</span>
    </header>
  );
}

function InboxScreen({ account }: { account: string }) {
  return (
    <div className="site site-gmail">
      <ScreenHeader title="Workspace inbox" status="Approved input" />
      <p>
        <span>Campaign</span>
        {account}
      </p>
      <p>
        <span>Subject</span>
        Cross-platform planning package
      </p>
      <div>Campaign brief, media plan, and placement export are ready to check.</div>
    </div>
  );
}

function WorkspaceScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <ScreenHeader title={`${account} workspace`} status="Checking now" />
      <p className="site-time">Agent computer active</p>
      <ul>
        <li>
          <span>Brief</span> Markets and flight dates found
        </li>
        <li>
          <span>Plan</span> Connected TV, streaming, and digital video aligned
        </li>
        <li>
          <span>Export</span> Creative identifier owner needs review
        </li>
      </ul>
    </div>
  );
}

function SourcesScreen() {
  return (
    <div className="site site-research">
      <ScreenHeader title="Approved source set" status="Trace in progress" />
      <p className="site-time">Source notes stay beside the work</p>
      <ul>
        <li>
          <span>Schedule</span> Campaign dates and market list
        </li>
        <li>
          <span>Placement</span> Channel and creative identifiers
        </li>
        <li>
          <span>Delivery</span> Field being checked
        </li>
        <li>
          <span>Method</span> Selected Nielsen media methodology pages
        </li>
      </ul>
    </div>
  );
}

function ArtifactScreen({
  beat,
  message,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
}) {
  return (
    <div className="site site-gdoc">
      <ScreenHeader title={beat.title} status="Ready for review" />
      <article>
        {message?.artifact ? (
          <ArtifactCard artifact={message.artifact} />
        ) : (
          <p>The agent is assembling the final artifact from approved inputs.</p>
        )}
      </article>
    </div>
  );
}

export function SiteScreen({
  beat,
  message,
  account,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  switch (beat.site) {
    case "inbox":
      return <InboxScreen account={account} />;
    case "workspace":
      return <WorkspaceScreen account={account} />;
    case "sources":
      return <SourcesScreen />;
    case "sheet":
    case "document":
      return <ArtifactScreen beat={beat} message={message} />;
    default: {
      const exhaustiveSite: never = beat.site;
      return exhaustiveSite;
    }
  }
}
