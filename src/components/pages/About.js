import classes from "./About.module.css";
import email from "../ui/images/email.png";
import phone from "../ui/images/phone.png";
import headshot from "../ui/images/headshot.png";

function About() {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.card}>
          <img src={headshot} alt="profile-card" className={classes.pfpimg} />
          <div className={classes.container}>
            <div className={classes.cardText}>
              <h4>
                <b>Alyssa Wu</b>
              </h4>
              <p>Computer Science Student</p>
            </div>
          </div>
        </div>
        <div className={classes.text}>
          <h1>About Me</h1>
          <p>
          I’ve just completed my second year at McGill University studying Computer Science. Technology is a topic that I am very passionate about, and I’m always eager to learn about new advancements in the field. I've had a handful of project experiences through hackathons that I’ve attended this past year. Additionally, I've taken courses on algorithms and data structures, as well as an introductory course to Natural Language Processing. Aside from university and coding, in my free time, I enjoy reading, writing, and hanging out with my dog.
          </p>
          <br/>
          <p>
          I’m currently seeking out opportunities in software engineering, web/mobile development, and machine learning internships for Fall 2023 and Summer 2024. Feel free to connect with me on LinkedIn below!
          </p>
          <br />
          <a href="https://www.linkedin.com/in/alyssa-wu-/" target="blank">
            <button className={classes.button}>Connect With Me!</button>
          </a>
          <br />
          <br />
          <div className={classes.contacts}>
            <img src={email} alt="email-icon" className={classes.firstIcon}/>
            <p>alyssawu0104@gmail.com</p>
            <img src={phone} alt="phone-icon"/>
            <p>(647)-868-5736</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
