import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@/components/global/Button/Button";
import Image from "next/image";

import Styles from "./Navbar.styles";
import { NavbarProps as Props } from "./Navbar.types";

const Navbar: React.FC<Props> = (props) => {
  return (
    <Styles className={`Navbar`}>
      <div className="Navbar__container">
        <div className="Navbar__component">
          <Image src="./logo.svg" alt="logo" width={120} height={40} />
          <Button
            type="contained"
            endIcon={<ChevronRightIcon fontSize="large" />}
          >
            Trabajemos juntos
          </Button>
        </div>
      </div>
    </Styles>
  );
};

export default Navbar;
