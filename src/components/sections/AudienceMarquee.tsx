'use client';

const items = [
  'Wedding Studios',
  'Commercial Production',
  'Solo Videographers',
  'Photo Studios',
  'Event Filmmakers',
  'Real Estate Media',
  'Music Video Teams',
  'Corporate Video',
  'Freelance Editors',
  'Content Agencies',
  'Portrait Photographers',
  'Documentary Crews',
  'Post-Production Studios',
  'Fashion Photographers',
  'Podcast Video Teams',
  'Branded Content Teams',
];

const AudienceMarquee = () => {
  const row = items.map((item) => (
    <span
      key={item}
      className="mx-5 inline-flex shrink-0 items-center gap-2 text-base font-medium text-muted-foreground md:mx-7 md:text-lg"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber/60" aria-hidden />
      {item}
    </span>
  ));

  return (
    <section className="relative bg-background">
      <div className="pt-10 pb-3 md:pt-14 md:pb-4">
        <p className="text-center font-heading text-2xl italic text-amber md:text-3xl">
          A platform for
        </p>
      </div>
      <div className="relative overflow-hidden border-y border-border/30 bg-surface py-5">
        <div className="marquee-mask relative flex">
          <div className="animate-marquee flex shrink-0" style={{ animationDuration: '40s' }}>
            {row}
            {row}
          </div>
          <div className="animate-marquee flex shrink-0" style={{ animationDuration: '40s' }} aria-hidden>
            {row}
            {row}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceMarquee;
