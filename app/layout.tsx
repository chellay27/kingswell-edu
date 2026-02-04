import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kingswell Education | UK & India Degrees for Qatar Professionals',
  description: 'Expert guidance for working professionals in Qatar seeking Bachelor\'s, Master\'s, and Doctorate degrees from internationally recognized UK and Indian universities.',
  keywords: ['education consultancy', 'UK degrees', 'India degrees', 'Qatar', 'working professionals', 'MBA', 'Masters', 'Doctorate', 'distance learning'],
  authors: [{ name: 'Kingswell Education' }],
  openGraph: {
    title: 'Kingswell Education | Education Without Boundaries',
    description: 'Expert guidance for working professionals in Qatar seeking internationally recognized degrees.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_QA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
