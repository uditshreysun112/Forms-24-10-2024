import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import jsPDF from 'jspdf'; // Import jsPDF

export const Index = () => {
    const navigate = useNavigate();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phone2, setPhone2] = useState('');
    const [dob, setDob] = useState('');
    const [place, setPlace] = useState('');
    const [bankname, setBankname] = useState('');
    const [bankan, setBankan] = useState('');
    const [airport, setAirport] = useState('');
    const [permanentaddress, setPermanentaddress] = useState('');
    const [presentaddress, setPresentaddress] = useState('');

    const [presentrank, setPresentrank] = useState('');
    const [dateofapplication, setDateofapplication] = useState('');
    const [dateofavailability, setDateofavailability] = useState('');
    const [rankapplied, setRankapplied] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes

    if (file && file.size > maxSize) {
      setErrorMessage('File size exceeds 2MB. Please upload a smaller file.');
      event.target.value = ''; // Clear the file input
    } else {
      setErrorMessage('');
      // You can handle the valid file here (e.g., set it in the state for preview)
      const reader = new FileReader();
      reader.onloadend = () => {
        sessionStorage.setItem('uploadedImage', reader.result); // Store image in session storage
      };
      reader.readAsDataURL(file); // Read file as Base64 encoded string
    }
  };

    const win = window.sessionStorage;

    const handleSubmit = async (e) => { // Add async here
        e.preventDefault();

        // Save data in sessionStorage
        win.setItem('fname', fname);
        win.setItem('lname', lname);
        win.setItem('phone', phone);
        win.setItem('phone2', phone2);
        win.setItem('dob', dob);
        win.setItem('email', email);
        win.setItem('place', place);
        win.setItem('bankname', bankname);
        win.setItem('bankan', bankan);
        win.setItem('airport', airport);
        win.setItem('permanentaddress', permanentaddress);
        win.setItem('presentaddress', presentaddress);

        win.setItem('presentrank', presentrank);
        win.setItem('dateofapplication', dateofapplication);
        win.setItem('dateofavailability', dateofavailability);
        win.setItem('rankapplied', rankapplied);

        // Prepare data to send to MongoDB
        // const formData = {
        // fname,
        // lname,
        // email,
        // phone,
        // phone2,
        // dob,
        // place,
        // bankname,
        // bankan,
        // airport,
        // permanentaddress,
        // presentaddress,
        // };

        // if(formData) {
        //     win.setItem('formData', JSON.stringify(formData));
        navigate('form_2');
        // } else{
        //     alert('Please fill all the fields');
        // }

        // try {
        //     const response = await axios.post('http://localhost:5000/api/saveFormData', formData);
        //     alert(response.data.message);
        //     navigate('form_2'); // Navigate to the next page if submission is successful
        // } catch (error) {
        //     alert('Error saving data');
        //     console.error(error);
        // }
    };

    // Load data from sessionStorage when component mounts
    useEffect(() => {
        if (win.getItem('fname')) setFname(win.getItem('fname'));
        if (win.getItem('lname')) setLname(win.getItem('lname'));
        if (win.getItem('phone')) setPhone(win.getItem('phone'));
        if (win.getItem('phone2')) setPhone2(win.getItem('phone2'));
        if (win.getItem('dob')) setDob(win.getItem('dob'));
        if (win.getItem('email')) setEmail(win.getItem('email'));
        if (win.getItem('place')) setPlace(win.getItem('place'));
        if (win.getItem('bankname')) setBankname(win.getItem('bankname'));
        if (win.getItem('bankan')) setBankan(win.getItem('bankan'));
        if (win.getItem('airport')) setAirport(win.getItem('airport'));
        if (win.getItem('permanentaddress')) setPermanentaddress(win.getItem('permanentaddress'));
        if (win.getItem('presentaddress')) setPresentaddress(win.getItem('presentaddress'));
        if (win.getItem('presentrank')) setPresentrank(win.getItem('presentrank'));
        if (win.getItem('dateofapplication')) setDateofapplication(win.getItem('dateofapplication'));
        if (win.getItem('dateofavailability')) setDateofavailability(win.getItem('dateofavailability'));
        if (win.getItem('rankapplied')) setRankapplied(win.getItem('rankapplied'));
    }, []); // Run once when component mounts

    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className="text-start">Personal Details:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="text-start">
                                <label htmlFor="schooler-name">
                                    NAME:<span className="required">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="First"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Last"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="parent-name">
                                PHONE:<span className="required">*</span>
                            </label>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="parent-first-name"
                                    name="parent-first-name"
                                    placeholder="Phone 1"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    id="parent-last-name"
                                    name="parent-last-name"
                                    placeholder="Phone 2"
                                    value={phone2}
                                    onChange={(e) => setPhone2(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="dob">
                                DATE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="DOB"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-phone">
                                PLACE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="parent-phone"
                                name="parent-phone"
                                placeholder="Place of birth"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-phone">
                                PERMANENT ADDRESS:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="parent-phone"
                                name="parent-phone"
                                placeholder="Permanent address"
                                value={permanentaddress}
                                onChange={(e) => setPermanentaddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-phone">
                                PRESENT ADDRESS:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="parent-phone"
                                name="parent-phone"
                                placeholder="Present address"
                                value={presentaddress}
                                onChange={(e) => setPresentaddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="parent-email">
                                Email ID:<span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="parent-email"
                                name="parent-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="nearest-airport">
                                NEAREST AIRPORT:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="nearest-airport"
                                name="nearest-airport"
                                value={airport}
                                onChange={(e) => setAirport(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="bank-name">
                                BANK NAME AND BRANCH:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="bank-name"
                                name="bank-name"
                                value={bankname}
                                onChange={(e) => setBankname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                ACCOUNT NO:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="account-no"
                                name="account-no"
                                value={bankan}
                                onChange={(e) => setBankan(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                PRECENT RANK:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="account-no"
                                name="account-no"
                                value={presentrank}
                                onChange={(e) => setPresentrank(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                Date of Application:<span className="required">*</span>
                            </label>
                            <input
                                type="date"
                                id="application date"
                                name="account-no"
                                value={dateofapplication}
                                onChange={(e) => setDateofapplication(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                RANK Applied:<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="account-no"
                                name="account-no"
                                value={rankapplied}
                                onChange={(e) => setRankapplied(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                Date of Availability:<span className="required">*</span>
                            </label>
                            <input
                                type="date"
                                id="date of availability"
                                name="account-no"
                                value={dateofavailability}
                                onChange={(e) => setDateofavailability(e.target.value)}
                                required
                            />
                        </div>

                        <p className='text-start mt-4'>Upload Your Photo<span className="required">*</span></p>
                        <div className="form-group text-start">
                        
                            {/* <div> */}
                                <input
                                    style={{ border: 'none',width:'250px' }}
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/jpeg, image/png, image/jpg"
                                    onChange={handleFileChange}
                                    required
                                />

                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            {/* </div> */}
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                                <input id='verification' type="checkbox" required /> I'm not a robot
                            </label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn-submit">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
