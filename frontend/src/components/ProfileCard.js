import styles from './ProfileCard.module.css';
import profile from '../assets/content/profile.png';
import close from '../assets/content/exit.webp';
import max from '../assets/content/maximize.webp';
import min from '../assets/content/minimize.webp';

function ProfileCard() {
  return (
    <div className>
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

      <div class = {styles.contacts_row}>
        <div>
          <a href = "https://www.facebook.com/jezcardz">
            <img 
              src = "https://www.pngall.com/wp-content/uploads/19/Iconic-Facebook-Logo-Black-Style-PNG.png" 
              class = {styles.contacts_logo} 
              alt = "Facebook logo. Click to see their Facebook profile."
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jezron-cardona-590939321/">
            <img 
              src="https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2428%2FPNG%2F512%2Flinkedin_black_logo_icon_147114.png&id=147114&pack_or_individual=pack" 
              class={styles.contacts_logo} 
              alt="LinkedIn logo. Click to see their LinkedIn profile."
            />
          </a>
        </div>
        <div>
          <img 
            src="https://cdn-icons-png.flaticon.com/256/625/625155.png" 
            class={styles.contacts_logo} 
            alt="A graphic of a telephone."
          />
          +63 992 722 9820
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

      <div>
      {/* 
      Projects
      - Jessu-chan
      - Aya-chan
      - Campus Hub (Outsystems)
      - Compass (Flutter)
      */}
      </div>

    </div>
  );
}

export default ProfileCard;