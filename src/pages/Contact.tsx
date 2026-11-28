import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare, HelpCircle, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo";
import { personalInfo, contactInfo, socialLinks } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { useToast } from "@/hooks/use-toast";
import { useContactSubmit, type ContactPayload } from "@/hooks/useContactSubmit";

const emptyForm: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const FAQS = [
  {
    q: "What types of opportunities are you open to?",
    a: "I'm open to full-time Software Engineering roles, contract architecture engagements, and collaborative projects building innovative AI/web platforms.",
  },
  {
    q: "What is your primary tech stack?",
    a: "My core stack centers on TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, and AWS.",
  },
  {
    q: "Where are you located and can you work remotely?",
    a: "I'm based in New Delhi, India and have extensive experience working asynchronously and effectively across global remote teams.",
  },
  {
    q: "How soon do you typically respond?",
    a: "I usually respond within 24 hours on weekdays. For urgent inquiries, feel free to reach out directly via email or LinkedIn.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { submit, isSubmitting } = useContactSubmit();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<ContactPayload>(emptyForm);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: `${personalInfo.email} copied to clipboard.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await submit(form);
    if (ok) {
      setForm(emptyForm);
      toast({
        title: "Message sent!",
        description: "Thank you for getting in touch. I will get back to you shortly.",
      });
    }
  };

  return (
    <>
      <Seo
        title="Contact Prince Kumar Sahni | Hire Software Engineer"
        description="Get in touch with Prince Kumar Sahni for software engineering roles, backend consulting, distributed system architecture, or technical partnerships."
        url="https://princesahni.com/contact"
        image="https://princesahni.com/og-images/princesahni-logo.png"
        keywords={[
          "Contact Prince Kumar Sahni",
          "Hire Prince Sahni",
          "Hire Software Engineer New Delhi",
          "Software Engineering Consultation",
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <div className="py-16 md:py-24">
        <div className="container-page">
          {/* Page Header */}
          <SectionHeader
            eyebrow="Contacts &amp; Collaboration"
            title="Let's discuss your next"
            highlight="project or opportunity"
            subtitle="Whether you're looking to hire an engineer, build a digital product, or discuss technical architecture."
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] items-start">
            {/* Left Column: Direct Info & FAQs */}
            <div className="space-y-6">
              <Reveal>
                {/* Direct Email Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Direct Email
                        </p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="font-display text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* Phone & Location */}
              <Reveal delay={0.06}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Phone
                        </p>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Location
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Social Channels */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    Connect on Social &amp; Networks
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-3.5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card hover:text-primary"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* FAQs Card */}
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    <h4 className="font-display text-base font-bold text-foreground">
                      Frequently Asked Questions
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {FAQS.map((faq) => (
                      <div key={faq.q} className="border-t border-border pt-3 first:border-none first:pt-0">
                        <p className="text-xs font-bold text-foreground">
                          {faq.q}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Clean Form */}
            <div>
              <Reveal delay={0.1}>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Send a Direct Message
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="page-contact-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          id="page-contact-name"
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="page-contact-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                        >
                          Your Email
                        </label>
                        <input
                          id="page-contact-email"
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="page-contact-subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="page-contact-subject"
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Opportunity"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="page-contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="page-contact-message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your product requirements, team goals, or project scope..."
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center rounded-xl py-3 text-sm font-semibold shadow-md shadow-primary/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
