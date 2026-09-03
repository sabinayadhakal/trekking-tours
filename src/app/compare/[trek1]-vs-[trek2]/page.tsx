import { getAllTreks, getTrekBySlug } from '@/lib/static-content';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const revalidate = 3600;

interface ComparePageProps {
  params: {
    'trek1-vs-trek2': string;
  };
}

export async function generateStaticParams() {
  const treks = await getAllTreks();
  const comparisons: { 'trek1-vs-trek2': string }[] = [];

  for (let i = 0; i < treks.length; i++) {
    for (let j = i + 1; j < treks.length; j++) {
      comparisons.push({
        'trek1-vs-trek2': `${treks[i].slug}-vs-${treks[j].slug}`,
      });
    }
  }

  return comparisons;
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const [slug1, slug2] = params['trek1-vs-trek2'].split('-vs-');
  const [trek1, trek2] = await Promise.all([
    getTrekBySlug(slug1),
    getTrekBySlug(slug2),
  ]);

  if (!trek1 || !trek2) {
    return {
      title: 'Comparison Not Found | Himkala Adventure',
    };
  }

  return {
    title: `${trek1.name} vs ${trek2.name}: Which Trek is Right for You?`,
    description: `Compare ${trek1.name} and ${trek2.name} treks in Nepal. Side-by-side comparison of price, days, altitude, and difficulty.`,
  };
}

export default async function ComparePage({ params }: ComparePageProps) {
  const [slug1, slug2] = params['trek1-vs-trek2'].split('-vs-');
  const [trek1, trek2] = await Promise.all([
    getTrekBySlug(slug1),
    getTrekBySlug(slug2),
  ]);

  if (!trek1 || !trek2) {
    notFound();
  }

  const comparisonData = [
    { label: 'Duration', trek1: `${trek1.days} days`, trek2: `${trek2.days} days` },
    { label: 'Price', trek1: `$${trek1.price}`, trek2: `$${trek2.price}` },
    { label: 'Max Altitude', trek1: `${trek1.max_altitude}m`, trek2: `${trek2.max_altitude}m` },
    { label: 'Difficulty', trek1: trek1.difficulty, trek2: trek2.difficulty },
    { label: 'Region', trek1: trek1.region, trek2: trek2.region },
    { label: 'Max Group Size', trek1: `${trek1.max_group_size}`, trek2: `${trek2.max_group_size}` },
    { label: 'Rating', trek1: `⭐ ${trek1.rating} (${trek1.review_count})`, trek2: `⭐ ${trek2.rating} (${trek2.review_count})` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4]">
      <main className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#14383b] text-center mb-4">
            {trek1.name} vs {trek2.name}
          </h1>
          <p className="text-center text-[#66706d] text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Which trek is right for you? Compare these two incredible Himalayan adventures side-by-side.
          </p>

          {/* Comparison Table */}
          <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#14383b] text-[#f7f2e9]">
                  <th className="p-3 text-left text-sm font-semibold">Feature</th>
                  <th className="p-3 text-center text-sm font-semibold">{trek1.name}</th>
                  <th className="p-3 text-center text-sm font-semibold">{trek2.name}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#f7f2e9]' : 'bg-[#f2ede4]'}>
                    <td className="px-3 py-3 text-sm font-semibold text-[#14383b] border-r border-[#d8cec0]/30">
                      {item.label}
                    </td>
                    <td className="px-3 py-3 text-sm text-center text-[#556363] border-r border-[#d8cec0]/30">
                      {item.trek1}
                    </td>
                    <td className="px-3 py-3 text-sm text-center text-[#556363]">
                      {item.trek2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Which to Choose */}
          <div className="mt-8 bg-[#e4d8c8] rounded-lg p-6 border border-[#d8cec0]/30">
            <h2 className="text-xl font-serif text-[#14383b] text-center mb-4">Which Trek Should You Choose?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#cf6943] mb-2">Choose {trek1.name} if:</h3>
                <ul className="space-y-1 text-sm text-[#556363]">
                  {trek1.difficulty !== 'Strenuous' && <li>✓ You want a less challenging trek</li>}
                  {trek1.price < trek2.price && <li>✓ You have a tighter budget</li>}
                  {trek1.days < trek2.days && <li>✓ You have limited time</li>}
                  <li>✓ You want to experience the {trek1.region} region</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#cf6943] mb-2">Choose {trek2.name} if:</h3>
                <ul className="space-y-1 text-sm text-[#556363]">
                  {trek2.difficulty !== 'Strenuous' && <li>✓ You want a less challenging trek</li>}
                  {trek2.price < trek1.price && <li>✓ You have a tighter budget</li>}
                  {trek2.days < trek1.days && <li>✓ You have limited time</li>}
                  <li>✓ You want to experience the {trek2.region} region</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links back to treks */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`/services/trekking/${trek1.slug}`}>
              <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white rounded-full px-6 py-2 text-sm">
                View {trek1.name}
              </Button>
            </Link>
            <Link href={`/services/trekking/${trek2.slug}`}>
              <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white rounded-full px-6 py-2 text-sm">
                View {trek2.name}
              </Button>
            </Link>
            <Link href="/services/trekking">
              <Button variant="outline" className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/10 rounded-full px-6 py-2 text-sm">
                View All Treks
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
