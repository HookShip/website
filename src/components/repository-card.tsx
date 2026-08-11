import type { Repository } from "@/data/site";

import { ArrowUpRight } from "./icons";

type RepositoryCardProps = {
  readonly repository: Repository;
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <a
      className={`repository-card repository-card--${repository.accent}`}
      href={repository.url}
    >
      <div className="repository-card__top">
        <span>{repository.index}</span>
        <span>{repository.status}</span>
      </div>
      <div className="repository-card__body">
        <span className="micro-label">{repository.eyebrow}</span>
        <h3>{repository.name}</h3>
        <p>{repository.description}</p>
      </div>
      <ul className="repository-card__facts" aria-label={`${repository.name} facts`}>
        {repository.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <span className="repository-card__action">
        View source
        <ArrowUpRight />
      </span>
    </a>
  );
}
