import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";

import { BrandMark } from "./brand-mark";
import { ArrowUpRight } from "./icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/" aria-label="HookShip home">
        <BrandMark />
      </Link>
      <nav className="site-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="site-header__github" href={siteConfig.githubUrl}>
        GitHub
        <ArrowUpRight />
      </a>
    </header>
  );
}
