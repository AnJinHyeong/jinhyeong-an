import { useEffect } from 'react';

const Projectmodal2 = ({displayFlag, modalFlagCon}) => {

  useEffect(() => {
    document.getElementById("prj2modal").scrollTo(0,0);
  },[displayFlag])

  const openPrj = () => {
    window.open('https://diary-f95ca.web.app/')
  }

  return(
    <div className={`modal ${displayFlag ? '' : 'blind'}`} onClick={(e) => {modalFlagCon('prj2')}}>
      <div className="modal-inner" onClick={(e) => {e.stopPropagation(); e.preventDefault();}} id='prj2modal'>
        <p className='close-btn' onClick={(e) => {modalFlagCon('prj2')}}>X</p>
        <p className='modal-sub-title'>Project</p>
        <div className="modal-title">
          <h2 className="title">DAILY DIARY</h2>
        </div>
        <div className="modal-mainimg">
          <div className='img diary'></div>
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
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/firebase.png')}/>Firebase</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>진행기간</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>2022.04.27 ~ 2022.05.11</strong>
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
              <strong className='writing open' onClick={() => openPrj()}>https://diary-f95ca.web.app/</strong>
            </div>
          </div>

        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 이미지 스크린샷 */}
        <div className='modal-project-shotimg'>
          <img className='project-shot-item' src={require('../assets/img/project-shot/diary/shot1.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/diary/shot2.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/diary/shot3.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/diary/shot4.png')}/>
        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 상세 내용 */}
        <div className='modal-project-detail'>
          <h2 className='title'>프로젝트 설명</h2>
          <p className='contant'>나의 하루 일상을 기록하는 다이어리 사이트</p>
          <p className='contant'>5가지의 감정 이모션을 선택하여 그날의 감정을 기록</p>

          <h2 className='title'>기능</h2>
          <p className='contant'>로그인</p>
          <p className='contant'>회원가입</p>
          <p className='contant'>소셜 로그인(Facebook, Google)</p>
          <p className='contant'>다이어리 작성,수정 삭제</p>
          <p className='contant'>다이어리 글 즐겨찾기</p>
          <p className='contant'>다 쓴 다이어리 월별 조회</p>
          <p className='contant'>Firebase를 사용하여 Database 구현</p>
        </div>

      </div>
    </div>
  )

}

export default Projectmodal2;