import { getTrekBySlug, getAllTreks } from '@/lib/supabase/treks';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const revalidate = 3600;

interface TrekPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const treks = await getAllTreks();
  return treks.map((trek) => ({
    slug: trek.slug,
  }));
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const trek = await getTrekBySlug(params.slug);

  if (!trek) {
    return {
      title: 'Trek Not Found | Himkala Adventure',
    };
  }

  return {
    title: `${trek.name} — ${trek.region} Trek, Nepal | Himkala Adventure`,
    description: `${trek.name} trek in Nepal, starting from $${trek.price} for ${trek.days} days. Guided by certified local guides.`,
  };
}

export default async function TrekPage({ params }: TrekPageProps) {
  const trek = await getTrekBySlug(params.slug);

  if (!trek) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - matches your Manaslu page */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>{trek.region} Region</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  {trek.name}
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">{trek.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    {trek.difficulty}
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    {trek.max_altitude}m
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    {trek.days} Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image - matches your Manaslu page */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src={`/images/treks/${trek.image}`}
              alt={trek.name}
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                ${trek.price} / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - matches your Manaslu page */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: `${trek.days} Days / ${trek.days - 1} Nights` },
              { label: "Group Size", value: `2-${trek.max_group_size} people` },
              { label: "Max Altitude", value: `${trek.max_altitude}m` },
              { label: "Difficulty", value: trek.difficulty },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Overview - matches your Manaslu page */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">{trek.description}</p>
            </article>
          </div>
        </section>

        {/* Itinerary - matches your Manaslu page */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Day-by-Day Itinerary</h2>
            <div className="space-y-2">
              {trek.itinerary.map((day, index) => (
                <div key={index} className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#cf6943]/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                      <span className="text-[8px] font-bold text-[#cf6943] uppercase">Day</span>
                      <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-[#14383b] text-sm sm:text-base block">{day}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Includes & Excludes - matches your Manaslu page */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span> Cost Includes
                </h3>
                <ul className="space-y-1.5">
                  {trek.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <span className="text-green-600 text-sm shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <span className="text-red-500 text-lg">✗</span> Cost Excludes
                </h3>
                <ul className="space-y-1.5">
                  {trek.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <span className="text-red-500 text-sm shrink-0 mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - matches your Manaslu page */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Trek {trek.name}?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your {trek.name} today and experience one of Nepal's most spectacular treks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(trek.name)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  Book This Trek
                </Button>
              </Link>
              <a 
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trek.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2 text-sm">
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}