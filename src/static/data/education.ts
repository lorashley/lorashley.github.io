import { EducationProps } from "../../types/education";
import { ResumeSection } from "../../types/resumeSection";

export const educationSection: ResumeSection = {
  name: "Education",
  tags: ["All", "Development", "Design"],
};
export const educationData: EducationProps[] = [
  {
    name: "Advanced React/JS Bootcamp",
    institution: "Scrimba",
    year: "2020",
    link: "https://scrimba.com/learn/react",
    img: "https://patterns.dev/img/reactjs/react-logo@3x.svg",
    tags: ["Development"],
  },
  {
    name: "Certificates in UX Design",
    institution: "Bentley University",
    year: "2019",
    link: "https://www.bentley.edu/centers/ux-education/ux-boot-camp",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Double_diamond.png",
    tags: ["Design"],
  },
  {
    name: "AI (Python) Nanodegree",
    institution: "Udacity",
    year: "2017",
    link: "https://www.udacity.com/course/ai-programming-python-nanodegree--nd089",
    img: "https://miro.medium.com/max/1400/1*MI9-6MQx1Ux0FXp35wEOmA.png",
    tags: ["Development"],
  },
  {
    name: "CCNA R&S and CCIE Written",
    institution: "Cisco",
    year: "2013",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    img: "https://learning.nil.com/assets/News/2016/New-CCNA-Routing-and-Switching-Certification-v3.0.jpg",
    tags: ["Other"],
  },
  {
    name: "B.S. Computer Engineering Cum Laude",
    institution: "University of Miami",
    year: "2013",
    img: "https://ddfoqzqsu0zvp.cloudfront.net/media/documents/miami_bootcamps_logo_1.png",
    tags: ["Development"],
  },
];
