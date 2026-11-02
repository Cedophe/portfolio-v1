export function NgfwSchematic({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-label={label}
      className="schematic"
    >
      <rect
        x="272"
        y="72"
        width="186"
        height="192"
        rx="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="5 6"
        opacity="0.28"
      />

      <path
        d="M148 160H184"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        opacity="0.35"
      />
      <path
        d="M276 160H306M424 160H496"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />

      <rect
        x="24"
        y="118"
        width="124"
        height="84"
        rx="14"
        fill="var(--color-canvas)"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {[56, 86, 116].map((x) => (
        <g key={x}>
          <circle
            cx={x}
            cy="142"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={`M${x - 10} 164c0-5.5 4.5-10 10-10s10 4.5 10 10`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
      <text
        x="86"
        y="188"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="12"
      >
        500+
      </text>

      <rect
        x="184"
        y="136"
        width="92"
        height="48"
        rx="12"
        fill="var(--color-canvas)"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="230"
        y="164"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="12"
      >
        Core
      </text>

      <rect
        x="306"
        y="104"
        width="118"
        height="112"
        rx="20"
        fill="var(--color-canvas)"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M365 118l18 6v14c0 12-8 21-18 25-10-4-18-13-18-25v-14l18-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="365"
        y="180"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="11"
      >
        Palo Alto
      </text>
      <text
        x="365"
        y="196"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="11"
        fontWeight="600"
      >
        NGFW
      </text>

      <path
        d="M508 194c-12 0-22-9-22-21 0-10 7-19 17-21 2-16 15-28 31-28 15 0 28 10 31 24 12 1 21 11 21 23 0 13-10 23-23 23h-55z"
        fill="var(--color-canvas)"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="532"
        y="188"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans)"
        fontSize="12"
      >
        Internet
      </text>
    </svg>
  );
}
