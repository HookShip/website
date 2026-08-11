type BrandMarkProps = {
  readonly compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-mark" aria-label="HookShip">
      <span className="brand-mark__glyph" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {compact ? null : <span className="brand-mark__word">HookShip</span>}
    </span>
  );
}
