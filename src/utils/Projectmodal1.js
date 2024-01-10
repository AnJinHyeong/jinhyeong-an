const Projectmodal1 = ({displayFlag, modalFlagCon}) => {

  const openPrj = () => {
    window.open('http://localhost:3000/')
  }

  return(
    <div className={`modal ${displayFlag ? '' : 'blind'}`} onClick={(e) => {modalFlagCon('prj1')}}>
      <div className="modal-inner" onClick={(e) => {e.stopPropagation(); e.preventDefault();}}>
        <div className="modal-title">
          <h2 className="title">안진형의 포트폴리오</h2>
        </div>
        <div className="modal-mainimg">
          <div className='img'></div>
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
            </div>
          </div>

          <div className="info-item">
            <div className="info-title">
              <strong>진행기간</strong>
            </div>
            <div className="info-contant">
              <strong className='writing'>2022.07.01 - 2022.07.15</strong>
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
              <strong className='writing open' onClick={() => openPrj()}>http://localhost:3000/</strong>
            </div>
          </div>

        </div>

        <div className='modal-line'></div>

        {/* 프로젝트 상세 내용 */}
        <div className='modal-project-detail'>

        </div>

      </div>
    </div>
  )

}

export default Projectmodal1;