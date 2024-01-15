import { useEffect } from 'react'

const Projectmodal1 = ({displayFlag, modalFlagCon}) => {


  useEffect(() => {
    document.getElementById("prj1modal").scrollTo(0,0);
  },[displayFlag])

  const openPrj = () => {
    window.open('https://jinhyeong-an.netlify.app/')
  }

  return(
    <div className={`modal ${displayFlag ? '' : 'blind'}`} onClick={(e) => {modalFlagCon('prj1')}}>
      <div className="modal-inner" onClick={(e) => {e.stopPropagation(); e.preventDefault();}} id='prj1modal'>
        <p className='modal-sub-title'>Project</p>
        <div className="modal-title">
          <h2 className="title">안진형의 포트폴리오</h2>
        </div>
        <div className="modal-mainimg">
          <div className='img ajh'></div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="modal-prjinfo">

          <div className="info-item">
            <div className="info-title">
              <strong>SKILLS</strong>
            </div>
            <div className="info-contant">
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/react.png')}/>REACT</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/js.png')}/>Javascript</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/css3.png')}/>CSS</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/html5.png')}/>HTML</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/netlify.png')}/>Netlify</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>진행기간</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>2023.01.01 ~ 2023.01.14</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>개발인원</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>1명 (개발자 1명)</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>기여도</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>5/5</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>카테고리</strong>
            </div>
            <div className="info-contant">
              <strong>WEB</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>사이트</strong>
            </div>
            <div className="info-contant">
              <strong className='writing open' onClick={() => openPrj()}>https://jinhyeong-an.netlify.app/</strong>
            </div>
          </div>

        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 이미지 스크린샷 */}
        <div className='modal-project-shotimg'>
          <img className='project-shot-item' src={require('../assets/img/project-shot/anjinhyeong/shot.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/anjinhyeong/shot1.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/anjinhyeong/shot2.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/anjinhyeong/shot3.png')}/>
        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 상세 내용 */}
        <div className='modal-project-detail'>
          <h2 className='title'>프로젝트 설명</h2>
          <p className='contant'>나만의 특색이 묻어나는 포트폴리오를 위해서 개발</p>
        </div>

      </div>
    </div>
  )

}

export default Projectmodal1;