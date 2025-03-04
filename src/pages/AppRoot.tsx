import GradientBackgroundLayout from "components/layouts/GradientBackgroundLayout";
import { Outlet } from "react-router";

import styles from "./AppRoot.module.css";

export const ErrorBoundary = () => {
  return (
    <GradientBackgroundLayout>
      <div className={styles.errorBoundary}>Oops, Something went wrong!</div>
    </GradientBackgroundLayout>
  );
};

const AppRoot = () => {
  return (
    <GradientBackgroundLayout>
      <Outlet />
    </GradientBackgroundLayout>
  );
};

export default AppRoot;
