import checkmark from "/src/assets/checkmark.svg";

import styles from "./CreateProfileSuccessPage.module.css";

export default function CreateProfileSuccessPage() {
  return (
    <div className={styles.createProfileSuccessPage}>
      <h1>Success!</h1>
      <img width={150} height={150} src={checkmark}></img>
    </div>
  );
}
