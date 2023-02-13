import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";

import Button from "@/components/global/Button/Button";

import Styles from "./Navbar.styles";

const Navbar: React.FC = () => (
  <Styles className="Navbar">
    <div className="GlobalStyles__container--component Navbar__component">
      <Image src="./logo.svg" alt="logo" width={120} height={40} />
      <Button type="contained" endIcon={<ChevronRightIcon fontSize="large" />}>
        Trabajemos juntos
      </Button>
    </div>
  </Styles>
);

export default Navbar;
