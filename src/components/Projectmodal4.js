import { useEffect } from 'react';

const Projectmodal4 = ({displayFlag, modalFlagCon}) => {

  useEffect(() => {
    document.getElementById("prj4modal").scrollTo(0,0);
  },[displayFlag])

  const openPrj = () => {
    window.open('https://www.sysout.co.kr/bookin/')
  }

  return(
    <div className={`modal ${displayFlag ? '' : 'blind'}`} onClick={(e) => {modalFlagCon('prj4')}}>
      <div className="modal-inner" onClick={(e) => {e.stopPropagation(); e.preventDefault();}} id='prj4modal'>
        <p className='close-btn' onClick={(e) => {modalFlagCon('prj4')}}>X</p>
        <p className='modal-sub-title'>Project</p>
        <div className="modal-title">
          <h2 className="title">BOOKin</h2>
        </div>
        <div className="modal-mainimg">
          <div className='img bookin'></div>
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
              <strong className='writing'>2021.05.24 ~ 2021.06.06</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>개발인원</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>6명 (개발자 6명)</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>기여도</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>2/5</strong>
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
              <strong className='writing open' onClick={() => openPrj()}>https://www.sysout.co.kr/bookin/</strong>
            </div>
          </div>

        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 이미지 스크린샷 */}
        <div className='modal-project-shotimg'>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot1.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot2.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot3.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot4.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot5.png')}/>
          <img className='project-shot-item' src={require('../assets/img/project-shot/bookin/shot6.png')}/>
        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 상세 내용 */}
        <div className='modal-project-detail'>
          <h2 className='title'>프로젝트 설명</h2>
          <p className='contant'>도서 쇼핑몰 사이트</p>

          <h2 className='title'>기능</h2>
          <p className='contant'>로그인</p>
          <p className='contant'>회원가입</p>
          <p className='contant'>사이트 관리 페이지(관리자)</p>
          <p className='contant'>인기 도서 실시간랭킹 노출</p>
          <p className='contant'>도서 상품 구매</p>
          <p className='contant'>구매 상품 배송현황 조회</p>
          <p className='contant'>구매 상품 리뷰 작성 및 관리</p>
          <p className='contant'>도서 상품 검색</p>
          <p className='contant'>관심 상품 장바구니 및 좋아요</p>
          <p className='contant'>고객센터 1:1문의, 확인</p>
          <p className='contant'>이벤트 및 공지 확인</p>
        </div>

      </div>
    </div>
  )

}

export default Projectmodal4;