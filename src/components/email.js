import React from "react";

function Email() {
  return (
    <section className="container email-field">
        <div className="row justify-content-center">
            <div className="col-4">
                <h1 className="text-center">HandCrafted Wines</h1>  
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                        <input type="text" class="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <form action="" className="text-center">
                    <button className="text-uppercase btn btn-warning"><span>Get Started</span></button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Email;