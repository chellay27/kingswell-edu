import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { cn, getWhatsAppLink, CONTACT_PHONE, CONTACT_EMAIL, OFFICE_ADDRESS } from '@/lib/utils';
import { PageHero, ScrollReveal, ContactForm } from '@/components/ui';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: `Contact Us | ${t('title')}`,
    description: 'Get in touch with Kingswell Education. We are here to help you start your educational journey.',
  };
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');
  const isRTL = locale === 'ar';

  const contactMethods = [
    {
      key: 'whatsapp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-[#25D366]/10 text-[#25D366]',
      href: getWhatsAppLink(),
      external: true,
    },
    {
      key: 'phone',
      icon: <Phone className="w-6 h-6" />,
      color: 'bg-accent/10 text-accent',
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`,
      external: false,
    },
    {
      key: 'email',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-primary/10 text-primary',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
    {
      key: 'visit',
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-red-500/10 text-red-500',
      value: OFFICE_ADDRESS,
      href: null,
      external: false,
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Contact Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Methods */}
            <ScrollReveal className="flex-1">
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.key}
                    className={cn(
                      'bg-cream rounded-xl p-6',
                      'border border-border/50',
                      'hover:shadow-md transition-shadow duration-300',
                      isRTL && 'text-right'
                    )}
                  >
                    <div className={cn(
                      'flex items-start gap-4',
                      isRTL && 'flex-row-reverse'
                    )}>
                      <div className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                        method.color
                      )}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-display text-lg font-semibold text-primary mb-1',
                          isRTL && 'font-arabic'
                        )}>
                          {t(`methods.${method.key}.title`)}
                        </h3>
                        <p className={cn(
                          'text-text-muted text-sm mb-3',
                          isRTL && 'font-arabic'
                        )}>
                          {t(`methods.${method.key}.subtitle`)}
                        </p>

                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.external ? '_blank' : undefined}
                            rel={method.external ? 'noopener noreferrer' : undefined}
                            className={cn(
                              'inline-flex items-center gap-2 text-primary font-medium',
                              'hover:text-accent transition-colors duration-200',
                              method.key === 'whatsapp' && 'px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] hover:text-white',
                              isRTL && 'flex-row-reverse'
                            )}
                          >
                            {method.key === 'whatsapp' ? (
                              <>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {t(`methods.${method.key}.button`)}
                              </>
                            ) : (
                              <span dir={method.key === 'phone' ? 'ltr' : undefined}>
                                {method.value}
                              </span>
                            )}
                          </a>
                        ) : (
                          <span className="text-primary font-medium">{method.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className={cn(
                'mt-8 p-6 bg-primary/5 rounded-xl',
                isRTL && 'text-right'
              )}>
                <h3 className={cn(
                  'font-display text-lg font-semibold text-primary mb-3',
                  isRTL && 'font-arabic'
                )}>
                  {isRTL ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className="space-y-2 text-text-muted text-sm">
                  <p>{isRTL ? 'الأحد - الخميس: 9 صباحاً - 6 مساءً' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}</p>
                  <p>{isRTL ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={100} className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8">
                <h2 className={cn(
                  'font-display text-2xl font-semibold text-primary mb-6',
                  isRTL && 'font-arabic text-right'
                )}>
                  {t('form.title')}
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
