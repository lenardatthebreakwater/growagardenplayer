import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import NavigationTabs from '@/app/components/NavigationTabs';
import FuzzySearch from '@/app/components/FuzzySearch';
import allPosts from '@/app/data/posts.js';

const Card = ({ children, className = '' }) => <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all ${className}`}>{children}</div>;
const CardContent = ({ children, className = '' }) => <div className={`p-6 ${className}`}>{children}</div>;
const Badge = ({ children, variant = 'default', className = '' }) => {
  let colorClasses = 'bg-gray-100 text-gray-700';
  if (variant === 'guides' || variant === 'Guides') colorClasses = 'bg-green-100 text-green-700';
  if (variant === 'pets' || variant === 'Pets') colorClasses = 'bg-blue-100 text-blue-700';
  if (variant === 'plants' || variant === 'Plants') colorClasses = 'bg-purple-100 text-purple-700';
  if (variant === 'others' || variant === 'Others') colorClasses = 'bg-orange-100 text-orange-700';
  return <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${colorClasses} ${className}`}>{children}</span>;
};
const Separator = ({ className = '' }) => <div className={`bg-gray-200 h-px ${className}`} />;

export async function generateMetadata({ params }) {
  const categoryParams = await params;
  const categoryName = categoryParams.category.charAt(0).toUpperCase() + categoryParams.category.slice(1);
  
  return {
    title: `${categoryName} - Grow a Garden Player | Guides & Tips`,
    description: `Browse all ${categoryName.toLowerCase()} articles for Grow a Garden. Find the best guides, tips, and expert strategies to improve your gameplay.`,
    metadataBase: new URL('https://www.growagardenplayer.com'),
    alternates: {
      canonical: `/category/${categoryParams.category}`,
    },
    openGraph: {
      title: `${categoryName} - Grow a Garden Player`,
      description: `Browse all ${categoryName.toLowerCase()} articles for Grow a Garden. Expert guides and tips for Roblox players.`,
      url: `https://www.growagardenplayer.com/category/${categoryParams.category}`,
    },
  };
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const getBadgeVariant = (category) => {
  return category.toLowerCase();
};

export default async function CategoryPage({ params }) {
  const categoryParams = await params;
  const categoryName = categoryParams.category.charAt(0).toUpperCase() + categoryParams.category.slice(1);
  
  // Filter posts by category
  const filteredPosts = allPosts.filter(post => 
    post.category.toLowerCase() === categoryParams.category.toLowerCase()
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} - Grow a Garden Player`,
    url: `https://www.growagardenplayer.com/category/${categoryParams.category}`,
    description: `Browse all ${categoryName.toLowerCase()} articles for Grow a Garden.`,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Grow a Garden Player Home">
            <div className="w-10 h-10 bg-[#7CBA5A] rounded-full flex items-center justify-center text-2xl" aria-hidden="true">
              🌱
            </div>
            <p className="text-2xl font-extrabold text-[#2B5E3A]">
              Grow a Garden Player
            </p>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-[#2B5E3A] text-sm font-medium hidden sm:block">Grow a Garden Player</Link>
            <FuzzySearch posts={allPosts} />
          </div>
        </div>
      </header>

      <NavigationTabs />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-[#2B5E3A] mb-4 tracking-tight">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600">
            Browse all {categoryName.toLowerCase()} articles and guides for Grow a Garden
          </p>
        </div>

        <Separator className="mb-12"/>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">No articles found in this category yet.</p>
            <Link href="/" className="text-[#2B5E3A] hover:text-[#7CBA5A] font-medium">
              ← Back to all posts
            </Link>
          </div>
        ) : (
          <section aria-labelledby="category-articles-heading">
            <h2 id="category-articles-heading" className="text-3xl font-bold text-gray-800 mb-8">
              {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={index}>
                  <Card>
                    <Link href={`/posts/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    </Link>
                    
                    <CardContent>
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant={getBadgeVariant(post.category)}>{post.category}</Badge>
                        <time dateTime={post.date} className="text-xs text-gray-500 font-medium">
                          {formatDate(post.date)}
                        </time>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#2B5E3A] leading-snug hover:text-[#7CBA5A] transition-colors">
                        <Link href={`/posts/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-[#7CBA5A] focus:ring-offset-2 rounded-sm block">
                          {post.title}
                        </Link>
                      </h2>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
            Your ultimate resource for Grow a Garden guides, tips, and the best content for Roblox gamers.
          </p>
          
          <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8 text-sm" aria-label="Footer Navigation">
            <Link href="/" className="text-gray-600 hover:text-[#2B5E3A]">Grow a Garden Player</Link>
            <Link href="/about" className="text-gray-600 hover:text-[#2B5E3A]">About</Link>
            <Link href="YOUR_LINKEDIN_URL_HERE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2B5E3A] flex items-center gap-1">
              LinkedIn <span aria-hidden="true">💼</span>
            </Link>
          </nav>
          
          <p className="text-center text-xs text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Grow a Garden Player. All rights reserved. Not affiliated with Roblox or Grow a Garden.
          </p>
        </div>
      </footer>
    </div>
  );
}