type IconProps = { size?: number; className?: string; strokeWidth?: number };

// lucide-react dropped trademarked brand glyphs, so these two are hand-drawn
// minimal outlines kept visually consistent with the rest of the icon set.
export function InstagramIcon({
  size = 20,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({
  size = 20,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.3v5.4l4.8-2.7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({
  size = 20,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 20l1.1-3.9a8 8 0 1 1 3 2.9z" />
      <path
        d="M9.2 9.8c.1-.5.5-.8.9-.8.3 0 .6.2.7.5l.5 1c.1.3.1.5-.1.7l-.4.4c-.1.2-.1.4 0 .5.5.9 1.3 1.6 2.2 2.1.2.1.4.1.5 0l.4-.4c.2-.2.4-.2.7-.1l1 .5c.3.1.5.4.5.7 0 .5-.4.8-.8.9-2.4.3-5.7-2.6-6.1-6z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
