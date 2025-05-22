
import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";
import { IBenefit } from "./types";

export const benefits: IBenefit[] = [
    {
        title: "Advanced Battery Management",
        description: "Optimize your energy usage with our intelligent battery solutions designed for efficiency and reliability.",
        bullets: [
            {
                title: "Smart Monitoring",
                description: "Real-time tracking of battery health and performance for maximum uptime.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Customizable Power Goals",
                description: "Set energy targets and let our system help you achieve them effortlessly.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Predictive Maintenance",
                description: "Receive alerts and forecasts to prevent downtime and extend battery life.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Seamless Energy Integration",
        description: "Effortlessly connect and manage your battery systems for homes, businesses, or vehicles.",
        bullets: [
            {
                title: "Flexible Installation",
                description: "Adaptable solutions for residential, commercial, and industrial needs.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Engineering",
                description: "Benefit from designs tailored to your specific energy requirements.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Performance Analytics",
                description: "Visualize your energy usage and savings with intuitive dashboards.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Unmatched Safety & Security",
        description: "Protect your investment with industry-leading safety features and secure data management.",
        bullets: [
            {
                title: "Robust Protection",
                description: "Advanced safeguards against overheating, overcharging, and short circuits.",
                icon: <FiLock size={26} />
            },
            {
                title: "User Authentication",
                description: "Secure access to your battery system with multi-factor authentication.",
                icon: <FiUser size={26} />
            },
            {
                title: "Continuous Monitoring",
                description: "24/7 surveillance for early detection of potential issues.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
