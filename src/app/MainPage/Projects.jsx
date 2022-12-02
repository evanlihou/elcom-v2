import ReactMarkdown from 'react-markdown';
import { fetchAPI, getStrapiURL } from '../../lib/api';
import styles from './Projects.module.sass';

export default async function Projects() {
  const { data } = await fetchAPI('/projects', {populate: 'Image'});
  return (
    <div className={styles.projects}>
      <h3>My Projects</h3>
      <ul>
        {data.map(({id, attributes}) => {
          let imageUrl;
          if (attributes.Image?.data?.attributes.url) {
            const rawUrl = attributes.Image?.data?.attributes.url;
            imageUrl = rawUrl.startsWith('/') ? getStrapiURL(rawUrl) : rawUrl;
          }
          return (<ProjectEntry key={id} name={attributes.Title} href={attributes.SourceCodeUrl} img={imageUrl} imgAlt={attributes.Image?.data?.attributes.alternativeText}><ReactMarkdown children={attributes.Description} /></ProjectEntry>);})}
        <ProjectEntry name="FIRST at Michigan State Website" href="https://github.com/famnms/website-october" img="/fms-site.png">
          A website running on October CMS which is still a work in progress.
          This project will include systems for member management, attendance
          tracking, event calendars, and RSVPs.
        </ProjectEntry>
        <ProjectEntry name={"FIRST Alumni Collegiate Competition Ri3D Scoreboard"} href="https://github.com/firstatmsu/facc-scoreboard-svr" img="/scoreboard.png">
          A realtime scoreboard made especially for a Robot in 3 Days
          competition held by <i>FIRST</i> alumni for college students. Runs a
          Hapi.js server and presented with the help of React and Socket.io
          for instant updates.
        </ProjectEntry>
        <ProjectEntry name="EvanLihou.com" href="https://github.com/evanlihou/elcom-v2" img="/site.png">
          This site is my first foray into React and JavaScript. It's
          been a very long and hard project learning something new but
          enjoyable nonetheless. In production, this runs on a Linode VPS with
          Nginx.
        </ProjectEntry>
        <ProjectEntry name="ICS" href="https://github.com/evanlihou/ics" img="/ics.png">
          <i>ICS</i> is a proprietary inventory system I designed and made
          for my high school over a few months. Its basic features include
          asset management, inventory checkin and checkout, ahead-of-time
          checkout requests, and user management. This project's
          backend is powered by the Fat Free PHP Framework and the frontend
          is powered by Semantic UI.
        </ProjectEntry>
      </ul>
      <p>If you want a demo of one of the projects above, don't hesitate to ask by clicking above!</p>
    </div>
  );
}

function ProjectEntry(props) {
    return (
      // <a href={props.href}>
        <li>
          {props.img &&
            <img src={props.img} alt={"Screenshot of " + props.name} />
          }
          <h4>{props.name}</h4>
          <p>{props.children}</p>
          <div className={styles.linkContainer}>
            <a href={props.href}>Source Code</a>
          </div>
        </li>
      // </a>
    )
}
