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
  { href: '/contact', labelKey: 'contact' },
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
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo/logo.png"
              alt="Kingswell Education"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className={cn('hidden sm:block', isRTL && 'text-right')}>
            <span className={cn(
              'font-display text-lg font-semibold text-primary block leading-tight',
              isRTL && 'font-arabic'
            )}>
              Kingswell
            </span>
            <span className={cn(
              'text-xs text-text-muted tracking-wide',
              isRTL && 'font-arabic'
            )}>
              Education
            </span>
          </div>
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
          {/* Language Switcher */}
          <div className="relative" ref={langMenuRef}>
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[72px] bg-white shadow-lg',
          'transition-all duration-300 ease-out-expo overflow-hidden',
          isMobileMenuOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className={cn('container-custom py-6 space-y-4', isRTL && 'text-right')}>
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block py-3 px-4 text-lg font-medium rounded-lg',
                'transition-all duration-200',
                pathname === item.href
                  ? 'bg-primary text-white'
                  : 'text-primary hover:bg-cream'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link
              href="/contact"
              className="btn-primary w-full text-center"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
