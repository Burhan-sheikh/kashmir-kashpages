import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold">Kashpages</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:underline">
              Templates
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Create your business presence.
              <br />
              <span className="text-muted-foreground">No code required.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schema-driven platform for serious businesses. Choose a template, customize your content,
              and publish instantly. Governed, secure, and predictable.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="text-base">
                  Start Building
                </Button>
              </Link>
              <Link href="#templates">
                <Button size="lg" variant="outline" className="text-base">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for serious businesses</h2>
            <p className="text-lg text-muted-foreground">
              Professional infrastructure. No experiments. No decoration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Schema-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Strict component system. No arbitrary HTML. No layout destruction. Predictability is the product.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Instant Publishing</h3>
              <p className="text-sm text-muted-foreground">
                Choose template, edit content, publish. Your business page live in minutes.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">AI Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Optional AI-powered business assistant. Custom training. No provider branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 Kashpages. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}