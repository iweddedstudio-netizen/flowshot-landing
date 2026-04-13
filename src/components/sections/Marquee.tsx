'use client';

const categories = [
  'wedding films',
  'commercial shoots',
  'music videos',
  'fashion editorials',
  'documentary',
  'brand stories',
  'event coverage',
];

const Marquee = () => {
  // Duplicate once so the -50% translate loops seamlessly
  const items = [...categories, ...categories];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-amber/10 bg-background py-6 lg:py-8"
    >
      <div className="marquee-mask relative">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 pr-8 font-heading italic font-light text-foreground/80"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                lineHeight: 1,
              }}
            >
              {item}
              <span className="text-amber" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
