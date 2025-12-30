'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'All Posts', href: '/' },
  { name: 'Guides', href: '/category/guides' },
  { name: 'Pets', href: '/category/pets' },
  { name: 'Plants', href: '/category/plants' },
  { name: 'Others', href: '/category/others' },
];

export default function NavigationTabs() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-gray-200" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-sm py-3 border-b-2 transition-colors ${
                isActive(tab.href)
                  ? 'text-[#2B5E3A] font-semibold border-[#2B5E3A]'
                  : 'text-gray-600 border-transparent hover:text-[#2B5E3A] hover:border-gray-200'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}