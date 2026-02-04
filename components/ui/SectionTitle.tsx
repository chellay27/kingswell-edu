import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  withAccent?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
  withAccent = true,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-semibold text-primary',
          withAccent && 'title-accent',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-lg text-text-muted max-w-2xl leading-relaxed',
            centered && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ title, subtitle, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent',
        className
      )}
    >
      <div className="container-custom text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto animate-fade-up delay-100">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up delay-200">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
