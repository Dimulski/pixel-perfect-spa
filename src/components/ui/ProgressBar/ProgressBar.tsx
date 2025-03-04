import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      className={styles.progressBar}
      style={{ "--progress": `${progress}%` } as React.CSSProperties}
    >
      <span className={styles.progressBarBackground} />
      <span className={styles.progressBarForeground} />
    </div>
  );
};

export default ProgressBar;
