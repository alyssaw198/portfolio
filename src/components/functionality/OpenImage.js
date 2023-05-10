import classes from "./openImage.module.css";

function OpenImage(props) {
  return (
    <div onClick={props.onClick} className={classes.backdrop}>
      <img src={props.getImage} alt="image" />
    </div>
  );
}

export default OpenImage;