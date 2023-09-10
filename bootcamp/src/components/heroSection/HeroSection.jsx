import profile from "/assets/profile.png";
import github from "/assets/github.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import twitter from "/assets/twitter.png";
import styles from "./HeroSection.module.css";

function HeroSection(props) {
  const { name, aboutme } = props;

  return (
    <div className={styles.heroContainer}>
      <section className={styles.aboutme}>
        <div className={styles.title}>
          <h1>{name}</h1>
          <p>{aboutme}</p>
          <section className={styles["social-icon-list"]}>
            <img src={github} style={{ height: "48px" }} alt="github logo" />
            <img
              src={instagram}
              style={{ height: "48px" }}
              alt="instagram logo"
            />
            <img
              src={linkedin}
              style={{ height: "48px" }}
              alt="linkedin logo"
            />
            <img src={twitter} style={{ height: "48px" }} alt="twitter logo" />
          </section>
        </div>
        <div>
          <img className={styles.profImage} src={profile} alt="profile image" />
        </div>
      </section>

      <button>More About Me</button>
    </div>
  );
}

export default HeroSection;
