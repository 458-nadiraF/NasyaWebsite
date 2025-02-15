export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <HerbOilWebsite />
    </main>
  );
}
