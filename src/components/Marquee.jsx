import './Marquee.css';

const TECHS = [
  'React',
  'Vite',
  'TypeScript',
  'Python',
  'Pandas',
  'PostgreSQL',
  'Power BI',
  'Netlify',
  'GitHub Actions',
  'CI/CD',
  'Tailwind',
  'Node.js',
  'Excel',
  'NumPy',
];

export function Marquee() {
  const sequence = [...TECHS, ...TECHS, ...TECHS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {sequence.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee__item">
            <span className="marquee__text">{tech}</span>
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
