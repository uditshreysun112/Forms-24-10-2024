import './index.css'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF
import logo from "./assets/logo_for_form.png";
import html2pdf from 'html2pdf.js';

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

    //  Function to generate PDF
    //  const generatePDF = () => {
    //     const doc = new jsPDF();

    //     doc.text("Registration Details", 10, 10);
    //     doc.text(`Name: ${fname} ${lname}`, 10, 20);
    //     doc.text(`Email: ${email}`, 10, 30);
    //     doc.text(`Phone 1 Name: ${phone}`, 10, 50);
    //     doc.text(`Phone 2: ${phone2}`, 10, 60);
    //     doc.text(`Date Of Birth: ${dob}`, 10, 40);
    //     doc.text(`Birth Place: ${place}`, 10, 70);
    //     doc.text(`Bank Name and Branch: ${bankname}`, 10, 80);
    //     doc.text(`Bank A/c No: ${bankan}`, 10, 90);
    //     doc.text(`Nearest Airport: ${bankname}`, 10, 100);

    //     Save the PDF
    //     doc.save('form_data.pdf');
    // };

     // Function to generate PDF
     const getContentInPDF = () => {
        // Create a container with form data as table rows
        const element = document.createElement('div');
        element.innerHTML = `
            <h1>Form Data</h1>
            <img src="${logo}" alt="logo" style="width: 100px; height: auto; margin-bottom: 20px;">
            <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
                <tr>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Field</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Value</th>
                </tr>
                <tr><td style="padding: 8px; border: 1px solid #000;">Number</td><td style="padding: 8px; border: 1px solid #000;">${passnumber}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #000;">Issue place</td><td style="padding: 8px; border: 1px solid #000;">${passissueplace}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #000;">Issue date</td><td style="padding: 8px; border: 1px solid #000;">${passissuedate}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #000;">Expire date</td><td style="padding: 8px; border: 1px solid #000;">${passexpiredate}</td></tr>

            </table>
        `;

        // Configure and generate the PDF with html2pdf
        html2pdf()
            .set({
                margin: [10, 10, 10, 10], // top, right, bottom, left (in mm)
                filename: 'Form_Data.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            })
            .from(element)
            .save()
            .catch(err => console.error("Error generating PDF:", err));
    };

    const handlePreviousClick = () => {
        navigate('/form_2'); 
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
                                    value={passnumber} onChange={(e)=>setPassnumber(e.target.value)}
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
                                    value={passissueplace} onChange={(e)=>setPassissueplace(e.target.value)}
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
                                    value={passissuedate} onChange={(e)=>setPassissuedate(e.target.value)}
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
                                    value={passexpiredate} onChange={(e)=>setPassexpiredate(e.target.value)}
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
                                    value={visanumber} onChange={(e)=>setVisanumber(e.target.value)}
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
                                    value={visaissueplace} onChange={(e)=>setVisaissueplace(e.target.value)}
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
                                    value={visaissuedate} onChange={(e)=>setVisaissuedate(e.target.value)}
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
                                    value={visaexpiredate} onChange={(e)=>setVisaexpiredate(e.target.value)}
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
                                    value={ecnrnumber} onChange={(e)=>setEcnrnumber(e.target.value)}
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
                                    value={ecnrissueplace} onChange={(e)=>setEcnrissueplace(e.target.value)}
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
                                    value={ecnrissuedate} onChange={(e)=>setEcnrissuedate(e.target.value)}
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
                                    value={ecnrexpiredate} onChange={(e)=>setEcnrexpiredate(e.target.value)}
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
                                    value={yellowfevernumber} onChange={(e)=>setYellowfevernumber(e.target.value)}
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
                                    value={yellowfeverissueplace} onChange={(e)=>setYellowfeverissueplace(e.target.value)}
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
                                    value={yellowfeverissuedate} onChange={(e)=>setYellowfeverissuedate(e.target.value)}
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
                                    value={yellowfeverexpiredate} onChange={(e)=>setYellowfeverexpiredate(e.target.value)}
                                    required
                                    />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    Indos:<span className="required ">*</span>
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
                                    value={indosnumber} onChange={(e)=>setIndosnumber(e.target.value)}
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
                                    value={indosissueplace} onChange={(e)=>setIndosissueplace(e.target.value)}
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
                                    value={indosissuedate} onChange={(e)=>setIndosissuedate(e.target.value)}
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
                                    value={indosexpiredate} onChange={(e)=>setIndosexpiredate(e.target.value)}
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
                                    <div className="form-group">
                                        <button type="button" className="btn-submit" onClick={handlePreviousClick}>
                                            Previous
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button type="submit" className="btn-submit" onClick={getContentInPDF}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};