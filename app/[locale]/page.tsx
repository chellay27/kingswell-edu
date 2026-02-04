import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import {
  Users,
  BookOpen,
  FileCheck,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { cn, getWhatsAppLink } from '@/lib/utils';
import { ScrollReveal, StaggerReveal, ServiceCard, SectionTitle } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'counseling',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      titleKey: 'selection',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      titleKey: 'application',
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      titleKey: 'guidance',
    },
  ];

  const trustItems = [
    'personalized',
    'accredited',
    'flexible',
    'transparent',
    'free',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-accent/5" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className={cn('flex-1', isRTL && 'text-right')}>
              {/* Tagline badge */}
              <div className="inline-block animate-fade-up">
                <span className={cn(
                  'inline-flex items-center px-4 py-2 rounded-full',
                  'bg-accent/10 text-accent text-sm font-medium',
                  isRTL && 'font-arabic'
                )}>
                  {t('hero.tagline')}
                </span>
              </div>

              {/* Title */}
              <h1 className={cn(
                'mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight',
                'animate-fade-up delay-100',
                isRTL && 'font-arabic'
              )}>
                {t('hero.title')}
              </h1>

              {/* Subtitle */}
              <p className={cn(
                'mt-6 text-lg text-text-muted leading-relaxed max-w-xl',
                'animate-fade-up delay-200',
                isRTL && 'font-arabic'
              )}>
                {t('hero.subtitle')}
              </p>

              {/* CTAs */}
              <div className={cn(
                'mt-10 flex flex-wrap gap-4',
                'animate-fade-up delay-300',
                isRTL && 'flex-row-reverse'
              )}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t('hero.cta')}
                </a>
                <Link href="/study-in-uk" className="btn-secondary">
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex-1">
              <div className="relative aspect-[4/3] animate-fade-up delay-200">
                {/* Decorative frame */}
                <div className={cn(
                  'absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl',
                  isRTL ? '-rotate-2' : 'rotate-2'
                )} />

                {/* Image placeholder - ready for real photo */}
                <div className="relative h-full bg-gradient-to-br from-primary to-primary-light rounded-xl overflow-hidden shadow-xl">
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-display text-xl font-semibold text-center">
                      Your Journey Starts Here
                    </p>
                    <p className="text-white/60 text-sm mt-2 text-center">
                      Professional photo coming soon
                    </p>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              title={t('services.title')}
              subtitle={t('services.subtitle')}
            />
          </ScrollReveal>

          <StaggerReveal
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={100}
          >
            {services.map((service) => (
              <div key={service.titleKey} className="stagger-item scroll-reveal h-full">
                <ServiceCard
                  icon={service.icon}
                  title={t(`services.items.${service.titleKey}.title`)}
                  description={t(`services.items.${service.titleKey}.description`)}
                />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              title={t('destinations.title')}
              subtitle={t('destinations.subtitle')}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* UK Card */}
            <ScrollReveal delay={100}>
              <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-8">
                  {/* UK Flag */}
                  <div className="mb-6">
                    <svg viewBox="0 0 60 30" className="w-12 h-6" fill="none">
                      <rect width="60" height="30" fill="#012169" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
                      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
                    </svg>
                  </div>

                  <h3 className={cn(
                    'font-display text-2xl font-semibold text-primary mb-3',
                    isRTL && 'font-arabic text-right'
                  )}>
                    {t('destinations.uk.title')}
                  </h3>

                  <p className={cn(
                    'text-text-muted leading-relaxed mb-6',
                    isRTL && 'text-right'
                  )}>
                    {t('destinations.uk.description')}
                  </p>

                  <Link
                    href="/study-in-uk"
                    className={cn(
                      'inline-flex items-center gap-2 text-primary font-semibold group/link',
                      isRTL && 'flex-row-reverse'
                    )}
                  >
                    <span className="underline-slide">{t('destinations.uk.cta')}</span>
                    <ArrowRight className={cn(
                      'w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1',
                      isRTL && 'rotate-180 group-hover/link:-translate-x-1'
                    )} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* India Card */}
            <ScrollReveal delay={200}>
              <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-8">
                  {/* India Flag */}
                  <div className="mb-6">
                    <svg viewBox="0 0 36 24" className="w-12 h-8" fill="none">
                      <rect y="0" width="36" height="8" fill="#FF9933" />
                      <rect y="8" width="36" height="8" fill="#fff" />
                      <rect y="16" width="36" height="8" fill="#138808" />
                      <circle cx="18" cy="12" r="3" stroke="#000080" strokeWidth="0.5" fill="none" />
                    </svg>
                  </div>

                  <h3 className={cn(
                    'font-display text-2xl font-semibold text-primary mb-3',
                    isRTL && 'font-arabic text-right'
                  )}>
                    {t('destinations.india.title')}
                  </h3>

                  <p className={cn(
                    'text-text-muted leading-relaxed mb-6',
                    isRTL && 'text-right'
                  )}>
                    {t('destinations.india.description')}
                  </p>

                  <Link
                    href="/study-in-india"
                    className={cn(
                      'inline-flex items-center gap-2 text-primary font-semibold group/link',
                      isRTL && 'flex-row-reverse'
                    )}
                  >
                    <span className="underline-slide">{t('destinations.india.cta')}</span>
                    <ArrowRight className={cn(
                      'w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1',
                      isRTL && 'rotate-180 group-hover/link:-translate-x-1'
                    )} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-primary text-white relative overflow-hidden">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo/logo.png"
            alt=""
            width={600}
            height={600}
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-[0.05]"
            aria-hidden="true"
          />
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 via-transparent to-primary-dark/50 pointer-events-none" />

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-semibold',
                isRTL && 'font-arabic'
              )}>
                {t('trust.title')}
              </h2>
              <p className={cn(
                'mt-4 text-white/70 text-lg',
                isRTL && 'font-arabic'
              )}>
                {t('trust.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="max-w-3xl mx-auto space-y-4"
            staggerDelay={100}
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className={cn(
                  'stagger-item scroll-reveal',
                  'flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm',
                  isRTL && 'flex-row-reverse text-right'
                )}
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className={cn(
                  'text-lg',
                  isRTL && 'font-arabic'
                )}>
                  {t(`trust.items.${item}`)}
                </span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-primary-light rounded-2xl p-10 md:p-16 shadow-xl">
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-bold text-white mb-4',
                isRTL && 'font-arabic'
              )}>
                {t('cta.title')}
              </h2>
              <p className={cn(
                'text-white/80 text-lg mb-8 max-w-xl mx-auto',
                isRTL && 'font-arabic'
              )}>
                {t('cta.subtitle')}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-3 px-8 py-4',
                  'bg-accent hover:bg-accent-hover text-primary font-semibold text-lg',
                  'rounded-pill shadow-gold hover:shadow-gold-lg',
                  'transition-all duration-200 hover:scale-105',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('cta.button')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
