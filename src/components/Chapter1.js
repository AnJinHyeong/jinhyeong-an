const Chapter1 = () => {

  return(
    <div className="chapter1">
      <div className="inner">

        <div className="profile">
          <h2 className="title">ABOUT</h2>
          <div className="protile-item">
            <img className='profile-img' src={require('../assets/profile.jpeg')}/>
            <div className="profile-info">
              <h2 className="profile-name">안진형</h2>
              <p className="profile-birth">1997.12.17</p>
              <span>안녕하세요.</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h2 className="title">SKILLS ABILITY</h2>
          <div className="skills-item">
            <ul className="skills-tiems">
              <li><img className='skill-icon' src={require('../assets/skill-icon/js.png')}/>Javascript(ES6+)</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/react.png')}/>React.js</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/html5.png')}/>HTML5</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/css3.png')}/>CSS3</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/sass.png')}/>SASS</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/git.png')}/>Git</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/github.png')}/>GitHub</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/jquery.png')}/>jQuery</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/java.png')}/>Java</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/mysql.png')}/>mysql</li>
              <li><img className='skill-icon oracle' src={require('../assets/skill-icon/oracle.png')}/>oracl</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/python.png')}/>python</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/spring.png')}/>Spring</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/jsp.png')}/>JSP</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/c.png')}/>C</li>
              <li><img className='skill-icon' src={require('../assets/skill-icon/c#.png')}/>C#</li>
            </ul>
          </div>
        
        </div>

      </div>
    </div>
  )

}

export default Chapter1;