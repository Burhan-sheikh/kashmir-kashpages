'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth/auth-context';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DashboardHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div />
      <div className="flex items-center gap-4">
        <Link href="/dashboard/pages/new">
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Page
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:opacity-80 transition-opacity">
              {user?.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || ''} className="h-8 w-8 rounded-full" />
              ) : (
                <span className="text-sm font-medium">{user?.displayName?.charAt(0) || 'U'}</span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.displayName}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/billing">Billing</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}