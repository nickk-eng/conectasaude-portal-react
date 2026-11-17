export default function SectionHeader({ eyebrow, title, children, aside }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {aside}
    </div>
  );
}
export function PageHeader({ number, eyebrow, title, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <span className="eyebrow">
          <span className="tiny-line" />
          {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{children}</p>
        <span className="page-number" aria-hidden="true">
          {number}
        </span>
      </div>
    </header>
  );
}
