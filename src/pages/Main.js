import Chapter1 from "../components/Chapter1";
import Mainbanner from "../components/Mainbanner";
import Slogan from "../components/Slogan";

import '../css/main.css'

const Main = () => {

  return(
    <div className="main">
      <Mainbanner />
      <Slogan />
      <Chapter1 />
    </div>
  )

}

export default Main;