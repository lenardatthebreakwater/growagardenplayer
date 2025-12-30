import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: "Grow a Garden: Best Pets for Spreading Mutations Guide",
  description: "Learn how to use T-Rex, Phoenix, and Corrupted Kitsune to spread mutations and boost fruit value in Grow a Garden. Comprehensive pet ability list.",
  keywords: ["Grow a Garden", "Mutation Pets", "Roblox Garden Guide", "T-Rex Mutation", "Corrupted Kitsune"],
  alternates: {
    canonical: 'https://www.growagardenplayer.com/posts/grow-a-garden-pets-that-spread-mutations',
  },
  openGraph: {
    title: "Grow a Garden: Pets That Spread Mutations",
    description: "The ultimate guide to mutation-spreading pets in Grow a Garden.",
    images: [{ url: '/images/mutation-pets-header.jpg' }],
    type: 'article',
  },
};

const articleData = {
  slug: "grow-a-garden-pets-that-spread-mutations",
  title: "Grow a Garden Pets That Spread Mutations",
  description: "A comprehensive list of Grow a Garden pets like the T-Rex, Corrupted Kitsune, and Phoenix that specialize in spreading mutations.",
  datePublished: "2025-12-12T10:00:00Z",
  authorName: "Lenard Esplana Perilla",
  category: "Pets",
  readingTime: "8 min read"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": articleData.title,
  "description": articleData.description,
  "author": { "@type": "Person", "name": articleData.authorName },
  "datePublished": articleData.datePublished,
  "publisher": {
    "@type": "Organization",
    "name": "Grow a Garden Player",
    "logo": { "@type": "ImageObject", "url": "https://www.growagardenplayer.com/logo.png" }
  }
};

const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'guides') colorClasses = 'bg-blue-100 text-blue-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold ${colorClasses} ${className}`}>{children}</span>;
};

const ArticleImage = ({ src, alt, caption }) => (
  <figure className="my-8 max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
    <div className="relative w-full aspect-video bg-gray-100">
      <Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
    {caption && (
      <figcaption className="p-3 text-center text-xs font-semibold text-gray-500 italic bg-white border-t border-gray-100">
        {caption}
      </figcaption>
    )}
  </figure>
);

const TableOfContents = ({ pets }) => (
  <nav className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10" aria-label="Table of Contents">
    <h2 className="text-xl font-bold text-[#2B5E3A] mb-4 flex items-center gap-2">📋 In This Guide</h2>
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
      {pets.map((pet, index) => (
        <li key={pet.id}><a href={`#${pet.id}`} className="text-[#2B5E3A] hover:underline font-medium">{index + 1}. {pet.name}</a></li>
      ))}
    </ol>
  </nav>
);

export default function MutationArticlePage() {
  const pets = [
    { id: "badger", name: "Badger 🦡" },
    { id: "cockatrice", name: "Cockatrice 🐓" },
    { id: "corrupted-kitsune", name: "Corrupted Kitsune 🔮" },
    { id: "dark-spriggan", name: "Dark Spriggan 🌑" },
    { id: "giraffe", name: "Giraffe 🦒" },
    { id: "griffin", name: "Griffin 🦅" },
    { id: "kappa", name: "Kappa 💧" },
    { id: "lion", name: "Lion 🦁" },
    { id: "phoenix", name: "Phoenix 🔥" },
    { id: "spriggan", name: "Spriggan 🌿" },
    { id: "sugar-glider", name: "Sugar Glider 🐿️" },
    { id: "t-rex", name: "T-Rex 🦖" },
    { id: "trapdoor-spider", name: "Trapdoor Spider 🕷️" },
    { id: "wolf", name: "Wolf 🐺" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#7CBA5A] rounded-full flex items-center justify-center text-xl">🌱</div>
            <p className="text-xl font-extrabold text-[#2B5E3A]">Grow a Garden Player</p>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#2B5E3A]">Home</Link>
          <span>/</span>
          <Link href="/category/guides" className="hover:text-[#2B5E3A]">Guides</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium tracking-tight">Mutation Pets</span>
        </nav>

        <header className="mb-10">
          <Badge variant="guides" className="mb-4">{articleData.category}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B5E3A] mb-6 tracking-tight leading-tight">{articleData.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 italic">
            <span>By {articleData.authorName}</span>
            <span>•</span>
            <time dateTime={articleData.datePublished}>December 12, 2025</time>
          </div>
        </header>

        <TableOfContents pets={pets} />

        <article className="prose prose-lg prose-green max-w-none">
          <p className="lead text-xl text-gray-600">
            Some pets in <strong>Grow a Garden</strong> specialize in spreading mutations that boost fruit value and garden efficiency. This guide explains what each mutation-spreading pet does and why they’re useful.
          </p>

          <hr className="my-10" />

          <section id="badger">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">1. Badger 🦡</h2>
            <ArticleImage src="/images/badger.jpg" alt="Badger pet digging in the ground" caption="Applies the Cracked mutation rapidly over time." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 5:09, the Badger digs for 10.10s. Fruits within 20.25 studs have a 10.10% chance per second to gain Cracked.</p>
          </section>

          <section id="cockatrice">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">2. Cockatrice 🐓</h2>
            <ArticleImage src="/images/cockatrice.jpg" alt="Cockatrice pet spitting venom" caption="A versatile pet mixing mutation spreading, XP farming, and fruit upgrading." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Every 16:35, fruits within 20.25 studs have a 20.05% chance to turn Silver and 1.01% chance to turn Gold.</li>
              <li>Every 10:22, it spits at 5.10 targets, applying Toxic (x15). Eggs gain 80.50s advancement and pets gain 802.50 XP.</li>
            </ul>
          </section>

          <section id="corrupted-kitsune">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">3. Corrupted Kitsune 🔮</h2>
            <ArticleImage src="/images/corrupted-kitsune.jpg" alt="Corrupted Kitsune firing cursed energy" caption="A top-tier pet for applying extremely high mutation multipliers." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 20:56, it fires cursed energy at 9 fruits. Each fruit has a 20.20% chance to gain Corrupt Chakra and a very rare chance to gain Corrupt Foxfire Chakra.</p>
          </section>

          <section id="dark-spriggan">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">4. Dark Spriggan 🌑</h2>
            <ArticleImage src="/images/dark-spriggan.jpg" alt="Dark Spriggan spreading Blight mutation" caption="Spreads the powerful Blight mutation to a massive number of fruits." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 22:04, spreads its roots and nearest 130.10 fruit within 30.30 studs have a 15.15% to get the Blight mutation!</p>
          </section>

          <section id="giraffe">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">5. Giraffe 🦒</h2>
            <ArticleImage src="/images/giraffe.jpg" alt="Giraffe pet eating tall fruit" caption="Great for tall fruit farms and boosting early growth." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 14:43, the Giraffe eats fruits at least 10 studs high, selling them for 1.55x value. The plant gets +67:00m growth, and all remaining fruits on that plant gain Arid.</p>
          </section>

          <section id="griffin">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">6. Griffin 🦅</h2>
            <ArticleImage src="/images/griffin.jpg" alt="Griffin pet creating a cyclone" caption="Supports your pet team while spreading strong mutations." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 15:32, the Griffin creates a cyclone. Pets hit get 66.00s cooldown reduction. Fruits hit have a 10.15% chance to receive Cyclonic (x50 multiplier).</p>
          </section>

          <section id="kappa">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">7. Kappa 💧</h2>
            <ArticleImage src="/images/kappa.jpg" alt="Kappa pet spraying water" caption="The Kappa offers consistent AoE mutation spreading." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 8:30, the Kappa sprays water on all fruits within 20.25 studs, applying Wet. There is also a 10.10% chance for existing Wet mutations to be upgraded to Bloodlit (x5 multiplier).</p>
          </section>

          <section id="lion">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">8. Lion 🦁</h2>
            <ArticleImage src="/images/lion.jpg" alt="Lion pet roaring" caption="A strong team-support pet that also spreads Safari mutations." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 13:35, it roars and shares 404.00s cooldown reduction among your pets. Every 23:07, it mutates fruits equal to the number of Safari-type pets you own, applying a random Safari mutation.</p>
          </section>

          <section id="phoenix">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">9. Phoenix 🔥</h2>
            <ArticleImage src="/images/phoenix.jpg" alt="Phoenix pet flying over fruits" caption="A fast, active mutation spreader that also strengthens newly mutated pets." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Pets from the mutation machine gain +1 to +4.90 Age. Every 6:37, the Phoenix flies through 4.10 fruits, applying Flaming (x25). Fruits passed also have a 20.20% chance to mutate.</p>
          </section>

          <section id="spriggan">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">10. Spriggan 🌿</h2>
            <ArticleImage src="/images/spriggan.jpg" alt="Spriggan spreading Bloom mutation" caption="Spreads the Bloom mutation through its root system." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 22:02, spreads its roots and all fruit within 30.30 have a 15.15% to get the Bloom Mutation.</p>
          </section>

          <section id="sugar-glider">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">11. Sugar Glider 🐿️</h2>
            <ArticleImage src="/images/sugar-glider.jpg" alt="Sugar Glider gliding between fruits" caption="Useful for transferring specific mutations across targeted fruits." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 19:56, it glides between 3 fruits, copying one mutation from each fruit and applying it to the next.</p>
          </section>

          <section id="t-rex">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">12. T-Rex 🦖</h2>
            <ArticleImage src="/images/t-rex.jpg" alt="T-Rex pet roaring" caption="The T-Rex rapidly clones valuable mutations across your garden." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 20:11, the T-Rex consumes a random mutation from your garden, then roars to spread that same mutation to 3.20 random fruits.</p>
          </section>

          <section id="trapdoor-spider">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">13. Trapdoor Spider 🕷️</h2>
            <ArticleImage src="/images/trapdoor-spider.jpg" alt="Trapdoor Spider eating fruit" caption="Clears fruits while triggering mutations in a large radius." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 297.00s, eats a random fruit and all fruits within a 25.25 stud range have a 8.10% chance to mutate with the Webbed Mutation.</p>
          </section>

          <section id="wolf">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">14. Wolf 🐺</h2>
            <ArticleImage src="/images/wolf.jpg" alt="Wolf pet howling" caption="Spreads mutations quickly and gives a fun mobility buff." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 4:02, the Wolf howls. Fruits within 20.20 studs gain Moonlit (15.15% chance). You transform into a Werewolf for 35.01s (+40.55% speed, +80.55% jump height).</p>
          </section>

          <hr className="my-12" />
          <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            These pets are essential for players looking to maximize the value of their harvests by applying and cloning powerful mutations. Strategically placing pets like the <strong>Corrupted Kitsune</strong> or combining the <strong>T-Rex</strong> with a highly-mutated fruit can lead to trillions in sheckels!
          </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-12 text-center text-sm text-gray-500">
        <p>© 2025 Grow a Garden Player. All rights reserved.</p>
        <Link href="/" className="text-[#2B5E3A] font-bold hover:underline block mt-2">Return Home</Link>
      </footer>
    </div>
  );
}