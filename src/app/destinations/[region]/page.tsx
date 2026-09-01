import { getTreksByRegion, getAllRegions } from '@/lib/supabase/treks';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600;

interface RegionPageProps {
  params: {
    region: string;
  };
}

export async function generateStaticParams() {
  const regions = await getAllRegions();
  return regions.map((region) => ({
    region: region.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const regionName = params.region.charAt(0).toUpperCase() + params.region.slice(1);

  return {
    title: `${regionName} Trekking — Complete Guide to Nepal's ${regionName} | Himkala Adventure`,
    description: `Complete guide to trekking in ${regionName}, Nepal. Best treks, seasons, permits, and tips for ${regionName}.`,
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const regionName = params.region.charAt(0).toUpperCase() + params.region.slice(1);
  const treks = await getTreksByRegion(regionName);

  if (treks.length === 0) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4]">
      <main className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#14383b] text-center mb-4">
            Trekking in {regionName}
          </h1>
          <p className="text-center text-[#66706d] text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Discover the best treks in the {regionName} region of Nepal. Find detailed information about each trek, including difficulty, duration, and cost.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {treks.map((trek) => (
              <Link
                key={trek.id}
                href={`/services/trekking/${trek.slug}`}
                className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-[#14383b] text-lg">{trek.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2 text-sm text-[#556363]">
                  <span>{trek.days} days</span>
                  <span>•</span>
                  <span>${trek.price}</span>
                  <span>•</span>
                  <span>{trek.max_altitude}m</span>
                  <span>•</span>
                  <span className="text-[#cf6943] font-medium">{trek.difficulty}</span>
                </div>
                <p className="text-sm text-[#66706d] mt-2 line-clamp-2">{trek.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services/trekking">
              <button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                View All Treks
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}