'use client';

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/examples/nextjs13/route-groups" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/examples/nextjs13/route-groups/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem href="/examples/nextjs13/route-groups/checkout">Checkout</TabNavItem>

      <TabNavItem
        href="/examples/nextjs13/route-groups/blog"
        isActive={'blog' === selectedLayoutSegments}
      >
        Blog
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
