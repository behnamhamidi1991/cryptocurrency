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

interface Coin {
  id: number;
  abbr: string;
  title: string;
  faPrice: number;
  enPrice: number;
  rate: number;
  image: StaticImageData;
}

import btc from "./assets/images/btc.png";
import eth from "./assets/images/eth.png";
import ada from "./assets/images/ada.png";
import solana from "./assets/images/solana.png";
import tet from "./assets/images/tet.png";
import rip from "./assets/images/rip.png";
import bnb from "./assets/images/bnb.png";

export const coinList: Coin[] = [
  {
    id: 1,
    abbr: "BTC",
    title: "Bitcoin",
    enPrice: 61319,
    faPrice: 4099035980,
    rate: -2.4,
    image: btc,
  },
  {
    id: 2,
    abbr: "ETH",
    title: "Etherium",
    enPrice: 2969,
    faPrice: 199205399,
    rate: 0.4,
    image: eth,
  },

  {
    id: 3,
    abbr: "SOL",
    title: "Solana",
    enPrice: 136,
    faPrice: 9151676,
    rate: 1.4,
    image: solana,
  },

  {
    id: 4,
    abbr: "XRP",
    title: "Ripple",
    enPrice: 0.497613,
    faPrice: 32905,
    rate: -1.4,
    image: rip,
  },
  {
    id: 5,
    abbr: "ADA",
    title: "Cardano",
    enPrice: 0.452129,
    faPrice: 30322,
    rate: -0.4,
    image: ada,
  },
  {
    id: 6,
    abbr: "USDA",
    title: "Tether",
    enPrice: 0.999936,
    faPrice: 67085,
    rate: 1.4,
    image: tet,
  },
  {
    id: 7,
    abbr: "ETH",
    title: "Etherium",
    enPrice: 2969,
    faPrice: 199205399,
    rate: -2.4,
    image: bnb,
  },
];

interface Blog {
  id: number;
  title: string;
  content: string;
  time: string;
  category: string;
  view: number;
  image: StaticImageData;
}

import blog from "./assets/images/blog.jpg";
import blog1 from "./assets/images/blog1.jpg";
import blog2 from "./assets/images/blog2.jpg";
import blog4 from "./assets/images/blog4.png";
import blog5 from "./assets/images/blog5.jpg";
import blog6 from "./assets/images/blog6.jpg";

export const blogPosts: Blog[] = [
  {
    id: 1,
    title:
      "سوددهی پایت‌ نتورک در روز قرمز رمزارزها! روند صعودی PYTH ادامه‌دار خواهد بود؟ ",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "دو ساعت پیش",
    category: "رمزارز",
    view: 425,
    image: blog,
  },
  {
    id: 2,
    title: "بررسی سیگنال‌های فروش؛ این هفته این دو ارز دیجیتال را نخرید!",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "دو ساعت پیش",
    category: "رمزارز",
    view: 612,
    image: blog1,
  },
  {
    id: 3,
    title:
      "چین‌لینک در تلاش برای حفظ حمایت کلیدی! آیا می‌توان به صعود LINK امیدوار بود؟",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "چهار ساعت پیش",
    category: "رمزارز",
    view: 319,
    image: blog2,
  },
  {
    id: 4,
    title:
      "چین‌لینک در تلاش برای حفظ حمایت کلیدی! آیا می‌توان به صعود LINK امیدوار بود؟",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "چهار ساعت پیش",
    category: "رمزارز",
    view: 319,
    image: blog4,
  },
  {
    id: 5,
    title:
      "چین‌لینک در تلاش برای حفظ حمایت کلیدی! آیا می‌توان به صعود LINK امیدوار بود؟",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "چهار ساعت پیش",
    category: "رمزارز",
    view: 319,
    image: blog5,
  },
  {
    id: 6,
    title:
      "چین‌لینک در تلاش برای حفظ حمایت کلیدی! آیا می‌توان به صعود LINK امیدوار بود؟",
    content:
      "با نزدیک شدن به رویداد هاوینگ بیت‌کوین، احساس خوش‌بینی در بازار ارزهای دیجیتال افزایش یافته است. این خوش‌بینی باعث افزایش قیمت برخی ارزهای دیجیتال از جمله توکن پایت نتورک (PYTH) شده است.",
    time: "چهار ساعت پیش",
    category: "رمزارز",
    view: 319,
    image: blog6,
  },
];
