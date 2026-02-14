'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  FileText,
  Layout,
  BarChart3,
  Bot,
  Globe,
  CreditCard,
  Settings,
  HelpCircle,
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Pages', href: '/dashboard/pages', icon: FileText },
  { name: 'Templates', href: '/dashboard/templates', icon: Layout },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'AI Assistant', href: '/dashboard/ai', icon: Bot },
  { name: 'Domains', href: '/dashboard/domains', icon: Globe },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const bottomNav = [{ name: 'Support', href: '/dashboard/support', icon: HelpCircle }];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-muted/50">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="text-lg font-bold">
          Kashpages
        </Link>
      </div>
      <nav className="flex flex-col justify-between h-[calc(100vh-4rem)]">
        <div className="space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="space-y-1 p-4 border-t">
          {bottomNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}