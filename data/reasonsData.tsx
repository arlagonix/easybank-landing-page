type ReasonType = {
  /** Src attribute for image, passed as props to the child component */
  imageSrc: string;
  /** Reason name, passed as props to the child component, is used as a key */
  name: string;
  /** Reason description, passed as props to the child component */
  description: string;
};

export const reasonsData: ReasonType[] = [
  {
    imageSrc: "/onlineBanking.svg",
    name: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    imageSrc: "/simpleBudgeting.svg",
    name: "Simple Budgeting",
    description:
      "See exactly where your money goes each money. Receive notifications when you're close to hitting your limits.",
  },
  {
    imageSrc: "/fastOnboarding.svg",
    name: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    imageSrc: "/openAPI.svg",
    name: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
