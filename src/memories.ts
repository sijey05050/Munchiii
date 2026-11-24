export type Category = 'Our Favorite Moments' | 'Random Pictures' | 'Little Adventures' | 'My Favorite Photos of Us';
export interface Memory { id: number; image: string; caption: string; description: string; category: Category; date?: string; kind?: 'video'; }
// Edit captions, descriptions, categories and dates here. Add new memories as objects.
export const memories: Memory[] = [
  { id: 1, image: '/images/memories/1.jpg', caption: 'A little piece of my favorite day.', description: 'Every time I look at this, I remember how happy I felt right beside you.', category: 'Our Favorite Moments', date: 'Our beginning' },
  { id: 2, image: '/images/memories/2.jpg', caption: 'My favorite view, always.', description: 'A tiny moment I want to keep close forever.', category: 'My Favorite Photos of Us' },
  { id: 3, image: '/images/memories/3.jpg', caption: 'The kind of day that stays with me.', description: 'Nothing fancy, just us making another sweet memory.', category: 'Little Adventures' },
  { id: 4, image: '/images/memories/4.jpg', caption: 'Little moments, big feelings.', description: 'Some of my happiest memories are the quiet ones.', category: 'Random Pictures' },
  { id: 5, image: '/images/memories/5.jpg', caption: 'One more reason to smile.', description: 'Saving this one for the days I need a reminder of us.', category: 'My Favorite Photos of Us' },
  { id: 7, image: '/images/memories/7.jpg', caption: 'Just us being us \u2661', description: 'My favorite kind of together.', category: 'Our Favorite Moments' },
  { id: 8, image: '/images/memories/8.mp4', caption: 'A little moment in motion.', description: 'Press play to relive this one.', category: 'Little Adventures', kind: 'video' },
  { id: 9, image: '/images/memories/9.jpg', caption: 'I wish I could press pause here.', description: 'A moment worth keeping close.', category: 'Random Pictures' },
  { id: 10, image: '/images/memories/10.jpg', caption: 'A memory made sweeter by you.', description: 'You have a way of making everything feel softer.', category: 'Our Favorite Moments' },
  { id: 11, image: '/images/memories/3.jpg', caption: 'My heart feels at home here.', description: 'A simple little memory, treasured a lot.', category: 'My Favorite Photos of Us' },
  { id: 12, image: '/images/memories/12.jpg', caption: 'Another day, another favorite.', description: 'I am so glad I get to make these with you.', category: 'Little Adventures' },
  { id: 13, image: '/images/memories/13.jpg', caption: 'A little snapshot of us.', description: 'This one makes me smile every single time.', category: 'Random Pictures' },
  { id: 14, image: '/images/memories/14.jpg', caption: 'Still one of my favorite moments.', description: 'The beginning of many more memories together.', category: 'Our Favorite Moments' },
  { id: 15, image: '/images/memories/15.jpg', caption: 'You make ordinary things feel special.', description: 'A day I would happily relive with you.', category: 'Little Adventures' },
  { id: 16, image: '/images/memories/16.jpg', caption: 'A little more of my favorite person.', description: 'Keeping this close, always.', category: 'My Favorite Photos of Us' },
  { id: 17, image: '/images/memories/17.jpg', caption: 'Here is to all our little moments.', description: 'One of many chapters in our story.', category: 'Random Pictures' },
];
export const categories = ['All Memories', 'Our Favorite Moments', 'Random Pictures', 'Little Adventures', 'My Favorite Photos of Us'] as const;
export const timeline = [
  { date: 'The beginning', title: 'The you visited Turac', description: 'The first little hello that led me to you.' },
  { date: 'A day to remember', title: 'Our first date', description: 'A favorite memory I keep replaying.' },
  { date: 'Somewhere along the way', title: 'You became special to me', description: 'And somehow my days started feeling brighter.' },
  { date: 'Today \u2661', title: 'Our first monthsary', description: 'One month down, so many memories still to come.' },
];