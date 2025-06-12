
import Link from "next/link";
export function Logo({ width = 200, height = 50 }) {
  return (
    <Link href={"/"}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Connectify logo"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Square Blocks */}
        <rect x="140" y="30" width="30" height="30" fill="#38BDF8" rx="6" />
        <rect x="170" y="30" width="30" height="30" fill="#6366F1" rx="6" />
        <rect x="200" y="30" width="30" height="30" fill="#8B5CF6" rx="6" />
        {/* Text Below the Blocks */}
        <text
          x="200"
          y="95"
          fontFamily="Segoe UI, sans-serif"
          fontSize="28"
          fill="#FFFFFF"
          fontWeight="700"
          textAnchor="middle"
        >
          Connectify
        </text>
      </svg>
    </Link>
  );
}
