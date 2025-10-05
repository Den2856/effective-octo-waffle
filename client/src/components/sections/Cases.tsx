import { ArrowUpRight } from "lucide-react";

export type CaseItem = {
  text: string;
  href?: string;
  linkLabel?: string;
  linkColorClass?: string;
};

interface CaseStudiesStripProps {
  items?: CaseItem[];
  className?: string;
  backgroundClass?: string;
  rounded?: string;
}

const DEFAULT_ITEMS: CaseItem[] = [
  {
    text:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 60% increase in website traffic and a 26% increase in sales.",
    href: "#",
    linkLabel: "Learn more",
    linkColorClass: "text-primary hover:text-primary/80",
  },
  {
    text:
      "For a B2B software company, we developed an SEO strategy that resulted in first-page rankings for key keywords and a 200% increase in organic traffic.",
    href: "#",
    linkLabel: "Learn more",
    linkColorClass: "text-primary hover:text-primary/80",
  },
  {
    text:
      "For a national retail chain, we created a social media campaign that increased followers by 62% and generated a 28% increase in online sales.",
    href: "#",
    linkLabel: "Learn more",
    linkColorClass: "text-primary hover:text-primary/80",
  },
];

export default function CaseStudiesStrip({
  items = DEFAULT_ITEMS,
  className = "",
  backgroundClass = "bg-background",
  rounded = "rounded-3xl",
}: CaseStudiesStripProps) {
  return (
    <section className={`w-full max-w-9xl px-4 sm:px-6 lg:px-8 font-space ${className}`} aria-label="Case studies" >
      <div className={`${backgroundClass} ${rounded} shadow-xl ring-1 ring-dark/20 p-4 sm:p-5 md:p-6 lg:p-8 text-grey`} >
        <ul className="grid grid-cols-1 md:grid-cols-3 divide-y divide-dark/30 md:divide-y-0 md:divide-x md:divide-dark/30">
          {items.map((item, idx) => (
            <li key={idx} className="p-5 md:p-6 lg:p-8">
              <div className="flex h-full flex-col gap-4">
                <p className="text-[16px] leading-6 text-grey">{item.text}</p>

                {item.href && (
                  <a
                    href={item.href}
                    className={`group inline-flex w-fit items-center gap-2 text-[14px] font-medium ${
                      item.linkColorClass ?? "text-primary hover:text-primary/80"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60 focus-visible:ring-offset-background no-underline`}
                    aria-label={item.linkLabel ?? "Learn more"}
                  >
                    <span>{item.linkLabel ?? "Learn more"}</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
