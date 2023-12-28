import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { client } from '../../lib/sanity';
import { useEffect, useState } from 'react';
import { getEducation, getExperience } from '@/app/lib/sanity.query';
import { EducationType, ExperienceType } from '../../types';

import '../../globals.css';
import { useTheme } from 'next-themes';
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import Link from 'next/link';
import { SubSectionHeading } from '../headings/SubSectionHeading';

function sortByType (x: ExperienceType, y: ExperienceType) {
    if (x.type === 'Work') {
      return -1; 
    } else if (y.type === 'Work') {
      return 1; 
    } else {
      return 0; 
    }
  };


export default function Experience() {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [education, setEducation] = useState<EducationType[]>([]);
    const {resolvedTheme} = useTheme();

    // Sort the experiences array by type
    const sortedExperiences = experiences.slice().sort(sortByType);
 
    useEffect(() => {
        async function fetchExperienceData() {
            const fetchedExperiences = await getExperience();
            setExperiences(fetchedExperiences);
        }

        async function fetchEducationData() {
            const fetchedEducation = await getEducation();
            setEducation(fetchedEducation);
        }

        fetchEducationData();
        fetchExperienceData();
    }, []);

    console.log(education);
    console.log("This is sorted experiences: ", sortedExperiences);

    return (
        <section>
            <SubSectionHeading>
            My Experience
            </SubSectionHeading>
            <div className='pt-8 '>
                <VerticalTimeline>
                    {sortedExperiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ 
                                background: resolvedTheme === 'dark' ? '#4338ca' : '#fff', 
                                boxShadow: 'none',
                                border: resolvedTheme === 'dark' ? '1px solid white' :'1px solid rgba(0,0,0,0.5)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                            iconStyle={{ background: experience.type === 'Work' ? 'rgb(33, 150, 243)' : 'green', color: '#fff' }}
                            icon={experience.type === 'Work' ? <MdOutlineWorkHistory/> : <IoSchoolOutline/>}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={`${experience.startDate} - ${experience.endDate}`}
                            visible={true}
                        >
                            <h3 className="vertical-timeline-element-title text-lg font-semibold">{experience.position}</h3>
                            <Link href={experience.companyLink} legacyBehavior>
                                <a className=' text-blue-500 dark:text-amber-400' target={'_blank'}>
                                    <h3 className=''>{experience.company}</h3>
                                </a>
                            </Link>
                            <h4 className="vertical-timeline-element-subtitle italic pb-2">{experience.location}</h4>
                            <hr />
                            <div>
                                {experience.descriptionLists.map((list, listIndex) => (
                                    <p key={listIndex}>{list}</p>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}
