import { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { WhyAnsuniSection } from '../components/sections/WhyAnsuniSection';
import { SeasonOneSection } from '../components/sections/SeasonOneSection';
import { ParticipateSection } from '../components/sections/ParticipateSection';

interface HomePageProps {
  introDone: boolean;
}

export function HomePage({ introDone }: HomePageProps) {
  useEffect(() => {
    document.title = 'ANSUNI — Because every story deserves a voice.';
  }, []);

  return (
    <>
      <HeroSection ready={introDone} />
      <AboutSection />
      <WhyAnsuniSection />
      <SeasonOneSection sectionNumber="03" />
      <ParticipateSection />
    </>
  );
}
