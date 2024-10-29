import './index.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF
import logo from "./assets/logo_for_form.png";
import logo1 from "./assets/Euro+BAR.png";
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

    // form 1 data
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

    // form 2 data

    const [wfname, setWfname] = useState('');
    const [wlname, setWlname] = useState('');
    const [wemail, setWemail] = useState('');
    const [wdob, setWdob] = useState(''); 
    const [cname1, setCname1] = useState('');
    const [cname2, setCname2] = useState('');
    const [cname3, setCname3] = useState('');
    const [cdob1, setCdob1] = useState('');
    const [cdob2, setCdob2] = useState('');
    const [cdob3, setCdob3] = useState('');

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
        win.setItem('yellowfevernumber', yellowfevernumber);
        win.setItem('yellowfeverissueplace', yellowfeverissueplace);
        win.setItem('yellowfeverissuedate', yellowfeverissuedate);
        win.setItem('yellowfeverexpiredate', yellowfeverexpiredate);
        win.setItem('indosnumber', indosnumber);
        win.setItem('indosissueplace', indosissueplace);
        win.setItem('indosissuedate', indosissuedate);
        win.setItem('indosexpiredate', indosexpiredate);

        navigate('');  // This will navigate to the 'form_2' page when clicked
    };

    // Load data from sessionStorage when component mounts

    useEffect(() => {
        if (win.getItem('passnumber'))
            setPassnumber(win.getItem('passnumber'));

        if (win.getItem('passissueplace'))
            setPassissueplace(win.getItem('passissueplace'));

        if (win.getItem('passissuedate'))
            setPassissuedate(win.getItem('passissuedate'));

        if (win.getItem('passexpiredate'))
            setPassexpiredate(win.getItem('passexpiredate'));

        if (win.getItem('visanumber'))
            setVisanumber(win.getItem('visanumber'));

        if (win.getItem('visaissueplace'))
            setVisaissueplace(win.getItem('visaissueplace'));

        if (win.getItem('visaissuedate'))
            setVisaissuedate(win.getItem('visaissuedate'));

        if (win.getItem('visaexpiredate'))
            setVisaexpiredate(win.getItem('visaexpiredate'));

        if (win.getItem('ecnrnumber'))
            setEcnrnumber(win.getItem('ecnrnumber'));

        if (win.getItem('ecnrissuedate'))
            setEcnrissuedate(win.getItem('ecnrissuedate'));

        if (win.getItem('ecnrissueplace'))
            setEcnrissueplace(win.getItem('ecnrissueplace'));
        
        if (win.getItem('ecnrexpiredate'))
            setEcnrexpiredate(win.getItem('ecnrexpiredate'));

        if (win.getItem('yellowfevernumber'))
            setYellowfevernumber(win.getItem('yellowfevernumber'));

        if (win.getItem('yellowfeverissueplace'))
            setYellowfeverissueplace(win.getItem('yellowfeverissueplace'));

        if (win.getItem('yellowfeverissuedate'))
            setYellowfeverissuedate(win.getItem('yellowfeverissuedate'));

        if (win.getItem('yellowfeverexpiredate'))
            setYellowfeverexpiredate(win.getItem('yellowfeverexpiredate'));

        if (win.getItem('indosnumber'))
            setIndosnumber(win.getItem('indosnumber'));

        if (win.getItem('indosissueplace'))
            setIndosissueplace(win.getItem('indosissueplace'));

        if (win.getItem('indosissuedate'))
            setIndosissuedate(win.getItem('indosissuedate'));

        if (win.getItem('indosexpiredate'))
            setIndosexpiredate(win.getItem('indosexpiredate'));
// Form 1------------------------------------
        if (win.getItem('fname'))
            setFname(win.getItem('fname'));

        if (win.getItem('lname'))
            setLname(win.getItem('lname'));

        if (win.getItem('phone'))
            setPhone(win.getItem('phone'));

        if (win.getItem('phone2'))
            setPhone2(win.getItem('phone2'));

        if (win.getItem('dob'))
            setDob(win.getItem('dob'));

        if (win.getItem('email'))
            setEmail(win.getItem('email'));

        if (win.getItem('place'))
            setPlace(win.getItem('place'));

        if (win.getItem('bankname'))
            setBankname(win.getItem('bankname'));

        if (win.getItem('bankan'))
            setBankan(win.getItem('bankan'));

        if (win.getItem('airport'))
            setAirport(win.getItem('airport'));
//form 2------------------------------
        if (win.getItem('wfname')) setWfname(win.getItem('wfname'));
        if (win.getItem('wlname')) setWlname(win.getItem('wlname'));
        if (win.getItem('wemail')) setWemail(win.getItem('wemail'));
        if (win.getItem('wdob')) setWdob(win.getItem('wdob'));
        if (win.getItem('cname1')) setCname1(win.getItem('cname1'));
        if (win.getItem('cname2')) setCname2(win.getItem('cname2'));
        if (win.getItem('cname3')) setCname3(win.getItem('cname3'));
        if (win.getItem('cdob1')) setCdob1(win.getItem('cdob1'));
        if (win.getItem('cdob2')) setCdob2(win.getItem('cdob2'));
        if (win.getItem('cdob3')) setCdob3(win.getItem('cdob3'));   

    }, [])  // Run once when component mounts

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
        <header>
            <div style="width: 100%; padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                   
                 
                   
                    <div style="">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="flex: 1; text-align: center;">
                                <img src="${logo}" alt="Logo" style="height: 70px;" />
                            </div>
                            <div style="margin-left:300px">
                                <img src="${logo1}" alt="Euro+BAR Logo" style="height: 60px; width: 150px;" />
                            </div>
                            <div style="text-align: left;">
                                <p style="color: #0056b3; font-weight: bold; margin: 0; font-size: 15px;">ISO: 9001 : 2015</p>
                            </div>
                        </div>

                        <div style="margin-top: 15px;">
                            <h2 style="margin-left: 40px; width: 100%; color: #0056b3;letter-spacing: 2px; font-weight: bold;">SHREYSUN GLOBAL SHIPPING PVT.LTD.</h2>
                            <p style="color: #0056b3; font-weight: bold; margin-left: 45px; margin-bottom: 0; font-size: 14px;">
                                RSPL-MUM-16118 Valid Till: 21.10.2027 & Compliance MLC: 2006 CIN: U63030UP2021PTC141179
                            </p>
                            <p style="margin-left: 50px; margin-top: 0; margin-bottom: 0; font-size: 14px; letter-spacing: 1px;">
                                C-69 SIKARWAR TOWER VIBHUTI KHAND GOMTI NAGAR LUCKNOW U.P-INDIA-226010.
                            </p>
                            <p style="margin-left: 100px; margin-top: 0; margin-bottom: 0; font-size: 15px;">
                                Email: admin@shreysun.com  - Website: www.shreysun.com - Tel: 0522-4305897
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="border: 2px solid blue; width: 100%; margin-top: 10px;">
        </header>

                <h5 style="margin-top:20px;">1. Personal Details</h5>
        <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
            <tr>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;"></th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">First Name</th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Middle Name</th>
                <th colspan="3" style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Last Name</th>
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Name:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${fname}</td>
            <td style="padding: 8px; border: 1px solid #000;">${lname}</td>
            <td colspan="3" style="padding: 8px; border: 1px solid #000;">${lname}</td>
            </tr>
        
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Date Of Birth:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${dob}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Place Of Birth:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${place}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Nationality:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">Indian</td>
            </tr>
            <tr>
            <td  style="padding: 8px; border: 1px solid #000;"><b>Permanent Address:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;"></td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Present Address:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;"></td>

            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>City & Pin code:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${yellowfevernumber}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>City & Pin code:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${yellowfeverissuedate}</td>
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Telephone 1:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${phone}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Telephone 2:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${phone2}</td>
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Email 1:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${email}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Email 2:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;"></td>
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Nearest Airport:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${airport}</td>
            <td style="padding: 8px; border: 1px solid #000;"><b>Nearest Airport:</b></td>
            <td colspan="2" style="padding: 8px; border: 1px solid #000;">${airport}</td>
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Bank Name & Branch:</b></td>
            <td colspan="5" style="padding: 8px; border: 1px solid #000;">${bankname}</td>
        
            </tr>
            <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Account number:</b></td>
            <td colspan="3" style="padding: 8px; border: 1px solid #000;">${bankan}</td>
            <td  style="padding: 8px; border: 1px solid #000;"><b>IFSC code:</b></td>
            <td  style="padding: 8px; border: 1px solid #000;"></td>
            </tr>

        </table>

        <h5 style="margin-top: 20px" >2. Family Details</h5>

        <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
        <tr>
            <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;"></th>
            <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">NAME</th>
            <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">D.O.B</th>
            <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">EMAIL</th>
            <th colspan="3" style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">ISSUE / VALIDITY
            </th>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Wife:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${wfname}</td>
            <td style="padding: 8px; border: 1px solid #000;">${wdob}</td>
            <td style="padding: 8px; border: 1px solid #000;">${wemail}</td>
            <td style="padding: 8px; border: 1px solid #000;">Issue date</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Child (M/F) 1:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${cname1}</td>
            <td style="padding: 8px; border: 1px solid #000;">${cdob1}</td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Child (M/F) 2:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${cname2}</td>
            <td style="padding: 8px; border: 1px solid #000;">${cdob2}</td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #000;"><b>Child (M/F) 3:</b></td>
            <td style="padding: 8px; border: 1px solid #000;">${cname3}</td>
            <td style="padding: 8px; border: 1px solid #000;">${cdob3}</td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
            <td style="padding: 8px; border: 1px solid #000;"></td>
        </tr>
        </table>

        <header style="margin-top:101px">
            <div style="width: 100%; padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                   
                 
                   
                    <div style="">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="flex: 1; text-align: center;">
                                <img src="${logo}" alt="Logo" style="height: 70px;" />
                            </div>
                            <div style="margin-left:300px">
                                <img src="${logo1}" alt="Euro+BAR Logo" style="height: 60px; width: 150px;" />
                            </div>
                            <div style="text-align: left;">
                                <p style="color: #0056b3; font-weight: bold; margin: 0; font-size: 15px;">ISO: 9001 : 2015</p>
                            </div>
                        </div>

                        <div style="margin-top: 15px;">
                            <h2 style="margin-left: 40px; width: 100%; color: #0056b3;letter-spacing: 2px; font-weight: bold;">SHREYSUN GLOBAL SHIPPING PVT.LTD.</h2>
                            <p style="color: #0056b3; font-weight: bold; margin-left: 45px; margin-bottom: 0; font-size: 14px;">
                                RSPL-MUM-16118 Valid Till: 21.10.2027 & Compliance MLC: 2006 CIN: U63030UP2021PTC141179
                            </p>
                            <p style="margin-left: 50px; margin-top: 0; margin-bottom: 0; font-size: 14px; letter-spacing: 1px;">
                                C-69 SIKARWAR TOWER VIBHUTI KHAND GOMTI NAGAR LUCKNOW U.P-INDIA-226010.
                            </p>
                            <p style="margin-left: 100px; margin-top: 0; margin-bottom: 0; font-size: 15px;">
                                Email: admin@shreysun.com  - Website: www.shreysun.com - Tel: 0522-4305897
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="border: 2px solid blue; width: 100%; margin-top: 10px;">
        </header>

        <h5 style="margin-top:20px;">3. Passport Details</h5>
            <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
                <tr>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Documents</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Number</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Place of Issue</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Issue</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Expire</th>
                </tr>
                <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>Passport</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${passnumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passexpiredate}</td>
                </tr>
                <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>Visa</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${visanumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaexpiredate}</td>
                </tr>
                <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>ECNR</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrnumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrexpiredate}</td>
                </tr>
                <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>Yellow Fever</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfevernumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverexpiredate}</td>
                </tr>
                <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>INDOS</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${indosnumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${indosissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${indosissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${indosexpiredate}</td>
                </tr>

            </table>

            <h5 style="margin-top:20px;">4. Continuous Details</h5>
        <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
            <tr>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">CDC</th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Number</th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Place of Issue</th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Issue</th>
                <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Expire</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>INDIAN</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${passnumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${passexpiredate}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>PANAMA</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${visanumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${visaexpiredate}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>LIBERIAN</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrnumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${ecnrexpiredate}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #000;"><b>OTHERS</b></td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfevernumber}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverissueplace}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverissuedate}</td>
                <td style="padding: 8px; border: 1px solid #000;">${yellowfeverexpiredate}</td>
            </tr>
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
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="pass-number"
                                            name="pass-number"
                                            placeholder="number"
                                            value={passnumber} onChange={(e) => setPassnumber(e.target.value)}
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
                                            value={passissueplace} onChange={(e) => setPassissueplace(e.target.value)}
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
                                            value={passissuedate} onChange={(e) => setPassissuedate(e.target.value)}
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
                                            value={passexpiredate} onChange={(e) => setPassexpiredate(e.target.value)}
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
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="visa-number"
                                            name="visa-number"
                                            placeholder="number"
                                            value={visanumber} onChange={(e) => setVisanumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="visa-place"
                                            name="visa-place"
                                            placeholder="place of issue"
                                            value={visaissueplace} onChange={(e) => setVisaissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="visa-issue-date"
                                            name="visa-issue-date"
                                            placeholder="issue date"
                                            value={visaissuedate} onChange={(e) => setVisaissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="visa-expire-date"
                                            name="visa-expire-date"
                                            placeholder="expire date"
                                            value={visaexpiredate} onChange={(e) => setVisaexpiredate(e.target.value)}
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
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="ecrn-number"
                                            name="ecrn-number"
                                            placeholder="number"
                                            value={ecnrnumber} onChange={(e) => setEcnrnumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="ecrn-place"
                                            name="ecrn-place"
                                            placeholder="place of issue"
                                            value={ecnrissueplace} onChange={(e) => setEcnrissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="ecrn-issue-date"
                                            name="ecrn-issue-date"
                                            placeholder="issue date"
                                            value={ecnrissuedate} onChange={(e) => setEcnrissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="ecrn-expire-date"
                                            name="ecrn-expire-date"
                                            placeholder="expire date"
                                            value={ecnrexpiredate} onChange={(e) => setEcnrexpiredate(e.target.value)}
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
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="yellow-number"
                                            name="yellow-number"
                                            placeholder="number"
                                            value={yellowfevernumber} onChange={(e) => setYellowfevernumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="yellow-place"
                                            name="yellow-place"
                                            placeholder="place of issue"
                                            value={yellowfeverissueplace} onChange={(e) => setYellowfeverissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="yellow-issue-date"
                                            name="yellow-issue-date"
                                            placeholder="issue date"
                                            value={yellowfeverissuedate} onChange={(e) => setYellowfeverissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="yellow-expire-date"
                                            name="yellow-expire-date"
                                            placeholder="expire date"
                                            value={yellowfeverexpiredate} onChange={(e) => setYellowfeverexpiredate(e.target.value)}
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
                                        <p className='text-start' style={{ marginBottom: '0' }}>Number</p>
                                        <input
                                            type="text"
                                            id="indos-number"
                                            name="indos-number"
                                            placeholder="number"
                                            value={indosnumber} onChange={(e) => setIndosnumber(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Place</p>
                                        <input
                                            type="text"
                                            id="indos-place"
                                            name="indos-place"
                                            placeholder="place of issue"
                                            value={indosissueplace} onChange={(e) => setIndosissueplace(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Issue date</p>
                                        <input
                                            type="date"
                                            id="indos-issue-date"
                                            name="indos-issue-date"
                                            placeholder="issue date"
                                            value={indosissuedate} onChange={(e) => setIndosissuedate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Expire date</p>
                                        <input
                                            type="date"
                                            id="indos-expire-date"
                                            name="indos-expire-date"
                                            placeholder="expire date"
                                            value={indosexpiredate} onChange={(e) => setIndosexpiredate(e.target.value)}
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