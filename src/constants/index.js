import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#Aboutus",
  },
  {
    id: "1",
    title: "Leaderboard",
    url: "#Leaderboard",
  },
  {
    id: "2",
    title: "Upcoming Events",
    url: "#events",
  },
  {
    id: "3",
    title: "Roadmaps",
    url: "#roadmaps",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI Workshop Series",
    text: "Conduct hands-on workshops on topics like machine learning, deep learning, and AI ethics to build skills among members.",
    date: "August 2024",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "1",
    title: "Hackathon Participation",
    text: "Encourage club members to participate in national and international hackathons, showcasing our capabilities in AI-driven solutions.",
    date: "September 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI Project Collaboration",
    text: "Initiate collaborations on AI projects with other college clubs and industry partners, expanding our knowledge and impact.",
    date: "October 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Real-world AI Integrations",
    text: "Integrate AI APIs, such as image recognition and NLP, into ongoing club projects, allowing members to explore practical applications of AI.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];


export const collabText =
  "Through collaboration in Azure Cloud, Android Studio, Web Development, Generative AI, and Machine Learning, we empower teams to enhance their skills and work smarter together.";

export const collabContent = [
  {
    id: "0",
    title: "Cross-Disciplinary Workshops",
    text: "",
  },
  {
    id: "1",
    title: "Technical Support for College Clubs",
    text: "",
  },
  {
    id: "2",
    title: "Innovation and Collaboration",
    text: "",
  },
];
  

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Learn Together",
    text: "A community to grow your skills with others through hands-on workshops and collaborative projects.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Global Community",
    text: "Join a global network of student developers and grow your professional network.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Skill Development",
    text: "Sharpen your technical skills by learning new technologies and participating in coding challenges.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Leadership Opportunities",
    text: "Develop leadership skills by organizing events, leading teams, and mentoring new members.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Innovation Hub",
    text: "Collaborate on innovative projects and explore cutting-edge technologies.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Hackathons & Competitions",
    text: "Participate in hackathons and competitions, showcasing your skills and gaining experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },

];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
export const gdscServices = [
  "AI Workshops",
  "Ml Workshop",
  "GenAI Bootcamps"
];

