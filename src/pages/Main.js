import { SectionsContainer, Section, Footer } from 'react-fullpage';
import Mainbanner from "../components/Mainbanner";
import Slogan from "../components/Slogan";
import Chapter from "../components/Chapter";

import '../css/main.css'
import Contact from '../components/Contact';

const Main = () => {

  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'], // the anchors for each sections
    delay: 700, // the scroll animation speed
    navigation: false,
  };

  return(
    <div className="main">
      {/* <SectionsContainer {...options}>
        <Section><Mainbanner /></Section>
        <Section><Slogan /></Section>
        <Section><Chapter1 /></Section>
        <Section><Chapter2 /></Section>
        <Footer/>
      </SectionsContainer> */}
      <Mainbanner />
      <Slogan />
      <Chapter />
      <Contact />
    </div>
  )

}

export default Main;