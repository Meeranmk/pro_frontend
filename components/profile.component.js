import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      fage: "",
      fgender: "",
      fdob: "",
      fmobile: "",
    };
    this.handleSumbit = this.handleSumbit.bind(this);
  }
  handleSumbit(e){
    e.preventDefault();
    const  {fage, fgender , fdob , fmobile} = this.state;
    console.log(fage,fgender,fdob, fmobile);
    fetch("http://localhost:3000/userData",{
      method:"GET",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fage,
        fgender,
        fdob,
        fmobile
      }),
    })
    .then((res)=>res.json())
    .then((data) => {
      console.log(data, "userData");
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h3>Profile</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Age"
            onChange={e=>this.setState({ fage: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Gender" 
          onChange={e=>this.setState({ fgender: e.target.value})} />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Date of Birth"
            onChange={e=>this.setState({ fdob : e.target.value})}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            onChange={e=>this.setState({ fmobile: e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update profile
          </button>
        </div>
      </form>
    )
  }
}

