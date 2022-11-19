import { fetchAPI } from '../../lib/api';
import styles from './Skills.module.sass';

export default async function Skills() {
  const { data } = await fetchAPI('/skills', { sort: 'Weight:desc', fields: 'Name' });
  return (
    <div className={styles.skills}>
      <h3>My Skills</h3>
      <ul>
        {data.map(({id, attributes: {Name: name}}) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}
