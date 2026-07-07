export function HamsterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="19" cy="18" rx="7" ry="7" fill="currentColor" opacity="0.9" />
      <ellipse cx="45" cy="18" rx="7" ry="7" fill="currentColor" opacity="0.9" />
      <ellipse cx="19" cy="18" rx="3" ry="3" fill="#f5cdb8" />
      <ellipse cx="45" cy="18" rx="3" ry="3" fill="#f5cdb8" />
      <ellipse cx="32" cy="34" rx="22" ry="20" fill="currentColor" />
      <ellipse cx="24" cy="33" rx="2.2" ry="2.6" fill="#2b1f18" />
      <ellipse cx="40" cy="33" rx="2.2" ry="2.6" fill="#2b1f18" />
      <ellipse cx="24" cy="32.5" rx="0.8" ry="0.9" fill="white" />
      <ellipse cx="40" cy="32.5" rx="0.8" ry="0.9" fill="white" />
      <ellipse cx="32" cy="40" rx="2.4" ry="1.8" fill="#a04a30" />
      <path
        d="M32 42 L29 45 M32 42 L35 45"
        stroke="#a04a30"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="20" cy="42" rx="4" ry="2.6" fill="#f5cdb8" opacity="0.6" />
      <ellipse cx="44" cy="42" rx="4" ry="2.6" fill="#f5cdb8" opacity="0.6" />
    </svg>
  );
}
