import classes from './Experiences.module.css';

function Experience() {
    return (
        <div style={{color: "black"}}>
            <div className={classes.updating}>
                Updating...
            </div>
        </div>
    );
}

export default Experience;

//run: "npm run deploy" to push react app to GitHub repo