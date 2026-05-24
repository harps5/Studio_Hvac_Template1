import { siteConfig } from "@/config/site";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

/**
 * Wordmark — typographic only, no icon.
 * The brand sits in the font choice + the tight tracking.
 */
export function Wordmark({ className = "", size = "md" }: Props) {
  return (
    <span className={`font-display ${sizes[size]} tracking-[-0.02em] text-ink ${className}`}>
      {siteConfig.business.wordmark}
      <span className="text-sienna">.</span>
    </span>
  );
}
