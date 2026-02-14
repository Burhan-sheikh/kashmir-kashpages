// User Types
export type UserRole = 'guest' | 'user' | 'admin';

export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
  plan: SubscriptionPlan;
  createdAt: string;
  updatedAt: string;
}

// Subscription Types
export type SubscriptionPlan = 'free' | 'starter' | 'business';

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: 'active' | 'canceled' | 'past_due' | 'paused';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  provider: 'cashfree' | 'razorpay';
  subscriptionId: string;
  createdAt: string;
  updatedAt: string;
}

// Page Types
export type PageStatus = 'draft' | 'published' | 'pending' | 'archived';

export interface Page {
  id: string;
  userId: string;
  name: string;
  slug: string;
  templateId: string;
  status: PageStatus;
  schema: PageSchema;
  seo: SEOMetadata;
  aiEnabled: boolean;
  aiConfig?: AIConfig;
  customDomain?: string;
  domainStatus?: DomainStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface PageSchema {
  sections: Section[];
  theme?: ThemeConfig;
}

export interface Section {
  id: string;
  type: SectionType;
  order: number;
  visible: boolean;
  data: Record<string, any>;
}

export type SectionType =
  | 'hero'
  | 'features'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'gallery'
  | 'contact'
  | 'footer'
  | 'stats'
  | 'team'
  | 'process'
  | 'cta';

export interface SEOMetadata {
  title: string;
  description: string;
  ogImage?: string;
  tags: string[];
  canonical?: string;
}

export interface ThemeConfig {
  primaryColor?: string;
  fontFamily?: string;
}

// AI Types
export interface AIConfig {
  enabled: boolean;
  businessOverview?: string;
  services?: string[];
  pricingLogic?: string;
  policies?: string;
  contactPreference?: string;
  extraInstructions?: string;
}

// Template Types
export type TemplateCategory =
  | 'agency'
  | 'ecommerce'
  | 'landing'
  | 'nonprofit'
  | 'portfolio'
  | 'saas'
  | 'services';

export interface Template {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  thumbnail: string;
  schema: PageSchema;
  planRequired: SubscriptionPlan;
  featured: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Domain Types
export type DomainStatus =
  | 'pending_dns'
  | 'verifying'
  | 'verified'
  | 'ssl_pending'
  | 'live'
  | 'failed';

export interface CustomDomain {
  id: string;
  userId: string;
  pageId: string;
  domain: string;
  status: DomainStatus;
  dnsRecords: DNSRecord[];
  verificationToken: string;
  sslStatus: 'pending' | 'active' | 'failed';
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string;
}

export interface DNSRecord {
  type: 'A' | 'CNAME' | 'TXT';
  name: string;
  value: string;
  verified: boolean;
}

// Analytics Types
export interface PageAnalytics {
  pageId: string;
  views: number;
  uniqueVisitors: number;
  avgTimeOnPage: number;
  bounceRate: number;
  topReferrers: Referrer[];
  period: 'day' | 'week' | 'month';
  timestamp: string;
}

export interface Referrer {
  source: string;
  count: number;
}

// Revision Types
export interface PageRevision {
  id: string;
  pageId: string;
  userId: string;
  schema: PageSchema;
  message?: string;
  createdAt: string;
}

// Contact Types
export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  map?: MapConfig;
  whatsapp?: string;
  socials?: SocialLinks;
}

export interface MapConfig {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

// Admin Types
export interface AdminAction {
  id: string;
  adminId: string;
  action: string;
  targetType: 'user' | 'page' | 'domain' | 'subscription';
  targetId: string;
  reason?: string;
  metadata: Record<string, any>;
  createdAt: string;
}

export interface PlatformStats {
  totalUsers: number;
  totalPages: number;
  publishedPages: number;
  activeSubscriptions: number;
  revenue: number;
  period: string;
  timestamp: string;
}