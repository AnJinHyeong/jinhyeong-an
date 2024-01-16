import { SectionsContainer, Section, Footer } from 'react-fullpage';
import Mainbanner from "../components/Mainbanner";
import Slogan from "../components/Slogan";
import Chapter from "../components/Chapter";
import Contact from '../components/Contact';

import '../css/main.css'

const Main = () => {

  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix', 'sectionSeven'],
    delay: 700,
    navigation: false,
  };

  return(
    <div className="main">
      {/* <SectionsContainer {...options}>
        <Mainbanner />
        <Slogan />
        <Chapter />
        <Contact />
      </SectionsContainer> */}
      <Mainbanner />
      <Slogan />
      <Chapter />
      <Contact />
    </div>
  )

}

export default Main;