import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowLeft({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function Check({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Download({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
    </svg>
  );
}

export function Mail({ className, ...props }: IconProps) {
  return (
    <svg {...base} className={className ?? "icon"} {...props}>
      <path d="M3 6h18v12H3zM3 6l9 7 9-7" />
    </svg>
  );
}
