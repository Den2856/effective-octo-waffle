import React, { useId, useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

/**
 * StepsAccordion — аккордеон «один в один» со скрина
 * React + TypeScript + TailwindCSS, адаптив до 320px
 *
 * Особенности:
 * - Большие скругления, двойной контур (граница + нижняя тень-ступень)
 * - Номера шагов слева (01..06), кнопка справа в кружке (+ / -)
 * - Контент разворачивается плавно с анимацией высоты
 * - Управление с клавиатуры, aria-атрибуты
 */

export type StepItem = {
  number: string;
  title: string;
  content?: string;
};

interface StepsAccordionProps {
  items?: StepItem[];
  activeBgClass?: string;
  idleBgClass?: string;
  className?: string;
  initiallyOpenIndex?: number;
}

const DEFAULT_ITEMS: StepItem[] = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct in-depth market and competitor research, audit your current assets, define ICP and messaging, select channels, set KPIs, and build a data-driven roadmap with timelines and budgets.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "We set up analytics and conversion tracking, create campaigns and ad groups, write creatives, prepare landing pages, configure events, and launch initial A/B tests across selected channels.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor performance against KPIs, optimize bids and budgets, refine keywords and audiences, iterate creatives and pages, and improve conversion rate and CPA/ROAS.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "You receive clear weekly/monthly reports and a live dashboard with insights, learnings, and next steps. We keep a tight feedback loop via calls and chat for fast decision making.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "We turn insights into a testing backlog and long-term growth plan: scale what works, sunset what doesn’t, explore new channels, and regularly revisit the strategy to compound results.",
  },
];


export default function StepsAccordion({
  items = DEFAULT_ITEMS,
  activeBgClass = "bg-[#B9FF66]",
  idleBgClass = "bg-grey",
  initiallyOpenIndex = 0,
  className = "",
}: StepsAccordionProps) {
  const [open, setOpen] = useState<number | null>(initiallyOpenIndex);

  return (
    <section className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      <ul className="flex flex-col gap-5">
        {items.map((it, idx) => (
          <StepRow
            key={idx}
            item={it}
            isOpen={open === idx}
            onToggle={() => setOpen(open === idx ? null : idx)}
            activeBgClass={activeBgClass}
            idleBgClass={idleBgClass}
          />
        ))}
      </ul>
    </section>
  );
}

function StepRow({
  item,
  isOpen,
  onToggle,
  activeBgClass,
  idleBgClass,
}: {
  item: StepItem;
  isOpen: boolean;
  onToggle: () => void;
  activeBgClass: string;
  idleBgClass: string;
}) {
  const contentId = useId();

  return (
    <li>
      <div
        className={`${isOpen ? activeBgClass : idleBgClass} relative overflow-hidden rounded-[28px] border-2 border-dark/80 shadow-[0_4px_0_0_rgba(0,0,0,0.85)] px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 transition-colors duration-200`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5">
          <span className="font-space text-[clamp(22px,6vw,36px)] font-extrabold leading-none tracking-tight text-dark">
            {item.number}
          </span>

          <h3 className="font-space text-[clamp(15px,3.5vw,30px)] font-semibold text-dark">
            {item.title}
          </h3>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className="inline-flex size-10 items-center justify-center rounded-full border-2 border-dark/80 bg-white text-dark transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
          >
            {isOpen ? (
              <CircleMinus className="size-5" aria-hidden="true" />
            ) : (
              <CirclePlus className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <Collapsible in={isOpen} id={contentId}>
          <div className="my-4 h-px w-full bg-dark/25" />
          {item.content && (
            <p className="text-[18px] leading-5 text-dark/80">
              {item.content}
            </p>
          )}
        </Collapsible>
      </div>
    </li>
  );
}

function Collapsible({ in: open, children, id }: { in: boolean; children: React.ReactNode; id: string }) {
  return (
    <div
      id={id}
      style={{
        gridTemplateRows: open ? "1fr" : "0fr",
      }}
      className="grid transition-[grid-template-rows] duration-300"
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}