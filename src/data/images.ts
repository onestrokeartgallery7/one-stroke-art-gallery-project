export type ImageItem = {
  id: number
  src: string
  title: string
  category: string
  description: string
}

const images: ImageItem[] = [
  {
    id: 1,
    src: '/golden rock.jpg',
    title: 'Golden Rock',
    category: 'Nature',
    description: 'A stunning view of a golden-lit rock formation against a dramatic sky.',
  },
  {
    id: 2,
    src: '/musician.jpg',
    title: 'The Musician',
    category: 'Portrait',
    description: 'Expressive portrait capturing the soul of a musician in their element.',
  },
  {
    id: 3,
    src: '/lady with tanpura-1.jpg',
    title: 'Lady with Tanpura',
    category: 'Classical',
    description: 'A classical musician with her tanpura, depicting grace and tradition.',
  },
  {
    id: 4,
    src: '/love birds-1.jpg',
    title: 'Love Birds',
    category: 'Nature',
    description: 'A tender moment between two birds, symbolizing love and harmony.',
  },
  {
    id: 5,
    src: '/drawing-2.jpg',
    title: 'Abstract Study',
    category: 'Drawing',
    description: 'A detailed drawing exploring form and composition.',
  },
  {
    id: 6,
    src: '/midday chat-1.jpg',
    title: 'Midday Chat',
    category: 'Social',
    description: 'A candid moment capturing the warmth of everyday conversation.',
  },
  {
    id: 7,
    src: '/bhima river.jpg',
    title: 'Bhima River',
    category: 'Landscape',
    description: 'A serene view of the Bhima River flowing through the landscape.',
  },
  {
    id: 8,
    src: '/flaming water.jpg',
    title: 'Flaming Water',
    category: 'Abstract',
    description: 'An abstract interpretation where water meets fire in artistic harmony.',
  }
]

export default images
