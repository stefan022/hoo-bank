import { arrowUp } from '../../assets'

import "./GetStarted.scss";

const GetStarted = () => (
  <div className="get-started">
    <div className="get-started__container">

        <div className="get-started__container_top">
            <p className="get-started__container_top-paragraph">
                <span className='text-gradient'>Get</span>
            </p>
            <img 
                src={arrowUp} 
                alt="arrow" 
                className="get-started__container_top-arrow"
            />
        </div>

        <p className="get-started__container_down">
            <span className="text-gradient">Started</span>
        </p>
    </div>

  </div>
)


export default GetStarted