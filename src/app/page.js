import { Metadata } from 'next';
import Link from 'next/link';

// NOTE: In a real project, you would install and import these from 'components/ui/'
// We're using functional placeholders here for clarity and simplicity.
const Card = ({ children, className }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all ${className}`}>{children}</div>;
const CardContent = ({ children, className }) => <div className={`p-6 ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className }) => {
  let colorClasses = 'bg-gray-100 text-gray-700';
  if (variant === 'news') colorClasses = 'bg-red-100 text-red-700';
  if (variant === 'guides') colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'tips') colorClasses = 'bg-blue-100 text-blue-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Button = ({ children, className }) => <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 ${className}`}>{children}</button>;
const Separator = ({ className }) => <div className={`bg-gray-200 h-px ${className}`} />;

// --- Article Data (Reduced to 6) ---
const posts = [
  {
    slug: "complete-guide-rare-flowers-season-5",
    title: "Complete Guide to Rare Flowers in Season 5",
    date: "2025-10-15",
    category: "Guides",
    image: "🌺"
  },
  {
    slug: "best-money-making-strategies-for-beginners",
    title: "Best Money-Making Strategies for Beginners",
    date: "2025-10-12",
    category: "Tips & Tricks",
    image: "💰"
  },
  {
    slug: "new-halloween-event-everything-you-need-to-know",
    title: "New Halloween Event: Everything You Need to Know",
    date: "2025-10-10",
    category: "News & Updates",
    image: "🎃"
  },
  {
    slug: "top-10-most-valuable-plants-to-grow",
    title: "Top 10 Most Valuable Plants to Grow",
    date: "2025-10-08",
    category: "Guides",
    image: "🌻"
  },
  {
    slug: "how-to-unlock-all-secret-garden-areas",
    title: "How to Unlock All Secret Garden Areas",
    date: "2025-10-06",
    category: "Guides",
    image: "🗝️"
  },
  {
    slug: "essential-tools-every-gardener-should-have",
    title: "Essential Tools Every Gardener Should Have",
    date: "2025-10-04",
    category: "Tips & Tricks",
    image: "🛠️"
  }
];

// Helper to format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Helper to determine Badge variant based on category
const getBadgeVariant = (category) => {
  if (category.includes('News')) return 'news';
  if (category.includes('Guide')) return 'guides';
  if (category.includes('Tip')) return 'tips';
  return 'default';
};

// --- SEO Metadata ---
// This is automatically handled by the Next.js App Router
export const metadata = {
  title: 'GardenHub | Guides, Tips & News for Grow a Garden Players',
  description: 'Your ultimate resource for Grow a Garden guides, tips, and the latest news for all Roblox players. Get the best strategies for planting and earning!',
  keywords: ['Grow a Garden', 'Roblox', 'Guide', 'Tips', 'News', 'Gardening Game'],
  openGraph: {
    title: 'GardenHub | Grow a Garden Guides & Tips',
    description: 'The best strategies and news for the Roblox game Grow a Garden.',
    url: 'https://www.yourdomain.com/', // Change this
    siteName: 'GardenHub',
    images: [
      {
        url: 'https://www.yourdomain.com/og-image.jpg', // Change this
        width: 1200,
        height: 630,
        alt: 'GardenHub Logo and banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// --- JSON-LD Structured Data ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GardenHub',
  url: 'https://www.yourdomain.com/', // Change this
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.yourdomain.com/search?q={search_term_string}', // Change this
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GardenHub',
  },
};

export default function Homepage() {
  return (
    // Semantic HTML: Use <div> for global container, <header>, <main>, <nav>, <footer>
    // Next.js handles the <html>, <head>, and <body> from the `layout.jsx`
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header (Semantic) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="GardenHub Home">
            <div className="w-10 h-10 bg-[#7CBA5A] rounded-full flex items-center justify-center text-2xl" aria-hidden="true">
              🌱
            </div>
            <p className="text-2xl font-extrabold text-[#2B5E3A]">
              Garden<span className="text-gray-800 font-semibold">Hub</span>
            </p>
          </Link>
          <div className="flex items-center gap-6">
            {/* Semantic Link: Use <Link> for client-side navigation */}
            <Link href="/" className="text-gray-600 hover:text-[#2B5E3A] text-sm font-medium hidden sm:block">Garden Hub</Link>
            <Link href="/search" className="text-gray-600 hover:text-[#2B5E3A] text-sm font-medium flex items-center gap-1">
              Search <span aria-hidden="true">🔍</span>
            </Link>
            <Button className="hidden md:block bg-[#2B5E3A] hover:bg-[#1A3B2A]">
              Join Discord
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation (Semantic) */}
      <nav className="bg-white border-b border-gray-200" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="text-[#2B5E3A] font-semibold text-sm py-3 border-b-2 border-[#2B5E3A]">All Posts</Link>
            <Link href="/category/guides" className="text-gray-600 text-sm py-3 hover:text-[#2B5E3A] border-b-2 border-transparent hover:border-gray-200">Guides</Link>
            <Link href="/category/tips" className="text-gray-600 text-sm py-3 hover:text-[#2B5E3A] border-b-2 border-transparent hover:border-gray-200">Tips & Tricks</Link>
            <Link href="/category/news" className="text-gray-600 text-sm py-3 hover:text-[#2B5E3A] border-b-2 border-transparent hover:border-gray-200">News & Updates</Link>
            <Link href="/category/community" className="text-gray-600 text-sm py-3 hover:text-[#2B5E3A] border-b-2 border-transparent hover:border-gray-200">Community</Link>
          </div>
        </div>
      </nav>

      {/* Main Content (Semantic) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Semantic H1 */}
        <h1 className="text-5xl font-extrabold text-[#2B5E3A] mb-4 tracking-tight">
          Welcome to GardenHub
        </h1>
        {/* SEO-friendly subtitle/description */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          The ultimate resource for **Grow a Garden** enthusiasts. Find the latest **guides**, **tips**, and **news** to cultivate your best farm!
        </p>

        <Separator className="mb-12"/>
        
        {/* Semantic: Articles section */}
        <section aria-labelledby="latest-articles-heading">
            <h2 id="latest-articles-heading" className="text-3xl font-bold text-gray-800 mb-8">
                Latest Articles
            </h2>
            
            {/* Posts Grid (Responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                // Semantic HTML: Use <article> for independent content blocks (like blog posts)
                <article key={index}>
                    <Card>
                        {/* Image/Emoji Placeholder */}
                        <Link href={`/articles/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                            <div className="aspect-[16/9] bg-gradient-to-br from-[#7CBA5A] to-[#89CFF0] flex items-center justify-center text-7xl" role="img" aria-label={`Image related to ${post.category}`}>
                                {post.image}
                            </div>
                        </Link>
                        
                        <CardContent>
                            <div className="flex justify-between items-center mb-3">
                                <Badge variant={getBadgeVariant(post.category)}>{post.category}</Badge>
                                <time dateTime={post.date} className="text-xs text-gray-500 font-medium">
                                    {formatDate(post.date)}
                                </time>
                            </div>
                            
                            {/* Semantic H2 */}
                            <h2 className="text-xl font-bold text-[#2B5E3A] leading-snug hover:text-[#7CBA5A] transition-colors">
                                <Link href={`/articles/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-[#7CBA5A] focus:ring-offset-2 rounded-sm block">
                                    {post.title}
                                </Link>
                            </h2>
                        </CardContent>
                    </Card>
                </article>
            ))}
            </div>
        </section>
        
        {/* Removed "Load More" button as requested */}
      </main>

      {/* Footer (Semantic) */}
      <footer className="bg-white border-t border-gray-200 mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
            Your ultimate resource for Grow a Garden guides, tips, and the best content for Roblox gamers.
          </p>
          
          {/* Semantic: Use <nav> for footer links */}
          <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8 text-sm" aria-label="Footer Navigation">
            <Link href="/search" className="text-gray-600 hover:text-[#2B5E3A]">Search</Link>
            <Link href="/" className="text-gray-600 hover:text-[#2B5E3A]">Garden Hub</Link>
            <Link href="/about" className="text-gray-600 hover:text-[#2B5E3A]">About</Link>
            <Link href="/rss" className="text-gray-600 hover:text-[#2B5E3A]">RSS Feed</Link>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2B5E3A]">Twitter</a>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2B5E3A]">Discord</a>
          </nav>

          <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
            <label htmlFor="theme-select">Choose a theme:</label>
            <select id="theme-select" className="border border-gray-300 px-3 py-1 text-sm rounded-md">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} GardenHub. All rights reserved. Not affiliated with Roblox or Grow a Garden.
          </p>
        </div>
      </footer>
    </div>
  );
}