import Link from 'next/link';

const Card = ({ children, className }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'meta') colorClasses = 'bg-purple-100 text-purple-700';
  if (variant === 'tip') colorClasses = 'bg-pink-100 text-pink-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

const articleData = {
  slug: "grow-a-garden-pets-that-spread-mutations",
  title: "Grow a Garden Pets That Spread Mutations",
  description: "A comprehensive list of Grow a Garden pets like the T-Rex, Corrupted Kitsune, and Phoenix that specialize in spreading mutations.",
  datePublished: "2025-12-12T10:00:00Z",
  dateModified: "2025-12-12T10:00:00Z",
  authorName: "Lenard Esplana Perilla",
  image: "/images/mutation-pets-header.jpg",
  category: "Guides",
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const metadata = {
  title: articleData.title,
  description: articleData.description,
  keywords: ['grow a garden pets that spread mutations'],
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

export default function MutationArticlePage() {
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
                Some pets in Grow a Garden specialize in spreading mutations that boost fruit value and garden efficiency. This guide explains what each mutation-spreading pet does and why they’re useful.
            </p>

            <Separator className="my-10" />

            <h2 id="t-rex" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">1. T-Rex 🦖</h2>
            
            <ArticleImage 
                src="/images/t-rex.jpg" 
                alt="The T-Rex pet in Grow a Garden, roaring after consuming and spreading a mutation to nearby fruits." 
                caption="The T-Rex rapidly clones valuable mutations across your garden."
            />
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 20:11, the T-Rex consumes a random mutation from your garden, then roars to spread that same mutation to 3.20 random fruits.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Once you get a valuable mutation, the T-Rex can rapidly clone it around the garden.
            </p>

            <h2 id="kappa" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">2. Kappa 💧</h2>

            <ArticleImage 
                src="/images/kappa.jpg" 
                alt="The Kappa pet spraying water on surrounding plants, applying the Wet mutation to fruits in Grow a Garden." 
                caption="The Kappa offers consistent AoE mutation spreading."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 8:30, the Kappa sprays water on all fruits within 20.25 studs, applying Wet.</li>
                <li>There is also a 10.10% chance for existing Wet mutations to be upgraded to Bloodlit (x5 multiplier).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Consistent AoE mutation spreading with a chance for a big multiplier upgrade.
            </p>

            <h2 id="corrupted-kitsune" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">3. Corrupted Kitsune 🔮</h2>

            <ArticleImage 
                src="/images/corrupted-kitsune.jpg" 
                alt="The Corrupted Kitsune pet firing cursed energy at multiple fruits, with a chance to apply the Corrupt Chakra mutation." 
                caption="A top-tier pet for applying extremely high mutation multipliers."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 20:56, it fires cursed energy at 9 fruits.</li>
                <li>Each fruit has a 20.20% chance to gain Corrupt Chakra and a very rare chance to gain Corrupt Foxfire Chakra.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                One of the strongest mutation pets, capable of applying extremely high multipliers (up to x90).
            </p>
            
            <h2 id="griffin" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">4. Griffin 🦅</h2>

            <ArticleImage 
                src="/images/griffin.jpg" 
                alt="The Griffin pet creating a cyclone that hits both fruits and other pets, applying the Cyclonic mutation." 
                caption="Supports your pet team while spreading strong mutations."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 15:32, the Griffin creates a cyclone.</li>
                <li>Pets hit get 66.00s cooldown reduction.</li>
                <li>Fruits hit have a 10.15% chance to receive Cyclonic (x50 multiplier).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Supports your entire pet team while spreading strong mutations.
            </p>
            
            <h2 id="cockatrice" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">5. Cockatrice 🐓</h2>

            <ArticleImage 
                src="/images/cockatrice.jpg" 
                alt="The Cockatrice pet spitting venom and spreading mutations like Silver, Gold, and Toxic to fruits." 
                caption="A versatile pet mixing mutation spreading, XP farming, and fruit upgrading."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 16:35, fruits within 20.25 studs have a 20.05% chance to turn Silver and 1.01% chance to turn Gold.</li>
                <li>Every 10:22, it spits at 5.10 targets, applying Toxic (x15). Eggs gain 80.50s advancement and pets gain 802.50 XP.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Great mix of mutation spreading, XP farming, and fruit upgrading.
            </p>

            <h2 id="phoenix" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">6. Phoenix 🔥</h2>

            <ArticleImage 
                src="/images/phoenix.jpg" 
                alt="The Phoenix pet flying over fruits, applying the Flaming mutation and strengthening newly mutated pets." 
                caption="A fast, active mutation spreader that also strengthens newly mutated pets."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Pets from the mutation machine gain +1 to +4.90 Age.</li>
                <li>Every 6:37, the Phoenix flies through 4.10 fruits, applying Flaming (x25).</li>
                <li>Fruits passed also have a 20.20% chance to mutate.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Fast, active mutation spreader that also strengthens newly mutated pets.
            </p>
            
            <h2 id="badger" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">7. Badger 🦡</h2>

            <ArticleImage 
                src="/images/badger.jpg" 
                alt="The Badger pet digging in the ground, causing fruits within its area to gain the Cracked mutation." 
                caption="Applies the Cracked mutation rapidly over time."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 5:09, the Badger digs for 10.10s. Fruits within 20.25 studs have a 10.10% chance per second to gain Cracked.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Applies mutations rapidly over time thanks to the per-second chance.
            </p>

            <h2 id="sugar-glider" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">8. Sugar Glider 🐿️</h2>

            <ArticleImage 
                src="/images/sugar-glider.jpg" 
                alt="The Sugar Glider pet gliding between fruits, copying and transferring mutations between them." 
                caption="Useful for transferring specific mutations across targeted fruits."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 19:56, it glides between 3 fruits, copying one mutation from each fruit and applying it to the next.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Useful for linking or transferring specific mutations across targeted fruits.
            </p>

            <h2 id="wolf" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">9. Wolf 🐺</h2>

            <ArticleImage 
                src="/images/wolf.jpg" 
                alt="The Wolf pet howling, spreading the Moonlit mutation to nearby fruits and transforming the player into a Werewolf." 
                caption="Spreads mutations quickly and gives a fun mobility buff."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 4:02, the Wolf howls.</li>
                <li>Fruits within 20.20 studs gain Moonlit (15.15% chance).</li>
                <li>You transform into a Werewolf for 35.01s, gaining +40.55% speed and +80.55% jump height.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Spreads mutations quickly and gives a fun mobility buff for moving around your garden.
            </p>

            <h2 id="giraffe" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">10. Giraffe 🦒</h2>

            <ArticleImage 
                src="/images/giraffe.jpg" 
                alt="The Giraffe pet eating a tall fruit, which applies the Arid mutation to the remaining fruits on the plant." 
                caption="Great for tall fruit farms and boosting early growth."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 14:43, the Giraffe eats fruits at least 10 studs high, selling them for 1.55x value.</li>
                <li>The plant gets +67:00m growth, and all remaining fruits on that plant gain Arid.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                Great for tall fruit farms and boosting early growth.
            </p>

            <h2 id="lion" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">11. Lion 🦁</h2>

            <ArticleImage 
                src="/images/lion.jpg" 
                alt="The Lion pet roaring, sharing cooldown reduction among pets and applying random Safari mutations to fruits." 
                caption="A strong team-support pet that also spreads Safari mutations."
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability:</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 13:35, it roars and shares 404.00s cooldown reduction among your pets (max 60.60s each).</li>
                <li>Every 23:07, it mutates fruits equal to the number of Safari-type pets you own, applying a random Safari mutation.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Why it’s good:</h3>
            <p>
                A strong team-support pet that also spreads Safari mutations over time.
            </p>
            
            <Separator className="my-10" />

            <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
            <p>
                These pets are essential for players looking to maximize the value of their harvests by applying and cloning powerful mutations. Strategically placing pets like the Corrupted Kitsune or combining the T-Rex with a highly-mutated fruit can lead to trillions in sheckels!
            </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-8 text-center text-sm text-gray-500">
        <p>Return to <Link href="/" className="text-[#2B5E3A] hover:underline">Grow a Garden Player</Link></p>
      </footer>
    </div>
  );
}