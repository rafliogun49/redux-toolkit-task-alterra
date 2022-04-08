import Navbar from "../components/Navbar";
import DescriptionAbout from "../components/DescriptionAbout";

const AboutAuthor = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12 pt-5">
            <DescriptionAbout
              title="About Author"
              text="This app was developed by someone, a self-taught web developer and technical writer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthor;
