import { WHY_ANSUNI_PILLARS } from '../../data/editorial';
import { HairlineRule, Reveal } from '../ui/Reveal';

/**
 * Section 8: Why ANSUNI?
 *
 * Four central editorial pillars presented with architectural restraint,
 * hairline divisions, and subtle hover illumination.
 */
export function WhyAnsuniSection() {
  return (
    <section
      id="why-ansuni"
      aria-labelledby="why-ansuni-heading"
      className="relative bg-midnight py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <HairlineRule />

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-20 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-taupe">
                02 / Why ANSUNI?
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="why-ansuni-heading"
                className="mt-5 max-w-2xl font-editorial text-4xl font-light leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-6xl"
              >
                Built for depth, not noise.{' '}
                <span className="italic text-cream">Driven by curiosity.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="max-w-sm">
            <p className="text-sm font-light leading-relaxed text-taupe">
              Every conversation on ANSUNI begins with four simple convictions — why we listen, who
              we invite, and what stays with us after the microphones turn off.
            </p>
          </Reveal>
        </div>

        {/* Architectural 4-Pillar Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 border-l border-t border-ivory/15 md:grid-cols-2 lg:mt-20">
          {WHY_ANSUNI_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.number} delay={0.08 * idx} className="flex">
              <article className="group relative flex w-full flex-col justify-between border-b border-r border-ivory/15 bg-midnight p-8 transition-colors duration-500 ease-cinema hover:bg-charcoal sm:p-12 lg:p-14">
                {/* Subtle Warm Ivory top highlight line on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ivory/60 transition-transform duration-700 ease-cinema group-hover:scale-x-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-editorial text-taupe transition-colors duration-300 group-hover:text-ivory">
                      {pillar.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-ivory/20 transition-colors duration-500 group-hover:bg-ivory" />
                  </div>

                  <h3 className="mt-10 font-editorial text-3xl font-light leading-snug text-ivory transition-transform duration-500 ease-cinema group-hover:translate-x-1.5 sm:text-4xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-md text-base font-light leading-relaxed text-ivory/75">
                    {pillar.description}
                  </p>
                </div>

                <p className="mt-12 border-t border-ivory/10 pt-5 font-editorial text-sm italic text-taupe transition-colors duration-300 group-hover:text-ivory/80">
                  {pillar.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
