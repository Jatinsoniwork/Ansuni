import { useEffect } from 'react';
import { SeasonOneSection } from '../components/sections/SeasonOneSection';
import { ParticipateSection } from '../components/sections/ParticipateSection';

export function SeasonOnePage() {
  useEffect(() => {
    document.title = 'Season 01 — ANSUNI';
  }, []);

  return (
    <>
      <SeasonOneSection standalone />
      <ParticipateSection />
    </>
  );
}
