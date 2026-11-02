function wrapLabel(label: string, max = 14) {
  const words = label.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    if (!line) {
      line = word;
    } else if (`${line} ${word}`.length <= max) {
      line = `${line} ${word}`;
    } else {
      lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);

  if (lines.length <= 2) return lines;

  const rest = lines.slice(1).join(" ");
  return [
    lines[0],
    rest.length > max ? `${rest.slice(0, max - 1)}…` : rest,
  ];
}

export function TopologySchematic({ labels }: { labels: string[] }) {
  const nodes = [
    { x: 92, y: 160, label: labels[0] ?? "edge" },
    { x: 320, y: 82, label: labels[1] ?? "core" },
    { x: 320, y: 238, label: labels[2] ?? "access" },
    { x: 548, y: 160, label: labels[3] ?? "cloud" },
  ];

  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-label={`Illustrative network schematic: ${labels.join(", ")}`}
      className="schematic"
    >
      <path
        d="M92 160H320M320 160V82M320 160v78M320 82h228v78M320 238h228v-78"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        opacity="0.55"
      />
      <path
        d="M92 160H320"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="320" cy="160" r="7" fill="currentColor" />
      {nodes.map((node) => {
        const lines = wrapLabel(node.label);
        const startY = node.y + (lines.length === 1 ? 4 : -3);

        return (
          <g key={`${node.x}-${node.y}`}>
            <rect
              x={node.x - 66}
              y={node.y - 22}
              width="132"
              height="44"
              rx="8"
              fill="var(--color-canvas)"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <text
              textAnchor="middle"
              fill="currentColor"
              fontFamily="var(--font-sans)"
              fontSize="11"
            >
              {lines.map((text, index) => (
                <tspan key={`${text}-${index}`} x={node.x} y={startY + index * 13}>
                  {text}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
      <path
        d="M24 36v-12h12M616 36v-12h-12M24 284v12h12M616 284v12h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        opacity="0.45"
      />
    </svg>
  );
}
