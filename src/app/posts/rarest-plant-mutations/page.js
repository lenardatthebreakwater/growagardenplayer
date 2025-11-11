import React from 'react';

export default function BlogPost() {
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
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">All Posts</a>
            <a href="#" className="text-[#2B5E3A] font-semibold text-sm hover:text-[#7CBA5A]">Guides</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Tips & Tricks</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">News & Updates</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Community</a>
            <a href="#" className="text-[#4A4A4A] text-sm hover:text-[#2B5E3A]">Other Roblox Games</a>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <article>
          <div className="mb-8">
            <div className="text-sm text-[#4A4A4A] mb-4">
              <a href="#" className="hover:text-[#2B5E3A]">← Back to All Posts</a>
            </div>
            <h1 className="text-5xl font-bold text-[#2B5E3A] mb-4 leading-tight">
              Rarest Mutations in Grow a Garden
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#4A4A4A]">
              <span>Thursday, October 16, 2025</span>
              <span>•</span>
              <span className="text-[#7CBA5A] font-semibold">Guides</span>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="bg-gradient-to-br from-[#7CBA5A] to-[#89CFF0] h-96 flex items-center justify-center text-8xl mb-12 rounded">
            ✨
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              In <em>Grow a Garden</em>, players grow fruits and sell them for <strong>sheckels</strong>, which is the game's main currency. You can increase your fruit's value by making it larger (higher in kilograms) and by applying <strong>mutations</strong>. Mutations can be triggered by weather events, pets, or certain cosmetics. Some are common, while others are so rare that only a few players have ever seen them.
            </p>

            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-12">
              Here are what I think are the <strong>rarest mutations</strong> in <em>Grow a Garden</em>:
            </p>

            {/* Mutation 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2B5E3A] mb-6">1. Starised</h2>
              
              <div className="bg-gradient-to-br from-[#2B5E3A] to-[#4A4A4A] h-64 flex items-center justify-center text-7xl mb-6 rounded">
                ⭐
              </div>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The <strong>Starised</strong> mutation is the rarest in <em>Grow a Garden</em> and has the highest multiplier for a single mutation with a <strong>230x</strong> value.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                To get it, four players must jump onto the <strong>highest asteroid</strong> during the <em>Space Travel</em> weather event. Once they do, everything starts falling, and there's a <strong>0.4% chance</strong> that the Starised mutation will apply to all players' gardens in that server.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed">
                What makes this mutation so hard to get is the amount of coordination needed. The asteroids are <strong>very high up and far apart</strong>, and the event itself is <strong>time-limited</strong>. It's believed that <strong>all four players must be on the top asteroid at the same time</strong> for the mutation to trigger. Because of this, Starised is considered the rarest mutation in the entire game.
              </p>
            </div>

            {/* Mutation 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2B5E3A] mb-6">2. Dawnbound</h2>
              
              <div className="bg-gradient-to-br from-[#FFD76F] to-[#F28B8B] h-64 flex items-center justify-center text-7xl mb-6 rounded">
                ☀️
              </div>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The <strong>Dawnbound</strong> mutation gives a <strong>150x multiplier</strong> and can be obtained in two ways:
              </p>

              <ul className="list-disc list-inside text-[#4A4A4A] leading-relaxed mb-4 space-y-2">
                <li>From a <strong>pet with the Ascended mutation</strong></li>
                <li>During the <strong>Sun God</strong> weather event</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                In the Sun God weather, four players must each hold a <strong>Sunflower</strong>. Once they do, the Dawnbound mutation will apply to all four Sunflowers.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed">
                Getting Dawnbound through the <strong>Ascended pet</strong> is even rarer. This pet's ability activates only once every <strong>six hours</strong> and has a <strong>75.20% chance</strong> to apply the Dawnbound mutation to a random fruit in your garden. Even then, it's not guaranteed, making this method very time-consuming.
              </p>
            </div>

            {/* Mutation 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2B5E3A] mb-6">3. Ascended Chakra</h2>
              
              <div className="bg-gradient-to-br from-[#C5B9D4] to-[#89CFF0] h-64 flex items-center justify-center text-7xl mb-6 rounded">
                🔮
              </div>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The <strong>Ascended Chakra</strong> mutation comes from combining several other rare mutations.
              </p>

              <ul className="list-disc list-inside text-[#4A4A4A] leading-relaxed mb-4 space-y-2">
                <li><strong>Harmonized Chakra</strong> = Corrupted Chakra + Chakra</li>
                <li><strong>Harmonized Foxfire Chakra</strong> = Corrupted Foxfire Chakra + Foxfire Chakra</li>
                <li><strong>Ascended Chakra</strong> = Harmonized Chakra + Harmonized Foxfire Chakra</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The <strong>Kitsune</strong> pet provides the Chakra and Foxfire Chakra mutations, while the <strong>Corrupted Kitsune</strong> gives the corrupted versions.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed">
                Because you need both the normal and corrupted Kitsune pets, plus multiple mutation combinations, Ascended Chakra is one of the hardest mutations to obtain. The normal Kitsune is also one of the rarest and most expensive pets in the game, which adds to the challenge.
              </p>
            </div>

            {/* Mutation 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2B5E3A] mb-6">4. Ancient Amber</h2>
              
              <div className="bg-gradient-to-br from-[#FFD76F] to-[#D4816F] h-64 flex items-center justify-center text-7xl mb-6 rounded">
                🟡
              </div>

              <p className="text-[#4A4A4A] leading-relaxed italic">
                (This section is still unfinished. Placeholder for now.)
              </p>
            </div>

            {/* Mutation 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2B5E3A] mb-6">5. Friendbound</h2>
              
              <div className="bg-gradient-to-br from-[#F28B8B] to-[#C5B9D4] h-64 flex items-center justify-center text-7xl mb-6 rounded">
                💝
              </div>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Among all the rare mutations, <strong>Friendbound</strong> might be the trickiest to get. It has a <strong>70x multiplier</strong> and requires teamwork, patience, and good communication.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                To start, you need to buy a <strong>Friendship Pot</strong> from the Gear Shop. Stand near another player and press <strong>E</strong> to send them a request. If they accept, you both receive a Friendship Pot. Each of you must place it in your own gardens.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Then, visit each other's gardens daily and press <strong>E</strong> near the other player's pot to <strong>tend</strong> it. You can only do this once every 24 hours. Each successful tending adds to your <strong>streak</strong>, which tracks how many consecutive days you've both maintained the bond.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                If either player <strong>misses a day</strong>, the streak will <strong>reset completely</strong>. When that happens, you'll need to <strong>buy a new Friendship Pot</strong> to start over. The only way to <strong>restore your streak</strong> is by spending <strong>Robux</strong>.
              </p>

              <p className="text-[#4A4A4A] leading-relaxed">
                Once you've kept your streak long enough (some players say around <strong>30 days</strong>), you can try the next step. You'll need <strong>four connected players in your server and one more waiting in line</strong>, since <em>Grow a Garden</em> servers can hold a maximum of five players. When this setup is complete, the <strong>Friendbound mutation</strong> can start applying to your fruits.
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <div className="border-t border-[#E8E8E8] pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button className="bg-[#7CBA5A] text-white px-6 py-2 text-sm font-semibold hover:bg-[#6AA94B] transition-colors">
                  Share
                </button>
                <button className="bg-[#E8E8E8] text-[#4A4A4A] px-6 py-2 text-sm font-semibold hover:bg-[#D8D8D8] transition-colors">
                  Bookmark
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#2B5E3A] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#" className="bg-white hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#7CBA5A] to-[#89CFF0] h-40 flex items-center justify-center text-5xl">
                  🎃
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#2B5E3A] mb-2">Halloween Event Guide</h4>
                  <p className="text-sm text-[#4A4A4A]">Everything you need to know about the spooky season.</p>
                </div>
              </a>
              <a href="#" className="bg-white hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FFD76F] to-[#F28B8B] h-40 flex items-center justify-center text-5xl">
                  💰
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#2B5E3A] mb-2">Money-Making Tips</h4>
                  <p className="text-sm text-[#4A4A4A]">The best strategies to earn sheckels fast.</p>
                </div>
              </a>
              <a href="#" className="bg-white hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#C5B9D4] to-[#89CFF0] h-40 flex items-center justify-center text-5xl">
                  🐾
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#2B5E3A] mb-2">Complete Pet Guide</h4>
                  <p className="text-sm text-[#4A4A4A]">Learn about all pets and their abilities.</p>
                </div>
              </a>
            </div>
          </div>
        </article>
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