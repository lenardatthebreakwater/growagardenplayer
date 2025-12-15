import Link from 'next/link';

const Card = ({ children, className }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-gray-100 text-gray-700';
  if (variant === 'guides' || variant === 'Guides') colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'note') colorClasses = 'bg-blue-100 text-blue-700';
  if (variant === 'tip') colorClasses = 'bg-pink-100 text-pink-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

const articleData = {
  slug: "grow-a-garden-pets-that-give-xp",
  title: "Best Grow a Garden Pets That Give XP",
  description: "Find out the best Grow a Garden pets that give XP to other pets for faster leveling.",
  datePublished: "2025-12-08T13:00:00Z",
  dateModified: "2025-12-08T13:00:00Z",
  authorName: "Lenard Esplana Perilla",
  image: "/images/xp-pets-header.jpg", 
  category: "Guides",
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const metadata = {
  title: articleData.title,
  description: articleData.description,
  keywords: ['grow a garden pets that give xp'],
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

export default function ArticlePage() {
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
                In Grow a Garden, one of the most enjoyable things to do is level up pets and mutate them using the Mutation Machine or the Headless Horseman. Not only is it exciting to see what random mutation your pet gets, but certain mutations can also increase the pet’s value.
            </p>

            <p>
                To level up a pet, simply place it in your garden and make sure to feed it when it gets hungry. Over time, it will accumulate enough experience points (XP) to grow in age. Pets continue gaining XP even while you’re offline, but it can still take quite a while to reach higher levels.
            </p>

            <p>
                The good news is that several pets in the game have abilities that grant XP to other pets, making the leveling process much faster. In this article, I’ve listed the best ones.
            </p>

            <Separator className="my-10" />

            <h2 id="capybara" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">1. Capybara 🐹</h2>
            
            <ArticleImage 
                src="/images/capybara.jpg" 
                alt="The Capybara pet in Grow a Garden, often used for XP farming due to its area-of-effect ability." 
                caption="The adorable and highly functional Capybara."
            />
            
            <p>
                The first pet on this list is the most widely used for XP farming. The Capybara is not only incredibly useful but also one of the most adorable pets in the game.
            </p>
            <p>
                The Capybara’s ability makes all nearby pets stop losing hunger and gain a certain amount of XP every second. A Capybara with a weight of 1 kg at age 1 gives 3.3 XP per second to all pets within 14.75 studs. When leveled up to age 100, its weight increases to 10 kg, and its ability gives 6 XP per second to all pets within 17 studs.
            </p>
            <p>
                The cap on the Capybara’s ability is 30 XP per second, though its radius has no limit. To reach the 30 XP/sec cap, you’ll need to hatch a 9 kg Capybara at age 1 Godly and level it up to age 100.
            </p>
            
            <Card className="p-4 my-6 bg-gray-50 border-gray-200">
                <Badge variant="note" className="mb-2">Note on Pet Weight</Badge>
                <p className="text-sm text-gray-700">
                    Pets hatched from eggs can be born as Huge (5–6.9 kg), Semi-Titanic (7–7.4 kg), Titanic (7.5–8.9 kg), or Godly (9+ kg).
                </p>
            </Card>

            <p>
                Capybaras can be obtained through trading or by hatching a Paradise Egg. The Paradise Egg is sold by the Summer Seed Merchant, one of the rotating merchants that appears every four hours.
            </p>

            <Card className="p-4 my-6 bg-pink-50 border-pink-200">
                <Badge variant="tip" className="mb-2">Pro Tip</Badge>
                <p className="text-sm text-gray-700">
                    Capybaras work best when paired with the Pancake Stack cosmetic, since it attracts pets toward it. Unfortunately, as of this writing, the Pancake Stack cosmetic is no longer obtainable.
                </p>
            </Card>

            <h2 id="blood-owl" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">2. Blood Owl 🦉</h2>

            <ArticleImage 
                src="/images/blood-owl.jpg" 
                alt="The Blood Owl pet in Grow a Garden, recognized for its ability to grant XP to all active pets regardless of distance." 
                caption="The Blood Owl offers global XP generation."
            />

            <p>
                The Blood Owl is the original go-to pet for XP farming. It is one of five owl pets currently in the game. The other four are the Owl, Night Owl, Cooked Owl, and Barn Owl, all of which give XP, with some offering additional abilities.
            </p>
            <p>
                The Blood Owl’s ability makes all active pets gain additional XP per second. Blood Owls don’t come from eggs but from an event shop released before the Barn Owl, which is why their maximum weight at age 1 is only 1.3 kg (or 13 kg at age 100).
            </p>

            <Card className="p-4 my-6 bg-gray-50 border-gray-200">
                <Badge variant="note" className="mb-2">Note on Store Pets</Badge>
                <p className="text-sm text-gray-700">
                    Unlike pets hatched from eggs, store pets can only reach up to 1.3 kg at age 1. With Barn Owls, this can increase to 4.3 kg.
                </p>
            </Card>
            
            <p>
                A Blood Owl with 1 kg at age 1 lets all active pets gain an additional 0.58 XP per second. At age 100, it reaches 10 kg and lets them gain 1.30 XP per second. Meanwhile, a Blood Owl with a 1.3 kg weight at age 1 lets all active pets gain 0.60 XP per second. At age 100, it reaches 13 kg and lets them gain 1.54 XP per second.
            </p>
            <p>
                The Blood Owl provides less XP compared to the Capybara, but its major advantage is that its ability affects all pets in the garden, regardless of distance, unlike the Capybara’s area-limited effect.
            </p>
            <p>
                As of this writing, the only way to obtain a Blood Owl is through trading.
            </p>

            <h2 id="dilophosaurus" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">3. Dilophosaurus 🦖</h2>

            <ArticleImage 
                src="/images/dilophosaurus.jpg" 
                alt="The Dilophosaurus pet in Grow a Garden spitting venom, which advances cooldowns or grants large bursts of XP to nearby pets." 
                caption="The Dilophosaurus spits venom for burst XP and cooldown reduction."
            />

            <p>
                The Dilophosaurus is a fan favorite and one of the best dino pets in the game. Its ability allows it to open its frills and spit venom. The venom spreads to other random pets, advancing cooldowns or granting XP.
            </p>
            <p>
                A Dilophosaurus with a 1 kg weight at age 1 opens its frills and spits venom every 13 minutes and 57 seconds. The venom spreads to around 3.20 random pets, advancing cooldowns by 40.25 seconds or granting 540 XP.
            </p>
            <p>
                At age 100, it reaches 10 kg and now opens its frills every 12 minutes and 41 seconds. The venom spreads to 5 random pets, advancing cooldowns by 42.50 seconds or granting 900 XP.
            </p>
            <p>
                The XP, cooldown reduction, and ability cooldown of the Dilophosaurus have no cap. The only limit is the number of pets affected, which is capped at 5, and this cap can already be reached if the Dilophosaurus hatched with 1 kg at age 1.
            </p>
            <p>
                As of this writing, the only way to obtain a Dilophosaurus is through trading.
            </p>

            <h2 id="wisp" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">4. Wisp ✨</h2>

            <ArticleImage 
                src="/images/wisp.jpg" 
                alt="The Wisp pet flying near a Wisp Well cosmetic, which grants additional XP per second to all pets." 
                caption="The Wisp requires the Wisp Well cosmetic to activate its XP boost."
            />
            
            <p>
                Last but not least is the Wisp, the most recent pet included in this list. This pet is similar to the Blood Owl, not only in its ability but also in the fact that it came from an event shop. Just like the Blood Owl, the Wisp was released before the Barn Owl, making its maximum weight at age 1 only 1.3 kg.
            </p>
            <p>
                The Wisp’s ability works as long as you have a Wisp Well in your garden. When active, the Wisp visits the well and grants all pets additional XP per second.
            </p>
            <p>
                A Wisp with 1 kg at age 1 grants 0.74 XP per second. At age 100, it reaches 10 kg and grants 1.64 XP per second. Meanwhile, a Wisp with 1.3 kg at age 1 grants 0.77 XP per second. At age 100, it reaches 13 kg and grants 1.94 XP per second.
            </p>
            <p>
                The Wisp is a slightly improved version of the Blood Owl; however, for its ability to work, you must have the Wisp Well cosmetic placed in your garden. Players who do not own the Wisp Well will not be able to use this pet’s ability.
            </p>
            <p>
                As of now, the Wisp can only be obtained through trading.
            </p>

            <Separator className="my-10" />

            <h2 id="final-thoughts" className="text-3xl font-bold text-[#2B5E3A] mt-10 mb-6">Final Thoughts</h2>
            <p>
                These pets make XP farming much easier in Grow a Garden, especially if you prefer to level up passively while offline. Whether you’re using a Capybara for maximum XP, a Blood Owl for full-garden coverage, or a Wisp for that extra boost, all of them are great long-term investments for any player.
            </p>
        </article>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 p-8 text-center text-sm text-gray-500">
        <p>Return to <Link href="/" className="text-[#2B5E3A] hover:underline">Grow a Garden Player</Link></p>
      </footer>
    </div>
  );
}