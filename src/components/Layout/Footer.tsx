import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, BookText, Twitter, ArrowUp, Activity } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import princelogo from "@/assets/princesahni-logo.png";

const socials = [
  { name: "GitHub", icon: Github, href: personalInfo.github },
  { name: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin },
  { name: "Instagram", icon: Instagram, href: personalInfo.instagram },
  { name: "Medium", icon: BookText, href: personalInfo.medium },
  { name: "Twitter", icon: Twitter, href: personalInfo.twitter },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#4361ee]/20 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 py-14 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={princelogo}
                alt={personalInfo.name}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-[#4361ee]/40"
              />
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Prince Sahni<span className="text-primary font-black">.</span>
              </span>
            </Link>

            <p className="font-mono text-xs text-[#4895ef]">
              Software Engineer @ Webkul · Scalable Microservices & Cloud Systems
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-sm">
              Engineering high-concurrency backend services, modern frontends, and cloud infrastructures that power 100k+ users.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-[11px] text-[#4895ef]">
              <Activity className="h-3 w-3 text-emerald-400" />
              <span>All systems operational · New Delhi, IN</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4895ef]">
              Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-[#4895ef] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-[#4895ef] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4895ef]">
              Network & Transmissions
            </h4>
            <p className="font-mono text-xs text-muted-foreground">
              Follow code releases, system architectures, and technical writeups.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:border-[#4361ee]/50 hover:bg-[#4361ee]/15 hover:text-[#4361ee] dark:hover:text-[#4895ef] transition-all shadow-2xs"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-xs text-[#4895ef] hover:text-[#4895ef] underline underline-offset-2"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prince Kumar Sahni — Engineered with clean code &amp; craft.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-muted-foreground hover:border-[#4361ee]/40 hover:text-[#4361ee] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
