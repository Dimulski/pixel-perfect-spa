import { useOutletContext } from "react-router-dom";
import { MultistepFormContext } from "components/form-control/MultistepForm";
import CreateProfileForm from "features/CreateProfileForm/components";

import styles from "./CreateProfilePage.module.css";

export default function CreateProfilePage() {
  const { formRef, onFormSubmit } = useOutletContext<MultistepFormContext>();

  return (
    <div className={styles.createProfilePage}>
      <section className={styles.infoSection}>
        <header>
          <h1>Step 1</h1>
          <h2>Account Information</h2>
        </header>
        <hr />
        <div className={styles.paragraphs}>
          <p>
            Start by entering your basic details to personalize your profile.
            This step ensures a secure and tailored experience for you. Your
            journey begins here, and we're here to make it easy.
          </p>
          <br />
          <p>
            Passwords must be 12+ characters, include uppercase, lowercase,
            digits (0-9), and a special character (e.g., !@#$).
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <CreateProfileForm ref={formRef} onSubmit={onFormSubmit} />
      </section>
    </div>
  );
}
