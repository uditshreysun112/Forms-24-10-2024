import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// import html2pdf from 'html2pdf.js';
// import logo from "./assets/logo_for_form.png";
// import logo1 from "./assets/Euro+BAR.png";

export const Licence = () => {
    const navigate = useNavigate();
    const [grade, setGrade] = useState('');
    const [licencenumber, setLicencenumber] = useState('');
    const [licenceissuedate, setLicenceissuedate] = useState('');
    const [licenceexpirydate, setLicenceexpiredate] = useState('');
    const [licencerevalidationdate, setLicencerevalidationdate] = useState('');
    const [stc95, setStc95] = useState('');

    const [pgrade, setPgrade] = useState('');
    const [plicencenumber, setPlicencenumber] = useState('');
    const [plicenceissuedate, setPlicenceissuedate] = useState('');
    const [plicenceexpirydate, setPlicenceexpiredate] = useState('');
    const [plicencerevalidationdate, setPlicencerevalidationdate] = useState('');
    const [pstc95, setPstc95] = useState('');

    const [ograde, setOgrade] = useState('');
    const [olicencenumber, setOlicencenumber] = useState('');
    const [olicenceissuedate, setOlicenceissuedate] = useState('');
    const [olicenceexpirydate, setOlicenceexpiredate] = useState('');
    const [olicencerevalidationdate, setOlicencerevalidationdate] = useState('');
    const [ostc95, setOstc95] = useState('');

    const win = window.sessionStorage;



    const handleSubmit = async (e) => { // Add async here
        e.preventDefault();
        
                navigate("/experience");

        // Save data in sessionStorage
        win.setItem('grade', grade);
        win.setItem('licencenumber', licencenumber);
        win.setItem('licenceissuedate', licenceissuedate);
        win.setItem('licenceexpirydate', licenceexpirydate);
        win.setItem('licencerevalidationdate', licencerevalidationdate);
        win.setItem('stc95', stc95);

        win.setItem('pgrade', pgrade);
        win.setItem('plicencenumber', plicencenumber);
        win.setItem('plicenceissuedate', plicenceissuedate);
        win.setItem('plicenceexpirydate', plicenceexpirydate);
        win.setItem('plicencerevalidationdate', plicencerevalidationdate);
        win.setItem('pstc95', pstc95);

        win.setItem('ograde', ograde);
        win.setItem('olicencenumber', olicencenumber);
        win.setItem('olicenceissuedate', olicenceissuedate);
        win.setItem('olicenceexpirydate', olicenceexpirydate);
        win.setItem('olicencerevalidationdate', olicencerevalidationdate);
        win.setItem('ostc95', ostc95);
        
        navigate('/stcw');
    };
     


    useEffect(() => {
        // Load data from sessionStorage when component mounts
        if (win.getItem('grade')) setGrade(win.getItem('grade'));
        if (win.getItem('licencenumber')) setLicencenumber(win.getItem('licencenumber'));
        if (win.getItem('licenceissuedate')) setLicenceissuedate(win.getItem('licenceissuedate'));
        if (win.getItem('licenceexpirydate')) setLicenceexpiredate(win.getItem('licenceexpirydate'));
        if (win.getItem('licencerevalidationdate')) setLicencerevalidationdate(win.getItem('licencerevalidationdate'));
        if (win.getItem('stc95')) setStc95(win.getItem('stc95'));

        if (win.getItem('pgrade')) setPgrade(win.getItem('pgrade'));
        if (win.getItem('plicencenumber')) setPlicencenumber(win.getItem('plicencenumber'));
        if (win.getItem('plicenceissuedate')) setPlicenceissuedate(win.getItem('plicenceissuedate'));
        if (win.getItem('plicenceexpirydate')) setPlicenceexpiredate(win.getItem('plicenceexpirydate'));
        if (win.getItem('plicencerevalidationdate')) setPlicencerevalidationdate(win.getItem('plicencerevalidationdate'));
        if (win.getItem('pstc95')) setPstc95(win.getItem('pstc95'));

        if (win.getItem('ograde')) setOgrade(win.getItem('ograde'));
        if (win.getItem('olicencenumber')) setOlicencenumber(win.getItem('olicencenumber'));
        if (win.getItem('olicenceissuedate')) setOlicenceissuedate(win.getItem('olicenceissuedate'));
        if (win.getItem('olicenceexpirydate')) setOlicenceexpiredate(win.getItem('olicenceexpirydate'));
        if (win.getItem('olicencerevalidationdate')) setOlicencerevalidationdate(win.getItem('olicencerevalidationdate'));
        if (win.getItem('pstc95')) setOstc95(win.getItem('pstc95'));
    }, []);

    const handlePreviousClick = () => {
        navigate("/continuous"); // Navigate to the previous form (Form 1)
      };

    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>5. Licence / Certificates of Competency:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    <b>INDIA:</b><span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Grade</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder=""
                                            value={grade} onChange={(e) => setGrade(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={licencenumber} onChange={(e) => setLicencenumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Issue</p>
                                        <input
                                            type="date"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={licenceissuedate} onChange={(e) => setLicenceissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Expire</p>
                                        <input
                                            type="date"
                                            id="pass-place"
                                            name="pass-place"
                                            placeholder="place of issue"
                                            value={licenceexpirydate} onChange={(e) => setLicenceexpiredate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Revalidation</p>
                                        <input
                                            type="date"
                                            id="pass-issue-date"
                                            name="pass-issue-date"
                                            placeholder="issue date"
                                            value={licencerevalidationdate} onChange={(e) => setLicencerevalidationdate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start fw-bold' style={{ marginBottom: '0' , marginLeft:'20px' }}>STCW 95</p>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <input
                                                type="radio"
                                                id="yes"
                                                name="STCW95"
                                                // placeholder="expire date"
                                                value={stc95} onChange={(e) => setStc95(e.target.value)}
                                                required
                                                />YES
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                type="radio"
                                                id="no"
                                                name="STCW95"
                                                // placeholder="expire date"
                                                value={stc95} onChange={(e) => setStc95(e.target.value)}
                                                required
                                                />NO
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    <b>PANAMA:</b><span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Grade</p>
                                        <input
                                            type="text"
                                            id="visa-number"
                                            name="visa-number"
                                            placeholder=""
                                            value={pgrade} onChange={(e) => setPgrade(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="visa-number"
                                            name="visa-number"
                                            placeholder="number"
                                            value={plicencenumber} onChange={(e) => setPlicencenumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Issue</p>
                                        <input
                                            type="date"
                                            id="visa-number"
                                            name="visa-number"
                                            placeholder="number"
                                            value={plicenceissuedate} onChange={(e) => setPlicenceissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Expire</p>
                                        <input
                                            type="date"
                                            id="visa-place"
                                            name="visa-place"
                                            placeholder="place of issue"
                                            value={plicenceexpirydate} onChange={(e) => setPlicenceexpiredate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Revalidation</p>
                                        <input
                                            type="date"
                                            id="visa-issue-date"
                                            name="visa-issue-date"
                                            placeholder="issue date"
                                            value={plicencerevalidationdate} onChange={(e) => setPlicencerevalidationdate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start fw-bold' style={{ marginBottom: '0' , marginLeft:'20px' }}>STCW 95</p>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <input
                                                type="radio"
                                                id="yes"
                                                name="pSTCW95"
                                                // placeholder="expire date"
                                                value={pstc95} onChange={(e) => setPstc95(e.target.value)}
                                                required
                                                />YES
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                type="radio"
                                                id="no"
                                                name="pSTCW95"
                                                // placeholder="expire date"
                                                value={pstc95} onChange={(e) => setPstc95(e.target.value)}
                                                required
                                                />NO
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    <b>OTHERS:</b><span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Grade</p>
                                        <input
                                            type="text"
                                            id="ecrn-number"
                                            name="ecrn-number"
                                            placeholder=""
                                            value={ograde} onChange={(e) => setOgrade(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="ecrn-number"
                                            name="ecrn-number"
                                            placeholder="number"
                                            value={olicencenumber} onChange={(e) => setOlicencenumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Issue</p>
                                        <input
                                            type="date"
                                            id="ecrn-number"
                                            name="ecrn-number"
                                            placeholder="number"
                                            value={olicenceissuedate} onChange={(e) => setOlicenceissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Date of Expire</p>
                                        <input
                                            type="date"
                                            id="ecrn-place"
                                            name="ecrn-place"
                                            placeholder="place of issue"
                                            value={olicenceexpirydate} onChange={(e) => setOlicenceexpiredate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Revalidation</p>
                                        <input
                                            type="date"
                                            id="ecrn-issue-date"
                                            name="ecrn-issue-date"
                                            placeholder="issue date"
                                            value={olicencerevalidationdate} onChange={(e) => setOlicencerevalidationdate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <p className='text-start fw-bold' style={{ marginBottom: '0' , marginLeft:'20px' }}>STCW 95</p>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <input
                                                type="radio"
                                                id="yes"
                                                name="oSTCW95"
                                                // placeholder="expire date"
                                                value={ostc95} onChange={(e) => setOstc95(e.target.value)}
                                                
                                                />YES
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                type="radio"
                                                id="no"
                                                name="oSTCW95"
                                                // placeholder="expire date"
                                                value={ostc95} onChange={(e) => setOstc95(e.target.value)}
                                                
                                                />NO
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                        

                        {/* // buttons */}

                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                                <input type="checkbox" required /> I'm not a robot
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
                                        {/* <button type="submit" className="btn-submit" onClick={getContentInPDF}>
                                            Next
                                        </button> */}
                                        <button type="submit" className="btn-submit">
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