import "./index.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react"; // Added useState import
// import jsPDF from 'jspdf'; // Import jsPDF
import axios from "axios";

export const Form_2 = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankan, setBankan] = useState("");
  const [airport, setAirport] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [presentaddress, setPresentaddress] = useState("");
  const [wfname, setWfname] = useState("");
  const [wlname, setWlname] = useState("");
  const [wemail, setWemail] = useState("");
  const [wdob, setWdob] = useState("");
  const [cname1, setCname1] = useState("");
  const [cname2, setCname2] = useState("");
  const [cname3, setCname3] = useState("");
  const [cdob1, setCdob1] = useState("");
  const [cdob2, setCdob2] = useState("");
  const [cdob3, setCdob3] = useState("");

  const win = window.sessionStorage;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save data to sessionStorage
    win.setItem("wfname", wfname);
    win.setItem("wlname", wlname);
    win.setItem("wemail", wemail);
    win.setItem("wdob", wdob);
    win.setItem("cname1", cname1);
    win.setItem("cname2", cname2);
    win.setItem("cname3", cname3);
    win.setItem("cdob1", cdob1);
    win.setItem("cdob2", cdob2);
    win.setItem("cdob3", cdob3);

    // const formData2 = {
    //   fname,
    //   lname,
    //   email,
    //   phone,
    //   phone2,
    //   dob,
    //   place,
    //   bankname,
    //   bankan,
    //   airport,
    //   permanentaddress,
    //   presentaddress,
    //   wfname,
    //   wlname,
    //   wemail,
    //   wdob,
    //   cname1,
    //   cdob1,
    //   cname2,
    //   cdob2,
    //   cname3,
    //   cdob3,
    // };

    // if (formData2) {
    //   win.setItem("formData2", JSON.stringify(formData2));
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/api/saveFormData",
    //       formData2
    //     );
    //     console.log(formData2)
    //     alert(response.data.message);
    //    // navigate("/passport"); // Navigate to the next page if submission is successful
    //   } catch (error) {
    //     alert("Error saving data");
    //     console.error(error);
    //   }

    // } else {
    //   alert("Please fill all the fields");
    // }
    navigate("/passport");
  };

  // Load data from sessionStorage when component mounts
  useEffect(() => {
    if (win.getItem("fname")) setFname(win.getItem("fname"));
    if (win.getItem("lname")) setLname(win.getItem("lname"));
    if (win.getItem("phone")) setPhone(win.getItem("phone"));
    if (win.getItem("phone2")) setPhone2(win.getItem("phone2"));
    if (win.getItem("dob")) setDob(win.getItem("dob"));
    if (win.getItem("email")) setEmail(win.getItem("email"));
    if (win.getItem("place")) setPlace(win.getItem("place"));
    if (win.getItem("bankname")) setBankname(win.getItem("bankname"));
    if (win.getItem("bankan")) setBankan(win.getItem("bankan"));
    if (win.getItem("airport")) setAirport(win.getItem("airport"));
    if (win.getItem("permanentaddress"))
      setPermanentaddress(win.getItem("permanentaddress"));
    if (win.getItem("presentaddress"))
      setPresentaddress(win.getItem("presentaddress"));

    if (win.getItem("wfname")) setWfname(win.getItem("wfname"));
    if (win.getItem("wlname")) setWlname(win.getItem("wlname"));
    if (win.getItem("wemail")) setWemail(win.getItem("wemail"));
    if (win.getItem("wdob")) setWdob(win.getItem("wdob"));
    if (win.getItem("cname1")) setCname1(win.getItem("cname1"));
    if (win.getItem("cname2")) setCname2(win.getItem("cname2"));
    if (win.getItem("cname3")) setCname3(win.getItem("cname3"));
    if (win.getItem("cdob1")) setCdob1(win.getItem("cdob1"));
    if (win.getItem("cdob2")) setCdob2(win.getItem("cdob2"));
    if (win.getItem("cdob3")) setCdob3(win.getItem("cdob3"));
  }, []); // Run once when component mounts

  const handlePreviousClick = () => {
    navigate("/"); // Navigate to the previous form (Form 1)
  };

  return (
    <>
      <div className="form-container">
        <div className="card">
          <h2>Registration Form</h2>
          <br />
          <h5 className="text-start">Marital Details:</h5>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group text-start">
              <label htmlFor="schooler-name">
                WIFE NAME:<span className="required">*</span>
              </label>
              <div className="name-field">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First"
                  value={wfname}
                  onChange={(e) => setWfname(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last"
                  value={wlname}
                  onChange={(e) => setWlname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group text-start">
              <label htmlFor="dob">
                WIFE's DOB:<span className="required">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="DOB"
                value={wdob}
                onChange={(e) => setWdob(e.target.value)} // Handle wife's DOB input
                required
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="parent-name">
                CHILD 1:<span className="required"></span>
              </label>
              <div className="name-field">
                <input
                  type="text"
                  id="child1-name"
                  name="child1-name"
                  placeholder="Name"
                  value={cname1}
                  onChange={(e) => setCname1(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="date"
                id="child1-dob"
                name="child1-dob"
                placeholder="DOB"
                value={cdob1}
                onChange={(e) => setCdob1(e.target.value)}
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="child2-name">
                CHILD 2:<span className="required"></span>
              </label>
              <div className="name-field">
                <input
                  type="text"
                  id="child2-name"
                  name="child2-name"
                  placeholder="Name"
                  value={cname2}
                  onChange={(e) => setCname2(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="date"
                id="child2-dob"
                name="child2-dob"
                placeholder="DOB"
                value={cdob2}
                onChange={(e) => setCdob2(e.target.value)}
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="child3-name">
                CHILD 3:<span className="required"></span>
              </label>
              <div className="name-field">
                <input
                  type="text"
                  id="child3-name"
                  name="child3-name"
                  placeholder="Name"
                  value={cname3}
                  onChange={(e) => setCname3(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="date"
                id="child3-dob"
                name="child3-dob"
                placeholder="DOB"
                value={cdob3}
                onChange={(e) => setCdob3(e.target.value)}
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="parent-email">
                Email I'd:<span className="required"></span>
              </label>
              <input
                type="email"
                id="parent-email"
                name="parent-email"
                value={wemail}
                onChange={(e) => setWemail(e.target.value)}
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="verification">
                Verification<span className="required">*</span>
                <br />
                <br />
                <input type="checkbox" required /> I'm not a robot
              </label>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn-submit"
                    onClick={handlePreviousClick}
                  >
                    Previous
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <button type="submit" className="btn-submit">
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
