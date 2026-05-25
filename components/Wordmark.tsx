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
 * Wordmark — sans-serif, weight 600, tight tracking. No ornament.
 * The brand sits in the type, not in a decoration.
 */
export function Wordmark({ className = "", size = "md" }: Props) {
  return (
    <span className={`font-sans font-semibold tracking-[-0.03em] text-ink ${sizes[size]} ${className}`}>
      {siteConfig.business.wordmark}
    </span>
  );
}
