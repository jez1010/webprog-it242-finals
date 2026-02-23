import styles from './ProfileCard.module.css';
import profile from '../assets/content/profile.png';
import close from '../assets/content/exit.webp';
import max from '../assets/content/maximize.webp';
import min from '../assets/content/minimize.webp';

function ProfileCard() {
  return (
    <div className = {styles.profile_card}>
      <div className = {styles.top_tab}>
        <div>My Profile</div>
        <div className = {styles.buttons}>
          <img src = {min} alt = "min"/>
          <img src = {max} alt = "max"/>
          <img src = {close} alt = "close"/>                    
        </div>
      </div>

      <div className = {styles.header}>
        <div className = {styles.image_cover}>
          <img src={profile} alt="Profile page"/>
        </div>
        <div className = {styles.names}>
          <div className = {styles.fullname}>Jezron D. Cardona</div>
          <div className = {styles.email}>jdcardona@student.apc.edu.ph</div>
        </div>
      </div>

      <div className = {styles.desc}>
        <div className = "label">About Me</div>

        <div className = "text">
          Jezron D. Cardona is a 2nd year student currently studying for a degree in Bachelor of Science in 
          Information Technology (BSIT) at Asia Pacific College. He has done several projects, both as hobbies 
          and school requirements. His dream is to get into a presitigious company such as IBM, a company that 
          he had held fascination for since the start of his IT career. His other aspirations include acquiring 
          a humble property for independent living.
        </div>
      </div>

    </div>
  );
}

export default ProfileCard;