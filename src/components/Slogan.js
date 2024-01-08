import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown  } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


/**
 * slogan
 * 나의 개발 슬로건 소개 영역
 */
const Slogan = () => {

  const downRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline(); //순서대로 gsap 사용하기
    tl.to(downRef.current, {
      y: 13,
      yoyo: true,
      duration: 0.8, //애니메이션 적용시간
      ease: "bounce.out", //튕기면서 마무리
      repeat: -1,
    });
  }, []);

  return(
    <div className="slogan">
      <div className="inner">
        <div className="contant">
          <p>노력, 새로운 배움, 성취감.</p>
          <p>유연한 사고로 문제를 해결하고</p>
          <p>주도적으로 학습<span className='dot'>·</span>성장하는 개발자</p>
          <p>안진형 입니다.</p>
        </div>

        <div className='contant-eng'>
          <p>Effort, New learning, Sense of achievement.</p>
          <p>A developer who resolves challenges with a flexible mindset,</p>
          <p>A developer who proactively continues to train and develop.</p>
        </div>

        <div className='downpoint'>
          <FontAwesomeIcon className='icon down' icon={faAngleDown} ref={downRef} />
        </div>
      </div>
    </div>
  )

}

export default Slogan;