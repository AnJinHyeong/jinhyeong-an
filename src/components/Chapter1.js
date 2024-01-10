/**
 * Chapter1
 * 개인 역량 소개 영역
 */
const Chapter1 = () => {

  const openGithub = () => {
    window.open('https://github.com/AnJinHyeong');
  }

  const openLikedin = () => {
    window.open('https://www.linkedin.com/in/jinhyeong-an-9891b72a9/');
  }

  return(
    <div className="chapter1">
      <div className="inner">

        <div className="about">
          <h2 className="title">ABOUT</h2>
          <div className="profile">
            <div className='profile-img'></div>
            {/* <img className='profile-img' src={require('../assets/img/profile.jpeg')}/> */}
            <div className="profile-info">
              <div className='profile-item'>
                <p className='profile-name'>안진형</p>
                <p className="profile-birth">1997.12.17</p>
              </div>
              <div className='profile-item'>
                <p className='profile-contant'>
                  안녕하세요, 새로운 배움으로 끊임없이 성장하며 개발을 즐기는 프론트엔드 개발자 안진형 입니다.
                </p>
                <p className='profile-contant'>
                  개발 중 문제가 발생했을 때, 저는 여러 관점에서 문제를 살펴보고 해결하는 과정을 즐기며 성취감을 느낍니다.
                </p>
              </div>
              {/* <div className='profile-item'>
                <ul className="skills-tiems profile">
                  <li>Frontend</li>
                  <li>React</li>
                </ul>
              </div> */}
              <div className='profile-item'>
                <ul className="skills-tiems pagelink">
                  <li className='github' onClick={() => openGithub()}>
                    <img className='profile-icon' src={require('../assets/img/skill-icon/github.png')}/>
                    Github
                  </li>
                  <li className='linkedin' onClick={() => openLikedin()}>
                    <img className='profile-icon' src={require('../assets/img/skill-icon/likedin.png')}/>
                    Linkedin
                  </li>
                  <li className='gmail' onClick={() => {}}>
                    <img className='profile-icon' src={require('../assets/img/skill-icon/gmail.png')}/>
                    Gmail
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="skill">
          <h2 className="title">SKILLS ABILITY</h2>

          <div className='skill-content'>
            <p className='skill-sub-title'>Language/Framework/Library</p>

            <div className="skills-item">

              <div className='skills-item-box'>
                <h2 className='skills-title'>사용하기 수월해요</h2>
                <ul className="skills-tiems">
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/js.png')}/>Javascript(ES6+)</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/react.png')}/>React.js</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/html5.png')}/>HTML5</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/css3.png')}/>CSS3</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/sass.png')}/>SASS</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/git.png')}/>Git</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/github.png')}/>GitHub</li>
                </ul>
              </div>

              <div className='skills-item-box'>
                <h2 className='skills-title'>사용할 수 있어요</h2>
                <ul className="skills-tiems">
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/jquery.png')}/>jQuery</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/java.png')}/>Java</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/mysql.png')}/>mysql</li>
                  <li><img className='skill-icon oracle' src={require('../assets/img/skill-icon/oracle.png')}/>oracl</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/spring.png')}/>Spring</li>
                </ul>
              </div>

              <div className='skills-item-box'>
                <h2 className='skills-title'>사용해봤어요</h2>
                <ul className="skills-tiems">
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/python.png')}/>python</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/jsp.png')}/>JSP</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/c.png')}/>C</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/c#.png')}/>C#</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/docker.png')}/>docker</li>
                  <li><img className='skill-icon' src={require('../assets/img/skill-icon/firebase.png')}/>firebase</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )

}

export default Chapter1;