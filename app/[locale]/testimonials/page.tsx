import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { cn, getWhatsAppLink } from '@/lib/utils';
import { PageHero, ScrollReveal, StaggerReveal } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: `Testimonials | ${t('title')}`,
    description: 'Read success stories from professionals who achieved their educational goals with Kingswell Education.',
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('testimonials');
  const tCommon = await getTranslations('common');
  const isRTL = locale === 'ar';

  // Placeholder testimonials - to be replaced with real ones
  const placeholderTestimonials = [
    {
      id: 1,
      quote: isRTL
        ? 'بعد 10 سنوات في مسيرتي المهنية، اعتقدت أن الوقت قد فات للحصول على الماجستير. كينغزويل للتعليم أثبتت لي العكس. الآن لدي ماجستير إدارة الأعمال من جامعة بريطانية.'
        : "After 10 years in my career, I thought it was too late for a Master's degree. Kingswell Education showed me it wasn't. Now I have my MBA from a UK university.",
      name: isRTL ? 'عميل مستقبلي' : 'Future Client',
      role: isRTL ? 'خريج ماجستير إدارة الأعمال' : 'MBA Graduate',
      program: 'UK',
    },
    {
      id: 2,
      quote: isRTL
        ? 'العملية كانت سلسة جداً. ساعدني الفريق في كل خطوة من البداية حتى القبول. أنصح بشدة أي شخص يريد تطوير مسيرته المهنية.'
        : 'The process was so smooth. The team helped me every step of the way from start to admission. Highly recommend to anyone looking to advance their career.',
      name: isRTL ? 'عميل مستقبلي' : 'Future Client',
      role: isRTL ? 'طالب ماجستير' : "Master's Student",
      program: 'India',
    },
    {
      id: 3,
      quote: isRTL
        ? 'كنت مشغولاً جداً بعملي واعتقدت أنني لا أستطيع الدراسة. البرامج المرنة جعلت ذلك ممكناً. شكراً كينغزويل!'
        : "I was too busy with work and thought I couldn't study. The flexible programs made it possible. Thank you Kingswell!",
      name: isRTL ? 'عميل مستقبلي' : 'Future Client',
      role: isRTL ? 'طالب بكالوريوس' : "Bachelor's Student",
      program: 'UK',
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Placeholder Notice */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className={cn(
              'max-w-2xl mx-auto text-center p-8 bg-accent/5 rounded-2xl border border-accent/20',
              isRTL && 'font-arabic'
            )}>
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className={cn(
                'font-display text-2xl font-semibold text-primary mb-3',
                isRTL && 'font-arabic'
              )}>
                {t('placeholder.title')}
              </h2>
              <p className={cn(
                'text-text-muted mb-6',
                isRTL && 'font-arabic'
              )}>
                {t('placeholder.content')}
              </p>
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 text-primary font-semibold',
                  'hover:text-accent transition-colors duration-200',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <span className="underline-slide">{t('placeholder.cta')}</span>
                <ArrowRight className={cn(
                  'w-4 h-4',
                  isRTL && 'rotate-180'
                )} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sample Testimonials */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className={cn(
                'text-text-muted italic',
                isRTL && 'font-arabic'
              )}>
                {isRTL ? 'أمثلة على الشهادات المستقبلية' : 'Example testimonials (placeholders)'}
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={100}
          >
            {placeholderTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={cn(
                  'stagger-item scroll-reveal h-full',
                  'bg-white rounded-xl shadow-sm border border-border/50 p-6',
                  'hover:shadow-lg hover:-translate-y-1',
                  'transition-all duration-300',
                  'relative overflow-hidden',
                  'flex flex-col',
                  isRTL && 'text-right'
                )}
              >
                {/* Quote icon */}
                <Quote className={cn(
                  'absolute top-4 w-10 h-10 text-accent/20',
                  isRTL ? 'left-4' : 'right-4'
                )} />

                {/* Program badge */}
                <div className={cn(
                  'inline-block px-3 py-1 rounded-full text-xs font-medium mb-4',
                  testimonial.program === 'UK'
                    ? 'bg-[#012169]/10 text-[#012169]'
                    : 'bg-[#138808]/10 text-[#138808]'
                )}>
                  {testimonial.program === 'UK'
                    ? (isRTL ? 'بريطانيا' : 'UK')
                    : (isRTL ? 'الهند' : 'India')}
                </div>

                {/* Quote */}
                <p className={cn(
                  'text-text-muted leading-relaxed mb-6 relative z-10 flex-1',
                  isRTL && 'font-arabic'
                )}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className={cn(
                  'flex items-center gap-3 pt-4 border-t border-border/50 mt-auto',
                  isRTL && 'flex-row-reverse'
                )}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className={cn(
                      'font-medium text-primary text-sm',
                      isRTL && 'font-arabic'
                    )}>
                      {testimonial.name}
                    </p>
                    <p className={cn(
                      'text-text-muted text-xs',
                      isRTL && 'font-arabic'
                    )}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className={cn(
                'font-display text-2xl md:text-3xl font-semibold text-primary mb-4',
                isRTL && 'font-arabic'
              )}>
                {isRTL ? 'كن قصة نجاحنا القادمة' : 'Be Our Next Success Story'}
              </h2>
              <p className={cn(
                'text-text-muted mb-8',
                isRTL && 'font-arabic'
              )}>
                {isRTL
                  ? 'ابدأ رحلتك التعليمية اليوم واحصل على استشارة مجانية.'
                  : 'Start your educational journey today with a free consultation.'}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {tCommon('startJourney')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
