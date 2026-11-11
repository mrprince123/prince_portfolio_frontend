import { Seo } from "@/components/seo";
import { allCertificates } from "@/data/portfolioData";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Calendar } from "lucide-react";

export const Certificates = () => {
  return (
    <>
      <Seo
        title="Certificates & Accreditations | Prince Kumar Sahni"
        description="Verified certifications in AWS Cloud, Google Cloud, Meta Frontend, Algorithms, and Computer Science held by Prince Kumar Sahni."
        url="https://princesahni.com/certificates"
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 mb-2">
              <Award className="h-3.5 w-3.5 text-purple-400" />
              <span>OFFICIAL CREDENTIALS & BADGES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Certificates & <span className="text-purple-gradient">Accreditations</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-xl">
              Industry certifications, algorithmic honors, and academic credentials validating production engineering standards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 font-mono text-xs text-purple-300">
            <ShieldCheck className="h-4 w-4 text-purple-400" />
            <span>100% Verified Credentials</span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {allCertificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl border border-purple-500/20 bg-card/80 p-6 backdrop-blur-xl hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-purple-400 font-semibold">
                      {cert.category} Certification
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-purple-300 transition-colors mt-0.5">
                      {cert.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>

                  <span className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 font-mono text-[11px] text-purple-300 shrink-0 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {cert.date}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-black/30 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300 group-hover:border-purple-500/30 group-hover:text-purple-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID & Verify Link */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">ID: {cert.credentialId}</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Verify</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
