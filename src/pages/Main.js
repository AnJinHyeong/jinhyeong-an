import Chapter1 from "../components/Chapter1";
import Mainbanner from "../components/Mainbanner";
import Slogan from "../components/Slogan";
import { SectionsContainer, Section, Footer } from 'react-fullpage';

import '../css/main.css'
import Chapter2 from "../components/Chapter2";

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
      <Chapter1 />
      <Chapter2 />
      <Footer/>
    </div>
  )

}

export default Main;