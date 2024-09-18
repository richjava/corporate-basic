export default function Card({ label, description, url }: any) {
  return (
    <>
      <a
        href={url}
        className="card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="font-semibold mb-3">
          {label}
          <span className="flex transition-transform duration-200 ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </span>
        </h2>
        <p className="m-0 opacity-60 text-sm leading-relaxed max-w-[30ch]">
          {description}
        </p>
      </a>
      <style jsx>
        {`
          .card {
            padding: 1rem 1.2rem;
            border-radius: var(--border-radius);
            background: rgba(var(--card-rgb), 0);
            border: 1px solid rgba(var(--card-border-rgb), 0);
            transition: background 200ms, border 200ms;
          }
          
          .card span {
            display: flex;
            transition: transform 200ms;
            margin-left: 3px;
          }
          
          .card h2 {
            font-weight: 600;
            margin-bottom: 0.7rem;
          }
          
          .card p {
            margin: 0;
            opacity: 0.6;
            font-size: 0.9rem;
            line-height: 1.5;
            max-width: 30ch;
          }
          
          /* Enable hover only on non-touch devices */
          @media (hover: hover) and (pointer: fine) {
            .card:hover {
              background: #fff;
              border: 1px solid rgba(var(--card-border-rgb), 0.15);
            }
          
            .card:hover span {
              transform: translateX(4px);
            }
          }
          
          @media (prefers-reduced-motion) {
            .card:hover span {
              transform: none;
            }
          }
          
          /* Mobile */
          @media (max-width: 700px) {
            .card {
              padding: 1rem 2.5rem;
            }
          
            .card h2 {
              margin-bottom: 0.5rem;
            }
          }
          
        `}
      </style>
    </>
  );
}
