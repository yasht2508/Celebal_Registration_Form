import { useState } from 'react';
import './App.css';

function App() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [panNo, setPanNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const submitForm = () => {
    setCountry(document.getElementById('country').value);
    setCity(document.getElementById('city').value);
    setSubmitted(true);
  }

  const ValidateFName = () => {
    const fnameRegex = /^[A-Za-z. ]{2,30}$/;

    if (fnameRegex.test(document.getElementById('fName').value)) {
      setfName(document.getElementById('fName').value);
      document.getElementById('invalidFname').innerHTML = "";
    }
    else {
      document.getElementById('invalidFname').innerHTML = "**Name can not contain digits or special characters.";
    }

  }

  const ValidateLName = () => {
    const lnameRegex = /^[A-Za-z. ]{2,30}$/;

    if (lnameRegex.test(document.getElementById('lName').value)) {
      setlName(document.getElementById('lName').value);
      document.getElementById('invalidLname').innerHTML = "";
    }
    else {
      document.getElementById('invalidLname').innerHTML = "****Name can not contain digits or special characters.";
    }

  }

  const ValidateUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/

    if (usernameRegex.test(document.getElementById('uName').value)) {
      setUsername(document.getElementById('uName').value);
      document.getElementById('invalidUname').innerHTML = "";
    }
    else {
      document.getElementById('invalidUname').innerHTML = "**Entered Username is not valid";
    }

  }



  const ValidateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(document.getElementById('email').value)) {
      setEmail(document.getElementById('email').value);
      document.getElementById('invalidEmail').innerHTML = "";
    }
    else {
      document.getElementById('invalidEmail').innerHTML = "**Enter a valid email";
    }
  }

  const ValidatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (passwordRegex.test(document.getElementById('password').value)) {
      setPassword(document.getElementById('password').value);
      document.getElementById('invalidPassword').innerHTML = "";
    }
    else {
      document.getElementById('invalidPassword').innerHTML = "**Password must contain uppercase(A-Z), lowercase (a-z), digits (0-9) and special characters (!,@,#,$,%,^,&,*,(,),-).";
    }
  }

  const ValidatePanNo = () => {
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panRegex.test(document.getElementById('panNo').value)) {
      setPanNo(document.getElementById('panNo').value);
      document.getElementById('invalidPan').innerHTML = "";
    }
    else {
      document.getElementById('invalidPan').innerHTML = "**Enter a valid PAN no.";
    }
  }


  const ValidatePhoneNo = () => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (phoneRegex.test(document.getElementById('phoneNo').value)) {
      setPhoneNo(document.getElementById('phoneNo').value);
      document.getElementById('invalidPhoneNo').innerHTML = "";
    }
    else {
      document.getElementById('invalidPhoneNo').innerHTML = "**Enter a valid Phone no.";
    }

  }

  const ValidateAadharNo = () => {
    const AadharRegex = /^\d{16}$/;

    if (AadharRegex.test(document.getElementById('aadharNo').value)) {
      setAadharNo(document.getElementById('aadharNo').value);
      document.getElementById('invalidAadharNo').innerHTML = "";
    }
    else {
      document.getElementById('invalidAadharNo').innerHTML = "**Enter a valid Aadhar no.";
    }
  }

  return (
    submitted ?
      (<div className='fullHeight fullWidth container'>
        <div className='informationComponent'>
          <div className='infomationItems'>
            <h1>
              Welcome back, {fname} {lname}.
            </h1>
          </div>
          <div className='infomationItems'>
            First Name: {fname}
          </div>
          <div className='infomationItems'>
            Last Name: {lname}
          </div>
          <div className='infomationItems'>
            Username: {username}
          </div>
          <div className='infomationItems'>
            Email: {email}
          </div>
          <div className='infomationItems'>
            Phone No. : {phoneNo}
          </div>
          <div className='infomationItems'>
            Password: <span>********</span>
          </div>
          <div className='infomationItems'>
            Country: {country}
          </div>
          <div className='infomationItems'>
            City: {city}
          </div>
          <div className='infomationItems'>
            Pan No. : {panNo}
          </div>
          <div className='infomationItems'>
            Aadhar No. : {aadharNo}
          </div>
        </div>
      </div>) : (
        <div className="App">
          <div className='fullHeight fullWidth container'>
            <div className='formContainer'>
              <form action="" name='applicationForm'>
                <h1>Application Form</h1>
                <div>
                  <input type="text" id='fName' placeholder='First Name' name='fName' onChange={ValidateFName} />
                </div>
                <div id="invalidFname" className='invalidDivs'></div>

                <div>
                  <input type="text" id='lName' placeholder='Last Name' onChange={ValidateLName} />
                </div>
                <div id="invalidLname" className='invalidDivs'></div>

                <div>

                  <input type="text" id='uName' placeholder='Username' onChange={ValidateUsername} />
                </div>
                <div id='invalidUname' className='invalidDivs'></div>

                <div>
                  <input type="email" id='email' placeholder='Email' onChange={ValidateEmail} />
                </div>
                <div id="invalidEmail" className='invalidDivs' ></div>

                <div>
                  <input type="password" id='password' placeholder='Password' onChange={ValidatePassword} />
                </div>
                <div id='invalidPassword' className='invalidDivs'></div>

                <div>
                  <input type="tel" id='phoneNo' placeholder='Phone no.' onChange={ValidatePhoneNo} />
                </div>
                <div id="invalidPhoneNo" className='invalidDivs'></div>

                <div>

                  <select name="" id="country">
                    <option value="" disabled selected>Country</option>
                    <option>India</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div>

                  <select name="" id="city">
                    <option value="" disabled selected>City</option>
                    <option>Jaipur</option>
                    <option>Kota</option>
                    <option>Bhilwara</option>
                    <option>Delhi</option>
                  </select>
                </div>


                <div>
                  <input type="text" id='panNo' placeholder='Pan No.' onClick={ValidatePanNo} />
                </div>
                <div id='invalidPan' className='invalidDivs'></div>

                <div>
                  <input type="number" id='aadharNo' placeholder='Aadhar No.' onClick={ValidateAadharNo} />
                </div>
                <div id='invalidAadharNo' className='invalidDivs'></div>
                <button className='btn' onClick={submitForm}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )

  );
}

export default App;
