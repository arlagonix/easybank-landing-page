type ArticleType = {
  /** Src attribute for image, passed as props to the child component */
  imageSrc: string;
  /** Alt attribute for image, passed as props to the child component */
  imageAlt: string;
  /** Article author, passed as props to the child component */
  author: string;
  /** Article name, passed as props to the child component, is used as a key */
  name: string;
  /** Article description, passed as props to the child component */
  description: string;
};

export const articlesData: ArticleType[] = [
  {
    imageSrc: "/image-currency.png",
    imageAlt: "A heap of currency banknotes",
    author: "Claire Robinson",
    name: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    imageSrc: "/image-restaurant.png",
    imageAlt: "A dish in a restaurant with many utensils around",
    author: "Wilson Hutton",
    name: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    imageSrc: "/image-plane.png",
    imageAlt:
      "A photo of the right wing of an airplane flying among clouds, sun dawning in the background",
    author: "Wilson Hutton",
    name: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    imageSrc: "/image-confetti.png",
    imageAlt: "Many confetti flying in the air on a blue background",
    author: "Claire Robinson",
    name: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];
