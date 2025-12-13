import Link from 'next/link';

const Card = ({ children, className }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'meta') colorClasses = 'bg-yellow-100 text-yellow-700';
  if (variant === 'tip') colorClasses = 'bg-pink-100 text-pink-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

const articleData = {
  slug: "grow-a-garden-pets-that-make-plants-bigger",
  title: "Best Grow a Garden Pets That Make Plants Bigger",
  description: "Find out the best Grow a Garden pets that make plants bigger.",
  datePublished: "2025-12-10T09:00:00Z",
  dateModified: "2025-12-10T09:00:00Z",
  authorName: "Lenard Esplana Perilla",
  image: "/images/plant-size-pets-header.jpg",
  category: "Guides",
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const metadata = {
  title: articleData.title,
  description: articleData.description,
  keywords: ['grow a garden pets that make plants bigger'],
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
    <figure className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
        <img 
            src={src} 
            alt={alt} 
            width={800} 
            height={450} 
            className="w-full h-auto object-cover"
        />
        {caption && (
             <figcaption className="p-3 text-center text-sm text-gray-600 bg-gray-100 border-t">
                {caption}
            </figcaption>
        )}
    </figure>
);

export default function PlantSizeArticlePage() {
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
                Pets aren't just for company; they are a key part of maximizing your farm's output in *Grow a Garden*. Certain pets provide massive boosts to plant size, value, and variant chance, making them essential for farming high-value fruits.
            </p>
            
            <p>
                Here are the best pets dedicated to making your plants grow bigger, categorized by their specific target plant types.
            </p>

            <Separator className="my-10" />

            <h2 id="moon-cat" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">1. Moon Cat 🌙🐈</h2>
            
            <ArticleImage 
                src="/images/moon-cat-pet.jpg" 
                alt="The Moon Cat pet from Grow a Garden, known for its ability to grant a 1.53x size bonus to new fruit while it naps." 
                caption="The classic pet for growing massive fruits, especially Night Type plants."
            />
            
            <p>
                The Moon Cat is an OG meta pet for growing massive fruits back in the early days of *Grow a Garden*. It’s beloved by many players not just because of its powerful ability, but also for its adorable appearance.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 68.30s, it naps for 20.35s</li>
                <li>New fruit within 20.35 studs will be 1.53x larger</li>
                <li>6.83% chance Night Type fruit stays after harvest</li>
            </ul>

            <p>
                Players used to make really large fruits with this pet all the time and would sell those fruits for millions of sheckels. Mooncats were commonly paired with Triceratops, creating the iconic Tri-Moon method, which was once one of the most popular methods among players.
            </p>
            <p>
                The Moon Cat can be used with all types of fruits, but to take advantage of its second ability, you can check the official *Grow a Garden* wiki for the full list of Night Type fruits. Many players have long preferred using Mooncats with Moon Melons, though newer Night Type plants like the Wereplant and Trinity Fruit have since emerged, both offering a much higher base value than the classic Moon Melon.
            </p>
            <p>
                The Moon Cat declined in popularity after the release of the Black Cat, which is simply a better version of the Moon Cat (minus the Night Type fruit bonus). Even so, there are still plenty of players who enjoy using the Moon Cat for its nostalgic charm.
            </p>

            <h2 id="toucan" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">2. Toucan 🦜</h2>

            <ArticleImage 
                src="/images/toucan-pet.jpg" 
                alt="The Toucan pet in Grow a Garden, known for boosting the size and variant chance of tropical plants like bananas and watermelons." 
                caption="Perfect for tropical fruit farms."
            />

            <p>
                The Toucan is a great pet for players who love growing tropical fruits in *Grow a Garden*. It’s simple to use and provides a consistent size and variant boost to nearby plants.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Grants all tropical plants within 25.25 studs a 1.25x size bonus</li>
                <li>Grants all tropical plants within 25.25 studs a 1.26x variant chance bonus</li>
            </ul>
            
            <p>
                This means that tropical fruits near a Toucan can grow larger and have a higher chance of becoming gold or rainbow variants. Some examples of these fruits include Banana, Coconut, Dragon Fruit, Mango, Papaya, Starfruit, and Watermelon.
            </p>
            <p>
                Back then, the Toucan played a major role in the famous Honeysuckle Method. Before an update changed the plant’s type, Honeysuckle was considered tropical. Players used eight Toucans together with a sprinkler glitch to grow massive honeysuckle fruits worth trillions. The glitch worked on all types of sprinklers, allowing one sprinkler to stay active indefinitely as long as the player stayed in the game. This made it possible to continuously grow huge fruits without worrying about timers running out.
            </p>
            <p>
                The developers later patched the glitch and removed Honeysuckle from the tropical category. Even so, the Toucan remains a useful pet for growing tropical fruits that are both bigger and more likely to turn gold or rainbow.
            </p>

            <h2 id="blood-hedgehog" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">3. Blood Hedgehog 🩸🦔</h2>

            <ArticleImage 
                src="/images/blood-hedgehog-pet.jpg" 
                alt="The Blood Hedgehog pet, which boosts the size and variant chance of prickly plants such as cacti and aloe vera." 
                caption="A great pet for players focusing on prickly plant varieties."
            />

            <p>
                The Blood Hedgehog is a fun choice for players who enjoy growing prickly plants in *Grow a Garden*. While it’s not considered a meta pet, it offers impressive boosts that make your spiky garden more powerful.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Grants all prickly plants within 30.20 studs a 2.02x size bonus</li>
                <li>Grants all prickly plants within 22.20 studs a 2.02x variant chance bonus</li>
            </ul>

            <p>
                This means that all prickly plants near a Blood Hedgehog can grow much larger and have a higher chance of turning into gold or rainbow variants. Some examples of these plants include Aloe Vera, Blooming Cactus, Dragon Fruit, Horned Dinoshroom, Prickly Pear, and Venus Fly Trap.
            </p>
            <p>
                Even though the Blood Hedgehog isn’t a top meta pet, it’s a lot of fun to use because of the sheer number of interesting prickly plants in the game, two of which are of transcendent rarity and many are of prismatic rarity.
            </p>
            
            <h2 id="shroomie" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">4. Shroomie 🍄</h2>

            <ArticleImage 
                src="/images/shroomie-pet.jpg" 
                alt="The Shroomie pet from Grow a Garden, which boosts plant size based on the total number of Fungus-type plants in the garden." 
                caption="Shroomie requires a large quantity of fungus plants to maximize its effect."
            />

            <p>
                If you’ve got a stash of fungus type seeds, Shroomie is the perfect pet to put them to good use. Its ability increases the size of all nearby fruits and crops based on how many Fungus-type plants you have, with the Mushroom being the most common to use. Other Fungus plants that contribute to Shroomie’s effect include Autumn Shroom, Bloodred Mushroom, Duskpuff and many others.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Boosts the size of all nearby plants within 15.00 studs by 0.005x for every Fungus-type plant in your garden, up to 300 plants.</li>
                <li>Maxed out at 300 Fungus plants, this gives a 1.5x size boost, noticeably enlarging all fruits and crops around it.</li>
            </ul>

            <h2 id="black-cat" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">5. Black Cat 🐈‍⬛</h2>

            <ArticleImage 
                src="/images/black-cat-pet.jpg" 
                alt="The Black Cat pet resting near a Witch's Cauldron cosmetic, boosting nearby fruit size during its predictable nap cycle." 
                caption="A reliable, stacking alternative to the Moon Cat."
            />

            <p>
                The Black Cat is a more consistent alternative to the Moon Cat. Instead of napping randomly, Black Cats always sleep near a Witch’s Cauldron cosmetic, making it easy to stack their size bonus. With just one cauldron, you can have up to 8 Black Cats napping together, all boosting nearby fruits at the same time.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Ability (1kg at age 1):</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>Every 4:02 minutes, the Black Cat goes to a Witch’s Cauldron and naps for 14.65 seconds.</li>
                <li>Any new fruit within 10.10 studs during this time will be 1.10x larger.</li>
            </ul>

            <p>
                Although its cooldown is longer than the Moon Cat’s, the Black Cat’s consistent positioning makes it a reliable choice. The only limitation is that it requires the Witch’s Cauldron cosmetic for its ability to work.
            </p>

            <Separator className="my-10" />

            <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
            <p>
                These pets are game-changers for serious farmers. By combining the right plant type with the corresponding size-boosting pet—whether it's the classic Moon Cat, the specialized Toucan or Blood Hedgehog, or the stackable Black Cat—you can significantly increase the value and rarity of your harvests. Happy farming!
            </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-8 text-center text-sm text-gray-500">
        <p>Return to <Link href="/" className="text-[#2B5E3A] hover:underline">Grow a Garden Player</Link></p>
      </footer>
    </div>
  );
}