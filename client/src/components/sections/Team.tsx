export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
};

interface TeamGridProps {
  members?: TeamMember[];
  accent?: string;
  className?: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "/team/1.png",
    linkedin: "#",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "/team/2.png",
    linkedin: "#",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "/team/3.png",
    linkedin: "#",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "/team/4.png",
    linkedin: "#",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "/team/5.png",
    linkedin: "#",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "/team/6.png",
    linkedin: "#",
  },
];

export default function TeamGrid({ members = DEFAULT_MEMBERS, accent = "#B8FF5B", className = "" }: TeamGridProps) {
  return (
    <section className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`} aria-label="Our Team">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {members.map((m, i) => (
          <li key={i}>
            <TeamCard member={m} accent={accent} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function TeamCard({ member, accent }: { member: TeamMember; accent: string }) {
  return (
    <article className="relative flex h-full flex-col rounded-[28px] border-2 border-black/80 bg-white p-6 sm:p-7 md:p-8 shadow-[0_4px_0_0_rgba(0,0,0,0.85)]">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${member.name} on LinkedIn`}
          className="absolute right-5 top-5 inline-flex size-8 items-center justify-center rounded-full bg-black text-[13px] font-semibold text-[#B8FF5B]"
        >
          in
        </a>
      )}

      <div className="flex items-center gap-4 sm:gap-5">
        <DecorativeAvatar photo={member.photo} accent={accent} />
        <div>
          <h3 className="font-space text-[clamp(16px,3.4vw,18px)] font-semibold leading-none text-black">{member.name}</h3>
          <p className="font-space text-[clamp(12px,3vw,14px)] text-black/70">{member.role}</p>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-black/25" />

      <p className="mt-4 text-[18px] leading-5 text-black/80">{member.bio}</p>
    </article>
  );
}


function DecorativeAvatar({ photo, accent }: { photo: string; accent: string }) {
  return (
    <div className="relative isolate">

      <svg
        aria-hidden
        width="84"
        height="84"
        viewBox="0 0 84 84"
        className="absolute -left-1.5 top-1.5 rotate-45"
      >
        <g fill="black" opacity="0.9">
          <circle cx="42" cy="14" r="14" />
          <circle cx="70" cy="42" r="14" />
          <circle cx="14" cy="42" r="14" />
          <circle cx="42" cy="70" r="14" />
        </g>
      </svg>

      <svg
        aria-hidden
        width="84"
        height="84"
        viewBox="0 0 84 84"
        className="relative rotate-45"
      >
        <g fill={accent}>
          <circle cx="42" cy="14" r="14" />
          <circle cx="70" cy="42" r="14" />
          <circle cx="14" cy="42" r="14" />
          <circle cx="42" cy="70" r="14" />
        </g>
      </svg>

      <img
        src={photo}
        alt=""
        className="absolute left-1/2 top-1/2 h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
      />
    </div>
  );
}
