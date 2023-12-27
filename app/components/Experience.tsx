import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { client } from '../lib/sanity';
import { useEffect, useState } from 'react';
import { getExperience } from '@/sanity/sanity.query';
import { ExperienceType } from '../types';

export default function Experience() {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);

    useEffect(() => {
        async function fetchExperienceData() {
            const fetchedExperiences = await getExperience();
            setExperiences(fetchedExperiences);
        }

        fetchExperienceData();
    }, []);

    return (
        <section>
            <h1>My Experience</h1>
            <VerticalTimeline animate={false}>
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: '#f3f4f6', 
                            boxShadow: 'none',
                            border: '1px solid rgba(0,0,0,0.5)',
                            textAlign: 'left',
                            padding: '1.3rem 2rem',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={`${experience.startDate} - ${experience.endDate}`}
                    >
                        <h3 className="vertical-timeline-element-title">{experience.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                        <div>
                            {experience.descriptionLists.map((list, listIndex) => (
                                <p key={listIndex}>{list}</p>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}
