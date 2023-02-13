import Styles from "./TemplateComponent.styles";
import { TemplateComponentProps as Props } from "./TemplateComponent.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TemplateComponent: React.FC<Props> = (props) => {
  return (
    <Styles className="TemplateComponent">
      <h2 className="TemplateComponent__title">title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </Styles>
  );
};

export default TemplateComponent;
