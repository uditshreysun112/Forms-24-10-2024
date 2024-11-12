import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const Physicaldetails = () => {
    const navigate = useNavigate();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [suitsize, setSuitsize] = useState('');
    const [shoessize, setShoessize] = useState('');
    const [illness, setIllness] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    const win = window.sessionStorage;

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const handleSubmit = async (e) => { // Add async here
        e.preventDefault();


        // Save data in sessionStorage
        win.setItem('height', height);
        win.setItem('weight', weight);
        win.setItem('suitsize', suitsize);
        win.setItem('shoessize', shoessize);
        win.setItem('illness', illness);

        navigate("/officialuse");
    };



    useEffect(() => {
        // Load data from sessionStorage when component mounts
        if (win.getItem('height')) setHeight(win.getItem('height'));
        if (win.getItem('weight')) setWeight(win.getItem('weight'));
        if (win.getItem('suitsize')) setSuitsize(win.getItem('suitsize'));
        if (win.getItem('shoessize')) setShoessize(win.getItem('shoessize'));
        if (win.getItem('illness')) setIllness(win.getItem('illness'));

    }, []);

    const handlePreviousClick = () => {
        navigate("/experience"); // Navigate to the previous form (Form 1)
    };

    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>9. Physical Details:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className="name-field">
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>What is your height?</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="expereincetext"
                                            placeholder="height in cm"
                                            value={height} onChange={(e) => setHeight(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>What is your weight?</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="expereincetext"
                                            placeholder="weight in kg"
                                            value={weight} onChange={(e) => setWeight(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>What is your boiler suit size?</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="expereincetext"
                                            placeholder="weight in kg"
                                            value={suitsize} onChange={(e) => setSuitsize(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="name-field">
                                <div className="mt-4">
                                    <p className='text-start' style={{ marginBottom: '0' }}>Size of your Safety shoes?</p>
                                    <input
                                        type="text"
                                        id="height"
                                        name="expereincetext"
                                        placeholder="height in cm"
                                        value={shoessize} onChange={(e) => setShoessize(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className="form-group text-start">
                                <label htmlFor="company">
                                    <input
                                        type="checkbox"
                                        name='company'
                                        id="company"
                                        onChange={handleCheckboxChange}
                                    /> Illness/Surgery
                                </label>
                            </div>
                            <div className="text-start mt-4">
                                <textarea
                                    style={{ height: '100px', width: '400px' }}
                                    value={illness} onChange={(e) => setIllness(e.target.value)}
                                    disabled={!isChecked}
                                ></textarea>
                            </div>
                        </div>
                        <div id='declaration' className='text-start mt-5'>
                            <h5>10. Declaration</h5>
                            <p className='mt-3'>I declare that the information given by me in filling up this form to the best of my knowledge are true complete. I also declare that the documents submitted to <b>SHREYSUN GLOBAL SHIPPING PRIVATE LIMITED</b> are genuine, given and signed by the persons whose names appear on them. Any false declaration may render me liable for termination or dismissal.</p>
                            <label htmlFor="declaration">
                                {/* Declaration <br /><br /> */}
                                <input type="checkbox" required /> Declaration
                            </label>
                        </div>


                        {/* // buttons */}

                        <div className="form-group text-start mt-5">
                            <label htmlFor="verification">
                                Verification <br /><br />
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
