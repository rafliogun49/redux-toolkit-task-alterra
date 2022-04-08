const DescriptionAbout = (props) => {
  return (
    <div className="container">
      <h1 className="logo-app">{props.title}</h1>
      <p className="description text-justify">{props.text}</p>
    </div>
  );
};

export default DescriptionAbout;
