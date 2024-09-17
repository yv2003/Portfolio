import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yashasvi Vaidya",
  initials: "YV",
  url: "https://www.github.com/yv2003",
  location: "Mumbai,India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a Full Stack Web Developer",
  summary:
    "I am a Computer Engineering student with a strong foundation in web development, proficient in ReactJS, HTML, CSS, and JavaScript,NodeJs and Express. Passionate about web innovation, I enjoy problem-solving and creating user-friendly experiences. Outside of coding, I love exploring new technologies, watching movies with friends, and staying indoors reading books.",
  avatarUrl: "/yashasvi.jpg",
  skills: [
    "React",
    "Next.js",
    "Javacript",
    "Typescript",
    "Node.js",
    "Express.js",
    "MySQL",
    "Java",
    "Git",
    "Github",
    "VSCode"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yashasvivaidya13@gmail.com",
    tel: "+91 7304841942",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/yv2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashasvi-vaidya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vaidya_yashasvi",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Jio Platforms LTD",
      href: "",
      badges: [],
      location: "On site",
      title: "Intern",
      logoUrl: "/jio.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Implemented an employee management system using React and SpringBoot",
    },
    {
      company: "TCET Open Source",
      badges: [],
      href: "",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/OS.png",
      start: "June 2023",
      description:
        "Developed and worked on varoius open source projects, improved UI to make it efficient.",
    },
  ],
  education: [
    {
      school: "Thakur College of Engineering and Technology",
      href: "",
      degree: "Bachlors in Computer Engineering",
      logoUrl: "/tcet.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "SpendWise",
      // href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An expense tracker that tracks daily expenses based on user data which also tracks monthly expenses allowing smart savings and seamless user experience.",
      technologies: [
        "React",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Node.js",
        "Express.js"
      ],
      links: [
      ],
      image: "/spendwise.jpg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "StaffPro",
      // href: "https://magicui.design",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "An Employee Management system for admins to track and maintain and perform CRUD operations employee data.Displays employee profile and tracks leaves, absences and vacation of employee.",
      technologies: [
        "React",
        "Javascript",
        "MySQL",
        "TailwindCSS",
        "Sring Boot",
        "Express.js"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/staffpro.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
        {
      title: "HackHaven",
      dates: "November 2023",
      location: "Mumbai,India",
      description:
        "Developed an application which allows seamless meetings and video chatting, saves documents and smartly plans next upcoming meeting by maintianing a schedule",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },{
      title: "Smart India Hackathon",
      dates: "August 2023 - October 2023",
      location: "Mumbai,India",
      description:
        "Developed an application that converts documents into your native language and vice versa",
      image:
        "/sih.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    {
      title: "BitNBuild",
      dates: "January 2023",
      location: "Mumbai,India",
      description:
        "Developed a Warehouse management system which manages inventory, smart planning of logistics and makes it easier to generate QR and receipts",
      icon: "public",
      image:
        "/bitnbuild.jpg",
      links: [],
    },
    {
      title: "Deep Blue Hackathon, Hosted by Mastek",
      dates: "June 2022",
      location: "Mumbai,India",
      description:
        "An Ideathon where we developed a solution to seamlessly install a Voice Based Authentication System.",
      image:
        "/deepblue.png",
      links: [
      ],
    },
  ],
} as const;
