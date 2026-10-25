export const site = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || 'Meynix',
  domain: process.env.NEXT_PUBLIC_SITE_URL || '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'meynix.official@gmail.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '919360239398',
  phone: '+91 93602 39398',
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://www.instagram.com/meynixofficial?dlrf=MTFqd2lzcjZuZWo4dQ==',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || 'https://www.facebook.com/share/1JnS76es77/',
  tagline: 'Technology built around your business.',
};

export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      'Hello Meynix, I would like to discuss a custom software or AI project for my business.'
    )}`
  : '';

export const instagramUrl = site.instagram;
export const facebookUrl = site.facebook;
