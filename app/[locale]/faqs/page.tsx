import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cn, getWhatsAppLink } from '@/lib/utils';
import { PageHero, ScrollReveal, FAQCategories } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: `FAQs | ${t('title')}`,
    description: 'Find answers to frequently asked questions about studying in the UK and India, eligibility, application process, and more.',
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('faqs');
  const tCommon = await getTranslations('common');
  const isRTL = locale === 'ar';

  const categories = [
    {
      id: 'eligibility',
      label: t('categories.eligibility'),
      items: [
        { id: 'qualifications', question: t('items.qualifications.question'), answer: t('items.qualifications.answer') },
        { id: 'experience', question: t('items.experience.question'), answer: t('items.experience.answer') },
        { id: 'exams', question: t('items.exams.question'), answer: t('items.exams.answer') },
      ],
    },
    {
      id: 'process',
      label: t('categories.process'),
      items: [
        { id: 'timeline', question: t('items.timeline.question'), answer: t('items.timeline.answer') },
        { id: 'documents', question: t('items.documents.question'), answer: t('items.documents.answer') },
        { id: 'verification', question: t('items.verification.question'), answer: t('items.verification.answer') },
      ],
    },
    {
      id: 'programs',
      label: t('categories.programs'),
      items: [
        { id: 'workStudy', question: t('items.workStudy.question'), answer: t('items.workStudy.answer') },
        { id: 'recognition', question: t('items.recognition.question'), answer: t('items.recognition.answer') },
        { id: 'difference', question: t('items.difference.question'), answer: t('items.difference.answer') },
      ],
    },
    {
      id: 'support',
      label: t('categories.support'),
      items: [
        { id: 'afterAdmission', question: t('items.afterAdmission.question'), answer: t('items.afterAdmission.answer') },
        { id: 'freeConsultation', question: t('items.freeConsultation.question'), answer: t('items.freeConsultation.answer') },
        { id: 'fees', question: t('items.fees.question'), answer: t('items.fees.answer') },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* FAQs Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className={cn('max-w-4xl mx-auto', isRTL && 'text-right')}>
              <FAQCategories categories={categories} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary to-primary-light rounded-2xl p-10 md:p-16 shadow-xl">
              <h2 className={cn(
                'font-display text-2xl md:text-3xl font-bold text-white mb-4',
                isRTL && 'font-arabic'
              )}>
                {isRTL ? 'هل لديك أسئلة أخرى؟' : 'Still Have Questions?'}
              </h2>
              <p className={cn(
                'text-white/80 text-lg mb-8',
                isRTL && 'font-arabic'
              )}>
                {isRTL
                  ? 'نحن هنا للمساعدة. تواصل معنا للحصول على إجابات مخصصة.'
                  : "We're here to help. Reach out for personalized answers to your questions."}
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
                {tCommon('whatsappChat')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
