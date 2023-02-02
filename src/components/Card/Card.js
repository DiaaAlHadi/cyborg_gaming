import './Card.css';
import { FaStar } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
const Card = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img src={props.Image} alt="" className="most-popular-item-image" />
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">
                        {props.Title} <br />
                        <span>{props.Category}</span>
                    </h4>
                    <ul>
                        <li><FaStar className='text-warning' /> <span>{props.Rate}</span></li>
                        <li><FaDownload style={{color:"var(--color-primary)"}}/> <span>{props.Download}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card