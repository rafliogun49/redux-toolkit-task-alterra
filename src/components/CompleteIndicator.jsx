const CompleteIndicator = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 text-center">
        <div className="box bg-primary text-center py-2 px-4 rounded-pill me-2">
          <span className="fw-bold text-white">Incomplete</span>
        </div>
        <div className="box bg-white text-secondary py-2 px-4 rounded-pill border border-secondary">
          <span className="fw-bold text-secondary">Complete</span>
        </div>
      </div>
    </div>
  );
};

export default CompleteIndicator;
