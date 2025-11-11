export default function Homepage() {
  const posts = [
    {
      title: "Complete Guide to Rare Flowers in Season 5",
      date: "Thursday, October 15, 2025",
      category: "Guides",
      image: "🌺"
    },
    {
      title: "Best Money-Making Strategies for Beginners",
      date: "Saturday, October 12, 2025",
      category: "Tips",
      image: "💰"
    },
    {
      title: "New Halloween Event: Everything You Need to Know",
      date: "Thursday, October 10, 2025",
      category: "News",
      image: "🎃"
    },
    {
      title: "Top 10 Most Valuable Plants to Grow",
      date: "Tuesday, October 8, 2025",
      category: "Guides",
      image: "🌻"
    },
    {
      title: "How to Unlock All Secret Garden Areas",
      date: "Sunday, October 6, 2025",
      category: "Guides",
      image: "🗝️"
    },
    {
      title: "Essential Tools Every Gardener Should Have",
      date: "Friday, October 4, 2025",
      category: "Tips",
      image: "🛠️"
    },
    {
      title: "Interview with Top Grow a Garden Players",
      date: "Wednesday, October 2, 2025",
      category: "Community",
      image: "🎮"
    },
    {
      title: "Upcoming Winter Season: What to Expect",
      date: "Monday, September 30, 2025",
      category: "News",
      image: "❄️"
    },
    {
      title: "Building Your Dream Garden Layout",
      date: "Saturday, September 28, 2025",
      category: "Guides",
      image: "🏡"
    },
    {
      title: "Trading Tips: Getting the Best Deals",
      date: "Thursday, September 26, 2025",
      category: "Tips",
      image: "🤝"
    },
    {
      title: "Complete Pet Guide for Grow a Garden",
      date: "Tuesday, September 24, 2025",
      category: "Guides",
      image: "🐾"
    },
    {
      title: "Quick Start Guide for New Players",
      date: "Sunday, September 22, 2025",
      category: "Guides",
      image: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7CBA5A] flex items-center justify-center text-2xl">
              🌱
            </div>
            <span className="text-2xl font-bold text-[#2B5E3A]">
              Garden<span className="text-[#4A4A4A]">Hub</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A] text-sm font-medium">Garden Hub</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A] text-sm font-medium">Search 🔍</a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 py-4">
            <a href="#" className="text-[#2B5E3A] font-semibold text-sm hover:text-[#7CBA5A]">All Posts</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Guides</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Tips & Tricks</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">News & Updates</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Community</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Other Roblox Games</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#2B5E3A] mb-12">Guides & Tips</h1>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-[#7CBA5A] to-[#89CFF0] h-48 flex items-center justify-center text-6xl">
                {post.image}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#4A4A4A] mb-3 font-medium">
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-[#2B5E3A] leading-tight hover:text-[#7CBA5A] transition-colors">
                  {post.title}
                </h2>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="text-[#F28B8B] font-semibold text-sm hover:text-[#E57373] transition-colors">
            More Stories →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E8E8] mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-[#4A4A4A] text-center mb-8">
            Your ultimate resource for Grow a Garden guides, tips, and Roblox gaming content.
          </p>
          
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">Search</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">Garden Hub</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">About</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">RSS</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">Twitter</a>
            <a href="#" className="text-[#4A4A4A] hover:text-[#2B5E3A]">Discord</a>
          </div>

          <div className="flex justify-center items-center gap-4 text-sm text-[#4A4A4A]">
            <span>Choose a theme:</span>
            <select className="border border-[#E8E8E8] px-3 py-1 text-sm">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}