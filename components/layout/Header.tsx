'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/study-in-uk', labelKey: 'studyUK' },
  { href: '/study-in-india', labelKey: 'studyIndia' },
  { href: '/faqs', labelKey: 'faqs' },
];

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const isRTL = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Check scroll position on mount (for page refresh when already scrolled)
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and set data attribute when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-mobile-menu-open', 'true');
    } else {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Kingswell Education"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className={cn(
            'font-display text-base sm:text-xl font-semibold text-primary whitespace-nowrap',
            isRTL && 'font-arabic'
          )}>
            Kingswell Education
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={cn(
          'hidden lg:flex items-center gap-8',
          isRTL && 'flex-row-reverse'
        )}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'nav-link text-sm',
                pathname === item.href && 'text-primary font-semibold'
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className={cn(
          'flex items-center gap-4',
          isRTL && 'flex-row-reverse'
        )}>
          {/* Language Switcher - Desktop Only */}
          <div className="relative hidden lg:block" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium',
                'text-primary/80 hover:text-primary hover:bg-primary/5',
                'transition-colors duration-200'
              )}
              aria-label="Change language"
              aria-expanded={isLangMenuOpen}
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'en' ? 'EN' : 'عربي'}</span>
              <ChevronDown className={cn(
                'w-4 h-4 transition-transform duration-200',
                isLangMenuOpen && 'rotate-180'
              )} />
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div className={cn(
                'absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[120px] z-50',
                'animate-fade-in',
                isRTL ? 'left-0' : 'right-0'
              )}>
                <Link
                  href={pathname}
                  locale="en"
                  onClick={() => setIsLangMenuOpen(false)}
                  className={cn(
                    'block px-4 py-2 text-sm hover:bg-cream transition-colors',
                    locale === 'en' && 'text-accent font-semibold'
                  )}
                >
                  English
                </Link>
                <Link
                  href={pathname}
                  locale="ar"
                  onClick={() => setIsLangMenuOpen(false)}
                  className={cn(
                    'block px-4 py-2 text-sm hover:bg-cream transition-colors font-arabic',
                    locale === 'ar' && 'text-accent font-semibold'
                  )}
                >
                  العربية
                </Link>
              </div>
            )}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            {t('contact')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Page Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-cream">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-32 left-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              'absolute top-5 z-10 p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors',
              isRTL ? 'left-4' : 'right-4'
            )}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          <div className={cn(
            'relative h-full flex flex-col justify-center items-center px-8',
            isRTL && 'text-right'
          )}>
            {/* Logo - Large and Centered */}
            <div className="absolute top-16 left-0 right-0 flex justify-center px-12">
              <div className="relative w-full max-w-[180px] aspect-square opacity-15">
                <Image
                  src="/logo/logo.png"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'relative py-3 px-6 text-2xl font-display font-semibold',
                    'transition-all duration-300 animate-fade-up',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  )}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {t(item.labelKey)}
                  {pathname === item.href && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div
              className="mt-12 animate-fade-up"
              style={{
                animationDelay: `${navItems.length * 80 + 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-lg px-10 py-4"
              >
                {t('contact')}
              </Link>
            </div>

            {/* Language Switcher - Mobile */}
            <div
              className="mt-8 flex items-center gap-4 animate-fade-up"
              style={{
                animationDelay: `${navItems.length * 80 + 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <Link
                href={pathname}
                locale="en"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  locale === 'en'
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                )}
              >
                English
              </Link>
              <Link
                href={pathname}
                locale="ar"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium font-arabic transition-colors',
                  locale === 'ar'
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                )}
              >
                العربية
              </Link>
            </div>

            {/* Bottom tagline */}
            <p
              className="absolute bottom-12 text-sm text-text-muted/60 font-medium tracking-wide animate-fade-up"
              style={{
                animationDelay: `${navItems.length * 80 + 200}ms`,
                animationFillMode: 'both'
              }}
            >
              Education Without Boundaries
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
