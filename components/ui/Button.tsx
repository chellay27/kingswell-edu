import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-200 ease-out-expo',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  const variants = {
    primary: cn(
      'bg-accent text-primary rounded-pill shadow-gold',
      'hover:bg-accent-hover hover:shadow-gold-lg hover:scale-[1.02]',
      'focus:ring-accent/50',
      'active:scale-[0.98]'
    ),
    secondary: cn(
      'bg-transparent text-primary border-2 border-primary rounded-pill',
      'hover:bg-primary hover:text-white',
      'focus:ring-primary/50',
      'active:scale-[0.98]'
    ),
    outline: cn(
      'bg-transparent text-primary border border-border rounded-lg',
      'hover:bg-cream hover:border-primary/30',
      'focus:ring-primary/50'
    ),
    ghost: cn(
      'bg-transparent text-primary rounded-lg',
      'hover:bg-primary/5',
      'focus:ring-primary/50'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external = false,
}: LinkButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-200 ease-out-expo',
    'focus:outline-none focus:ring-2 focus:ring-offset-2'
  );

  const variants = {
    primary: cn(
      'bg-accent text-primary rounded-pill shadow-gold',
      'hover:bg-accent-hover hover:shadow-gold-lg hover:scale-[1.02]',
      'focus:ring-accent/50',
      'active:scale-[0.98]'
    ),
    secondary: cn(
      'bg-transparent text-primary border-2 border-primary rounded-pill',
      'hover:bg-primary hover:text-white',
      'focus:ring-primary/50',
      'active:scale-[0.98]'
    ),
    outline: cn(
      'bg-transparent text-primary border border-border rounded-lg',
      'hover:bg-cream hover:border-primary/30',
      'focus:ring-primary/50'
    ),
    ghost: cn(
      'bg-transparent text-primary rounded-lg',
      'hover:bg-primary/5',
      'focus:ring-primary/50'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
