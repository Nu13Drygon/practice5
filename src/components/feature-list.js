import React from "react";

function Features() {
  return (
    <section className="container-fluid pt-3">
        <div className="row justify-content-center">
            <div className="row justify-content-center pt-2">
                <img className="col-sm-3 col-md-2 col-lg-1 feature-img" src="https://i.imgur.com/tnf9tDK.jpg" alt="" srcset="" />
                <div className="col-sm-6 col-md-5">
                    <h3 className="">Premium Materials</h3>
                    <p>Our Wine use the shiniest grapes which is sourced locally. This will increase the longevity of your purchase. </p>
                </div>
            </div>
            <div className="row justify-content-center pt-2">
                <img className="col-sm-3 col-md-2 col-lg-1 feature-img" src="https://i.imgur.com/tnf9tDK.jpg" alt="" srcset="" />
                <div className="col-sm-6 col-md-5">
                    <h3 className="">Fast Shipping</h3>
                    <p>We make sure you recieve your wine as soon as we have finished making it. We also provide free returns if you are not satisfied. </p>
                </div>
            </div>
            <div className="row justify-content-center pt-2">
                <img className="col-sm-3 col-md-2 col-lg-1 feature-img" src="https://i.imgur.com/tnf9tDK.jpg" alt="" srcset="" />
                <div className="col-sm-6 col-md-5">
                    <h3 className="">Quality Assurance</h3>
                    <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the taste of your wine. </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Features;