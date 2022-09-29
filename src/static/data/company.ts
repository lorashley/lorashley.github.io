import { CompanyProps } from "../../types/company";
import { ResumeSection } from "../../types/resumeSection";

export const companySection: ResumeSection = {
  name: "Experience",
  tags: ["All", "Development", "Design", "Community"],
};

export const companyData: CompanyProps[] = [
  {
    name: "Twilio",
    year: "August 2020 - September 2022",
    src: "https://toppng.com/uploads/preview/twilio-logo-11609380242jwkoktksba.png",
    tags: ["All", "Development", "Design"],
  },
  {
    name: "Cisco",
    year: "July 2013 - August 2020",
    src: "https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png",
    tags: ["All", "Development", "Design"],
  },
];
