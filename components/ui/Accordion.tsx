'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className={cn(
          'w-full py-5 flex items-start justify-between gap-4 text-left',
          'transition-colors duration-200',
          'hover:text-primary',
          isOpen ? 'text-primary' : 'text-text'
        )}
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out-expo',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-text-muted leading-relaxed pr-10">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className={cn('bg-white rounded-xl shadow-md p-6 md:p-8', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

interface FAQCategoriesProps {
  categories: Array<{
    id: string;
    label: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
  }>;
  className?: string;
}

export function FAQCategories({ categories, className }: FAQCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className={className}>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === category.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-muted hover:bg-cream hover:text-primary border border-border'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      {currentCategory && <Accordion items={currentCategory.items} />}
    </div>
  );
}
