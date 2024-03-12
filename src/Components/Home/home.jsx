export const HomePage = () => {
  return (
    <div className="container-fluid">
      <section className="d-flex justify-content-between">
        <div>
          <img
            src="../public/electronics.jpg"
            style={{ height: 200, width: 200 }}
          />
        </div>
        <div>
          <img
            src="../public/jwelery.jpg"
            style={{ height: 200, width: 200 }}
          />
        </div>
        <div>
          <img src="../public/mens.jpg" style={{ height: 200, width: 200 }} />
        </div>
        <div>
          <img src="../public/womens.jpg" style={{ height: 200, width: 200 }} />
        </div>
      </section>
    </div>
  );
};
