import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="title center">Weather App</h4>
            </div>

            <div className="col-md-12">
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                   <i className="fas fa-plus addbtn"></i>
                
                 <button className="btnBottom"> clear</button>
                </form>
            </div>

        </div>
    )
}