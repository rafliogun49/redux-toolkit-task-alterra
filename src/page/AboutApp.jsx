import DescriptionAbout from "../components/DescriptionAbout";
import Navbar from "../components/Navbar";
const AboutApp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12 pt-5">
            <DescriptionAbout
              title="About App"
              text="In this app, you can add, delete, submit and edit items. To edit items, simply double click
        on it. Once you done, press the enter key to resubmit. This app will persist your data in
        the browser local storage. So whether you reload, close your app or reopened it, you still
        have access to your todos items."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutApp;
