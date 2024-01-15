import { useEffect } from 'react';

const Projectmodal3 = ({displayFlag, modalFlagCon}) => {

  useEffect(() => {
    document.getElementById("prj3modal").scrollTo(0,0);
  },[displayFlag])

  const openPrj = () => {
    window.open('https://www.sysout.co.kr/fun_ding/')
  }

  return(
    <div className={`modal ${displayFlag ? '' : 'blind'}`} onClick={(e) => {modalFlagCon('prj3')}}>
      <div className="modal-inner" onClick={(e) => {e.stopPropagation(); e.preventDefault();}} id='prj3modal'>
        <p className='modal-sub-title'>Project</p>
        <div className="modal-title">
          <h2 className="title">Fun_ding</h2>
        </div>
        <div className="modal-mainimg">
          <div className='img funding'></div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="modal-prjinfo">

          <div className="info-item">
            <div className="info-title">
              <strong>SKILLS</strong>
            </div>
            <div className="info-contant">
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/js.png')}/>Javascript</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/jquery.png')}/>Jquery</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/css3.png')}/>CSS</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/html5.png')}/>HTML</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/java.png')}/>Java</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/oracle.png')}/>oracle</strong>
              <strong><img className='skill-icon' src={require('../assets/img/skill-icon/spring.png')}/>Spring</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>진행기간</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>2021.07.21 ~ 2021.08.04</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>개발인원</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>4명 (개발자 4명)</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>기여도</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>3/5</strong>
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
              <strong className='writing open' onClick={() => openPrj()}>https://www.sysout.co.kr/fun_ding/</strong>
            </div>
          </div>

        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 이미지 스크린샷 */}
        <div className='modal-project-shotimg'>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot1.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot2.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot3.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot4.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot5.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/funding/shot6.png')}/>
        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 상세 내용 */}
        <div className='modal-project-detail'>
          <h2 className='title'>프로젝트 설명</h2>
          <p className='contant'>크라우드펀딩은 군중 또는 다수를 의미하는 영어단어 크라우드(Crowd)와 자금조달을 뜻하는 펀딩(Funding)을 조합한 용어입니다.</p>
          <p className='contant'>크라우드 펀딩 플랫폼으로 사용자들의 아이디어와 아이템을 공유하고 마음에 드는 아이템이나 관심이 가는 아이디어에 후원 할 수 있는 사이트.</p>

          <h2 className='title'>기능</h2>
          <p className='contant'>로그인</p>
          <p className='contant'>회원가입</p>
          <p className='contant'>사이트 관리 페이지(관리자)</p>
          <p className='contant'>펀딩 프로젝트 개설 및 관리</p>
          <p className='contant'>프로젝트 후원</p>
          <p className='contant'>이메일 인증</p>
          <p className='contant'>인증된 이메일로 비밀번호 찾기</p>
          <p className='contant'>금액충전(kakaopay 결재 충전)</p>
          <p className='contant'>자유게시판</p>
          <p className='contant'>자유게시판 글 작성,수정,삭제</p>
        </div>

      </div>
    </div>
  )

}

export default Projectmodal3;