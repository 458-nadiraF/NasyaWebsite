'use client';

import dynamic from 'next/dynamic';

// Dynamically import the HerbOilWebsite component with no SSR
const HerbOilWebsite = dynamic(
  () => import('./components/HerbOilWebsite.js').then(mod => mod.default),
  { ssr: false }
);

export default function Home() {
  return <HerbOilWebsite />;
}
