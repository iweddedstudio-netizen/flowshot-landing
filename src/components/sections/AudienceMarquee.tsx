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
];

const AudienceMarquee = () => {
  const row = items.map((item) => (
    <span
      key={item}
      className="mx-4 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground md:mx-6 md:text-base"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber/60" aria-hidden />
      {item}
    </span>
  ));

  return (
    <section className="relative overflow-hidden border-y border-border/30 bg-surface py-4">
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
    </section>
  );
};

export default AudienceMarquee;
