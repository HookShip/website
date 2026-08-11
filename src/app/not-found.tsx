import Link from "next/link";

import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span className="micro-label">404 / route unavailable</span>
      <h1>This signal has no destination.</h1>
      <p>The page moved, never existed, or belongs in another repository.</p>
      <Link className="button button--ink" href="/">
        Return to the manifest
        <ArrowRight />
      </Link>
    </main>
  );
}
