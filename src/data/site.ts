export type Accent = "ember" | "mint" | "sky" | "paper" | "ink";

export type Repository = {
  readonly id: string;
  readonly index: string;
  readonly name: string;
  readonly eyebrow: string;
  readonly description: string;
  readonly status: string;
  readonly url: string;
  readonly accent: Accent;
  readonly facts: readonly string[];
};

export type EvaluationTrack = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly audience: string;
  readonly duration: string;
  readonly description: string;
  readonly href: string;
  readonly action: string;
  readonly accent: Accent;
};

export const siteConfig = {
  name: "HookShip",
  shortDescription:
    "Contract-first webhook tooling, portable delivery, and a managed control plane.",
  description:
    "Build a polished webhook product without locking contracts, delivery, and customer experience into one runtime.",
  githubUrl: "https://github.com/HookShip",
  testingUrl: "https://github.com/HookShip/.github/blob/main/TESTING.md",
  repositoryUrl: "https://github.com/HookShip/website",
} as const;

export const navigation = [
  { label: "System", href: "/#system" },
  { label: "Repositories", href: "/#repositories" },
  { label: "Evaluate", href: "/evaluate" },
  { label: "Status", href: "/status" },
] as const;

export const proofPoints = [
  {
    value: "14",
    label: "public package candidates",
    note: "Contracts, signing, adapters, CLI, and portal building blocks.",
  },
  {
    value: "4",
    label: "delivery runtime profiles",
    note: "Ephemeral evaluation plus PostgreSQL, Redis, and Kafka modes.",
  },
  {
    value: "0",
    label: "hosted dependencies",
    note: "The public source evaluation runs without a HookShip account.",
  },
] as const;

export const productLayers = [
  {
    number: "01",
    title: "Describe",
    name: "Toolkit",
    description:
      "Import OpenAPI or AsyncAPI. Validate compatibility, generate fixtures and types, sign events, and build the portal experience.",
    signal: "Contract truth",
  },
  {
    number: "02",
    title: "Deliver",
    name: "Hook service",
    description:
      "Accept events durably, sign exact payload bytes, dispatch safely, retry with evidence, and operate the queue on your infrastructure.",
    signal: "Portable runtime",
  },
  {
    number: "03",
    title: "Operate",
    name: "Platform",
    description:
      "Coordinate contracts, endpoints, delegated portal access, delivery metadata, governance, and backend portability.",
    signal: "Managed control",
  },
] as const;

export const repositories: readonly Repository[] = [
  {
    id: "toolkit",
    index: "01",
    name: "toolkit",
    eyebrow: "Open foundation",
    description:
      "Public libraries, CLI, adapters, contract tooling, signing, and portal components.",
    status: "Public / pre-release",
    url: "https://github.com/HookShip/toolkit",
    accent: "ember",
    facts: ["Apache-2.0", "14 package candidates", "No hosted dependency"],
  },
  {
    id: "hook-service",
    index: "02",
    name: "hook-service",
    eyebrow: "Portable data plane",
    description:
      "Self-hostable outbound webhook delivery with durable acceptance, retries, DLQ, and payload-free status.",
    status: "Public / pre-release",
    url: "https://github.com/HookShip/hook-service",
    accent: "mint",
    facts: ["Apache-2.0", "Single-VM ready", "At-least-once delivery"],
  },
  {
    id: "platform",
    index: "03",
    name: "platform",
    eyebrow: "Managed control plane",
    description:
      "Private multi-tenant product engineering for contracts, portals, metadata, governance, and operations.",
    status: "Private / engineering pilot",
    url: "https://github.com/HookShip/platform",
    accent: "sky",
    facts: ["Private source", "Not an operated service", "Invite-only pilot"],
  },
  {
    id: "organization",
    index: "04",
    name: ".github",
    eyebrow: "Organization policy",
    description:
      "Repository placement, release controls, community defaults, security, support, and tester intake.",
    status: "Public",
    url: "https://github.com/HookShip/.github",
    accent: "paper",
    facts: ["Shared policy", "Tester program", "Reusable CI"],
  },
  {
    id: "website",
    index: "05",
    name: "website",
    eyebrow: "Public web presence",
    description:
      "The source for this site, its public narrative, status summaries, and evaluation navigation.",
    status: "Public",
    url: "https://github.com/HookShip/website",
    accent: "ink",
    facts: ["Next.js", "Static export", "GitHub Pages"],
  },
] as const;

export const evaluationTracks: readonly EvaluationTrack[] = [
  {
    id: "toolkit",
    number: "A",
    title: "Toolkit evaluator",
    audience:
      "Developers building webhook contracts, docs, signing, adapters, or portal experiences.",
    duration: "30-60 min",
    description:
      "Run the credential-free smoke workflow, exercise the contract CLI, and tell us where the first useful result becomes unclear.",
    href: "https://github.com/HookShip/toolkit/blob/main/docs/evaluation.md",
    action: "Open the toolkit guide",
    accent: "ember",
  },
  {
    id: "delivery",
    number: "B",
    title: "Delivery evaluator",
    audience:
      "Platform and reliability engineers evaluating outbound webhook infrastructure.",
    duration: "45-90 min",
    description:
      "Run a local signed delivery, then exercise PostgreSQL-backed retry behavior without production endpoints or customer data.",
    href: "https://github.com/HookShip/hook-service/blob/main/docs/evaluation.md",
    action: "Open the delivery guide",
    accent: "mint",
  },
  {
    id: "partner",
    number: "C",
    title: "Design partner",
    audience:
      "B2B and API teams with active customer-facing webhooks and a reversible sandbox.",
    duration: "2-4 weeks",
    description:
      "Start with discovery. Managed access is invite-only, keeps the existing delivery path active, and stops when fit or safety is unclear.",
    href: siteConfig.testingUrl,
    action: "Review the tester program",
    accent: "sky",
  },
] as const;

export const statusFacts = [
  {
    label: "Public source",
    value: "Available",
    detail: "Toolkit, delivery service, organization policy, and website.",
    tone: "positive",
  },
  {
    label: "Public releases",
    value: "Not yet",
    detail: "Source versions are release candidates; no registry release exists.",
    tone: "caution",
  },
  {
    label: "Hosted service",
    value: "Not operated",
    detail: "The managed platform is private engineering-pilot code.",
    tone: "neutral",
  },
  {
    label: "Tester intake",
    value: "Open",
    detail: "Public source evaluation plus qualified design-partner discovery.",
    tone: "positive",
  },
] as const;

export const principles = [
  {
    title: "Contracts are portable",
    description:
      "Keep schemas, compatibility decisions, fixtures, and signing behavior independent of the delivery vendor.",
  },
  {
    title: "Delivery stays replaceable",
    description:
      "Run the data plane yourself, preserve stable identities, and avoid making the control plane part of every delivery request.",
  },
  {
    title: "Metadata before payloads",
    description:
      "Operate from bounded delivery evidence. Payload retention is explicit, scoped, encrypted, and time-limited.",
  },
  {
    title: "Unsupported means visible",
    description:
      "Capability differences are shown before action. The product does not simulate parity that a backend cannot provide.",
  },
] as const;

export const faqs = [
  {
    question: "Is HookShip a hosted webhook provider?",
    answer:
      "Not today. The public toolkit and delivery service run from source. The private platform is an engineering pilot, not an operated public service.",
  },
  {
    question: "Does the control plane sit in the delivery hot path?",
    answer:
      "No. The architecture keeps normal delivery in the selected data plane. The control plane coordinates contracts, configuration, portal access, and delivery metadata.",
  },
  {
    question: "Can I evaluate it without production data?",
    answer:
      "Yes. Both public evaluation guides use synthetic contracts, local receivers, and public test credentials. Production payloads and secrets should never be posted.",
  },
  {
    question: "Where should I open an issue?",
    answer:
      "Use the repository that owns the behavior: toolkit for public primitives, hook-service for delivery, .github for organization-wide policy, and this website repository for web presentation.",
  },
] as const;
