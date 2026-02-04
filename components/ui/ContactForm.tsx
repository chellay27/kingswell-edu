'use client';

import { useState, FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const interestOptions = [
    { value: 'bachelors', label: t('interestOptions.bachelors') },
    { value: 'masters', label: t('interestOptions.masters') },
    { value: 'doctorate', label: t('interestOptions.doctorate') },
    { value: 'notSure', label: t('interestOptions.notSure') },
  ];

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-5', isRTL && 'text-right')}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          {t('name')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('namePlaceholder')}
          required
          className="form-input"
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          {t('phone')} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t('phonePlaceholder')}
          required
          className="form-input"
          dir="ltr"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          {t('email')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('emailPlaceholder')}
          required
          className="form-input"
          dir="ltr"
        />
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-text mb-2">
          {t('interest')} <span className="text-red-500">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
          className={cn('form-input', !formData.interest && 'text-text-muted/60')}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <option value="" disabled>
            {t('interestPlaceholder')}
          </option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('messagePlaceholder')}
          rows={4}
          className="form-input resize-none"
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className={cn(
          'flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700',
          isRTL && 'flex-row-reverse'
        )}>
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{t('success')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className={cn(
          'flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700',
          isRTL && 'flex-row-reverse'
        )}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{t('error')}</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className={cn('w-full', isRTL && 'flex-row-reverse')}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className={cn(isRTL ? 'mr-2' : 'ml-2')}>...</span>
          </>
        ) : (
          <>
            <Send className={cn('w-5 h-5', isRTL ? 'ml-2' : 'mr-2')} />
            {t('submit')}
          </>
        )}
      </Button>
    </form>
  );
}
