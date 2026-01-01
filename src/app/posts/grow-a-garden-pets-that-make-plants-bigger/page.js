import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: "Best Grow a Garden Pets That Make Plants Bigger | Expert Guide",
  description: "Discover the top 5 Grow a Garden pets that make plants bigger. Includes Moon Cat, Toucan, Blood Hedgehog, Shroomie, and Black Cat with detailed stats and farming tips.",
  keywords: ['grow a garden pets that make plants bigger'],
  metadataBase: new URL('https://www.growagardenplayer.com'),
  alternates: {
    canonical: '/posts/grow-a-garden-pets-that-make-plants-bigger',
  },
  openGraph: {
    title: "Best Grow a Garden Pets That Make Plants Bigger",
    description: "Discover the top 5 Grow a Garden pets that make plants bigger. Includes Moon Cat, Toucan, Blood Hedgehog, Shroomie, and Black Cat with detailed stats and farming tips.",
    url: `https://www.growagardenplayer.com/posts/grow-a-garden-pets-that-make-plants-bigger`,
    type: 'article',
    images: [{ url: '/images/plant-size-pets-banner.jpg' }],
  },
};

const articleData = {
  slug: "grow-a-garden-pets-that-make-plants-bigger",
  title: "Best Grow a Garden Pets That Make Plants Bigger",
  description: "Discover the top 5 Grow a Garden pets that make plants bigger. Includes Moon Cat, Toucan, Blood Hedgehog, Shroomie, and Black Cat with detailed stats and farming tips.",
  datePublished: "2025-12-10T09:00:00Z",
  authorName: "Lenard Esplana Perilla",
  category: "Pets",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.growagardenplayer.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pets",
      "item": "https://www.growagardenplayer.com/category/pets"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Grow a Garden Pets That Make Plants Bigger",
      "item": "https://www.growagardenplayer.com/posts/grow-a-garden-pets-that-make-plants-bigger"
    }
  ]
};

const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-gray-100 text-gray-700';
  if (variant === 'guides' || variant === 'Guides') colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'pets' || variant === 'Pets') colorClasses = 'bg-blue-100 text-blue-700';
  if (variant === 'plants' || variant === 'Plants') colorClasses = 'bg-purple-100 text-purple-700';
  if (variant === 'others' || variant === 'Others') colorClasses = 'bg-orange-100 text-orange-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};

const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

const ArticleImage = ({ src, alt, caption }) => (
  <figure className="my-8 max-w-xs mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
    <div className="relative w-full aspect-video flex justify-center bg-gray-100">
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-contain" 
        sizes="(max-width: 768px) 100vw, 320px"
      />
    </div>
    {caption && (
      <figcaption className="p-2.5 text-center text-[11px] font-semibold text-gray-400 bg-white italic border-t border-gray-100">
        {caption}
      </figcaption>
    )}
  </figure>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex items-center gap-2 text-sm text-gray-600">
      <li>
        <Link href="/" className="hover:text-[#2B5E3A] transition-colors">
          Home
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-400">/</li>
      <li>
        <Link href="/category/pets" className="hover:text-[#2B5E3A] transition-colors">
          Pets
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-400">/</li>
      <li className="text-gray-900 font-medium" aria-current="page">
        Best Grow a Garden Pets That Make Plants Bigger
      </li>
    </ol>
  </nav>
);

const TableOfContents = ({ pets }) => (
  <nav className="bg-green-50 border border-green-100 rounded-xl p-6 mb-10" aria-label="Table of Contents">
    <h2 className="text-xl font-bold text-[#2B5E3A] mb-4 flex items-center gap-2">📋 Plant Size Pet Navigation</h2>
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
      {pets.map((pet, index) => (
        <li key={pet.id}>
          <a href={`#${pet.id}`} className="text-[#2B5E3A] hover:underline font-medium">
            {index + 1}. {pet.name}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default function PlantSizeArticlePage() {
  const pets = [
    { id: "moon-cat", name: "Moon Cat 🌙🐈" },
    { id: "toucan", name: "Toucan 🦜" },
    { id: "blood-hedgehog", name: "Blood Hedgehog 🩸🦔" },
    { id: "shroomie", name: "Shroomie 🍄" },
    { id: "black-cat", name: "Black Cat 🐈‍⬛" }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-yellow-100">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#7CBA5A] rounded-full flex items-center justify-center text-xl">🌱</div>
            <p className="text-xl font-extrabold text-[#2B5E3A]">Grow a Garden Player</p>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <Breadcrumb />
        
        <section className="mb-8">
          <Badge variant="pets" className="mb-3">{articleData.category}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B5E3A] mb-4 tracking-tight">
            {articleData.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{articleData.description}</p>
          <div className="text-sm text-gray-500">
            Published on <time dateTime={articleData.datePublished}>{formatDate(articleData.datePublished)}</time>
            {' '}by {articleData.authorName}
          </div>
        </section>

        <TableOfContents pets={pets} />

        <article className="prose max-w-none text-gray-800">
          
          <p className="lead text-xl">
            Pets aren't just for company; they are a key part of maximizing your farm's output in Grow a Garden. Certain pets provide massive boosts to plant size, value, and variant chance, making them essential for farming high-value fruits.
          </p>
          
          <p className="mt-4">
            Here are the best pets dedicated to making your plants grow bigger, categorized by their specific target plant types.
          </p>

          <Separator className="my-10" />

          <h2 id="moon-cat" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">1. Moon Cat 🌙🐈</h2>
          
          <ArticleImage 
            src="/images/moon-cat.jpg" 
            alt="Moon Cat pet - Grow a Garden Roblox" 
            caption="The classic pet for growing massive fruits, especially Night Type plants."
          />
          
          <p>
            The Moon Cat is an OG meta pet for growing massive fruits back in the early days of Grow a Garden. It's beloved by many players not just because of its powerful ability, but also for its adorable appearance.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Every 68.30s, it naps for 20.35s</li>
            <li>New fruit within 20.35 studs will be 1.53x larger</li>
            <li>6.83% chance Night Type fruit stays after harvest</li>
          </ul>

          <p className="mt-4">
            Players used to make really large fruits with this pet all the time and would sell those fruits for millions of sheckels. Mooncats were commonly paired with Triceratops, creating the iconic Tri-Moon method, which was once one of the most popular methods among players.
          </p>
          <p className="mt-4">
            The Moon Cat works on any fruit type, but its second ability only applies to Night-type plants. Many players have long preferred pairing Moon Cats with Moon Melons, though newer Night-type plants like the Wereplant and Trinity Fruit have since emerged, both offering a much higher base value than the classic Moon Melon. The Moon Cat declined in popularity after the release of the Black Cat, which is simply a better version of the Moon Cat (minus the Night Type fruit bonus). Even so, there are still plenty of players who enjoy using the Moon Cat for its nostalgic charm.
          </p>

          <h2 id="toucan" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">2. Toucan 🦜</h2>

          <ArticleImage 
            src="/images/toucan.jpg" 
            alt="Toucan pet - Grow a Garden Roblox" 
            caption="Perfect for tropical fruit farms."
          />

          <p>
            The Toucan is a great pet for players who love growing tropical fruits in Grow a Garden. It's simple to use and provides a consistent size and variant boost to nearby plants.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Grants all tropical plants within 25.25 studs a 1.25x size bonus</li>
            <li>Grants all tropical plants within 25.25 studs a 1.26x variant chance bonus</li>
          </ul>
          
          <p className="mt-4">
            This means that tropical fruits near a Toucan can grow larger and have a higher chance of becoming gold or rainbow variants. Some examples of these fruits include Banana, Coconut, Dragon Fruit, Mango, Papaya, Starfruit, and Watermelon.
          </p>
          <p className="mt-4">
            Back then, the Toucan played a major role in the famous Honeysuckle Method. Before an update changed the plant's type, Honeysuckle was considered tropical. Players used eight Toucans together with a sprinkler glitch to grow massive honeysuckle fruits worth trillions. The developers later patched the glitch and removed Honeysuckle from the tropical category. Even so, the Toucan remains a useful pet for growing tropical fruits that are both bigger and more likely to turn gold or rainbow.
          </p>

          <h2 id="blood-hedgehog" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">3. Blood Hedgehog 🩸🦔</h2>

          <ArticleImage 
            src="/images/blood-hedgehog.jpg"
            alt="Blood Hedgehog pet - Grow a Garden Roblox" 
            caption="A great pet for players focusing on prickly plant varieties."
          />

          <p>
            The Blood Hedgehog is a fun choice for players who enjoy growing prickly plants in Grow a Garden. While it's not considered a meta pet, it offers impressive boosts that make your spiky garden more powerful.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Grants all prickly plants within 30.20 studs a 2.02x size bonus</li>
            <li>Grants all prickly plants within 22.20 studs a 2.02x variant chance bonus</li>
          </ul>

          <p className="mt-4">
            This means that all prickly plants near a Blood Hedgehog can grow much larger and have a higher chance of turning into gold or rainbow variants. Some examples of these plants include Aloe Vera, Blooming Cactus, Dragon Fruit, Horned Dinoshroom, Prickly Pear, and Venus Fly Trap. Even though the Blood Hedgehog isn't a top meta pet, it's a lot of fun to use because of the sheer number of interesting prickly plants in the game, two of which are of transcendent rarity and many are of prismatic rarity.
          </p>
          
          <h2 id="shroomie" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">4. Shroomie 🍄</h2>

          <ArticleImage 
            src="/images/shroomie.jpg" 
            alt="Shroomie pet - Grow a Garden Roblox" 
            caption="Shroomie requires a large quantity of fungus plants to maximize its effect."
          />

          <p>
            If you've got a stash of fungus type seeds, Shroomie is the perfect pet to put them to good use. Its ability increases the size of all nearby fruits and crops based on how many Fungus-type plants you have, with the Mushroom being the most common to use. Other Fungus plants that contribute to Shroomie's effect include Autumn Shroom, Bloodred Mushroom, Duskpuff and many others.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Boosts the size of all nearby plants within 15.00 studs by 0.005x for every Fungus-type plant in your garden, up to 300 plants.</li>
            <li>Maxed out at 300 Fungus plants, this gives a 1.5x size boost, noticeably enlarging all fruits and crops around it.</li>
          </ul>

          <h2 id="black-cat" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">5. Black Cat 🐈‍⬛</h2>

          <ArticleImage 
            src="/images/black-cat.jpg" 
            alt="Black Cat pet - Grow a Garden Roblox" 
            caption="A reliable, stacking alternative to the Moon Cat."
          />

          <p>
            The Black Cat is a more consistent alternative to the Moon Cat. Instead of napping randomly, Black Cats always sleep near a Witch's Cauldron cosmetic, making it easy to stack their size bonus. With just one cauldron, you can have up to 8 Black Cats napping together, all boosting nearby fruits at the same time.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Every 4:02 minutes, the Black Cat goes to a Witch's Cauldron and naps for 14.65 seconds.</li>
            <li>Any new fruit within 10.10 studs during this time will be 1.10x larger.</li>
          </ul>

          <p className="mt-4">
            Although its cooldown is longer than the Moon Cat's, the Black Cat's consistent positioning makes it a reliable choice. The only limitation is that it requires the Witch's Cauldron cosmetic for its ability to work.
          </p>

          <Separator className="my-10" />

          <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
          <p>
            These pets are game-changers for serious farmers. By combining the right plant type with the corresponding size-boosting pet, whether it's the classic Moon Cat, the specialized Toucan or Blood Hedgehog, or the stackable Black Cat, you can significantly increase the value and rarity of your harvests. Happy farming!
          </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-8 text-center text-sm text-gray-500">
        <p>Return to <Link href="/" className="text-[#2B5E3A] font-bold hover:underline">Grow a Garden Player</Link></p>
      </footer>
    </div>
  );
}