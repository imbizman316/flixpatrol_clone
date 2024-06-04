import { US, CA, KR } from "country-flag-icons/react/3x2";

export const size = {
  generalPadding: 100,
};

export const benefits = [
  { title: "Daily TOP 10", types: ["pro", "premium", "enterprise"] },
  {
    title: "Daily Popularity & Social",
    types: ["pro", "premium", "enterprise"],
  },
  { title: "2024 Datasets", types: ["pro", "premium", "enterprise"] },
  { title: "2020-2023 Datasets", types: ["premium", "enterprise"] },
  { title: "Dashboard, SuperSearch", types: ["premium", "enterprise"] },
  { title: "CSV Export", types: ["premium", "enterprise"] },
  { title: "API with 1000 calls per month", types: ["premium"] },
  { title: "API with unlimited calls", types: ["enterprise"] },
  { title: "Premium support", types: ["enterprise"] },
];

export const subscriptions = [
  {
    id: 0,
    title: "Pro",
    desc: "For fans or journalists looking for fresh data only.",
    price: 0,
    duration: null,
    benefit: benefits.filter((item) => item.types.includes("pro")),
  },
  {
    id: 1,
    title: "Premium",
    desc: "For small businesses, film professionals, or researchers looking at trends and history",
    price: 490,
    duration: "year",
    benefit: benefits.filter((item) => item.types.includes("premium")),
  },
  {
    id: 2,
    title: "Enterprise",
    desc: "For film companies, and agencies working with business intelligence software",
    price: -1,
    duration: null,
    benefit: benefits.filter((item) => {
      if (item.types.includes("enterprise")) {
        return item.title;
      }
    }),
  },
];

export const platforms = {
  header: "All platforms",
  children: [
    {
      id: 0,
      title: "Netflix",
      icon: "https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png",
    },
    {
      id: 1,
      title: "HBO",
      icon: "https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",
    },
    {
      id: 2,
      title: "Disney+",
      icon: "https://cdn.icon-icons.com/icons2/2657/PNG/256/disney_plus_icon_161064.png",
    },
  ],
};

export const countries = {
  header: "Worldwide",
  children: [
    {
      id: 0,
      title: "United States",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
    {
      id: 1,
      title: "Canada",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
    },
    {
      id: 2,
      title: "Korea",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    },
  ],
};

export const durations = {
  header: "Yesterday",
  children: [
    {
      id: 0,
      title: "May 31",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    },
    {
      id: 1,
      title: "This week",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    },
    {
      id: 2,
      title: "Last week",
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg",
    },
  ],
};

export const top10 = {
  netflix: {
    movies: [
      { title: "Atlas", views: 804 },
      { title: "Colors of Evil: Red", views: 740 },
      { title: "Bionic", views: 392 },
      { title: "Ice Age: Collision Course", views: 372 },
      { title: "Godzilla Minus One", views: 689 },
      { title: "Real Steel", views: 308 },
      { title: "Crew", views: 158 },
      { title: "Sing 2", views: 131 },
      { title: "Mother of the Bride", views: 129 },
      { title: "Transformers: Rise of the Beasts", views: 161 },
      { title: "Dune: Part Two", views: 459 },
      { title: "Night Shift", views: 174 },
    ],
    tv: [
      { title: "Squid Game", views: 1000 },
      { title: "Colors of Evil: Red", views: 740 },
      { title: "Bionic", views: 392 },
      { title: "Ice Age: Collision Course", views: 372 },
      { title: "Godzilla Minus One", views: 689 },
      { title: "Ninja Family", views: 289 },
      { title: "Crew", views: 158 },
      { title: "Sing 2", views: 131 },
      { title: "Mother of the Bride", views: 129 },
      { title: "Transformers: Rise of the Beasts", views: 161 },
      { title: "Dune: Part Two", views: 459 },
      { title: "Strange Things", views: 2000 },
    ],
  },
};
