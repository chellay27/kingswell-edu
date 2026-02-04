import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Globe, Clock, Award, TrendingUp, GraduationCap, CheckCircle } from 'lucide-react';
import { cn, getWhatsAppLink } from '@/lib/utils';
import { PageHero, ScrollReveal, StaggerReveal, SectionTitle, ParallaxImage } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: `Study in UK | ${t('title')}`,
    description: 'World-class education from prestigious British universities. Flexible programs designed for working professionals.',
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function StudyInUKPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('studyUK');
  const isRTL = locale === 'ar';

  const benefits = [
    { key: 'recognition', icon: <Globe className="w-6 h-6" /> },
    { key: 'flexible', icon: <Clock className="w-6 h-6" /> },
    { key: 'quality', icon: <Award className="w-6 h-6" /> },
    { key: 'career', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const programs = ['bachelors', 'masters', 'doctorate', 'professional'];
  const whoIsFor = ['global', 'advancement', 'flexible', 'prestige'];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* UK themed background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#012169]/10 to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          {/* UK Flag */}
          <div className="inline-block mb-6 animate-fade-up">
            <svg viewBox="0 0 60 30" className="w-20 h-10 mx-auto" fill="none">
              <rect width="60" height="30" fill="#012169" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
              <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
              <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
            </svg>
          </div>

          <h1 className={cn(
            'font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-fade-up delay-100',
            isRTL && 'font-arabic'
          )}>
            {t('hero.title')}
          </h1>
          <p className={cn(
            'mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto animate-fade-up delay-200',
            isRTL && 'font-arabic'
          )}>
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className={cn(
              'max-w-3xl mx-auto text-center',
              isRTL && 'font-arabic'
            )}>
              <p className="text-lg text-text-muted leading-relaxed">
                {t('intro.content')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle title={t('benefits.title')} />
          </ScrollReveal>

          <StaggerReveal
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={100}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.key}
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
                  'bg-[#012169]/10 rounded-xl text-[#012169]'
                )}>
                  {benefit.icon}
                </div>
                <h3 className={cn(
                  'font-display text-lg font-semibold text-primary mb-2',
                  isRTL && 'font-arabic'
                )}>
                  {t(`benefits.items.${benefit.key}.title`)}
                </h3>
                <p className={cn(
                  'text-text-muted text-sm leading-relaxed flex-1',
                  isRTL && 'font-arabic'
                )}>
                  {t(`benefits.items.${benefit.key}.description`)}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Programs Available */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <ScrollReveal className={cn('flex-1', isRTL && 'text-right')}>
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-semibold text-primary mb-8',
                isRTL && 'font-arabic'
              )}>
                {t('programs.title')}
              </h2>

              <div className="space-y-4">
                {programs.map((program) => (
                  <div
                    key={program}
                    className={cn(
                      'flex items-center gap-4 p-4 bg-cream rounded-lg',
                      isRTL && 'flex-row-reverse'
                    )}
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <span className={cn(
                      'text-lg font-medium text-primary',
                      isRTL && 'font-arabic'
                    )}>
                      {t(`programs.items.${program}`)}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="flex-1">
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#012169]/10 to-[#C8102E]/10 rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" />
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:inset-2">
                  <ParallaxImage
                    src="/images/uk-programs.webp"
                    alt="UK academic programs - books, graduation cap and diploma"
                    className="transition-transform duration-700 group-hover:scale-[1.08]"
                    parallaxSpeed={0.12}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section bg-[#012169] text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-semibold text-center mb-4 text-accent',
                isRTL && 'font-arabic'
              )}>
                {t('whoIsFor.title')}
              </h2>
              <p className={cn(
                'text-white/80 text-center mb-10',
                isRTL && 'font-arabic'
              )}>
                {t('whoIsFor.intro')}
              </p>

              <div className="space-y-4">
                {whoIsFor.map((item) => (
                  <div
                    key={item}
                    className={cn(
                      'flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm',
                      isRTL && 'flex-row-reverse text-right'
                    )}
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className={cn(isRTL && 'font-arabic')}>
                      {t(`whoIsFor.items.${item}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-[#012169] to-[#012169]/90 rounded-2xl p-10 md:p-16 shadow-xl">
              <h2 className={cn(
                'font-display text-3xl md:text-4xl font-bold text-white mb-4',
                isRTL && 'font-arabic'
              )}>
                {t('cta.title')}
              </h2>
              <p className={cn(
                'text-white/80 text-lg mb-8',
                isRTL && 'font-arabic'
              )}>
                {t('cta.subtitle')}
              </p>
              <a
                href={getWhatsAppLink('I am interested in UK programs')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('cta.button')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
