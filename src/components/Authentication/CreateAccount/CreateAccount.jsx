import React, { useState } from 'react';
import "./CreateAccount.css";
import Logo from "../Logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function SuccessfulSignUp() {
 const [passwordShown, setPasswordShown] = useState(false)
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [emailAddress, setEmailAddress] = useState("");
 const [registerAs, setRegisterAs] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("")
 const [accountSubtype, setAccountSubtype] = useState(["As a business", "As an individual (personal)"])
 const [isChecked, setIsChecked] = useState(false);

 const handleOnChange = () => {
  setIsChecked(!isChecked);
 };

 const AddAccountSubtype = accountSubtype.map(AddAccountSubtype => AddAccountSubtype)
 const [password, setPassword] = useState("");


 const handleRegisterAsChange = (e) => {
  setRegisterAs(e.target.value);
 }

 const [role, setRole] = useState("As a business")

 const handleAccountSubtype = (e) => {
  setRole(accountSubtype[e.target.value])
 }

 const history = useHistory();

 function successfulsignup(e) {
  e.preventDefault();

  const successfulsignupData = {
   firstName,
   lastName,
   emailAddress,
   password
  };

  axios.post("http://pine.africa/api/register", successfulsignupData)
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
    <div className="row px-4">
     <div className="column-1">
      <div className="px-4 clap">
       <img src={Logo} width={30} height={30} alt="Logo" className="img-thumbnail" />
      </div>
      <h2 className="px-4 trust">Trust us to always <span className="text-warning">deliver</span></h2>
      <p className=" px-4 truck"> A platform where truck owners/logistics companies or transporters can have direct access to companies and individuals that want to move their goods to different  states in Nigeria.</p>
      <p className=" px-4 africa">© 2021 Pine Africa. All rights reserved.</p>
     </div>



     <div className="column-2 px-4">
      <h4 className="text-center mt-5">Create your Pine account</h4>
      <p className="text-center text-secondary">Curabitur aliquet quam id dui posuere blandit.</p>

      <div className="container">
       <div className="px-5">
        <form className="px-4 mt-5" onSubmit={successfulsignup}>
         <div style={{ display: 'flex' }}>
          <div className="form-group" style={{ width: '47%' }}>
           <input type="text" className="form-control ty" id="inputEmail4" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>

          <div style={{ width: "6%" }}></div>

          <div className="form-group" style={{ width: '47%' }}>
           <input type="text" className="form-control ty" id="inputPassword4" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>

         </div>


         <div className="form-group">
          <input type="number" className="form-control ty" id="inputAddress" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
         </div>
         <div className="form-group">
          <input type="text" className="form-control tzy" id="inputAddress2" placeholder="Email Address" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
         </div>

         <div className="form-group" style={{ display: 'flex' }}>
          <div style={{ width: '47%', backgroundColor: '#F8F9FA', padding: '10px', borderRadius: '8px' }}>

           <input type="radio" value="Truck Owner" onChange={handleRegisterAsChange} style={{marginTop: '2px'}} name="register_as" />
           <label for="Truck Owner" style={{ fontWeight: 'bold', fontSize: '14px', paddingLeft: '12.92px', paddingTop: '2px' }}> I'm a truck owner</label>
          </div>
          <div style={{ width: '6%' }}></div>
          <div style={{ width: '47%', backgroundColor: '#F8F9FA', padding: '10px', borderRadius: '8px' }}>
           <input type="radio" value="Shipper" onChange={handleRegisterAsChange} style={{marginTop: '2px'}} name="register_as" />
           <label for="Shipper" style={{ fontWeight: 'bold', fontSize: '14px', paddingLeft: '12.92px' }}> I'm a shipper</label>
          </div>

         </div>

         <div className="form-group">
          <select
           className="form-control tzy"
           onChange={e => handleAccountSubtype(e)}
           
          >

           {AddAccountSubtype.map((index, key) => <option key={key}>{index}</option>)}
          </select>
         </div>

         <div className="form-group">
          <input type="password" className="form-control ty" id="inputAddress2" placeholder="Create password" />
         </div>

         <div className="form-group" style={{ display: 'flex' }}>
          <div style={{ width: '5%', marginTop: '2px' }}>
           <input type="checkbox" id="t&c" name="terms_and_conditions" value="Terms and Conditions" checked={isChecked} onChange={handleOnChange} />
          </div>

          <div style={{ width: '95%', marginTop: '0px' }}>
           I agree to Pine’s <b><a href="#" style={{color: 'black', textDecoration: 'underline'}} >Terms & conditions</a></b> and <b><a href="#" style={{color: 'black', textDecoration: 'underline'}}>Policy</a></b>
          </div>

         </div>


         <button type="submit" className="btn btn-warning btn-lg btn-block"><b style={{ fontSize: '14px', letterSpacing: '0.004em', lineHeight: '22px', color: '#081A38' }}>Create account</b></button>

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
