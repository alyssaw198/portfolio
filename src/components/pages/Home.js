import classes from "./Home.module.css";
import pfp from "../ui/images/alyssa.JPEG";
import resume from "../ui/images/resume.pdf";

function Home() {
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <div className={classes.behind}>
          <h3>
            Hello, my name is <br />
            <span>Alyssa</span>
          </h3>
          <br />
          <h2>Welcome to my website. Excited to have you here!</h2>
        </div>
        <br />
        <br />
        <br />
        <h4>Take a look at my qualifications and experiences:</h4>
        <div style={{ zIndex: "5" }}>
          <a href={resume} download target="blank">
            <button className={classes.button}>Download my Resume</button>
          </a>
          <div>
            <br />
            <br />
            <h4>Check out my:</h4>
            <ul>
              <li className={classes.firstBtn}>
                <a href="https://github.com/alyssaw198" target="blank">
                  <button className={classes.button}>GitHub</button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alyssa-wu-/"
                  target="blank"
                >
                  <button className={classes.button}>LinkedIn</button>
                </a>
              </li>
              <li>
                <a
                  href="https://devpost.com/alyssawu0104?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  target="blank"
                >
                  <button className={classes.button}>Devpost</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.pfp}>
        <img src={pfp} alt="alyssa-wu-pfp" className={classes.image} />
      </div>
    </div>
  );
}

export default Home;
