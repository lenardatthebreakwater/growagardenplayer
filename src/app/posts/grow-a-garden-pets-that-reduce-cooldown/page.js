import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: "Grow a Garden: Best Pets for Reducing Cooldowns Guide",
  description: "Maximize your garden's speed with pets like Dilophosaurus, Lion, and Queen Bee. Learn the best cooldown reduction abilities in Grow a Garden.",
  keywords: ["Grow a Garden", "cooldown reduction pets", "Roblox Garden Guide", "Lion pet ability", "Queen Bee refresh"],
  alternates: {
    canonical: 'https://www.growagardenplayer.com/posts/grow-a-garden-pets-that-reduce-cooldown',
  },
  openGraph: {
    title: "Grow a Garden: Pets That Reduce Cooldown",
    description: "The complete guide to speeding up your pet abilities in Grow a Garden.",
    images: [{ url: '/images/cooldown-pets-header.jpg' }],
    type: 'article',
  },
};

const articleData = {
  slug: "grow-a-garden-pets-that-reduce-cooldown",
  title: "Grow a Garden Pets That Reduce Cooldown",
  description: "A list of pets that advance cooldown or shorten ability timer, including the Dilophosaurus, Lion, and Queen Bee, making your garden run faster.",
  datePublished: "2025-12-16T12:00:00Z",
  authorName: "Lenard Esplana Perilla",
  category: "Pets",
  readingTime: "7 min read"
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
  <nav className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10" aria-label="Table of Contents">
    <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">📋 Quick Navigation</h2>
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
      {pets.map((pet, index) => (
        <li key={pet.id}><a href={`#${pet.id}`} className="text-blue-700 hover:underline font-medium">{index + 1}. {pet.name}</a></li>
      ))}
    </ol>
  </nav>
);

export default function CooldownArticlePage() {
  const pets = [
    { id: "dilophosaurus", name: "Dilophosaurus 🦖" },
    { id: "griffin", name: "Griffin 🦅" },
    { id: "hotdog-dachshund", name: "Hotdog Dachshund 🌭" },
    { id: "lion", name: "Lion 🦁" },
    { id: "meerkat", name: "Meerkat 🐒" },
    { id: "oxpecker", name: "Oxpecker 🐦" },
    { id: "peach-wasp", name: "Peach Wasp 🍑🐝" },
    { id: "peacock", name: "Peacock 🦚" },
    { id: "queen-bee", name: "Queen Bee 👑🐝" },
    { id: "red-squirrel", name: "Red Squirrel 🐿️" },
    { id: "spider", name: "Spider 🕷️" },
    { id: "tarantula-hawk", name: "Tarantula Hawk 🕸️" },
    { id: "wasp", name: "Wasp 🐝" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-blue-100">
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
          <span className="text-gray-900 font-medium">Cooldown Pets</span>
        </nav>

        <header className="mb-10">
          <Badge variant="guides" className="mb-4">{articleData.category}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B5E3A] mb-6 tracking-tight leading-tight">{articleData.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 italic">
            <span>By {articleData.authorName}</span>
            <span>•</span>
            <time dateTime={articleData.datePublished}>December 16, 2025</time>
          </div>
        </header>

        <TableOfContents pets={pets} />

        <article className="prose prose-lg prose-green max-w-none">
          <p className="lead text-xl text-gray-600">
            Cooldown-reduction pets are vital for efficiency. They help your entire pet team activate abilities more often, making your garden run much faster and maximizing your yield or experience gains.
          </p>

          <hr className="my-10" />

          {/* 1. DILOPHOSAURUS */}
          <section id="dilophosaurus">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">1. Dilophosaurus 🦖</h2>
            <ArticleImage src="/images/dilophosaurus.jpg" alt="Dilophosaurus pet spitting venom" caption="Reliable, frequent cooldown advancement with bonus XP potential." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 13:57, it opens its frills and spits venom. The venom spreads to 3.20 pets, either advancing their cooldowns by 40.25s, or granting 540.00 XP.</p>
          </section>

          {/* 2. GRIFFIN */}
          <section id="griffin">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">2. Griffin 🦅</h2>
            <ArticleImage src="/images/griffin.jpg" alt="Griffin pet creating a cyclone" caption="Hybrid support pet that boosts cooldowns and spreads a strong mutation." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 15:32, the Griffin creates a cyclone that advances cooldowns of pets hit by 66.00s and gives fruits a 10.15% chance to gain Cyclonic.</p>
          </section>

          {/* 3. HOTDOG DACHSHUND */}
          <section id="hotdog-dachshund">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">3. Hotdog Dachshund 🌭</h2>
            <ArticleImage src="/images/hotdog-dachshund.jpg" alt="Hotdog Dachshund pet leaving mustard puddle" caption="Fastest cooldown-supporting pet with area-based buffs." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 3:59, drops either a mustard or ketchup puddle. Mustard makes pet cooldowns tick 0.11x faster, while Ketchup grants 21.00% more XP.</p>
          </section>

          {/* 4. LION */}
          <section id="lion">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">4. Lion 🦁</h2>
            <ArticleImage src="/images/lion.jpg" alt="Lion pet roaring" caption="Strong burst of cooldown reduction shared across your entire pet team." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 13:35, the Lion roars and pulls all pets toward it, distributing 404.00s of cooldown advancement (max 60.60s each).</p>
          </section>

          {/* 5. MEERKAT */}
          <section id="meerkat">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">5. Meerkat 🐒</h2>
            <ArticleImage src="/images/meerkat.jpg" alt="Meerkat pet performing a lookout action" caption="Can chain multiple cooldown boosts if the repeat chance triggers." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 7:20, it approaches another pet and performs a lookout, advancing that pet’s cooldown by 20.50s with a 15.25% chance to repeat.</p>
          </section>

          {/* 6. OXPECKER */}
          <section id="oxpecker">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">6. Oxpecker 🐦</h2>
            <ArticleImage src="/images/oxpecker.jpg" alt="Oxpecker pet sitting on a Safari pet" caption="A must-have in Safari-heavy teams to make all their abilities cycle faster." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>After any Safari pet uses its ability, its cooldown begins 14.40s shorter.</p>
          </section>

          {/* 7. PEACH WASP */}
          <section id="peach-wasp">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">7. Peach Wasp 🍑🐝</h2>
            <ArticleImage src="/images/peach-wasp.jpg" alt="Peach Wasp pet stinging a pet" caption="Steady cooldown boosts plus the Plasma mutation for extra value." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 24:54, applies Plasma to a fruit. Every 9:57, stings a random pet, advancing its cooldown by 60.60s.</p>
          </section>

          {/* 8. PEACOCK */}
          <section id="peacock">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">8. Peacock 🦚</h2>
            <ArticleImage src="/images/peacock.jpg" alt="Peacock pet fanning its feathers" caption="One of the best AoE cooldown boosters for large gardens." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 10:00, fans its feathers and advances the cooldowns of all active pets within 20.20 studs by 65.60s.</p>
          </section>

          {/* 9. QUEEN BEE */}
          <section id="queen-bee">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">9. Queen Bee 👑🐝</h2>
            <ArticleImage src="/images/queen-bee.jpg" alt="Queen Bee refreshing the pet with highest cooldown" caption="Its ability refresh is extremely strong for top-tier cooldown-intensive pets." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 20:04, a fruit becomes Pollinated. Every 21:51, the pet with the highest cooldown gets its ability fully refreshed.</p>
          </section>

          {/* 10. RED SQUIRREL */}
          <section id="red-squirrel">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">10. Red Squirrel 🐿️</h2>
            <ArticleImage src="/images/red-squirrel.jpg" alt="Red Squirrel pet watching a Fall-type pet" caption="Pairs perfectly with Fall pets to speed up their cycles." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>After any Fall-type pet finishes its ability, its cooldown starts 14.40s shorter.</p>
          </section>

          {/* 11. SPIDER */}
          <section id="spider">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">11. Spider 🕷️</h2>
            <ArticleImage src="/images/spider.jpg" alt="Spider pet weaving a web" caption="A powerful area buff that helps both pets and plants simultaneously." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 8:03, weaves a web. Pets on the web advance cooldowns by 1.01s every second, while plants grow 15.15s faster per second.</p>
          </section>

          {/* 12. TARANTULA HAWK */}
          <section id="tarantula-hawk">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">12. Tarantula Hawk 🕸️</h2>
            <ArticleImage src="/images/tarantula-hawk.jpg" alt="Tarantula Hawk stinging a pet" caption="Very frequent cooldown boosts plus a strong mutation bonus." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 24:54, pollinates a fruit. Every 4:59, stings a pet and advances its cooldown by 80.80s.</p>
          </section>

          {/* 13. WASP */}
          <section id="wasp">
            <h2 className="text-3xl font-bold text-[#2B5E3A] mt-12 mb-4">13. Wasp 🐝</h2>
            <ArticleImage src="/images/wasp.jpg" alt="Wasp pet stinging a pet" caption="A solid utility pet with reliable cooldown advancement." />
            <p className="font-bold text-[#2B5E3A] mb-2 uppercase text-sm tracking-wide">Ability:</p>
            <p>Every 29:42, pollinates a nearby fruit. Every 9:54, stings a pet, advancing its cooldown by 60.60s.</p>
          </section>

          <hr className="my-12" />
          <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            For maximum garden speed, a layered approach is best. Use pets like the <strong>Peacock</strong> for large AoE buffs, supplement with single-target chainers like the <strong>Meerkat</strong>, and include specialty pets like the <strong>Oxpecker</strong> to support your faction pets. A fast pet cycle means faster profits!
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