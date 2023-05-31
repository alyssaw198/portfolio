import classes from './Skills.module.css';
import python from '../ui/images/python.png';
import java from '../ui/images/java.webp';
import html from '../ui/images/html.png';
import css from '../ui/images/css.png';
import django from '../ui/images/django.png';
import c from '../ui/images/C.png';
import js from '../ui/images/js.png';
import git from '../ui/images/git.png';
import cSharp from '../ui/images/csharp.png';
import sql from '../ui/images/sql.png';
import react from '../ui/images/react.png';
import bubble from "../ui/images/textBubble.png";

function Skills() {
    return (
        <div className={classes.main}>
            <div className={classes.allSkills}>
                <div className={classes.proficient}>
                    <h2>I am proficient in</h2>
                    <div className={classes.icons}>
                        <ul>
                            <li>
                                <img src={python} alt="python" className={classes.firstImg}/>
                                <div className={classes.imgCaption}>Python</div>
                            </li>
                            <li>
                                <img src={java} alt="java" />
                                <div className={classes.imgCaption}>Java</div>
                            </li>
                            <li>
                                <img src={html} alt="html" />
                                <div className={classes.imgCaption}>HTML</div>
                            </li>
                            <li>
                                <img src={css} alt="css" />
                                <div className={classes.imgCaption}>CSS</div>
                            </li>
                            <li>
                                <img src={django} alt="django" />
                                <div className={classes.imgCaption}>Django</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.experience}>
                    <h2>I have experience with</h2>
                    <div className={classes.icons}>
                        <ul>
                            <li>
                                <img src={c} alt="c" />
                                <div className={classes.imgCaption}>C</div>
                            </li>
                            <li>
                                <img src={js} alt="js" />
                                <div className={classes.imgCaption}>JavaScript</div>
                            </li>
                            <li>
                                <img src={git} alt="git" />
                                <div className={classes.imgCaption}>Git</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.learning}>
                    <h2>I am current learning</h2>
                    <div className={classes.icons}>
                        <ul>
                            <li>
                                <img src={cSharp} alt="c#" />
                                <div className={classes.imgCaption}>C#</div>
                            </li>
                            <li>
                                <img src={sql} alt="sql" />
                                <div className={classes.imgCaption}>SQL</div>
                            </li>
                            <li>
                                <img src={react} alt="react" />
                                <div className={classes.imgCaption}>React</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;