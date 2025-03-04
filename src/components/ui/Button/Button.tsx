import styles from "./Button.module.css";

type ButtonProps = {
  variant: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ variant, onClick, disabled, children }: ButtonProps) => {
  const className =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
