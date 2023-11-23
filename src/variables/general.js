import frame1 from "../assets/projects/frame1-PortalWeb.jpg";
import frame2 from "../assets/projects/frame2-LautanUang.jpg";
import frame3 from "../assets/projects/frame3-ArBook.jpg";
import frame4 from "../assets/projects/frame4-MyTopSong2021.png"
import frame5 from "../assets/projects/frame5-NakoaCafe.jpg"
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineDribbble,
  AiOutlineInstagram,
} from "react-icons/ai";

const sizeIcon = 27;
export const contactsList = [
  {
    content: "bayu-ferdiman",
    link: "https://www.linkedin.com/in/bayu-ferdiman",
    iconType: "linkedin",
    icon: <AiOutlineLinkedin size={sizeIcon} />,
  },
  {
    content: "@frdmn12",
    link: "https://github.com/frdmn12",
    iconType: "github",
    icon: <AiOutlineGithub size={sizeIcon} />,
  },
  {
    content: "bayu.ferdiman@binus.ac.id",
    link: "mailto:bayu.ferdiman@binus.ac.id?subject=Work",
    iconType: "mail",
    icon: <AiOutlineMail size={sizeIcon} />,
  },
  {
    content: "@bayuferdiman",
    link: "https://dribbble.com/bayuferdiman",
    iconType: "dribble",
    icon: <AiOutlineDribbble size={sizeIcon} />,
  },
  {
    content: "@frdmn12",
    link: "https://www.instagram.com/frdmn12",
    iconType: "instagram",
    icon: <AiOutlineInstagram size={sizeIcon} />,
  },
];

export const projectsList = [
  {
    title: "Portal Website",
    desc: "Rebuild the appearance of the Probolinggo Regency news & information portal website.",
    image: `${frame1}`,
    link: "https://portal-website-two.vercel.app",
    listTech: ["React Js", "Chakra-Ui"],
  },
  {
    title: "Lautan Uang",
    desc: "An investment platform used by fishing companies or fishing communities to obtain financing through the sale of shares to investors.",
    image: `${frame2}`,
    link: "https://github.com/qweersq/web-lautan-uang",
    listTech: ["React Js", "Mysql", "Api", "Chakra Ui"],
  },
  {
    title: "Nakoa Cafe Online",
    desc: "An unofficial coffeshop website that sells their drinks & food online",
    image: `${frame5}`,
    link: "https://github.com/frdmn12/nakoa-cafe",
    listTech: ["React Js", "Express Js", "Tailwind", "Mysql"],
  },
  {
    title: "Augmented Reality Book",
    desc: "Applications that utilize Augmented Reality technology to be able to show novel book reviews.",
    image: `${frame3}`,
    link: "https://github.com/frdmn12/Augmented-Reality-Book",
    listTech: ["Unity", "Vuforia"],
  },
  {
    title: "My Top Song - 2021",
    desc: "First time deploying Static Website on Netlify",
    image: `${frame4}`,
    link: "https://frdmn12-topsong.netlify.app",
    listTech: ["Netlify", "Html", "Css"],
  },
];

export const skills = [
  {
    badge_title: "HTML5",
    img_link:
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    badge_title: "CSS 3",
    img_link:
      "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    badge_title: "Javascript",
    img_link:
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    badge_title: "Node Js",
    img_link:
      "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  },
  {
    badge_title: "Express J",
    img_link:
      "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
  },
  {
    badge_title: "React Js",
    img_link:
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    badge_title: "Tailwind Css",
    img_link:
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  },
  {
    badge_title: "Unity",
    img_link:
      "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
  },
  {
    badge_title: "Bootstrap",
    img_link:
      "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
  },
  {
    badge_title: "Python",
    img_link:
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  },
  {
    badge_title: "C",
    img_link:
      "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
  },
  {
    badge_title: "C++",
    img_link:
      "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  },
  {
    badge_title: "Netlify",
    img_link:
      "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
  },
  {
    badge_title: "Vercel",
    img_link:
      "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
  },
  {
    badge_title: "Java",
    img_link:
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
  },
  {
    badge_title: "Mysql",
    img_link:
      "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
  },
  {
    badge_title: "Figma",
    img_link:
      "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
  },
  {
    badge_title: "Git",
    img_link:
      "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    badge_title: "Adobe AI",
    img_link:
      "https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white",
  },
  {
    badge_title: "Adobe Ps",
    img_link:
      "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black",
  },
  {
    badge_title: "Adobe Pr",
    img_link:
      "https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white",
  },
];
