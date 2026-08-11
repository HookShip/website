type SectionIntroProps = {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
};

export function SectionIntro({
  index,
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="section-intro">
      <div className="section-intro__index">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-intro__copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
