import React, { useState } from 'react';
import "./CreateAccount.css";
import Logo from "../Logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function SuccessfulSignUp() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function successfulsignup(e) {
    e.preventDefault();

    const successfulsignupData = {
      email,
      password
    };

    axios.post("http://pine.africa/api/login", successfulsignupData)
      .then(res => {
        console.log(res.data)
        history.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  
  return (
    <>
      <div className="container mt-3">
        <div class="row px-4">
          <div class="column-1">
            <div className="px-4 clap">
              <img src={Logo} width={30} height={30} alt="Logo" className="img-thumbnail" />
            </div>
            <h2 className="px-4 trust">Trust us to always <span className="text-warning">deliver</span></h2>
            <p className=" px-4 truck"> A platform where truck owners/logistics companies or transporters can have direct access to companies and individuals that want to move their goods to different  states in Nigeria.</p>
            <p className=" px-4 africa">© 2021 Pine Africa. All rights reserved.</p>
          </div>



          <div class="column-2 px-4">
            <h4 className="text-center mt-5">Create your Pine account</h4>
            <p className="text-center text-secondary">Curabitur aliquet quam id dui posuere blandit.</p>

            <div className="container">
            <div className="px-5">
              <form className="px-4 mt-5" onSubmit={successfulsignup}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4"></label>
                    <input type="email" className="form-control email" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4"></label>
                    <input type="password" className="form-control password" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress"></label>
                  <input type="text" className="form-control ty" id="inputAddress" placeholder="Phone Number" />
                </div>
                <div class="form-group">
                  <label for="inputAddress2"></label>
                  <input type="text" className="form-control tzy" id="inputAddress2" placeholder="Email Address" />
                </div>



                <div class="form-group">
                  <label for="inputAddress"></label>
                  <input type="text" className="form-control ty" id="inputAddress" placeholder="" />
                </div>
                <div class="form-group">
                  <label for="inputAddress2"></label>
                  <input type="text" className="form-control t" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>


                <button type="submit" className="btn btn-warning btn-lg btn-block"><b>Create account</b></button>




              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default SuccessfulSignUp
