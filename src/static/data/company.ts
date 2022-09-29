import { CompanyProps, ExperienceProps } from "../../types/company";
import { ResumeSection } from "../../types/resumeSection";

export const companySection: ResumeSection = {
  name: "Work Experience",
  tags: ["All", "Development", "Design", "Community"],
};

export const companyData: CompanyProps[] = [
  {
    name: "Twilio",
    year: "August 2020 - September 2022",
    src: "https://toppng.com/uploads/preview/twilio-logo-11609380242jwkoktksba.png",
    tags: ["All", "Development", "Design"],
    experiences: [
      "Led product design UX/UI for the Demo Platform, creating meaningful, customizable product demos for Solution Engineers and increasing our platform content library by 30%",
      "React front-end developer, utilizing Python and JS for scripts, maintained on Github, deployed on AWS",
      "Bridged knowledge between teams’ PM and devs, providing product clarity and increasing efficiency by establishing a JIRA workflow which increased the team’s velocity by 15%",
      "Restructured the teams support strategy with a slack workflow to generate net-new data and redefining support operations, enabling the team to identify and prioritize areas for improvements",
      "Created and conducted two user research studies impacting the teams yearly measures & goal setting with regards to documentation strategy and product development",
    ],
  },
  {
    name: "Cisco",
    year: "July 2013 - August 2020",
    src: "https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png",
    tags: ["All", "Development", "Design"],
    experiences: [
      "Led product design UX/UI for the Demo Platform, creating meaningful, customizable product demos for Solution Engineers and increasing our platform content library by 30%",
      "React front-end developer, utilizing Python and JS for scripts, maintained on Github, deployed on AWS",
      "Bridged knowledge between teams’ PM and devs, providing product clarity and increasing efficiency by establishing a JIRA workflow which increased the team’s velocity by 15%",
      "Restructured the teams support strategy with a slack workflow to generate net-new data and redefining support operations, enabling the team to identify and prioritize areas for improvements",
      "Created and conducted two user research studies impacting the teams yearly measures & goal setting with regards to documentation strategy and product development",
    ],
  },
];
