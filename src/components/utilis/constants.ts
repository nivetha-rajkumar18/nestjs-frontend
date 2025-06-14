//src/utilis/constants.ts
export const PRODUCT_CATEGORIES = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Automotive',
    'Other'
  ] as const;
  
  export const ITEMS_PER_PAGE = 12;
  
  export const PRICE_RANGES = [
    { label: 'Under 25', min: 0, max: 25 },
    { label: '25 - 50', min: 25, max: 50 },
    { label: '50 - 100', min: 50, max: 100 },
    { label: '100 - 200', min: 100, max: 200 },
    { label: 'Over 200', min: 200, max: Infinity }
  ];
  