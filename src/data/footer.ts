import { IMenuItem, ISocials } from "./types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Empowering businesses with cutting-edge battery technology.",
  quickLinks: [
    {
      text: "The Team",
      url: "#testimonials",
    },
  ],
  email: "info@levantisk.com",
  telephone: "",
  socials: {
    //twitter: "https://twitter.com/Twitter",
    //facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com/company/levantisk",
    // threads: 'https://www.threads.net',
    //instagram: "https://www.instagram.com",
  },
};
