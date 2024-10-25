import './index.css'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF

export const Passport = () => {
    const navigate = useNavigate();
    const [passnumber, setPassnumber] = useState('');
    const [passissueplace, setPassissueplace] = useState('');
    const [passissuedate, setPassissuedate] = useState('');
    const [passexpiredate, setPassexpiredate] = useState('');
    const [visanumber, setVisanumber] = useState('');
    const [visaissueplace, setVisaissueplace] = useState('');
    const [visaissuedate, setVisaissuedate] = useState('');
    const [visaexpiredate, setVisaexpiredate] = useState('');
    const [ecnrnumber, setEcnrnumber] = useState('');
    const [ecnrissueplace, setEcnrissueplace] = useState('');
    const [ecnrissuedate, setEcnrissuedate] = useState('');
    const [ecnrexpiredate, setEcnrexpiredate] = useState('');
    const [yellowfevernumber, setYellowfevernumber] = useState('');
    const [yellowfeverissueplace, setYellowfeverissueplace] = useState('');
    const [yellowfeverissuedate, setYellowfeverissuedate] = useState('');
    const [yellowfeverexpiredate, setYellowfeverexpiredate] = useState('');
    const [indosnumber, setIndosnumber] = useState('');
    const [indosissueplace, setIndosissueplace] = useState('');
    const [indosissuedate, setIndosissuedate] = useState('');
    const [indosexpiredate, setIndosexpiredate] = useState('');
 

    const win = window.sessionStorage;



    const handleSubmit = (e) => {
        e.preventDefault();

                // Save data in sessionStorage
                win.setItem('passnumber', passnumber);
                win.setItem('passissueplace', passissueplace);
                win.setItem('passissuedate', passissuedate);
                win.setItem('passexpiredate', passexpiredate);
                win.setItem('visanumber', visanumber);
                win.setItem('visaissueplace', visaissueplace);
                win.setItem('visaissuedate', visaissuedate);
                win.setItem('visaexpiredate', visaexpiredate);
                win.setItem('ecnrnumber', ecnrnumber);
                win.setItem('ecnrissueplace', ecnrissueplace);
                win.setItem('ecnrissuedate', ecnrissuedate);
                win.setItem('ecnrexpiredate', ecnrexpiredate);
                win.setItem('yellowfevernumber',yellowfevernumber );
                win.setItem('yellowfeverissueplace',yellowfeverissueplace );
                win.setItem('yellowfeverissuedate',yellowfeverissuedate );
                win.setItem('yellowfeverexpiredate',yellowfeverexpiredate );
                win.setItem('indosnumber',indosnumber );
                win.setItem('indosissueplace', indosissueplace);
                win.setItem('indosissuedate',indosissuedate );
                win.setItem('indosexpiredate',indosexpiredate );

        navigate('');  // This will navigate to the 'form_2' page when clicked
      };

    // Load data from sessionStorage when component mounts
    
    useEffect(()=>{
        if(win.getItem('passnumber'))
            setPassnumber(win.getItem('passnumber'));

        if(win.getItem('passissueplace'))
            setPassissueplace(win.getItem('passissueplace'));

        if(win.getItem('passissuedate'))
            setPassissuedate(win.getItem('passissuedate'));

        if(win.getItem('passexpiredate'))
            setPassexpiredate(win.getItem('passexpiredate'));

        if(win.getItem('visanumber'))
            setVisanumber(win.getItem('visanumber'));

        if(win.getItem('visaissueplace'))
            setVisaissueplace(win.getItem('visaissueplace'));
    
        if(win.getItem('visaissuedate'))
            setVisaissuedate(win.getItem('visaissuedate'));
    
        if(win.getItem('visaexpiredate'))
            setVisaexpiredate(win.getItem('visaexpiredate'));
    
        if(win.getItem('ecnrnumber'))
            setEcnrnumber(win.getItem('ecnrnumber'));

        if(win.getItem('ecnrissuedate'))
            setEcnrissuedate(win.getItem('ecnrissuedate'));

        if(win.getItem('ecnrissueplace'))
            setEcnrissueplace(win.getItem('ecnrissueplace'));

        if(win.getItem('yellowfevernumber'))
            setYellowfevernumber(win.getItem('yellowfevernumber'));

        if(win.getItem('yellowfeverissueplace'))
            setYellowfeverissueplace(win.getItem('yellowfeverissueplace'));

        if(win.getItem('yellowfeverissuedate'))
            setYellowfeverissuedate(win.getItem('yellowfeverissuedate'));

        if(win.getItem('yellowfeverexpiredate'))
            setYellowfeverexpiredate(win.getItem('yellowfeverexpiredate'));

        if(win.getItem('indosnumber'))
            setIndosnumber(win.getItem('indosnumber'));

        if(win.getItem('indosissueplace'))
            setIndosissueplace(win.getItem('indosissueplace'));

        if(win.getItem('indosissuedate'))
            setIndosissuedate(win.getItem('indosissuedate'));

        if(win.getItem('indosexpiredate'))
            setIndosexpiredate(win.getItem('indosexpiredate'));
        
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

    const handlePreviousClick = () => {
        navigate('/form_2');  // Navigate to the previous form (Form 1)
    };


    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>Passport Details:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    PASSPORT:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                    <p className='text-start' style={{marginBottom:'0'}}>Number</p>
                                    <input
                                    type="text"
                                    id="pass-number"
                                    name="pass-number"
                                    placeholder="number"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Place</p>
                                    <input
                                    type="text"
                                    id="pass-place"
                                    name="pass-place"
                                    placeholder="place of issue"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Issue date</p>
                                    <input
                                    type="date"
                                    id="pass-issue-date"
                                    name="pass-issue-date"
                                    placeholder="issue date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Expire date</p>
                                    <input
                                    type="date"
                                    id="pass-expire-date"
                                    name="pass-expire-date"
                                    placeholder="expire date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    VISA:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                    <p className='text-start' style={{marginBottom:'0'}}>Number</p>
                                    <input
                                    type="text"
                                    id="visa-number"
                                    name="visa-number"
                                    placeholder="number"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Place</p>
                                    <input
                                    type="text"
                                    id="visa-place"
                                    name="visa-place"
                                    placeholder="place of issue"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Issue date</p>
                                    <input
                                    type="date"
                                    id="visa-issue-date"
                                    name="visa-issue-date"
                                    placeholder="issue date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Expire date</p>
                                    <input
                                    type="date"
                                    id="visa-expire-date"
                                    name="visa-expire-date"
                                    placeholder="expire date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    ECRN:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                    <p className='text-start' style={{marginBottom:'0'}}>Number</p>
                                    <input
                                    type="text"
                                    id="ecrn-number"
                                    name="ecrn-number"
                                    placeholder="number"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Place</p>
                                    <input
                                    type="text"
                                    id="ecrn-place"
                                    name="ecrn-place"
                                    placeholder="place of issue"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Issue date</p>
                                    <input
                                    type="date"
                                    id="ecrn-issue-date"
                                    name="ecrn-issue-date"
                                    placeholder="issue date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Expire date</p>
                                    <input
                                    type="date"
                                    id="ecrn-expire-date"
                                    name="ecrn-expire-date"
                                    placeholder="expire date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    YELLOW FEVER:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                    <p className='text-start' style={{marginBottom:'0'}}>Number</p>
                                    <input
                                    type="text"
                                    id="yellow-number"
                                    name="yellow-number"
                                    placeholder="number"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Place</p>
                                    <input
                                    type="text"
                                    id="yellow-place"
                                    name="yellow-place"
                                    placeholder="place of issue"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Issue date</p>
                                    <input
                                    type="date"
                                    id="yellow-issue-date"
                                    name="yellow-issue-date"
                                    placeholder="issue date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Expire date</p>
                                    <input
                                    type="date"
                                    id="yellow-expire-date"
                                    name="yellow-expire-date"
                                    placeholder="expire date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                    indosDOS:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                    <p className='text-start' style={{marginBottom:'0'}}>Number</p>
                                    <input
                                    type="text"
                                    id="indos-number"
                                    name="indos-number"
                                    placeholder="number"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Place</p>
                                    <input
                                    type="text"
                                    id="indos-place"
                                    name="indos-place"
                                    placeholder="place of issue"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Issue date</p>
                                    <input
                                    type="date"
                                    id="indos-issue-date"
                                    name="indos-issue-date"
                                    placeholder="issue date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                    <div className="col-md-3">
                                    <p className='text-start' style={{marginBottom:'0'}}>Expire date</p>
                                    <input
                                    type="date"
                                    id="indos-expire-date"
                                    name="indos-expire-date"
                                    placeholder="expire date"
                                    // value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
                                    required
                                    />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* // buttons */}
                        
                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                            <input type="checkbox" /> I'm not a robot
                            </label>
                        </div>

                        <div className="form-group ">
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="preview" className="btn-submit" onClick={handlePreviousClick}>
                                        Preview
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button type="next" className="btn-submit" >
                                        Next
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};