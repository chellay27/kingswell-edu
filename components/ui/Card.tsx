import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'service' | 'destination';
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  hover = true,
}: CardProps) {
  const variants = {
    default: 'bg-white rounded-lg shadow-md p-6',
    service: 'bg-white rounded-lg shadow-sm border border-border p-8',
    destination: cn(
      'bg-white rounded-xl shadow-md overflow-hidden',
      'border border-border/50'
    ),
  };

  return (
    <div
      className={cn(
        variants[variant],
        hover && 'transition-all duration-300 ease-out-expo',
        hover && 'hover:shadow-lg hover:-translate-y-1',
        variant === 'service' && hover && 'hover:border-accent/30',
        className
      )}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <Card variant="service" className={cn('text-center h-full flex flex-col', className)}>
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-accent/10 rounded-xl text-accent mx-auto">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed flex-1">
        {description}
      </p>
    </Card>
  );
}

interface DestinationCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  variant: 'uk' | 'india';
  className?: string;
}

export function DestinationCard({
  title,
  description,
  cta,
  href,
  variant,
  className,
}: DestinationCardProps) {
  const gradients = {
    uk: 'from-primary/5 to-accent/5',
    india: 'from-accent/5 to-primary/5',
  };

  const icons = {
    uk: (
      <svg
        viewBox="0 0 60 30"
        className="w-12 h-6"
        fill="none"
      >
        {/* Simplified UK flag colors */}
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    ),
    india: (
      <svg
        viewBox="0 0 36 24"
        className="w-12 h-8"
        fill="none"
      >
        <rect y="0" width="36" height="8" fill="#FF9933" />
        <rect y="8" width="36" height="8" fill="#fff" />
        <rect y="16" width="36" height="8" fill="#138808" />
        <circle cx="18" cy="12" r="3" stroke="#000080" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  };

  return (
    <Card
      variant="destination"
      className={cn(
        'group relative overflow-hidden',
        className
      )}
    >
      {/* Background gradient */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300',
          'group-hover:opacity-100',
          gradients[variant]
        )}
      />

      <div className="relative p-8">
        {/* Flag icon */}
        <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
          {icons[variant]}
        </div>

        <h3 className="font-display text-2xl font-semibold text-primary mb-3">
          {title}
        </h3>

        <p className="text-text-muted leading-relaxed mb-6">
          {description}
        </p>

        <a
          href={href}
          className={cn(
            'inline-flex items-center gap-2 text-primary font-semibold',
            'group/link'
          )}
        >
          <span className="underline-slide">{cta}</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}
