import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { evaluationTracks, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Evaluate",
  description:
    "Choose a source-based HookShip evaluation track or request qualified design-partner discovery.",
  alternates: { canonical: absoluteUrl("/evaluate") },
};

export default function EvaluatePage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--ember">
        <div className="page-hero__index">E / 01</div>
        <div>
          <span className="micro-label">Early tester program</span>
          <h1>
            Pick one workflow.
            <br />
            Bring back evidence.
          </h1>
        </div>
        <p>
          The public tracks run locally from source with synthetic data. Managed
          discovery is invite-only and starts with fit, safety, and rollback.
        </p>
      </section>

      <section className="section">
        <SectionIntro
          index="01"
          eyebrow="Choose a track"
          title="Start with the smallest path that answers your question."
          description="A complete, partial, blocked, or stopped evaluation is useful when the evidence is concrete."
        />
        <div className="evaluation-grid">
          {evaluationTracks.map((track) => (
            <article
              className={`evaluation-card evaluation-card--${track.accent}`}
              key={track.id}
            >
              <div className="evaluation-card__top">
                <span>{track.number}</span>
                <span>{track.duration}</span>
              </div>
              <h2>{track.title}</h2>
              <p className="evaluation-card__audience">{track.audience}</p>
              <p>{track.description}</p>
              <a href={track.href}>
                {track.action}
                <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="evaluation-safety">
        <div>
          <span className="micro-label">Safety boundary</span>
          <h2>Local, synthetic, sanitized.</h2>
        </div>
        <ul>
          <li>Use included contracts and local receivers.</li>
          <li>Never post payloads, secrets, tokens, or private URLs.</li>
          <li>Report vulnerabilities through private security channels.</li>
          <li>Record the exact repository commit and environment.</li>
        </ul>
      </section>

      <section className="section evaluation-outcome">
        <SectionIntro
          index="02"
          eyebrow="Definition of done"
          title="A clear stop is as valuable as a smooth finish."
          description="We are looking for decision-quality evidence, not inflated completion rates."
        />
        <div className="outcome-list">
          <article>
            <span>Completed</span>
            <p>You reached the intended result and can name what was useful.</p>
          </article>
          <article>
            <span>Partial</span>
            <p>You reached a meaningful midpoint and captured the next gap.</p>
          </article>
          <article>
            <span>Blocked</span>
            <p>You found a reproducible failure with a sanitized trace.</p>
          </article>
          <article>
            <span>Stopped</span>
            <p>The project is not a fit, and the deciding reason is explicit.</p>
          </article>
        </div>
        <div className="evaluation-outcome__actions">
          <a className="button button--ink" href={siteConfig.testingUrl}>
            Open the tester program
            <ArrowRight />
          </a>
          <Link className="text-link" href="/status">
            Check current limitations
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
