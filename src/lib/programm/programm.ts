export type ProgrammItem = {
  title: string;
  description: string;
  startsAt: string;
  slug?: string;
  thumbnail: string;
};

export const programm: ProgrammItem[] = [
  {
    title: "Lion`s Den",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "20 Uhr",
    slug: "lions-den",
    thumbnail: "img/lions_den_icon.jpeg",
  },
  {
    title: "Wicked and Bonny",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "22:00",
    thumbnail: "img/wckd-nd-bnny.png",
  },
  {
    title: "Danubian Dub",
    description: "Danubian Dub dubs your Brain out",
    startsAt: "midnight",
    slug: "danubian-dub",
    thumbnail: "img/danubian_icon.jpeg",
  },
];
