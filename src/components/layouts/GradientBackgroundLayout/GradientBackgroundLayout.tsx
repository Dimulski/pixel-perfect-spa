import styles from "./GradientBackgroundLayout.module.css";

type GradientBackgroundLayoutProps = {
  children: React.ReactNode;
};

const GradientBackgroundLayout = ({
  children,
}: GradientBackgroundLayoutProps) => {
  return <div className={styles.background}>{children}</div>;
};

export default GradientBackgroundLayout;
