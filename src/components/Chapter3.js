import Projectmodal1 from "./Projectmodal1";
import Projectmodal2 from "./Projectmodal2";
import '../css/modal.css'
import { useState } from "react";
import Projectmodal3 from "./Projectmodal3";
import Projectmodal4 from "./Projectmodal4";

/**
 * Chapter3
 * 프로젝트 설명 영역
 */
const Chapter3 = () => {
  
  const [prjModal1, setPrjModal1] = useState(false);
  const [prjModal2, setPrjModal2] = useState(false);
  const [prjModal3, setPrjModal3] = useState(false);
  const [prjModal4, setPrjModal4] = useState(false);



  const modalFlagCon = (val) => {
    console.log('modalFlagCon', val)
    if(val === 'prj1'){
      setPrjModal1(!prjModal1)
    } else if(val === 'prj2'){
      setPrjModal2(!prjModal2)
    } else if(val === 'prj3'){
      setPrjModal3(!prjModal3)
    } else if(val === 'prj4'){
      setPrjModal4(!prjModal4)
    }
  }

  return(
    <div className="chapter3">
      <div className="inner">

        <div className="project">
          <h2 className="title">PROJECTS</h2>

          <div className="grid">
            <div className='grid_list'>

              <div className='grid_item'>
                <a className='item_inner' onClick={() => {modalFlagCon('prj1')}}>
                  <div className='project-thumb'>
                    <div className='project-img project1'>{/* 이미지 영역 */}</div>
                  </div>
                  <div className='project-info'>
                    <p className="project-title">안진형의 포트폴리오</p>
                  </div>
                </a>
              </div>

              <div className='grid_item'>
                <a className='item_inner' onClick={() => {modalFlagCon('prj2')}}>
                  <div className='project-thumb'>
                    <div className='project-img project2'>{/* 이미지 영역 */}</div>
                  </div>
                  <div className='project-info'>
                    <p className="project-title">DAILY DIARY</p>
                  </div>
                </a>
              </div>
              
              <div className='grid_item'>
                <a className='item_inner' onClick={() => modalFlagCon('prj3')}>
                  <div className='project-thumb'>
                    <div className='project-img project3'>{/* 이미지 영역 */}</div>
                  </div>
                  <div className='project-info'>
                    <p className="project-title">Fun_ding</p>
                  </div>
                </a>
              </div>

              <div className='grid_item'>
                <a className='item_inner' onClick={() => modalFlagCon('prj4')}>
                  <div className='project-thumb'>
                    <div className='project-img project4'>{/* 이미지 영역 */}</div>
                  </div>
                  <div className='project-info'>
                    <p className="project-title">BOOKin</p>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      <Projectmodal1 
        displayFlag={prjModal1}
        modalFlagCon={modalFlagCon}
      />

      <Projectmodal2
        displayFlag={prjModal2}
        modalFlagCon={modalFlagCon}
      />

      <Projectmodal3
        displayFlag={prjModal3}
        modalFlagCon={modalFlagCon}
      />

      <Projectmodal4
        displayFlag={prjModal4}
        modalFlagCon={modalFlagCon}
      />
    </div>
  )

}

export default Chapter3;