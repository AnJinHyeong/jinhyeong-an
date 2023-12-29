import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown  } from '@fortawesome/free-solid-svg-icons'

const Slogan = () => {

  return(
    <div className="slogan">
      <div className="inner">
        <div className="contant">
          <p>노력, 새로운 배움, 성취감.</p>
          <p>유연한 사고로 문제를 해결하고</p>
          <p>주도적으로 학습<span style={{fontWeight: '400', fontSize: '50px'}}>·</span>성장하는 개발자</p>
          <p>안진형 입니다.</p>
        </div>

        <div className='downpoint'>
          <FontAwesomeIcon className='icon down' icon={faAngleDown} />
        </div>
      </div>
    </div>
  )

}

export default Slogan;