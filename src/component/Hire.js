import React from 'react'

function Hire() {
  return (
    <div>
      <div className="bgimg">
        <div className="container d-flex justify-content-center justify-content-lg-end align-items-center h-100">
            <div className="card form-card text-center glass-effect">
                <div className="card-body">
                    <h3 className="card-title " style={{color:"#ff0000 "}}>Hire a Mechanic</h3>
                    <form>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Location</label>
                            <input type="text" name="location" className="form-control bg-transparent text-white" placeholder="Enter the Location"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Vehicle Model</label>
                            <input type="text" name="vehicle-model" className="form-control bg-transparent text-white" placeholder="Enter Vehicle Model"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Vehicle Number</label>
                            <input type="text" name="vehicle-number"className="form-control bg-transparent text-white" placeholder="Enter Vehicle Number"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Issue</label>
                            <input type="text" name="issue" className="form-control bg-transparent text-white" placeholder="Enter the issue"/>
                        </div>
                    </form>
                    <input className="btn btn-large btn-block btn-hire" type="submit" value="HIRE" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hire
