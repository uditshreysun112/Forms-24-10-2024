import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Experience = () => {
    const navigate = useNavigate();
    const [experienceText, setExperienceText] = useState('');
    // const [seminar, setSeminar] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        company: "No",
        club: "No",
        magazine: "No",
        news: "No",
        friend: "No",
        mail: "No",
        other: "No"
    });

    const win = window.sessionStorage;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save data in sessionStorage
        win.setItem('experienceText', experienceText);
        // win.setItem('seminar', seminar);
        win.setItem("checkboxes", JSON.stringify(checkboxes));

        navigate("/physicaldetails");
    };

    useEffect(() => {
        // Load data from sessionStorage when component mounts
        if (win.getItem('experienceText')) setExperienceText(win.getItem('experienceText'));
        if (win.getItem('seminar')) setSeminar(win.getItem('seminar'));

        const savedValues = JSON.parse(win.getItem("checkboxes"));
        if (savedValues) {
            setCheckboxes(savedValues);
        }
    }, []);

    const handlePreviousClick = () => {
        navigate("/stcw");
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const updatedCheckboxes = {
            ...checkboxes,
            [name]: checked ? "Yes" : "No",
        };
        
        setCheckboxes(updatedCheckboxes);
        win.setItem("checkboxes", JSON.stringify(updatedCheckboxes));
    };

    return (
        <div className="form-container">
            <div className="card">
                <h2>Registration Form</h2>
                <br />
                <h5 className='text-start'>7. Sea Experience:</h5>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className='text-start'>
                            <label htmlFor="experience-text">
                                <b>Any Major Incidence / Observation / Special Experience for reporting:</b>
                            </label>
                        </div>
                        <div className="name-field">
                            <div className="mt-3">
                                <p className='text-start' style={{ marginBottom: '0' }}>Type Here About Your Experience</p>
                                <textarea
                                    style={{ width: '100%', height: '100px', marginTop: '15px' }}
                                    id="experience-text"
                                    name="experience-text"
                                    placeholder="Text"
                                    value={experienceText}
                                    onChange={(e) => setExperienceText(e.target.value)}
                                    required
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='text-start mt-5 mb-4'>8. How did you come to know about us? (Please tick the appropriate medium)</h5>

                        <div className="form-group text-start">
                            A.) <label htmlFor="company">
                                <input
                                    type="checkbox"
                                    name="company"
                                    id="company"
                                    checked={checkboxes.company === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Company presentation/seminar
                            </label>
                        </div>

                        <div className="form-group text-start">
                            B.) <label htmlFor="club">
                                <input
                                    type="checkbox"
                                    name="club"
                                    id="club"
                                    checked={checkboxes.club === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Marine Club Notice Board
                            </label>
                        </div>

                        <div className="form-group text-start">
                            C.) <label htmlFor="magazine">
                                <input
                                    type="checkbox"
                                    name="magazine"
                                    id="magazine"
                                    checked={checkboxes.magazine === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Marine Magazine Advertisement
                            </label>
                        </div>

                        <div className="form-group text-start">
                            D.) <label htmlFor="news">
                                <input
                                    type="checkbox"
                                    name="news"
                                    id="news"
                                    checked={checkboxes.news === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> News Paper Advertisement
                            </label>
                        </div>

                        <div className="form-group text-start">
                            E.) <label htmlFor="friend">
                                <input
                                    type="checkbox"
                                    name="friend"
                                    id="friend"
                                    checked={checkboxes.friend === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Told by Seagoing Friend
                            </label>
                        </div>

                        <div className="form-group text-start">
                            F.) <label htmlFor="mail">
                                <input
                                    type="checkbox"
                                    name="mail"
                                    id="mail"
                                    checked={checkboxes.mail === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Direct Mail From Company
                            </label>
                        </div>

                        <div className="form-group text-start">
                            G.) <label htmlFor="other">
                                <input
                                    type="checkbox"
                                    name="other"
                                    id="other"
                                    checked={checkboxes.other === "Yes"}
                                    onChange={handleCheckboxChange}
                                /> Other Resource
                            </label>
                        </div>
                    </div>

                    <div className="form-group text-start">
                        <label htmlFor="verification">
                            Verification <br /><br />
                            <input type="checkbox" required /> I'm not a robot
                        </label>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="button" className="btn-submit" onClick={handlePreviousClick}>
                                    Previous
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button type="submit" className="btn-submit">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
