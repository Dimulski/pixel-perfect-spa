import { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import ProgressBar from "components/ui/ProgressBar";
import Button from "components/ui/Button";
import { multistepFormRoutes } from "routes";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  CreateProfileFormData,
  CreateProfileFormRef,
} from "features/CreateProfileForm/types";
import createProfile from "features/CreateProfileForm/api";

import styles from "./MultistepForm.module.css";

export type MultistepFormContext = {
  formRef: React.RefObject<CreateProfileFormRef>;
  onFormSubmit: (data: CreateProfileFormData) => void;
};

const MultistepForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef<CreateProfileFormRef>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentRoute = multistepFormRoutes.find(
    (route) => route.path === location.pathname
  );
  const currentStep = currentRoute?.handle?.step || 1;
  const totalSteps = multistepFormRoutes.length;
  const progress =
    totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 0;

  const nextRoute = multistepFormRoutes.find(
    (route) => route.handle.step === currentStep + 1
  );
  const prevRoute = multistepFormRoutes.find(
    (route) => route.handle.step === currentStep - 1
  );

  const handleFormSubmit = async (data: CreateProfileFormData) => {
    setIsLoading(true);
    try {
      const result = await createProfile(data);
      console.info("API response:", result);
      if (nextRoute) {
        setDirection("forward");
        navigate(nextRoute.path);
      }
    } catch (error) {
      console.error("Error posting request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    } else if (nextRoute) {
      setDirection("forward");
      navigate(nextRoute.path);
    }
  };

  const handleBack = () => {
    if (prevRoute) {
      setDirection("back");
      navigate(prevRoute.path);
    }
  };

  return (
    <div className={styles.multistepForm}>
      <ProgressBar progress={progress} />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={150}
          classNames={direction === "forward" ? "page-forward" : "page-back"}
          unmountOnExit
        >
          {() => (
            <div ref={nodeRef} className="page">
              <Outlet context={{ formRef, onFormSubmit: handleFormSubmit }} />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>

      <div className={styles.formControls}>
        <div>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
        </div>
        <div>
          {currentStep < totalSteps && (
            <Button variant="primary" onClick={handleNext} disabled={isLoading}>
              {isLoading ? (
                <span className={styles.spinner}>Loading...</span>
              ) : (
                "Next"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultistepForm;
