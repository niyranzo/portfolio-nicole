import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "rose" | "outline" | "paper";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  /** Si se indica, se renderiza como enlace; si es null y `disabled`, como botón inactivo. */
  href?: string | null;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Muestra la flecha diagonal con microinteracción en hover. */
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaHasPopup?: "dialog";
}

const base =
  "group/btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-300 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid:
    "border-ink bg-ink text-paper hover:border-rose hover:bg-rose hover:text-ink",
  rose: "border-rose bg-rose text-ink hover:border-ink hover:bg-ink hover:text-paper",
  paper:
    "border-paper bg-paper text-ink hover:border-rose hover:bg-rose hover:text-ink",
  outline:
    "border-current bg-transparent hover:border-rose hover:bg-rose hover:text-ink",
};

export function Button({
  children,
  variant = "solid",
  href,
  onClick,
  type = "button",
  disabled,
  arrow,
  className = "",
  ariaLabel,
  ariaHasPopup,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      )}
    </>
  );

  if (href && !disabled) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
    >
      {content}
    </button>
  );
}
