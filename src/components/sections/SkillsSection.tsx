import { useMemo } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Globe,
  Cpu,
  Bot,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import { skillCategories as fallbackCategories, learningTech } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { useResource } from "@/hooks/useResource";

interface RawSkill {
  name: string;
  icon?: string;
  color?: string;
}

interface RawCategory {
  _id?: string;
  name: string;
  description?: string;
  skills?: RawSkill[];
  skillsList?: RawSkill[];
}

const CATEGORY_ICONS: Record<string, any> = {
  "Programming Languages": Code2,
  "Frameworks & Platforms": Layers,
  "APIs & Integrations": Globe,
  "Databases & In-Memory": Database,
  "Message Brokers & Queues": Cpu,
  "AI & Automation": Bot,
  "PIM & E-Commerce Platforms": ShoppingBag,
  "Cloud, DevOps & Tools": Cloud,
  "Payment Gateways": CreditCard,
  "Backend Technologies": Server,
  "Frontend Technologies": Layers,
  "Databases": Database,
};

export const SkillsSection = () => {
  const { data: rawApiData } = useResource<RawCategory[]>(
    ["skills", "home"],
    import.meta.env.VITE_SKILL_URL,
    { fallback: undefined, timeoutMs: 2500 }
  );

  const categories = useMemo(() => {
    if (Array.isArray(rawApiData) && rawApiData.length > 0) {
      return rawApiData.map((cat) => ({
        name: cat.name,
        description: cat.description || "",
        skills: (cat.skills || cat.skillsList || []).map((s) => ({
          name: s.name,
          icon: s.icon || "",
          color: s.color || "#0d9488",
        })),
      }));
    }
    return fallbackCategories;
  }, [rawApiData]);

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills &amp; Technologies"
          title="Tools, languages &amp;"
          highlight="architecture defaults"
          subtitle="Battle-tested technologies and modern frameworks I use to ship fast, reliable, and maintainable software."
        />

        {/* Categories Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.name] || Code2;

            return (
              <Reveal key={category.name} delay={index * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2.5 border-b border-border pb-4 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card"
                        >
                          {skill.icon && skill.icon.startsWith("http") ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="h-4 w-4 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span
                              className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
                              style={{ backgroundColor: skill.color || "hsl(var(--primary))" }}
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Currently Exploring Strip */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Currently Exploring &amp; Leveling Up
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {learningTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/80 bg-secondary/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
