import React from "react";

export default function ToClient() {
  return (
    <section>
      <div className="container my-5">
        <h3>Our Clients </h3>
        <hr/>
        <div className="row my-5 text-center">
          <div className="col-md-3">
            <h3>Clients 1</h3>
          </div>
          <div className="col-md-3">
            <h3>Clients 2</h3>
          </div>
          <div className="col-md-3">
            <h3>Clients 3</h3>
          </div>
          <div className="col-md-3">
            <h3>Clients 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
