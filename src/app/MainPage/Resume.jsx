import { fetchAPI } from '../../lib/api';
//import styles from './Resume.module.sass';
import ResumeSection from './ResumeSection';
import ReactMarkdown from 'react-markdown';

const intlOptions = new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', timeZone: 'UTC'})

export default async function Resume() {
  const {data} = await fetchAPI('/resume-entries', {sort: 'Start:desc'});
    return (
      <div>
        <h3>Curriculum Vitae</h3>
        {data.map(({id, attributes}) => {
          let timeString = "";
          if (attributes.DurationOverride) {
            timeString = attributes.DurationOverride;
          } else {
            const startDate = new Date(attributes.Start);
            if (attributes.End) {
              const endDate = new Date(attributes.End);
              timeString = intlOptions.formatRange(startDate, endDate);
              timeString = timeString.replace('–', 'to');
            } else {
              timeString = intlOptions.format(startDate);
            }
          }
          
          return (<ResumeSection
            key={id}
            title={attributes.Title}
            location={attributes.Company}
            time={timeString}
            current={attributes.IsCurrent}>
            <ReactMarkdown children={attributes.EntryDescription} />
          </ResumeSection>)})}
      </div>
    );
}
