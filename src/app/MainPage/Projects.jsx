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
          {props.children}
          <div className={styles.linkContainer}>
            <a href={props.href}>Source Code</a>
          </div>
        </li>
      // </a>
    )
}
