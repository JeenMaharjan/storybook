import type { ComponentChildren } from "preact";
import { Button } from "../Button/Button";
import "./card.css";

type PromoCardProps = {
  kicker?: string;
  title: string;
  ctaLabel: string;
  onCta?: () => void;
  disabled?: boolean;

  ctaVariant?: "primary" | "secondary" | "tertiary";

  
  variant?: "default" | "promo";

  children?: ComponentChildren;
};

export const PromoCard = ({
  kicker = "Announcement",
  title,
  ctaLabel,
  onCta,
  disabled = false,
  ctaVariant = "primary",
  variant = "promo",
  children,
}: PromoCardProps) => {
  return (
    <section class={`card ${variant === "promo" ? "card--promo" : ""}`}>
      <div class="card__inner">
        <div class="card__content">
          <div>
            <div class="card__kicker">{kicker}</div>
            <div class="card__title">{title}</div>
          </div>

          {children ? <div>{children}</div> : null}

          <div class="card__actions">
            <Button variant={ctaVariant} disabled={disabled} onClick={onCta}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
