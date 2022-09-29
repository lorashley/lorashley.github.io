export type CompanyProps = {
  name: string;
  year: string;
  src?: string;
  tags: string[];
  experiences: ExperienceProps;
};

export type ExperienceProps = string[];
export type ExperienceItemProps = {
  children: string[];
};
