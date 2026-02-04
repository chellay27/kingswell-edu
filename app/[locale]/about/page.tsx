import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Users, HeartHandshake, Shield, Clock } from 'lucide-react';
import { cn, getWhatsAppLink } from '@/lib/utils';
import { PageHero, ScrollReveal, StaggerReveal, SectionTitle } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: `About Us | ${t('title')}`,
    description: t('description'),
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');
  const tCommon = await getTranslations('common');
  const isRTL = locale === 'ar';

  const approachItems = [
    { key: 'personalized', icon: <Users className="w-6 h-6" /> },
    { key: 'support', icon: <HeartHandshake className="w-6 h-6" /> },
    { key: 'honest', icon: <Shield className="w-6 h-6" /> },
    { key: 'partnership', icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Logo Showcase */}
            <ScrollReveal className="flex-1 flex items-center justify-center">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                <Image
                  src="/logo/logo.png"
                  alt="Kingswell Education"
                  width={280}
                  height={280}
                  className="object-contain drop-shadow-md transition-all duration-300 group-hover:drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={100} className={cn('flex-1', isRTL && 'text-right')}>
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-semibold text-primary mb-6',
                isRTL && 'font-arabic'
              )}>
                {t('mission.title')}
              </h2>
              <p className={cn(
                'text-lg text-text-muted leading-relaxed',
                isRTL && 'font-arabic'
              )}>
                {t('mission.content')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              title={t('approach.title')}
              subtitle={t('approach.intro')}
            />
          </ScrollReveal>

          <StaggerReveal
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={100}
          >
            {approachItems.map((item) => (
              <div
                key={item.key}
                className={cn(
                  'stagger-item scroll-reveal h-full',
                  'bg-white rounded-lg shadow-sm border border-border p-6',
                  'hover:shadow-lg hover:-translate-y-1 hover:border-accent/30',
                  'transition-all duration-300',
                  'flex flex-col',
                  isRTL && 'text-right'
                )}
              >
                <div className={cn(
                  'inline-flex items-center justify-center w-12 h-12 mb-4',
                  'bg-accent/10 rounded-xl text-accent'
                )}>
                  {item.icon}
                </div>
                <h3 className={cn(
                  'font-display text-lg font-semibold text-primary mb-2',
                  isRTL && 'font-arabic'
                )}>
                  {t(`approach.items.${item.key}.title`)}
                </h3>
                <p className={cn(
                  'text-text-muted text-sm leading-relaxed flex-1',
                  isRTL && 'font-arabic'
                )}>
                  {t(`approach.items.${item.key}.description`)}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-semibold mb-6',
                isRTL && 'font-arabic'
              )}>
                {t('why.title')}
              </h2>
              <p className={cn(
                'text-lg text-white/80 leading-relaxed',
                isRTL && 'font-arabic'
              )}>
                {t('why.content')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className={cn(
                'font-display text-2xl md:text-3xl font-semibold text-primary mb-4',
                isRTL && 'font-arabic'
              )}>
                {isRTL ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
              </h2>
              <p className={cn(
                'text-text-muted mb-8',
                isRTL && 'font-arabic'
              )}>
                {isRTL
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية.'
                  : 'Contact us today for a free consultation.'}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {tCommon('whatsappChat')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
