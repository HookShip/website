import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { RepositoryCard } from "@/components/repository-card";
import { SectionIntro } from "@/components/section-intro";
import { SignalFlow } from "@/components/signal-flow";
import {
  principles,
  productLayers,
  proofPoints,
  repositories,
  siteConfig,
  statusFacts,
} from "@/data/site";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero__eyebrow">
          <span>Open contracts</span>
          <span>Portable delivery</span>
          <span>Managed control</span>
        </div>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__kicker">Webhook infrastructure / rearranged</p>
            <h1>
              Ship the experience.
              <br />
              <em>Keep the exit.</em>
            </h1>
            <p className="hero__lede">
              Build a polished webhook product without welding contracts, delivery, and
              customer experience to one vendor or one runtime.
            </p>
            <div className="hero__actions">
              <Link className="button button--ink" href="/evaluate">
                Evaluate HookShip
                <ArrowRight />
              </Link>
              <a className="text-link" href={siteConfig.githubUrl}>
                Explore the source
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <SignalFlow />
        </div>
        <div className="hero__footnote">
          <span>Pre-release</span>
          <p>
            Public source is available. No hosted account, package release, or
            service-level commitment exists yet.
          </p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Project facts">
        {proofPoints.map((point) => (
          <article key={point.label}>
            <strong>{point.value}</strong>
            <div>
              <span>{point.label}</span>
              <p>{point.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section" id="system">
        <SectionIntro
          index="01"
          eyebrow="The system"
          title="One webhook product. Three replaceable layers."
          description="Each layer has one job and one source of truth. Adopt the open pieces independently, or connect them into a complete product surface."
        />
        <div className="layers">
          {productLayers.map((layer) => (
            <article className="layer" key={layer.name}>
              <div className="layer__number">{layer.number}</div>
              <div className="layer__title">
                <span>{layer.title}</span>
                <h3>{layer.name}</h3>
              </div>
              <p>{layer.description}</p>
              <span className="layer__signal">{layer.signal}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--ink" id="repositories">
        <SectionIntro
          index="02"
          eyebrow="Repository map"
          title="Know exactly where the work belongs."
          description="HookShip is intentionally split by ownership. Product behavior stays with its code; the website summarizes and routes rather than duplicating specifications."
        />
        <div className="repository-grid">
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </div>
      </section>

      <section className="section principles-section">
        <SectionIntro
          index="03"
          eyebrow="Operating principles"
          title="Portability is a product feature, not a migration project."
          description="The architecture is designed to make boundaries visible before they become lock-in."
        />
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="status-banner">
        <div>
          <span className="micro-label">Current signal</span>
          <h2>Built enough to evaluate. Early enough to influence.</h2>
        </div>
        <div className="status-banner__facts">
          {statusFacts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
        <Link className="button button--paper" href="/status">
          Read the honest status
          <ArrowRight />
        </Link>
      </section>

      <section className="closing-cta">
        <p>Have 30 minutes and a webhook problem?</p>
        <h2>
          Take the source for a spin.
          <br />
          Tell us where the map breaks.
        </h2>
        <div>
          <Link className="button button--ember" href="/evaluate">
            Choose an evaluation track
            <ArrowRight />
          </Link>
          <a className="text-link" href={siteConfig.testingUrl}>
            Open tester intake
            <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
