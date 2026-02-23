import styles from './ProfileCard.module.css';
import profile from '../assets/content/profile.png';

function ProfileCard() {
  return (
    <div
      class={styles.body_div}
      id="top_section"
    >
      <div class={styles.title}>
        About Me
      </div>

      <div class={styles.profile_div}>
        <div class={styles.side_items} id="paragraph">

          Jezron D. Cardona is a 2nd year student of Bachelor of Science in Information Technology (BSIT) studying currently at Asia Pacific College.
          He has done several projects, both as hobbies and school requirements. His current goals in life is to be a known cybersecurity expert or a
          full-stack developer. His current aspirations, as he is currently in the middle of deciding, is to to own a two-floor property and gain stable income.

        </div>

        <div class={styles.central_profile}>
          <img src={profile} alt="Webpage creator profile."/>
        </div>

        <div class={styles.side_items} id="details">
          <div class={styles.title}>Name:</div>
          <p>Jezron D. Cardona</p>

          <div class={styles.title}>Age:</div>
          <p>18 years <span class="subtext">(As of January 1, 2026)</span></p>

          <div class={styles.title}>Education:</div>
          <ul>
            <li>SHS: Pasay City Science National High School.
              <ul>
                <li>Track: Science, Technology, Engineering, Programing and Mathematics.</li>
              </ul>
            </li>
            <li>College: Asia Pacific College <span class="subtext">(Current)</span>
              <ul>
                <li>Course: Bachelor of Science in Information Technology.</li>
              </ul>
            </li>
          </ul>

          <div class={styles.contacts_row}>
            <div>
              <a href="https://www.facebook.com/jezcardz">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
                  class={styles.contacts_logo}
                  alt="Facebook logo. Click to see their Facebook profile."
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/jezron-cardona-590939321/">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" class={styles.contacts_logo} alt="LinkedIn logo. Click to see their LinkedIn profile." />
              </a>
            </div>
            <div>
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-white-icon.png" class={styles.contacts_logo} alt="A graphic of a telephone." />
              +63 992 722 9820
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileCard;