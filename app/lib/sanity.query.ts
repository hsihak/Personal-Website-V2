import { groq } from "next-sanity";
import {client} from './sanity';

export const revalidate = 60;

export async function getAboutInfo() {
    const query = `*[_type == 'about'] {
        name,
        jobTitle,
        email,
        github,
        linkedin,
        twitter,
        paragraphOne,
        paragraphTwo,
        paragraphThree,
      }`;

      const data = await client.fetch(query, {next: {revalidate}});

      return data;
}

export async function getExperience() {
    const query = `*[_type == "experience"] {
        position,
        type,
        company,
        companyLink,
        location,
        startDate,
        endDate,
        descriptionLists,
    }`;

    const data = await client.fetch(query, {next: {revalidate}});

    return data;
}

export async function getProject() {
    const query = `*[_type == "project"] {
        title,
          overview,
          githubLink,
          demoLink,
          devPostLink,
          prototypeLink,
          _id,
          "imageUrl": image.asset->url,
          slug
      }`

    const data = await client.fetch(query, {next: {revalidate}});

    return data;
}

export async function getEducation() {
    const query = `*[_type == "education"] {
        programName,
        school,
        location,
        startDate,
        endDate,
        courses,
        activities,
      }`

    const data = await client.fetch(query, {next: {revalidate}});

    return data;
}