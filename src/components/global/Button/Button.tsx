import Styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = (props) => {
  const { children, type = "text", endIcon, startIcon } = props;
  const { disabled } = props;

  const styleClass = () => {
    switch (type) {
      case "contained":
        return "Button__contained";

      case "outlined":
        return "Button__outlined";

      default:
        return "Button__text";
    }
  };

  return (
    <Styles className={`Button`}>
      <button className={`Button ${styleClass()}`} disabled={disabled}>
        {startIcon}
        {children}
        {endIcon}
      </button>
    </Styles>
  );
};

export default Button;
