import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Our restaurant proudly boasts Michelin stars, a testament to our dedication to delivering top-tier dining that consistently exceeds expectations.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'We are proud to have been recognized by esteemed culinary organizations and publications for our commitment to culinary excellence and exceptional dining experiences.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'At Gochew Grill, hospitality is at the core of our identity. From the moment you step through our doors, you will be greeted with genuine smiles and a warm welcome.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Our culinary team is dedicated to pushing the boundaries of taste, marrying tradition with innovation, and taking you on a journey through flavors from around the world.',
  },
];

export default { wines, cocktails, awards };
