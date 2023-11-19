import React, { useEffect, useState } from "react";
import "./PlansScreen.css";

function PlansScreen() {
  const [date, setDate] = useState();

  useEffect(() => {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + 15);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedDate =
      year +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      (day < 10 ? "0" : "") +
      day;
    setDate(formattedDate);
  }, []);
  return (
    <React.Fragment>
      Renewal date: {date}
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button style={{ backgroundColor: "gray" }}>Current Package</button>
      </div>
    </React.Fragment>
  );
}

export default PlansScreen;
