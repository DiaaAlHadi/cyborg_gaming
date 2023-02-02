import './GamingLibraryCard.css';
import { SecondaryButton } from '../Buttons/Buttons';
const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.Image} alt="" /></li>
            <li><h4>{props.Title}<br/><span>{props.Category}</span></h4></li>
            <li><h4>Date Added</h4><span>{props.Date_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.Hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.Download}</span></li>
            <SecondaryButton>
              Download
            </SecondaryButton>
        </ul>
    </div>
  )
}
export default GamingLibraryCard