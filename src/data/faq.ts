import { siteDetails } from "./siteDetails";
import { IFAQ } from "./types";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} battery safe and reliable?`,
    answer:
      "Absolutely. Our batteries are manufactured with the highest safety standards and undergo rigorous quality checks to ensure reliability and long-lasting performance.",
  },
  {
    question: `Can I use ${siteDetails.siteName} batteries in different devices?`,
    answer: `Yes! ${siteDetails.siteName} batteries are compatible with a wide range of devices, including electric vehicles, solar energy systems, and portable electronics.`,
  },
  {
    question: "How long do your batteries last?",
    answer: `Our batteries are designed for extended lifespan, offering thousands of charge cycles with minimal capacity loss over time.`,
  },
  {
    question: "Do I need special equipment to install the batteries?",
    answer:
      "No special equipment is needed for most applications. Our batteries are designed for easy installation, and we provide clear instructions and support if needed.",
  },
  {
    question: "What support do you offer if I have issues with my battery?",
    answer:
      "Our customer support team is available 24/7 via phone or email. We also offer a comprehensive warranty and troubleshooting resources to assist you.",
  },
];
