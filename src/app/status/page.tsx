import type { Metadata } from "next";

import { ArrowUpRight } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { repositories, siteConfig, statusFacts } from "@/data/site";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Status",
  description:
    "An honest view of what HookShip implements today, what remains pre-release, and where each source of truth lives.",
  alternates: { canonical: absoluteUrl("/status") },
};

export default function StatusPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--mint">
        <div className="page-hero__index">S / 01</div>
        <div>
          <span className="micro-label">Current status</span>
          <h1>
            Source is real.
            <br />
            Claims stay bounded.
          </h1>
        </div>
        <p>
          HookShip is pre-release. This page separates implemented source from releases,
          hosted operation, and external production evidence.
        </p>
      </section>

      <section className="section">
        <SectionIntro
          index="01"
          eyebrow="Signal board"
          title="What exists today."
          description="Status is deliberately plain: available, not yet, not operated, or open for evaluation."
        />
        <div className="status-board">
          {statusFacts.map((fact) => (
            <article className={`status-row status-row--${fact.tone}`} key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
              <p>{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--ink">
        <SectionIntro
          index="02"
          eyebrow="Source map"
          title="Five repositories. No mystery ownership."
          description="The website owns public web presentation. Product behavior remains authoritative in the repository that implements it."
        />
        <div className="source-map">
          {repositories.map((repository) => (
            <a href={repository.url} key={repository.id}>
              <span>{repository.index}</span>
              <div>
                <strong>{repository.name}</strong>
                <p>{repository.eyebrow}</p>
              </div>
              <em>{repository.status}</em>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="status-boundaries">
        <div>
          <span className="micro-label">Not claimed</span>
          <h2>What repository checks cannot prove.</h2>
        </div>
        <div className="status-boundaries__grid">
          <p>No public package or binary release has been cut.</p>
          <p>No public hosted service or account provisioning exists.</p>
          <p>No customer adoption, revenue, SLA, or production outcome is claimed.</p>
          <p>No local test substitutes for a target-host production capacity run.</p>
        </div>
        <a className="text-link" href={siteConfig.githubUrl}>
          Inspect the source and checks
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}
