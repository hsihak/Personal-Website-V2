
export type AboutType = {
    name: string;
    jobTitle: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
}

export type ExperienceType = {
    position: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    descriptionLists: string[],
}

interface Slug {
    current: string;
    _type: string;
}

export type ProjectType = {
    title: string,
    overview: string,
    githubLink: string,
    demoLink: string,
    devPostLink: string,
    prototypeLink: string,
    _id: string,
    imageUrl: string,
    slug: Slug;
}