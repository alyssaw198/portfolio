import classes from "./Projects.module.css";
import dishcovery from "../ui/images/dishcovery.png";
import html from "../ui/images/html.png";
import css from "../ui/images/css.png";
import js from "../ui/images/js.png";
import moodaf from "../ui/images/moodafsized.png";
import django from "../ui/images/django.png";
import sql from "../ui/images/sql.png";
import cohere from "../ui/images/cohere.png";
import drip from "../ui/images/drip.png";
import cSharp from "../ui/images/csharp.png";
import unity from "../ui/images/unity.png";
import superSeater from "../ui/images/superseater.png";
import battleship from "../ui/images/battleship.png";
import python from "../ui/images/python.png";


function Projects(props) {
  return (
    <div className={classes.main}>
        <div className={classes.card}>
            <img src={moodaf} alt="project" style={{width: "100%"}}/> 
            <div className={classes.cardContent} style={{height:"310px"}}>
                <h2><b>Mood Analytics & Feedback</b></h2>
                <p style={{fontSize: "1em", lineHeight:"1.4em"}}>Mood analytics and feedback is a project created for MetHacks 2023. It’s a functional web app that incorporates Cohere API’s language models to perform sentiment analysis on journal entries.</p>
                <a href="https://github.com/alyssaw198/MoodAF" target="blank"><button className={classes.button}>Github Link</button></a>
                <h5>Made using:</h5>
                <div className={classes.madeIcons}>
                    <img src={django} alt="icon"/>
                    <img src={cohere} alt="icon"/>
                    <img src={html} alt="icon"/>
                    <img src={css} alt="icon"/>
                    <img src={sql} alt="icon"/>
                </div>
            </div>
        </div>

        <div className={classes.card}>
            <img src={superSeater} alt="project" style={{width: "100%", height:"220px"}}/>
            <div className={classes.cardContent} style={{height:"310px"}}>
                <h2><b>SuperSeater</b></h2>
                <p style={{fontSize: "1em", lineHeight:"1.4em"}}>SuperSeater was awarded <span style={{fontWeight: "bolder", color: "orange", textDecoration: "underline", textDecorationColor: "black"}}>2nd place</span> at the 2023 McGill Women in Computer Science hackathon. Created for teachers, it’s an online student directory and seating chart generator that accounts for student classroom behaviors.</p>
                <a href="https://github.com/alyssaw198/SuperSeater" target="blank"><button className={classes.button}>Github Link</button></a>
                <h5>Made using:</h5>
                <div className={classes.madeIcons}>
                    <img src={django} alt="icon"/>
                    <img src={html} alt="icon"/>
                    <img src={css} alt="icon"/>
                    <img src={sql} alt="icon"/>
                </div>
            </div>
        </div>

        <div className={classes.card}>
            <img src={drip} alt="project" style={{width: "100%", height:"220px"}}/>
            <div className={classes.cardContent} style={{height:"310px"}}>
                <h2><b>DRIP</b></h2>
                <p style={{fontSize: "1em", lineHeight:"1.4em"}}>DRIP is a 2D arcade-style game created for the McGill Game Jam. I worked as the sole programmer in the creation of this project, which is a point-collecting game with enemies and power-ups. </p>
                <a href="https://github.com/alyssaw198/DRIP-Game" target="blank"><button className={classes.button}>Github Link</button></a>
                <h5>Made using:</h5>
                <div className={classes.madeIcons}>
                    <img src={cSharp} alt="icon"/>
                    <img src={unity} alt="icon"/>
                </div>
            </div>
        </div>

        <div className={classes.card}>
            <img src={dishcovery} alt="project" style={{width: "100%", height:"220px"}}/>
            <div className={classes.cardContent} style={{height:"310px"}}>
                <h2><b>DISHcovery</b></h2>
                <p style={{fontSize: "1em", lineHeight:"1.4em"}}>DISHcovery won <span style={{fontWeight: "bolder", color: "orange", textDecoration: "underline", textDecorationColor: "black"}}>best UI/UX design</span> at McGill CodeJam hackathon in 2022. It’s a front-end focused website that uses Python’s Beautiful Soup package to generate random ingredients for users to cook with.</p>
                <a href="https://github.com/alyssaw198/DISHcovery" target="blank"><button className={classes.button}>Github Link</button></a>
                <h5>Made using:</h5>
                <div className={classes.madeIcons}>
                    <img src={html} alt="icon"/>
                    <img src={css} alt="icon"/>
                    <img src={js} alt="icon"/>
                </div>
            </div>
        </div>

        <div className={classes.card}>
            <img src={battleship} alt="project" style={{width: "100%", height:"220px"}}/>
            <div className={classes.cardContent} style={{height:"310px"}}>
                <h2><b>Battleship</b></h2>
                <p style={{fontSize: "1em", lineHeight:"1.4em"}}>Battleship is a personal project I built when I first started studying computer science at school. It’s a command line game that can be played in single player mode (against the computer), or in two-player mode.</p>
                <a href="https://github.com/alyssaw198/Battleship" target="blank"><button className={classes.button}>Github Link</button></a>
                <h5>Made using:</h5>
                <div className={classes.madeIcons}>
                    <img src={python} alt="icon"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
