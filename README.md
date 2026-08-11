# HookShip website

Public website for the HookShip organization. The site explains the project layers,
routes visitors to the owning repository, publishes an honest pre-release status, and
provides the canonical entry point for early evaluation.

## Design and content ownership

The visual direction combines an editorial field manual with an operations signal board:
warm paper, dark ink, safety orange, signal green, sharp rules, and a live-looking
webhook route diagram.

Content is typed and centralized in [`src/data/site.ts`](src/data/site.ts). The website
summarizes and links; it does not redefine product behavior:

- `toolkit` owns public package interfaces, contracts, signing, and developer tooling;
- `hook-service` owns the delivery protocol and portable data plane;
- `platform` owns private managed control-plane behavior;
- `.github` owns organization policy and shared community guidance; and
- `website` owns public web presentation, navigation, and status summaries.

When a summary and an owning repository disagree, the owning repository is correct and
this site must be updated.

## Local development

Requirements:

- Node.js 22.23.1 or newer
- Corepack

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>.

## Quality gates

```sh
pnpm check
pnpm build:pages
```

`pnpm check` runs formatting, lint, type checking, content tests, and the normal
production build. `pnpm build:pages` creates the `/website`-based static export used by
GitHub Pages.

## Deployment

The CI workflow validates every push and pull request. A successful push to `main`
builds the static export and deploys `out/` through GitHub Pages using OIDC and
repository-scoped permissions. No deployment token or runtime service is required.

Expected public URL:

<https://hookship.github.io/website/>

## Project status

HookShip is pre-release. This website must not invent packages, releases, customers,
production outcomes, hosted access, service levels, contact addresses, or capabilities
that are not supported by the owning repository.
