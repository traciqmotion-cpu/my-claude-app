// Every project on the site. Add a project here and it appears on /work and gets its own page.
// Put its files in public/media as <slug>-card.mp4 (short loop), <slug>.mp4 (full), <slug>-poster.jpg.

export type Video = { file: string; label?: string };
export type Project = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  service: string;
  desc: string;
  categories: string[];
  card: string; // file stem used for the card loop and poster
  videos: Video[];
  brief?: string;
  approach?: string;
  outcome?: string; // shown only when filled in
};

export const projects: Project[] = [
  {
    slug: 'bookkeepa-explainer',
    title: 'BOOKKEEPA Explainer',
    client: 'BOOKKEEPA',
    tag: 'Product explainer · Fintech',
    service: 'Explainer and ongoing monthly series',
    desc: 'Conversational finance for small businesses: ask a question, get an answer.',
    categories: ['Explainers', 'UI animation'],
    card: 'bookkeepa-explainer',
    videos: [{ file: 'bookkeepa-explainer' }],
    brief:
      'BOOKKEEPA turns bookkeeping into a conversation. The brief was to make that clear in the first few seconds, even with the sound off.',
    approach:
      'We built the film around one moment: asking Dr. BOOKKEEPA a question and getting an answer. A short hook, the dashboard, the conversation, the tagline, and a clear call to action.',
    outcome: '',
  },
  {
    slug: 'bookkeepa-promo',
    title: 'BOOKKEEPA Promo',
    client: 'BOOKKEEPA',
    tag: 'Brand promo · Fintech',
    service: 'Brand promo',
    desc: 'A fast, type-led promo for an AI finance team.',
    categories: ['Launch films'],
    card: 'bookkeepa-promo',
    videos: [{ file: 'bookkeepa-promo' }],
  },
  {
    slug: 'getthegist',
    title: 'GetTheGist',
    client: 'GetTheGist',
    tag: 'Product explainer · AI tools',
    service: 'Product explainer',
    desc: 'An AI browser assistant that summarizes pages, in any language.',
    categories: ['Explainers', 'UI animation'],
    card: 'getthegist-1',
    videos: [
      { file: 'getthegist-1', label: 'Part 1' },
      { file: 'getthegist-2', label: 'Part 2' },
    ],
  },
  {
    slug: 'poliversia',
    title: 'Poliversia',
    client: 'Poliversia',
    tag: 'SaaS animation · Education platform',
    service: 'SaaS product animation',
    desc: 'Streaming and webinar tools for institutions, from first session to full scale.',
    categories: ['UI animation'],
    card: 'poliversia',
    videos: [{ file: 'poliversia' }],
  },
  {
    slug: 'ads-with-us',
    title: 'Ads With Us',
    client: 'Ads With Us',
    tag: 'Character animation · Digital signage',
    service: 'Character animation',
    desc: 'A character-led story for a digital signage platform, from the shop counter to the scan.',
    categories: ['Explainers'],
    card: 'ads-with-us',
    videos: [{ file: 'ads-with-us' }],
  },
];

export const categoryOrder = ['Launch films', 'Explainers', 'UI animation', 'Ads'];
export const categories = categoryOrder.filter((c) => projects.some((p) => p.categories.includes(c)));
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)!;
