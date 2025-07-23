export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Wedding Photography',
    description: 'Capture your special day with elegance.',
    price: 1500,
  },
  {
    id: '2',
    title: 'Baby Shower',
    description: 'Cherish the moments of your baby shower.',
    price: 700,
  },
  {
    id: '3',
    title: 'Birthday Party',
    description: 'Make every birthday unforgettable.',
    price: 500,
  },
];
