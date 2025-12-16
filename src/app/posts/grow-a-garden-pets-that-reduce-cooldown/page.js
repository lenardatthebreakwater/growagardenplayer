import Link from 'next/link';

const Card = ({ children, className }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'meta') colorClasses = 'bg-blue-100 text-blue-700';
  if (variant === 'tip') colorClasses = 'bg-pink-100 text-pink-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

const articleData = {
  slug: "grow-a-garden-pets-that-reduce-cooldown",
  title: "Grow a Garden Pets That Reduce Cooldown",
  description: "A list of pets that advance cooldown or shorten ability timer, including the Dilophosaurus, Lion, and Queen Bee, making your garden run faster.",
  datePublished: "2025-12-16T12:00:00Z",
  dateModified: "2025-12-16T12:00:00Z",
  authorName: "Lenard Esplana Perilla",
  image: "/images/cooldown-pets-header.jpg",
  category: "Guides",
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const metadata = {
  title: articleData.title,
  description: articleData.description,
  keywords: ['grow a garden pets that reduce cooldown'],
  openGraph: {
    title: articleData.title,
    description: articleData.description,
    url: `https://www.growagardenplayer.com/posts/${articleData.slug}`,
    type: 'article',
    publishedTime: articleData.datePublished,
    modifiedTime: articleData.dateModified,
    images: [{ url: articleData.image }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: articleData.title,
  description: articleData.description,
  image: `https://www.growagardenplayer.com${articleData.image}`,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified,
  author: {
    '@type': 'Person',
    name: articleData.authorName,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Grow a Garden Player',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.growagardenplayer.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://www.growagardenplayer.com/posts/${articleData.slug}`,
  },
};

const ArticleImage = ({ src, alt, caption }) => (
  <figure className="my-8 max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
    <div className="w-full flex justify-center bg-gray-100">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-contain block"
        loading="lazy"
      />
    </div>
    {caption && (
      <figcaption className="p-2.5 text-center text-[11px] font-semibold text-gray-400 bg-white italic border-t border-gray-100">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function CooldownArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#7CBA5A] rounded-full flex items-center justify-center text-xl" aria-hidden="true">
              🌱
            </div>
            <p className="text-xl font-extrabold text-[#2B5E3A]">
              Grow a Garden Player
            </p>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <section className="mb-8">
            <Badge variant="guides" className="mb-3">{articleData.category}</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B5E3A] mb-4 tracking-tight">
                {articleData.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{articleData.description}</p>
            <div className="text-sm text-gray-500">
                Published on <time dateTime={articleData.datePublished}>{formatDate(articleData.datePublished)}</time>
                {' '}by {articleData.authorName}
            </div>
        </section>

        <article className="prose max-w-none text-gray-800">
            
            <p className="lead text-xl">
                Cooldown-reduction pets are vital for efficiency. They help your entire pet team activate abilities more often, making your garden run much faster and maximizing your yield or experience gains.
            </p>
            <p className="text-sm italic text-gray-600 mb-8">
                (Assumes each pet is Age 1, 1kg, and has no pet mutation.)
            </p>

            <Separator className="my-10" />

            <h2 id="dilophosaurus" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">1. Dilophosaurus 🦖</h2>
            
            <ArticleImage 
                src="/images/dilophosaurus.jpg" 
                alt="The Dilophosaurus pet spitting venom at nearby pets to advance their ability cooldowns." 
                caption="Reliable, frequent cooldown advancement with bonus XP potential."
            />
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 13:57, it opens its frills and spits venom.</li>
                <li>The venom spreads to 3.20 pets, either:
                    <ul className="list-circle ml-6 space-y-1 mt-1">
                        <li>advancing their cooldowns by 40.25s, or</li>
                        <li>granting 540.00 XP.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Reliable, frequent cooldown advancement with bonus XP potential.
            </p>

            <h2 id="griffin" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">2. Griffin 🦅</h2>

            <ArticleImage 
                src="/images/griffin.jpg" 
                alt="The Griffin pet creating a cyclone that hits multiple pets to reduce their cooldown timers." 
                caption="Hybrid support pet that boosts cooldowns and spreads a strong mutation."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 15:32, the Griffin creates a cyclone that:
                    <ul className="list-circle ml-6 space-y-1 mt-1">
                        <li>Advances cooldowns of pets hit by 66.00s</li>
                        <li>Gives fruits a 10.15% chance to gain Cyclonic</li>
                    </ul>
                </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Hybrid support pet that boosts cooldowns and spreads a strong mutation.
            </p>

            <h2 id="hotdog-dachshund" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">3. Hotdog Dachshund 🌭</h2>

            <ArticleImage 
                src="/images/hotdog-daschund.jpg" 
                alt="The Hotdog Dachshund pet leaving a mustard puddle on the ground to speed up nearby pet cooldowns." 
                caption="Fastest cooldown-supporting pet with area-based buffs."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 3:59, drops either a mustard or ketchup puddle (8.08 studs wide) lasting 30.15s:
                    <ul className="list-circle ml-6 space-y-1 mt-1">
                        <li>Mustard: pets inside have cooldowns tick 0.11x faster</li>
                        <li>Ketchup: pets inside gain 21.00% more XP</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Fastest cooldown-supporting pet with area-based buffs.
            </p>
            
            <h2 id="lion" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">4. Lion 🦁</h2>

            <ArticleImage 
                src="/images/lion.jpg" 
                alt="The Lion pet roaring to pull all pets toward it and distribute a large burst of cooldown reduction." 
                caption="Strong burst of cooldown reduction shared across your entire pet team."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 13:35, the Lion roars and pulls all pets toward it, distributing 404.00s of cooldown advancement (max 60.60s each).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Strong burst of cooldown reduction shared across your entire pet team.
            </p>
            
            <h2 id="meerkat" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">5. Meerkat 🐒</h2>

            <ArticleImage 
                src="/images/meerkat.jpg" 
                alt="The Meerkat pet performing a lookout action, advancing a single pet's ability cooldown by a set amount." 
                caption="Can chain multiple cooldown boosts if the repeat chance triggers."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 7:20, it approaches another pet and performs a lookout, advancing that pet’s cooldown by 20.50s.</li>
                <li>There is also a 15.25% chance to immediately repeat the action.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Can chain multiple cooldown boosts if the repeat chance triggers.
            </p>

            <h2 id="oxpecker" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">6. Oxpecker 🐦</h2>

            <ArticleImage 
                src="/images/oxpecker.jpg" 
                alt="The Oxpecker pet sitting on a Safari pet, reducing the cooldown of that pet after it uses its ability." 
                caption="A must-have in Safari-heavy teams to make all their abilities cycle faster."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>After any Safari pet uses its ability, its cooldown begins 14.40s shorter.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                A must-have in Safari-heavy teams to make all their abilities cycle faster.
            </p>
            
            <h2 id="peach-wasp" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">7. Peach Wasp 🍑🐝</h2>

            <ArticleImage 
                src="/images/peach-wasp.jpg" 
                alt="The Peach Wasp pet stinging a pet to advance its cooldown and applying Plasma to a fruit." 
                caption="Steady cooldown boosts plus the Plasma mutation for extra value."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 24:54, flies to a fruit and applies Plasma.</li>
                <li>Every 9:57, stings a random pet, advancing its cooldown by 60.60s.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Steady cooldown boosts plus the Plasma mutation for extra value.
            </p>

            <h2 id="peacock" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">8. Peacock 🦚</h2>

            <ArticleImage 
                src="/images/peacock.jpg" 
                alt="The Peacock pet fanning its feathers to send out a large wave that reduces the cooldowns of all active pets." 
                caption="One of the best AoE cooldown boosters for large gardens."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 10:00, fans its feathers and advances the cooldowns of all active pets within 20.20 studs by 65.60s.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                One of the best AoE cooldown boosters for large gardens.
            </p>

            <h2 id="queen-bee" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">9. Queen Bee 👑🐝</h2>

            <ArticleImage 
                src="/images/queen-bee.jpg" 
                alt="The Queen Bee pet flying near a pet with a long cooldown and fully refreshing its ability." 
                caption="Its ability refresh is extremely strong for top-tier cooldown-intensive pets."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 20:04, a nearby fruit becomes Pollinated.</li>
                <li>Every 21:51, the pet with the highest cooldown gets its ability fully refreshed.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Its ability refresh is extremely strong for top-tier cooldown-intensive pets.
            </p>

            <h2 id="red-squirrel" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">10. Red Squirrel 🐿️</h2>

            <ArticleImage 
                src="/images/red-squirrel.jpg" 
                alt="The Red Squirrel pet watching a Fall-type pet, reducing the cooldown of that pet after it uses its ability." 
                caption="Pairs perfectly with Fall pets to speed up their cycles."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>After any Fall-type pet finishes its ability, its cooldown starts 14.40s shorter.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Pairs perfectly with Fall pets to speed up their cycles.
            </p>

            <h2 id="spider" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">11. Spider 🕷️</h2>

            <ArticleImage 
                src="/images/spider.jpg" 
                alt="The Spider pet weaving a web that speeds up both pet cooldowns and plant growth simultaneously." 
                caption="A powerful area buff that helps both pets and plants simultaneously."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 8:03, weaves a web (18.18 studs) lasting 10.10s.
                    <ul className="list-circle ml-6 space-y-1 mt-1">
                        <li>Pets on the web advance cooldowns by 1.01s every second</li>
                        <li>Plants in the area grow 15.15s faster every second</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                A powerful area buff that helps both pets and plants simultaneously.
            </p>

            <h2 id="tarantula-hawk" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">12. Tarantula Hawk 🕸️</h2>

            <ArticleImage 
                src="/images/tarantula-hawk.jpg" 
                alt="The Tarantula Hawk pet stinging a pet and advancing its cooldown by a large amount." 
                caption="Very frequent cooldown boosts plus a strong mutation bonus."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 24:54, applies Pollinated to a nearby fruit.</li>
                <li>Every 4:59, stings a pet and advances its cooldown by 80.80s.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Very frequent cooldown boosts plus a strong mutation bonus.
            </p>

            <h2 id="wasp" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">13. Wasp 🐝</h2>

            <ArticleImage 
                src="/images/wasp.jpg" 
                alt="The Wasp pet stinging a pet to reduce its cooldown and pollinating a nearby fruit." 
                caption="A solid utility pet with reliable cooldown advancement."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 29:42, pollinates a nearby fruit.</li>
                <li>Every 9:54, stings a pet, advancing its cooldown by 60.60s.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Similar to Peach Wasp but with Pollinated and longer intervals.
            </p>
            
            <Separator className="my-10" />

            <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
            <p>
                For maximum garden speed, a layered approach is best. Use pets like the Peacock for large AoE buffs, supplement with single-target chainers like the Meerkat, and include specialty pets like the Oxpecker to support your faction pets. A fast pet cycle means faster profits!
            </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-8 text-center text-sm text-gray-500">
        <p>Return to <Link href="/" className="text-[#2B5E3A] hover:underline">Grow a Garden Player</Link></p>
      </footer>
    </div>
  );
}