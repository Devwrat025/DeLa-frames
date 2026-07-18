export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "Website of the Day", publisher: "CSSDA", year: 2019, image: "/assets/images/section/award-1.jpg" },
  { name: "Public Awards - UI", publisher: "CSSDA", year: 2019, image: "/assets/images/section/award-2.jpg" },
  { name: "Public Awards - INN", publisher: "CSSDA", year: 2019, image: "/assets/images/section/award-3.jpg" },
  { name: "Site of the Month", publisher: "Awwwards", year: 2018, image: "/assets/images/section/award-4.jpg" },
  { name: "Site of the Day", publisher: "Awwwards", year: 2017, image: "/assets/images/section/award-5.jpg" },
];
