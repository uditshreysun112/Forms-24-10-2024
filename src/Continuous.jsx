import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const Continuous = () => {
    const navigate = useNavigate();

    const [indianumber, setIndianumber] = useState('');
    const [indiaissueplace, setIndiaissueplace] = useState('');
    const [indiaissuedate, setIndiaissuedate] = useState('');
    const [indiaexpiredate, setIndiaexpiredate] = useState('');
    const [panamanumber, setPanamanumber] = useState('');
    const [panamaissueplace, setPanamaissueplace] = useState('');
    const [panamaissuedate, setPanamaissuedate] = useState('');
    const [panamaexpiredate, setPanamaexpiredate] = useState('');
    const [othernumber, setOthernumber] = useState('');
    const [otherissueplace, setOtherissueplace] = useState('');
    const [otherissuedate, setOtherissuedate] = useState('');
    const [otherexpiredate, setOtherexpiredate] = useState('');

    const win = window.sessionStorage;



    const handleSubmit = async (e) => { // Add async here
        e.preventDefault();


        // Save data in sessionStorage
        
        win.setItem('indianumber', indianumber);
        win.setItem('indiaissueplace', indiaissueplace);
        win.setItem('indiaissuedate', indiaissuedate);
        win.setItem('indiaexpiredate', indiaexpiredate);
        win.setItem('panamanumber', panamanumber);
        win.setItem('panamaissueplace', panamaissueplace);
        win.setItem('panamaissuedate', panamaissuedate);
        win.setItem('panamaexpiredate', panamaexpiredate);
        win.setItem('othernumber', othernumber);
        win.setItem('otherissueplace', otherissueplace);
        win.setItem('otherissuedate', otherissuedate);
        win.setItem('otherexpiredate', otherexpiredate);

        navigate("/licence");
    };



    useEffect(() => {
        // Load data from sessionStorage when component mounts
        if (win.getItem('indianumber')) setIndianumber(win.getItem('indianumber'));
        if (win.getItem('indiaissueplace')) setIndiaissueplace(win.getItem('indiaissueplace'));
        if (win.getItem('indiaissuedate')) setIndiaissuedate(win.getItem('indiaissuedate'));
        if (win.getItem('indiaexpiredate')) setIndiaexpiredate(win.getItem('indiaexpiredate'));
        if (win.getItem('panamanumber')) setPanamanumber(win.getItem('panamanumber'));
        if (win.getItem('panamaissueplace')) setPanamaissueplace(win.getItem('panamaissueplace'));
        if (win.getItem('panamaissuedate')) setPanamaissuedate(win.getItem('panamaissuedate'));
        if (win.getItem('panamaexpiredate')) setPanamaexpiredate(win.getItem('panamaexpiredate'));
        if (win.getItem('othernumber')) setOthernumber(win.getItem('othernumber'));
        if (win.getItem('otherissueplace')) setOtherissueplace(win.getItem('otherissueplace'));
        if (win.getItem('otherissuedate')) setOtherissuedate(win.getItem('otherissuedate'));
        if (win.getItem('otherexpiredate')) setOtherexpiredate(win.getItem('otherexpiredate'));

    }, []);

    const handlePreviousClick = () => {
        navigate("/passport"); // Navigate to the previous form (Form 1)
    };

    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>4. Continious:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    INDIA:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={indianumber} onChange={(e) => setIndianumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="pass-place"
                                            name="pass-place"
                                            placeholder="place of issue"
                                            value={indiaissueplace} onChange={(e) => setIndiaissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="pass-issue-date"
                                            name="pass-issue-date"
                                            placeholder="issue date"
                                            value={indiaissuedate} onChange={(e) => setIndiaissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="pass-expire-date"
                                            name="pass-expire-date"
                                            placeholder="expire date"
                                            value={indiaexpiredate} onChange={(e) => setIndiaexpiredate(e.target.value)}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    PANAMA:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={panamanumber} onChange={(e) => setPanamanumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="pass-place"
                                            name="pass-place"
                                            placeholder="place of issue"
                                            value={panamaissueplace} onChange={(e) => setPanamaissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="pass-issue-date"
                                            name="pass-issue-date"
                                            placeholder="issue date"
                                            value={panamaissuedate} onChange={(e) => setPanamaissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="pass-expire-date"
                                            name="pass-expire-date"
                                            placeholder="expire date"
                                            value={panamaexpiredate} onChange={(e) => setPanamaexpiredate(e.target.value)}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    OTHER:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
                                <div className='row mt-3'>
                                    <div className="col-md-3 ">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={othernumber} onChange={(e) => setOthernumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="pass-place"
                                            name="pass-place"
                                            placeholder="place of issue"
                                            value={otherissueplace} onChange={(e) => setOtherissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="pass-issue-date"
                                            name="pass-issue-date"
                                            placeholder="issue date"
                                            value={otherissuedate} onChange={(e) => setOtherissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="pass-expire-date"
                                            name="pass-expire-date"
                                            placeholder="expire date"
                                            value={otherexpiredate} onChange={(e) => setOtherexpiredate(e.target.value)}
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
