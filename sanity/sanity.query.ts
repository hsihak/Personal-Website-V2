import { groq } from "next-sanity";
import {client} from '../app/lib/sanity';

export const revalidate = 60;

export async function getExperience() {
    const query = `*[_type == "experience"] {
        position,
        company,
        location,
        startDate,
        endDate,
        descriptionLists,
    }`;

    const data = await client.fetch(query, {next: {revalidate}});

    return data;
}