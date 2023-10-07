import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Styles/UserProfile.css';

function UserProfile() {
  return (
    <div className="user">
      <FontAwesomeIcon className="logo" icon={faUserCircle} size="lg" />
    </div>
  );
}

export default UserProfile;
