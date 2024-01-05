import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";

const Chapter = () => {

  return(
    <div className="chapter">
      <div className="inner">
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
      </div>
    </div>
  )

}

export default Chapter;
