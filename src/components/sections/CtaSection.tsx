import { useState } from "react";
import { personalInfo, contactInfo } from "@/data/portfolioData";
import { Mail, Phone, Send, Copy, Check, MessageSquare, Sparkles, ArrowRight, Github, Linkedin, Twitter, Instagram, BookText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const apiUrl = import.meta.env.VITE_CONTACT_URL || "/api/contacts";

export const CtaSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast({
      title: "Email copied to clipboard!",
      description: personalInfo.email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(apiUrl, formData);
      toast({
        title: "Message transmitted successfully!",
        description: "Thank you for reaching out. Prince will reply in < 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
    } catch {
      toast({
        title: "Transmission failed",
        description: "Could not send message. Please email directly at " + personalInfo.email,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-card via-card to-purple-950/25 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Action & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Let's build something <span className="text-purple-gradient">that ships</span>.
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you need high-throughput microservices, scalable cloud architectures, or a high-velocity full-stack engineer — I'm ready to contribute immediately.
            </p>

            {/* 1-Click Copy Email Pill */}
            <div className="rounded-2xl border border-purple-500/20 bg-black/40 p-4">
              <span className="font-mono text-[11px] text-muted-foreground block mb-2">Direct transmission:</span>
              <div className="flex items-center justify-between gap-3 bg-black/50 border border-white/5 rounded-xl p-2.5">
                <div className="flex items-center gap-2 overflow-hidden font-mono text-xs text-purple-300">
                  <Mail className="h-4 w-4 shrink-0 text-purple-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 rounded-lg bg-purple-600/30 px-3 py-1 font-mono text-xs text-purple-200 hover:bg-purple-600/50 transition-colors shrink-0"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Quick stats / guarantees */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-border bg-black/30 p-3">
                <span className="text-purple-400 font-bold">&lt; 24h</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">Average response turnaround</p>
              </div>
              <div className="rounded-xl border border-border bg-black/30 p-3">
                <span className="text-purple-400 font-bold">Remote / Hybrid</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">Open to global roles</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="font-mono text-[11px] text-muted-foreground block mb-3">Online handles:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GitHub", href: personalInfo.github, icon: Github },
                  { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
                  { name: "Twitter", href: personalInfo.twitter, icon: Twitter },
                  { name: "Medium", href: personalInfo.medium, icon: BookText },
                  { name: "Instagram", href: personalInfo.instagram, icon: Instagram },
                ].map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-black/30 text-muted-foreground hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all"
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-purple-500/20 bg-card/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <h3 className="font-display text-xl font-bold text-foreground mb-1 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-400" />
              Send a Message
            </h3>
            <p className="font-mono text-xs text-muted-foreground mb-6">
              Fill in your details below and your transmission will be dispatched immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-zinc-400 mb-1.5 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-black/40 px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-zinc-400 mb-1.5 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-border bg-black/40 px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-zinc-400 mb-1.5 block">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full rounded-xl border border-border bg-black/40 px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-zinc-400 mb-1.5 block">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration"
                    className="w-full rounded-xl border border-border bg-black/40 px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-zinc-400 mb-1.5 block">Message / Scope *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project architecture, or timeline..."
                  className="w-full rounded-xl border border-border bg-black/40 px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-mono text-xs font-semibold text-white shadow-lg shadow-purple-600/25 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-[1.01] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : isSent ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <Check className="h-4 w-4" /> Message Delivered!
                  </span>
                ) : (
                  <>
                    <span>Send Transmission</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
