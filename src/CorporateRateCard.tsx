import RateCardHeader from "@/components/RateCardHeader";
import RateCardHero from "@/components/RateCardHero";
import RateCardFooter from "@/components/RateCardFooter";
import SectionHeading from "@/components/SectionHeading";
import RateCardTable from "@/components/RateCardTable";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 border-b border-zinc-200 ${className}`}>
    <div className="max-w-[1100px] mx-auto px-6">{children}</div>
  </section>
);

const KeyStat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300 hover:-translate-y-1">
    <p className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-3 tracking-tight">{value}</p>
    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-50/50">
      <RateCardHeader />
      <RateCardHero />

      {/* KEY STATS */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KeyStat value="KES 50M+" label="Minimum Assets" />
          <KeyStat value="3 Tiers" label="Service Levels" />
          <KeyStat value="5-Step" label="Onboarding Process" />
          <KeyStat value="2026" label="Effective Year" />
        </div>
      </Section>

      {/* OUR APPROACH */}
      <Section className="bg-white">
        <SectionHeading label="Overview" title="Our Approach" />
        <p className="leading-relaxed text-lg max-w-[800px] text-zinc-600">
          Independent, research-driven advisory across asset allocation, risk management,
          treasury optimisation, and governance — built on transparency and long-term value creation.
        </p>
      </Section>

      {/* SECTION 1 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 1" title="Client Segments" />
        <RateCardTable
          headers={["", "Large Corporate", "Institutional"]}
          rows={[
            ["Profile", "Listed/private company with treasury or pension fund", "NGO endowment, SACCO, or family office"],
            ["Min. Assets", "KES 50M+", "KES 50M+"],
            ["Primary Needs", "Treasury management, surplus investment", "Capital preservation, mandate compliance"],
            ["Governance", "Board reporting, audit-ready docs", "Donor/trustee reporting, fiduciary oversight"],
            ["Onboarding Fee", "KES 75K – 150K", "KES 75K – 150K"],
          ]}
        />
      </Section>

      {/* SECTION 2 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 2" title="Advisory Retainer Fees" />
        <RateCardTable
          headers={["Tier / AUM Band", "Quarterly (KES)", "Semi-Annual (KES)", "Annual (KES)"]}
          rows={[
            ["Foundation\nKES 50M–200M", "300K–500K", "580K–950K", "1.1M–1.8M"],
            ["Established\nKES 200M–1B", "500K–900K", "950K–1.7M", "1.8M–3.2M"],
            ["Premier\nKES 1B+", "Negotiated", "Negotiated", "3.5M+ (Bespoke)"],
          ]}
        />
        <p className="mt-5 text-sm text-zinc-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Final fees confirmed in Engagement Letter following a complimentary scoping session. Annual retainers offer best value.
        </p>
      </Section>

      {/* SECTION 3 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 3" title="Scope of Services" />
        <RateCardTable
          headers={["Service", "Foundation & Established", "Premier"]}
          rows={[
            ["IPS Development", "✔ Annual review", "✔ Annual review"],
            ["Asset Allocation & Portfolio", "✔", "✔"],
            ["Manager Selection & Due Diligence", "✔", "✔ Enhanced"],
            ["Performance Reporting", "Quarterly", "Quarterly"],
            ["Committee Presentations", "Bi-annual", "Quarterly"],
            ["Treasury Advisory", "✔", "✔"],
            ["Risk & Stress Testing", "Annual", "Quarterly"],
            ["Pension Scheme Advisory", "✔", "✔ Dedicated specialist"],
            ["ESG / Impact Integration", "On request", "✔"],
            ["Bespoke Research", "—", "✔ Monthly"],
            ["Board Financial Education", "On request", "✔ Annual workshop"],
          ]}
        />
      </Section>

      {/* SECTION 4 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 4" title="Performance Fees" />
        <RateCardTable
          headers={["Tier", "Fee", "Benchmark", "Rules"]}
          rows={[
            ["Foundation", "5–8% of excess", "91-day T-bill + 1.5%", "Annual; high-water mark"],
            ["Established", "8–12% of excess", "Agreed composite", "Semi-annual/annual; audited"],
            ["Premier", "Negotiated", "Custom (per IPS)", "Bespoke; board-approved"],
          ]}
        />
        <div className="mt-8 p-6 bg-zinc-100 rounded-xl border border-zinc-200">
          <p className="font-mono text-sm text-zinc-800 font-medium">
            Fee = Rate × (Portfolio Return − Benchmark) × Avg Portfolio Value
          </p>
        </div>
      </Section>

      {/* SECTION 5 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 5" title="Commission Disclosure" />
        <RateCardTable
          headers={["Product Category", "Commission", "Policy"]}
          rows={[
            ["Unit Trusts / CIS", "0.25%–1.00% trail", "Disclosed; offset against retainer"],
            ["Insurance-linked", "2.5%–5.0% initial", "Disclosed; fee-only option available"],
            ["Fixed Income / Bonds", "0.1%–0.5%", "Per-transaction disclosure"],
            ["Offshore / Global Funds", "0.15%–0.75% trail", "Annual disclosure; offset available"],
            ["Structured Products", "1.0%–3.0%", "Committee-approved; term sheet"],
          ]}
        />
        <p className="mt-5 text-sm text-zinc-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Annual Commission Statement issued in Q1 for full transparency.
        </p>
      </Section>

      {/* SECTION 6 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 6" title="Specialist Services" />
        <RateCardTable
          headers={["Service", "Fee (KES)", "Notes"]}
          rows={[
            ["IPS — Full Draft", "250K–500K", "Interviews, risk profiling, board presentation"],
            ["Pension Scheme Review", "300K–600K", "Compliance check + optimisation"],
            ["Treasury Optimisation", "200K–400K", "Cash flow & placement strategy"],
            ["Manager Search (RFP)", "350K–700K", "End-to-end selection process"],
            ["Governance Audit", "250K–500K", "Gap analysis & remediation roadmap"],
            ["Board Training Workshop", "150K–300K/session", "Half or full-day, tailored"],
            ["ESG Assessment & Strategy", "300K–600K", "Framework, screening, reporting"],
            ["Ad Hoc Consultation", "25K–50K/hour", "Min 2-hour blocks"],
          ]}
        />
      </Section>

      {/* SECTION 7 */}
      <Section className="print-page-break bg-zinc-50/30">
        <SectionHeading label="Section 7" title="Engagement Process" />
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Main vertical line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#21293a] via-[#b6975a] to-transparent" />

          <div className="space-y-12">
            {[
              { step: 1, title: "Initial Enquiry & Scoping", desc: "Complimentary discovery session to understand your unique institutional requirements and constraints." },
              { step: 2, title: "Proposal & Fee Confirmation", desc: "We provide a tailored, transparent proposal outlining scope and confirmed fees within 5 business days." },
              { step: 3, title: "Engagement Letter & Onboarding", desc: "Formal sign-off, comprehensive portfolio diagnostics, and dedicated advisory team assignment." },
              { step: 4, title: "Active Advisory & Reporting", desc: "Execution of the IPS including ongoing manager reviews, risk monitoring, and quarterly board reporting." },
              { step: 5, title: "Annual Strategy Review", desc: "In-depth performance review, IPS re-evaluation, and formal engagement renewal." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative flex gap-6 md:gap-10 items-start group">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#21293a] text-[#21293a] flex items-center justify-center text-lg md:text-xl font-bold shrink-0 shadow-md transition-all duration-300 group-hover:bg-[#21293a] group-hover:text-white group-hover:scale-110">
                    {step}
                  </div>
                </div>
                <div className="pt-2 md:pt-4 pb-2 flex-1">
                  <h3 className="font-bold text-xl md:text-2xl text-zinc-900 mb-2 group-hover:text-[#b6975a] transition-colors">{title}</h3>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 8 */}
      <Section className="print-page-break">
        <SectionHeading label="Section 8" title="Payment Terms" />
        <RateCardTable
          headers={["Term", "Detail"]}
          rows={[
            ["Retainer Fees", "Invoiced in advance per billing cycle"],
            ["Performance Fees", "Assessed annually, independently verified"],
            ["Project Fees", "50% on engagement; 50% on delivery"],
            ["Onboarding Fee", "Due within 14 days of signing"],
            ["Late Payment", "1.5%/month on overdue invoices (30+ days)"],
            ["Payment Methods", "Bank transfer (KES/USD), M-Pesa, cheque"],
            ["VAT", "All fees exclusive of VAT at 16%"],
          ]}
        />
        <div className="mt-8 text-sm text-zinc-500 space-y-2">
          <p>Effective January 2026. Fees subject to review with 60 days' notice.</p>
          <p className="italic text-xs text-zinc-400">
            Confidential — not to be reproduced without written consent of Nova Wealth LLP.
          </p>
        </div>
      </Section>

      <RateCardFooter />
    </div>
  );
};

export default Index;
