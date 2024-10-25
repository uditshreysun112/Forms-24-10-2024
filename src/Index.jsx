import './index.css'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF

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

    const win = window.sessionStorage;



    const handleSubmit = (e) => {
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

        navigate('form_2');  // This will navigate to the 'form_2' page when clicked
      };

    // Load data from sessionStorage when component mounts
    
    useEffect(()=>{
        if(win.getItem('fname'))
        setFname(win.getItem('fname'));

        if(win.getItem('lname'))
        setLname(win.getItem('lname'));

        if(win.getItem('phone'))
        setPhone(win.getItem('phone'));

        if(win.getItem('phone2'))
        setPhone2(win.getItem('phone2'));

        if(win.getItem('dob'))
        setDob(win.getItem('dob'));

        if(win.getItem('email'))
        setEmail(win.getItem('email'));
    
        if(win.getItem('place'))
        setPlace(win.getItem('place'));
    
        if(win.getItem('bankname'))
        setBankname(win.getItem('bankname'));
    
        if(win.getItem('bankan'))
        setBankan(win.getItem('bankan'));

        if(win.getItem('airport'))
        setAirport(win.getItem('airport'));
        
    },[])  // Run once when component mounts

     // Function to generate PDF
    //  const generatePDF = () => {
    //     const doc = new jsPDF();

        // doc.text("Registration Details", 10, 10);
        // doc.text(`Name: ${fname} ${lname}`, 10, 20);
        // doc.text(`Email: ${email}`, 10, 30);
        // doc.text(`Phone 1 Name: ${phone}`, 10, 50);
        // doc.text(`Phone 2: ${phone2}`, 10, 60);
        // doc.text(`Date Of Birth: ${dob}`, 10, 40);
        // doc.text(`Birth Place: ${place}`, 10, 70);
        // doc.text(`Bank Name and Branch: ${bankname}`, 10, 80);
        // doc.text(`Bank A/c No: ${bankan}`, 10, 90);
        // doc.text(`Nearest Airport: ${bankname}`, 10, 100);

        // Save the PDF
    //     doc.save('form_data.pdf');
    // };


    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>Personal Details:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    NAME:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="First"
                                    value={fname} onChange={(e)=>setFname(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Last"
                                    value={lname}
                                    onChange={(e)=>setLname(e.target.value)}
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
                                    onChange={(e)=>setPhone(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    id="parent-last-name"
                                    name="parent-last-name"
                                    placeholder="Phone 2"
                                    value={phone2}
                                    onChange={(e)=>setPhone2(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="dob">
                                DATE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input type="date" id="dob" name="parent-phone" placeholder="DOB" value={dob} onChange={(e)=>setDob(e.target.value)} required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-phone">
                                PLACE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input type="text" id="parent-phone" name="parent-phone" placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)} required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="parent-email">
                                Email I'd:<span className="required">*</span>
                            </label>
                            <input type="email" id="parent-email" name="parent-email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="nearest-airport">
                                NEAREST AIRPORT:<span className="required">*</span>
                            </label>
                            <input type="text" id="nearest-airport" name="" value={airport} onChange={(e)=>setAirport(e.target.value)} required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="bank-name">
                                BANK NAME AND BRANCH:<span className="required">*</span>
                            </label>
                            <input type="text" id="bank-name" name="" value={bankname} onChange={(e)=>setBankname(e.target.value)} required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                ACCOUNT NO :<span className="required">*</span>
                            </label>
                            <input type="text" id="account-no" name="" value={bankan} onChange={(e)=>setBankan(e.target.value)} required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                            <input type="checkbox" /> I'm not a robot
                            </label>
                        </div>

                        <div className="form-group ">
                            <button type="next" className="btn-submit" >
                                Next
                            </button>
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};