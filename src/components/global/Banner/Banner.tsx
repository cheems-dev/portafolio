/* eslint-disable @next/next/no-img-element */
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Button from "@/components/global/Button/Button";
import CONSTANTS from "@/utils/config/constants";

import Styles from "./Banner.styles";

const { URL_LINKEDIN } = CONSTANTS;

const Banner: React.FC = () => {
  return (
    <Styles className="Banner">
      <div className="GlobalStyles__padding Banner__container">
        <div className="GlobalStyles__container Banner__container--banner">
          <div className="Banner__container--info">
            <div>
              <p className="Banner__text--paragraph ">Hola, mi nombre es</p>
              <h1 className="Banner__text--title">Luis Ccalluchi</h1>{" "}
              <h2 className="Banner__text--title-secondary">
                {" "}
                & Soy Frontend Developer
              </h2>
            </div>
            <div className="Banner__container--info-buttons">
              <a target="_blank" href={URL_LINKEDIN} rel="noopener noreferrer">
                <Button type="text" endIcon={<LinkedInIcon fontSize="large" />}>
                  Mi perfil en LinkedIn
                </Button>
              </a>
              <Button
                type="contained"
                endIcon={<FileDownloadIcon fontSize="large" />}
              >
                Descargar mi CV
              </Button>
            </div>
          </div>
          <div className="Banner__container--profile">
            <img
              src={"./img/profile-min.png"}
              alt="Lorem Ipsum"
              className="Banner__component--profile"
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Banner;
