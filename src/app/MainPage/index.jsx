import CallToAction from '../common/CallToAction';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import { fetchAPI } from '../../lib/api';

export default async function MainPage(props) {
  const { data: { attributes: content }} = await fetchAPI('/homepage', {populate: '*'});
    return (
      <div className="page mainPage">
        <CallToAction email={"evanlihou.SPAMSTOPPER@evanlihou.com"} socials={content.Socials} />
        <div className="pageContent">
          <AboutMe about={content.AboutMe} />
          <hr />
          <Resume />
          <hr />
          <Projects />
          <hr />
          <Skills />
        </div>
      </div>
    );
}
