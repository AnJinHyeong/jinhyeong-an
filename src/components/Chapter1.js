const Chapter1 = () => {

  return(
    <div className="chapter1">
      <div className="inner">

        <div className="profile">
          <h2 className="title">ABOUT</h2>
          <div className="protile-item">
            <div className="img-box">
              <span className="profile-img"></span>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">안진형</h2>
              <p className="profile-birth">1997.12.17</p>
              <span>안녕하세요.</span>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="skill">
          <h2 className="title">SKILLS ABILITY</h2>
          <div className="skills-item">
            <p className="item-contant">사용하기 수월해요.</p>
            <ul className="skills-tiem-box">
              <li>React1</li>
              <li>React2</li>
              <li>React3</li>
              <li>React4</li>
              <li>React5</li>
              <li>React6</li>
              <li>React7</li>
              <li>React8</li>
              <li>React9</li>
              <li>React10</li>
            </ul>
          </div>
          <div className="skills-item">
            <p className="item-contant">사사용하는데 불편함 없어요.</p>
            <ul className="skills-tiem-box">
              <li>Java1</li>
              <li>Java2</li>
              <li>Java3</li>
              <li>Java4</li>
              <li>Java5</li>
            </ul>
          </div>
          <div className="skills-item">
            <p className="item-contant">사용해 봤어요.</p>
            <ul className="skills-tiem-box">
              <li>JQuery</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Chapter1;