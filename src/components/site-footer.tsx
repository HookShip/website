import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";

import { BrandMark } from "./brand-mark";
import { ArrowUpRight } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <BrandMark />
        <p>
          Contract-first webhook infrastructure
          <br />
          with portable delivery.
        </p>
      </div>
      <div className="site-footer__links">
        <div>
          <span className="micro-label">Navigate</span>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="micro-label">Source</span>
          <a href={siteConfig.githubUrl}>
            GitHub organization
            <ArrowUpRight />
          </a>
          <a href={siteConfig.repositoryUrl}>
            Website repository
            <ArrowUpRight />
          </a>
          <a href={siteConfig.testingUrl}>
            Tester program
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="site-footer__base">
        <span>Pre-release source. No hosted service or SLA.</span>
        <span>Built in public.</span>
      </div>
    </footer>
  );
}
