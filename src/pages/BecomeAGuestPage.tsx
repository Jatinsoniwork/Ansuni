import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BECOME_A_GUEST_CONTENT, EDITORIAL_IMAGES } from '../data/editorial';
import { SOCIAL_LINKS } from '../config/links';
import { AttendEpisodeButton } from '../components/ui/AttendEpisodeButton';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { HairlineRule, Reveal } from '../components/ui/Reveal';

/**
 * Section 10: Dedicated Become a Guest Page
 *
 * Main Headline: "Have a story worth sharing?"
 * Supporting Line: "We'd love to hear it."
 * CTA: "BECOME A GUEST" -> Official WhatsApp link (https://wa.me/qr/JKHHNYIWM2XBM1)
 */
export function BecomeAGuestPage() {
  useEffect(() => {
    document.title = 'Become a Guest — ANSUNI';
  }, []);

  return (
    <div className="bg-midnight pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Editorial Hero Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                {BECOME_A_GUEST_CONTENT.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-editorial text-5xl font-light leading-[1.06] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                {BECOME_A_GUEST_CONTENT.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 font-editorial text-3xl font-light italic text-cream sm:text-4xl lg:text-5xl">
                {BECOME_A_GUEST_CONTENT.supportingLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.22} className="lg:col-span-4 lg:pb-2">
            <p className="font-mono text-[11px] uppercase tracking-editorial text-taupe">
              Direct Invitation
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-ivory/75">
              Conversations happen in English, Hindi, or natural Hinglish — wherever your voice
              feels most truthful.
            </p>
          </Reveal>
        </div>

        {/* Editorial Cinema Still */}
        <Reveal delay={0.22} className="mt-14 lg:mt-20">
          <div className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden border border-ivory/15 bg-charcoal">
            <img
              src={EDITORIAL_IMAGES.guestConversation.src}
              alt={EDITORIAL_IMAGES.guestConversation.alt}
              className="h-full w-full object-cover saturate-[0.35] contrast-[1.05]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/25"
            />
          </div>
        </Reveal>

        {/* Core Message & WhatsApp CTA */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg font-light leading-[1.85] text-ivory/80 sm:text-xl">
              {BECOME_A_GUEST_CONTENT.paragraphs.map((paragraph, idx) => (
                <Reveal key={idx} delay={0.08 * idx}>
                  <p className={idx === 0 ? 'font-editorial text-3xl italic text-cream sm:text-4xl' : ''}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.24} className="mt-12">
              <a
                href={SOCIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border border-ivory bg-ivory px-9 py-4 text-xs font-medium uppercase tracking-editorial text-midnight transition-all duration-500 ease-cinema hover:bg-cream"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{BECOME_A_GUEST_CONTENT.ctaLabel}</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <p className="mt-4 font-mono text-[11px] tracking-wider text-taupe">
                Opens ANSUNI’s official WhatsApp conversation directly.
              </p>
            </Reveal>
          </div>

          {/* Reassurance Notes */}
          <div className="space-y-6 border-t border-ivory/15 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {BECOME_A_GUEST_CONTENT.reassuranceNotes.map((item, idx) => (
              <Reveal key={item.label} delay={0.1 * idx}>
                <div className="border-b border-ivory/10 pb-6 last:border-b-0 last:pb-0">
                  <p className="font-mono text-[11px] uppercase tracking-editorial text-ivory/90">
                    {item.label}
                  </p>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-taupe">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Secondary Invitation: Attend an Episode */}
        <div className="mt-24 lg:mt-28">
          <HairlineRule />
          <Reveal delay={0.1} className="mt-14 flex flex-col justify-between gap-8 border border-ivory/15 bg-charcoal/45 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                Rather Listen In Person?
              </p>
              <h2 className="mt-3 font-editorial text-3xl font-light text-ivory sm:text-4xl">
                Attend a live <span className="italic text-cream">ANSUNI recording</span>
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-taupe">
                Join the room as a quiet listener when we open studio seats for upcoming Season 01
                sessions.
              </p>
            </div>
            <div className="shrink-0">
              <AttendEpisodeButton variant="outline" label="Attend an Episode" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
