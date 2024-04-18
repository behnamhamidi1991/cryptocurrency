interface FeaturedPosts {
  id: number;
  title: string;
  image: StaticImageData;
}

import { StaticImageData } from "next/image";
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/2.jpg";
import image3 from "./assets/images/3.jpg";
import image4 from "./assets/images/4.jpg";
import image5 from "./assets/images/5.jpg";
import image6 from "./assets/images/6.jpg";
import image7 from "./assets/images/7.jpg";
import image8 from "./assets/images/8.jpg";

export const featured: FeaturedPosts[] = [
  {
    id: 1,
    title: "آموزش ترید در بازارهای مالی",
    image: image1,
  },
  {
    id: 2,
    title: "چگونه خود را برای نوسانات بازار آماده کنیم؟",
    image: image2,
  },
  {
    id: 3,
    title: "آموزش کار با صرافی",
    image: image3,
  },
  {
    id: 4,
    title: "آموزش کار با صرافی",
    image: image4,
  },
  {
    id: 5,
    title: "آموزش کار با صرافی",
    image: image5,
  },
  {
    id: 6,
    title: "آموزش کار با صرافی",
    image: image6,
  },
  {
    id: 7,
    title: "آموزش کار با صرافی",
    image: image7,
  },
  {
    id: 8,
    title: "آموزش کار با صرافی",
    image: image8,
  },
];
