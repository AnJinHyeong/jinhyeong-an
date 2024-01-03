/**
 * Chapter2
 * 커리어 설명 영역 
 */
const Chapter2 = () => {

  return(
    <div className="chapter2">
      <div className="inner">

      <div className="cureer">
          <h2 className="title">CAREER</h2>
          <div className="cureer-item">
            <div className='cureer-row'>
              <div className='cureer-col-3'>
                <strong>2022.08 ~ 2023.09</strong>
                <strong className='sub'>
                  <span className='company'>엠케이원</span>
                  <span className='department'>개발사업1부</span>
                </strong>
              </div>
              <div className='cureer-col-7'>
                <hr className='line' />
                <div className='col-row'>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>Douzon Amaranth10 Front-End 개발</p>
                    <p className="col-row-sub-contant">게시판 패키지 Front-End 신규개발 및 유지보수</p>
                    <p className="col-row-sub-contant">업무관리 패키지 Front-End 신규개발 및 유지보수</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>Douzon Amaranth10 Custom 개발 및 유지보수</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>SKILLS</p>
                    <p className='col-row-sub-contant'>
                     <ul className="skills-tiems row">
                        <li><img className='skill-icon' src={require('../assets/skill-icon/js.png')}/>Javascript(ES6+)</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/react.png')}/>React.js</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/html5.png')}/>HTML5</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/css3.png')}/>CSS3</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/git.png')}/>Git</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/java.png')}/>Java</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/mysql.png')}/>mysql</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/spring.png')}/>Spring</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='cureer-row'>
              <div className='cureer-col-3'>
                <strong>2021.08 ~ 2022.01</strong>
                <strong className='sub'>
                  <span className='company'>윈즈시스템</span>
                  <span className='department'>서비스사업본부 연구개발팀</span>
                </strong>
              </div>
              <div className='cureer-col-7'>
                <hr className='line' />
                <div className='col-row'>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>웹 개발/유지 보수, Oracle DB관리</p>
                    <p className="col-row-sub-contant">웹 화상통신 및 PC/Moblie 원격 연결 사이트</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>MFC PC 주요 정보 상태 확인 프로그램 개발</p>
                    <p className="col-row-sub-contant">RAM, CPU 온도 체크 및 사용가능 공간 체크</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>Android 문자 자동 전송 앱앱 개발</p>
                    <p className="col-row-sub-contant">등록된 조건에 부합된 문자가 올 경우 설정한 번호로 해당 문자 송신</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>SKILLS</p>
                    <p className='col-row-sub-contant'>
                      <ul className="skills-tiems row">
                        <li><img className='skill-icon' src={require('../assets/skill-icon/js.png')}/>Javascript(ES6+)</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/html5.png')}/>HTML5</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/css3.png')}/>CSS3</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/git.png')}/>Git</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/jquery.png')}/>jQuery</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/java.png')}/>Java</li>
                        <li><img className='skill-icon oracle' src={require('../assets/skill-icon/oracle.png')}/>oracl</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/jsp.png')}/>JSP</li>
                        <li><img className='skill-icon' src={require('../assets/skill-icon/c#.png')}/>C#</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='cureer-row'>
              <div className='cureer-col-3'>
                <strong>2020.08 ~ 2021.01</strong>
                <strong className='sub'>
                  <span className='company'>알체라</span>
                  <span className='department'>Business Operation Team</span>
                </strong>
              </div>
              <div className='cureer-col-7'>
                <hr className='line' />
                <div className='col-row'>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>데이터 가공/수집</p>
                    <p className="col-row-sub-contant">다량의 데이터 라벨링 작업</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>프로젝트 관리 매니저</p>
                    <p className="col-row-sub-contant">프로젝트의 필요한 인력 및 데이터를 계산하여 공수일자 산정</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>데이터 크롤링</p>
                    <p className="col-row-sub-contant">구글에서 필요한 데이터를 크롤링하여 수집 및 분류 작업</p>
                  </div>
                  <div className='col-row-item'>
                    <p className='col-row-contant'>SKILLS</p>
                    <p className='col-row-sub-contant'>
                      <ul className="skills-tiems row">
                        <li><img className='skill-icon' src={require('../assets/skill-icon/python.png')}/>python</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Chapter2;