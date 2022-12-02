import styles from './AboutMe.module.sass';
import ReactMarkdown from 'react-markdown';

export default function AboutMe(props) {
    return (
        <div className={styles.aboutMe}>
            <h3>About me</h3>
            <ReactMarkdown children={props.about} />
        </div>
    );
}
