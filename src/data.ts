interface FeaturedPosts {
  id: number;
  title: string;
  image: StaticImageData;
}

import { StaticImageData } from "next/image";
import image1 from "./assets/images/1.jpg";

export const featured: FeaturedPosts[] = [
  {
    id: 1,
    title: "آموزش ترید در بازارهای مالی",
    image: image1,
  },
];
