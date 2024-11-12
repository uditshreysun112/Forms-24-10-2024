import './index.css';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf'; // Import jsPDF
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "./assets/logo_for_form.png";
import logo1 from "./assets/Euro+BAR.png";
import { Stcw } from './Stcw';


export const Officialuse = () => {
    const navigate = useNavigate();
    // const [expereincetext, setExpereincetext] = useState('');
    const [personality, setPersonality] = useState('');
    const [attitude, setAttitude] = useState('');
    const [technicalknowledge, setTechnicalknowledge] = useState('');
    const [englishknowledge, setEnglishknowledge] = useState('');
    const [overall, setOverall] = useState('');

    // form 3
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

    // form 1
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

    // form 2
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

    // form continuous

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

    // licence form

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

    // stcw form
    const [certificatenoSTCW, setCertificatenoSTCW] = useState('');

    const [issuedateSTCW, setIssuedateSTCW] = useState('');
    const [expirydateSTCW, setExpirydateSTCW] = useState('');
    const [placeofissueSTCW, setPlaceofissueSTCW] = useState('');
    const [issuingauthoritySTCW, setIssuingauthoritySTCW] = useState('');

    const [certificatenoPSSR, setCertificatenoPSSR] = useState('');
    const [issuedatePSSR, setIssuedatePSSR] = useState('');
    const [expirydatePSSR, setExpirydatePSSR] = useState('');
    const [placeofissuePSSR, setPlaceofissuePSSR] = useState('');
    const [issuingauthorityPSSR, setIssuingauthorityPSSR] = useState('');

    const [certificatenoMFA, setCertificatenoMFA] = useState('');
    const [issuedateMFA, setIssuedateMFA] = useState('');
    const [expirydateMFA, setExpirydateMFA] = useState('');
    const [placeofissueMFA, setPlaceofissueMFA] = useState('');
    const [issuingauthorityMFA, setIssuingauthorityMFA] = useState('');

    const [certificatenoEFA, setCertificatenoEFA] = useState('');
    const [issuedateEFA, setIssuedateEFA] = useState('');
    const [expirydateEFA, setExpirydateEFA] = useState('');
    const [placeofissueEFA, setPlaceofissueEFA] = useState('');
    const [issuingauthorityEFA, setIssuingauthorityEFA] = useState('');

    const [certificatenoPST, setCertificatenoPST] = useState('');
    const [issuedatePST, setIssuedatePST] = useState('');
    const [expirydatePST, setExpirydatePST] = useState('');
    const [placeofissuePST, setPlaceofissuePST] = useState('');
    const [issuingauthorityPST, setIssuingauthorityPST] = useState('');

    const [certificatenoFPFF, setCertificatenoFPFF] = useState('');
    const [issuedateFPFF, setIssuedateFPFF] = useState('');
    const [expirydateFPFF, setExpirydateFPFF] = useState('');
    const [placeofissueFPFF, setPlaceofissueFPFF] = useState('');
    const [issuingauthorityFPFF, setIssuingauthorityFPFF] = useState('');

    const [certificatenoMED, setCertificatenoMED] = useState('');
    const [issuedateMED, setIssuedateMED] = useState('');
    const [expirydateMED, setExpirydateMED] = useState('');
    const [placeofissueMED, setPlaceofissueMED] = useState('');
    const [issuingauthorityMED, setIssuingauthorityMED] = useState('');

    const [certificatenoAFF, setCertificatenoAFF] = useState('');
    const [issuedateAFF, setIssuedateAFF] = useState('');
    const [expirydateAFF, setExpirydateAFF] = useState('');
    const [placeofissueAFF, setPlaceofissueAFF] = useState('');
    const [issuingauthorityAFF, setIssuingauthorityAFF] = useState('');

    const [certificatenoROC, setCertificatenoROC] = useState('');
    const [issuedateROC, setIssuedateROC] = useState('');
    const [expirydateROC, setExpirydateROC] = useState('');
    const [placeofissueROC, setPlaceofissueROC] = useState('');
    const [issuingauthorityROC, setIssuingauthorityROC] = useState('');

    const [certificatenoARPA, setCertificatenoARPA] = useState('');
    const [issuedateARPA, setIssuedateARPA] = useState('');
    const [expirydateARPA, setExpirydateARPA] = useState('');
    const [placeofissueARPA, setPlaceofissueARPA] = useState('');
    const [issuingauthorityARPA, setIssuingauthorityARPA] = useState('');

    const [certificatenoGMDSS, setCertificatenoGMDSS] = useState('');
    const [issuedateGMDSS, setIssuedateGMDSS] = useState('');
    const [expirydateGMDSS, setExpirydateGMDSS] = useState('');
    const [placeofissueGMDSS, setPlaceofissueGMDSS] = useState('');
    const [issuingauthorityGMDSS, setIssuingauthorityGMDSS] = useState('');


    const [certificatenoGM, setCertificatenoGM] = useState('');
    const [issuedateGM, setIssuedateGM] = useState('');
    const [expirydateGM, setExpirydateGM] = useState('');
    const [placeofissueGM, setPlaceofissueGM] = useState('');
    const [issuingauthorityGM, setIssuingauthorityGM] = useState('');

    const [certificatenoRANSCO, setCertificatenoRANSCO] = useState('');
    const [issuedateRANSCO, setIssuedateRANSCO] = useState('');
    const [expirydateRANSCO, setExpirydateRANSCO] = useState('');
    const [placeofissueRANSCO, setPlaceofissueRANSCO] = useState('');
    const [issuingauthorityRANSCO, setIssuingauthorityRANSCO] = useState('');

    const [certificatenoNC, setCertificatenoNC] = useState('');
    const [issuedateNC, setIssuedateNC] = useState('');
    const [expirydateNC, setExpirydateNC] = useState('');
    const [placeofissueNC, setPlaceofissueNC] = useState('');
    const [issuingauthorityNC, setIssuingauthorityNC] = useState('');

    const [certificatenoCRC, setCertificatenoCRC] = useState('');
    const [issuedateCRC, setIssuedateCRC] = useState('');
    const [expirydateCRC, setExpirydateCRC] = useState('');
    const [placeofissueCRC, setPlaceofissueCRC] = useState('');
    const [issuingauthorityCRC, setIssuingauthorityCRC] = useState('');


    const [certificatenoST, setCertificatenoST] = useState('');
    const [issuedateST, setIssuedateST] = useState('');
    const [expirydateST, setExpirydateST] = useState('');
    const [placeofissueST, setPlaceofissuST] = useState('');
    const [issuingauthorityST, setIssuingauthorityST] = useState('');

    const [certificatenoBTM, setCertificatenoBTM] = useState('');
    const [issuedateBTM, setIssuedateBTM] = useState('');
    const [expirydateBTM, setExpirydateBTM] = useState('');
    const [placeofissueBTM, setPlaceofissueBTM] = useState('');
    const [issuingauthorityBTM, setIssuingauthorityBTM] = useState('');


    const [certificatenoECDIS, setCertificatenoECDIS] = useState('');
    const [issuedateECDIS, setIssuedateECDIS] = useState('');
    const [expirydateECDIS, setExpirydateECDIS] = useState('');
    const [placeofissueECDIS, setPlaceofissueECDIS] = useState('');
    const [issuingauthorityECDIS, setIssuingauthorityECDIS] = useState('');


    const [certificatenoBRM, setCertificatenoBRM] = useState('');
    const [issuedateBRM, setIssuedateBRM] = useState('');
    const [expirydateBRM, setExpirydateBRM] = useState('');
    const [placeofissueBRM, setPlaceofissueBRM] = useState('');
    const [issuingauthorityBRM, setIssuingauthorityBRM] = useState('');


    const [certificatenoLVHSC, setCertificatenoLVHSC] = useState('');
    const [issuedateLVHSC, setIssuedateLVHSC] = useState('');
    const [expirydateLVHSC, setExpirydateLVHSC] = useState('');
    const [placeofissueLVHSC, setPlaceofissueLVHSC] = useState('');
    const [issuingauthorityLVHSC, setIssuingauthorityLVHSC] = useState('');

    const [certificatenoERS, setCertificatenoERS] = useState('');
    const [issuedateERS, setIssuedateERS] = useState('');
    const [expirydateERS, setExpirydateERS] = useState('');
    const [placeofissueERS, setPlaceofissueERS] = useState('');
    const [issuingauthorityERS, setIssuingauthorityERS] = useState('');



    const [certificatenoICE, setCertificatenoICE] = useState('');
    const [issuedateICE, setIssuedateICE] = useState('');
    const [expirydateICE, setExpirydateICE] = useState('');
    const [placeofissueICE, setPlaceofissueICE] = useState('');
    const [issuingauthorityICE, setIssuingauthorityICE] = useState('');

    const [certificatenoNS, setCertificatenoNS] = useState('');
    const [expirydateNS, setExpirydateNS] = useState('');
    const [issuedateNS, setIssuedateNS] = useState('');
    const [placeofissueNS, setPlaceofissueNS] = useState('');
    const [issuingauthorityNS, setIssuingauthorityNS] = useState('');

    const [certificatenoOTF, setCertificatenoOTF] = useState('');
    const [issuedateOTF, setIssuedateOTF] = useState('');
    const [expirydateOTF, setExpirydateOTF] = useState('');
    const [placeofissueOTF, setPlaceofissueOTF] = useState('');
    const [issuingauthorityOTF, setIssuingauthorityOTF] = useState('');

    const [certificatenoTASCO, setCertificatenoTASCO] = useState('');
    const [issuedateTASCO, setIssuedateTASCO] = useState('');
    const [expirydateTASCO, setExpirydateTASCO] = useState('');
    const [placeofissueTASCO, setPlaceofissueTASCO] = useState('');
    const [issuingauthorityTASCO, setIssuingauthorityTASCO] = useState('');

    const [company1, setCompany1] = useState('');
    const [company1vessel, setCompany1vessel] = useState('');
    const [company1type, setCompany1type] = useState('');
    const [company1flag, setCompany1flag] = useState('');
    const [company1grt, setCompany1grt] = useState('');
    const [company1bhp, setCompany1bhp] = useState('');
    const [company1rank, setCompany1rank] = useState('');
    const [company1from, setCompany1from] = useState('');
    const [company1to, setCompany1to] = useState('');
    const [company1reasonforsignoff, setCompany1reasonforsignoff] = useState('');

    const [company2, setCompany2] = useState('');
    const [company2vessel, setCompany2vessel] = useState('');
    const [company2type, setCompany2type] = useState('');
    const [company2flag, setCompany2flag] = useState('');
    const [company2grt, setCompany2grt] = useState('');
    const [company2bhp, setCompany2bhp] = useState('');
    const [company2rank, setCompany2rank] = useState('');
    const [company2from, setCompany2from] = useState('');
    const [company2to, setCompany2to] = useState('');
    const [company2reasonforsignoff, setCompany2reasonforsignoff] = useState('');

    const [company3, setCompany3] = useState('');
    const [company3vessel, setCompany3vessel] = useState('');
    const [company3type, setCompany3type] = useState('');
    const [company3flag, setCompany3flag] = useState('');
    const [company3grt, setCompany3grt] = useState('');
    const [company3bhp, setCompany3bhp] = useState('');
    const [company3rank, setCompany3rank] = useState('');
    const [company3from, setCompany3from] = useState('');
    const [company3to, setCompany3to] = useState('');
    const [company3reasonforsignoff, setCompany3reasonforsignoff] = useState('');


    const [company4, setCompany4] = useState('');
    const [company4vessel, setCompany4vessel] = useState('');
    const [company4type, setCompany4type] = useState('');
    const [company4flag, setCompany4flag] = useState('');
    const [company4grt, setCompany4grt] = useState('');
    const [company4bhp, setCompany4bhp] = useState('');
    const [company4rank, setCompany4rank] = useState('');
    const [company4from, setCompany4from] = useState('');
    const [company4to, setCompany4to] = useState('');
    const [company4reasonforsignoff, setCompany4reasonforsignoff] = useState('');


    const [company5, setCompany5] = useState('');
    const [company5vessel, setCompany5vessel] = useState('');
    const [company5type, setCompany5type] = useState('');
    const [company5flag, setCompany5flag] = useState('');
    const [company5grt, setCompany5grt] = useState('');
    const [company5bhp, setCompany5bhp] = useState('');
    const [company5rank, setCompany5rank] = useState('');
    const [company5from, setCompany5from] = useState('');
    const [company5to, setCompany5to] = useState('');
    const [company5reasonforsignoff, setCompany5reasonforsignoff] = useState('');


    const [company6, setCompany6] = useState('');
    const [company6vessel, setCompany6vessel] = useState('');
    const [company6type, setCompany6type] = useState('');
    const [company6flag, setCompany6flag] = useState('');
    const [company6grt, setCompany6grt] = useState('');
    const [company6bhp, setCompany6bhp] = useState('');
    const [company6rank, setCompany6rank] = useState('');
    const [company6from, setCompany6from] = useState('');
    const [company6to, setCompany6to] = useState('');
    const [company6reasonforsignoff, setCompany6reasonforsignoff] = useState('');




    const [chemco, setCHEMCO] = useState('');

    const [chemcogrt, setCHEMCOgrt] = useState('');
    const [chemcobhp, setCHEMCObhp] = useState('');
    const [chemcorank, setCHEMCOrank] = useState('');
    const [chemcofrom, setCHEMCOfrom] = useState('');
    const [chemcoto, setCHEMCOto] = useState('');
    const [chemcoreasonforsignoff, setCHEMCOreasonforsignoff] = useState('');

    const [gasco, setGASCO] = useState('');
    const [gascogrt, setGASCOgrt] = useState('');
    const [gascobhp, setGASCObhp] = useState('');
    const [gascorank, setGASCOrank] = useState('');
    const [gascofrom, setGASCOfrom] = useState('');
    const [gascoto, setGASCOto] = useState('');
    const [gascoreasonforsignoff, setGASCOreasonforsignoff] = useState('');


    const [dce, setDCE] = useState('');
    const [dcegrt, setDCEgrt] = useState('');
    const [dcebhp, setDCEbhp] = useState('');
    const [dcerank, setDCErank] = useState('');
    const [dcefrom, setDCEfrom] = useState('');
    const [dceto, setDCEto] = useState('');
    const [dcereasonforsignoff, setDCEreasonforsignoff] = useState('');


    const [huet, setHUET] = useState('');
    const [huetgrt, setHUETgrt] = useState('');
    const [huetbhp, setHUETbhp] = useState('');
    const [huetrank, setHUETrank] = useState('');
    const [huetfrom, setHUETfrom] = useState('');
    const [huetto, setHUETto] = useState('');
    const [huetreasonforsignoff, setHUETreasonforsignoff] = useState('');


    const [sso, setSSO] = useState('');
    const [ssogrt, setSSOgrt] = useState('');
    const [ssobhp, setSSObhp] = useState('');
    const [ssorank, setSSOrank] = useState('');
    const [ssofrom, setSSOfrom] = useState('');
    const [ssoto, setSSOto] = useState('');
    const [ssoreasonforsignoff, setSSOreasonforsignoff] = useState('');

    const [soc, setSOC] = useState('');
    const [socgrt, setSOCgrt] = useState('');
    const [socbhp, setSOCbhp] = useState('');
    const [socrank, setSOCrank] = useState('');
    const [socfrom, setSOCfrom] = useState('');
    const [socto, setSOCto] = useState('');
    const [socreasonforsignoff, setSOCreasonforsignoff] = useState('');

    const [wc, setWC] = useState('');
    const [wcgrt, setWCgrt] = useState('');
    const [wcbhp, setWCbhp] = useState('');
    const [wcrank, setWCrank] = useState('');
    const [wcfrom, setWCfrom] = useState('');
    const [wcto, setWCto] = useState('');
    const [wcreasonforsignoff, setWCreasonforsignoff] = useState('');

    const [experienceText, setExperienceText] = useState('');
    const [seminar, setSeminar] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        company: "No",
        club: "No",
        magazine: "No",
        news: "No",
        friend: "No",
        mail: "No",
        other: "No"
    });

    const reader = new FileReader();
      reader.onloadend = () => {
        sessionStorage.setItem('uploadedImage', reader.result); // Store image in session storage
      };


    const win = window.sessionStorage;



    const handleSubmit = async (e) => { // Add async here
        e.preventDefault();


        // Save data in sessionStorage
        

        win.setItem('personality', personality);
        win.setItem('attitude', attitude);
        win.setItem('technicalknowledge', technicalknowledge);
        win.setItem('englishknowledge', englishknowledge);
        win.setItem('overall', overall);
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

        navigate("");
    };



    useEffect(() => {
        // Load data from sessionStorage when component mounts

        if (win.getItem('personality')) setPersonality(win.getItem('attitude'));
        if (win.getItem('attitude')) setAttitude(win.getItem('personality'));
        if (win.getItem('technicalknowledge')) setTechnicalknowledge(win.getItem('technicalknowledge'));
        if (win.getItem('englishknowledge')) setEnglishknowledge(win.getItem('englishknowledge'));
        if (win.getItem('overall')) setOverall(win.getItem('overall'));

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

        if (win.getItem('permanentaddress'))
            setPermanentaddress(win.getItem('permanentaddress'));

        if (win.getItem('presentaddress'))
            setPresentaddress(win.getItem('presentaddress'));

        if (win.getItem('presentrank')) setPresentrank(win.getItem('presentrank'));
        if (win.getItem('dateofapplication')) setDateofapplication(win.getItem('dateofapplication'));
        if (win.getItem('dateofavailability')) setDateofavailability(win.getItem('dateofavailability'));
        if (win.getItem('rankapplied')) setRankapplied(win.getItem('rankapplied'));
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

        //  Stcw form load

        if (win.getItem('certificatenoSTCW'))
            setCertificatenoSTCW(win.getItem('certificatenoSTCW'));

        if (win.getItem('issuedateSTCW'))
            setIssuedateSTCW(win.getItem('issuedateSTCW'));

        if (win.getItem('expirydateSTCW'))
            setExpirydateSTCW(win.getItem('expirydateSTCW'));

        if (win.getItem('issuingauthoritySTCW'))
            setIssuingauthoritySTCW(win.getItem('issuingauthoritySTCW'));
        // .................

        if (win.getItem('issuingauthorityNS'))
            setIssuingauthorityNS(win.getItem('issuingauthorityNS'));
        if (win.getItem('certificatenoNS'))
            setCertificatenoNS(win.getItem('certificatenoNS'));

        if (win.getItem('placeofissueNS'))
            setPlaceofissueNS(win.getItem('placeofissueNS'));

        if (win.getItem('IssuedateNS'))
            setIssuedateNS(win.getItem('IssuedateNS'));

        if (win.getItem('expirydateNS'))
            setExpirydateNS(win.getItem('expirydateNS'));

        // Load data from sessionStorage when component mounts of pssr

        if (win.getItem('certificatenoPSSR'))
            setCertificatenoPSSR(win.getItem('certificatenoPSSR'));

        if (win.getItem('issuedatePSSR'))
            setIssuedatePSSR(win.getItem('issuedatePSSRSR'));

        if (win.getItem('expirydatePSSR'))
            setExpirydatePSSR(win.getItem('expirydatePSSR'));

        if (win.getItem('issuingauthorityPSSR'))
            setIssuingauthorityPSSR(win.getItem('issuingauthorityPSSR'));

        // Load data from sessionStorage when component mounts of MFA

        if (win.getItem('certificatenoMFA'))
            setCertificatenoMFA(win.getItem('certificatenoMFA'));

        if (win.getItem('issuedateMFA'))
            setIssuedateMFA(win.getItem('issuedateMFA'));

        if (win.getItem('expirydateMFA'))
            setExpirydateMFA(win.getItem('expirydateMFA'));

        if (win.getItem('issuingauthorityMFA'))
            setIssuingauthorityMFA(win.getItem('issuingauthorityMFA'));

        // Load data from sessionStorage when component mounts of EFA

        if (win.getItem('certificatenoEFA'))
            setCertificatenoEFA(win.getItem('certificatenoEFA'));

        if (win.getItem('issuedateEFA'))
            setIssuedateEFA(win.getItem('issuedateEFA'));

        if (win.getItem('expirydateEFA'))
            setExpirydateEFA(win.getItem('expirydateEFA'));

        if (win.getItem('issuingauthorityEFA'))
            setIssuingauthorityEFA(win.getItem('issuingauthorityEFA'));

        // Load data from sessionStorage when component mounts of PST

        // Load data from sessionStorage when component mounts for each certificate type

        // PST Certificate
        if (sessionStorage.getItem('certificatenoPST'))
            setCertificatenoPST(sessionStorage.getItem('certificatenoPST'));
        if (sessionStorage.getItem('issuedatePST'))
            setIssuedatePST(sessionStorage.getItem('issuedatePST'));
        if (sessionStorage.getItem('expirydatePST'))
            setExpirydatePST(sessionStorage.getItem('expirydatePST'));
        if (sessionStorage.getItem('issuingauthorityPST'))
            setIssuingauthorityPST(sessionStorage.getItem('issuingauthorityPST'));

        // FPFF Certificate
        if (sessionStorage.getItem('certificatenoFPFF'))
            setCertificatenoFPFF(sessionStorage.getItem('certificatenoFPFF'));
        if (sessionStorage.getItem('issuedateFPFF'))
            setIssuedateFPFF(sessionStorage.getItem('issuedateFPFF'));
        if (sessionStorage.getItem('expirydateFPFF'))
            setExpirydateFPFF(sessionStorage.getItem('expirydateFPFF'));
        if (sessionStorage.getItem('issuingauthorityFPFF'))
            setIssuingauthorityFPFF(sessionStorage.getItem('issuingauthorityFPFF'));

        // MEDICARE Certificate
        if (sessionStorage.getItem('certificatenoMED'))
            setCertificatenoMED(sessionStorage.getItem('certificatenoMED'));
        if (sessionStorage.getItem('issuedateMED'))
            setIssuedateMED(sessionStorage.getItem('issuedateMED'));
        if (sessionStorage.getItem('expirydateMED'))
            setExpirydateMED(sessionStorage.getItem('expirydateMED'));
        if (sessionStorage.getItem('issuingauthorityMED'))
            setIssuingauthorityMED(sessionStorage.getItem('issuingauthorityMED'));

        // AFF Certificate
        if (sessionStorage.getItem('certificatenoAFF'))
            setCertificatenoAFF(sessionStorage.getItem('certificatenoAFF'));
        if (sessionStorage.getItem('issuedateAFF'))
            setIssuedateAFF(sessionStorage.getItem('issuedateAFF'));
        if (sessionStorage.getItem('expirydateAFF'))
            setExpirydateAFF(sessionStorage.getItem('expirydateAFF'));
        if (sessionStorage.getItem('issuingauthorityAFF'))
            setIssuingauthorityAFF(sessionStorage.getItem('issuingauthorityAFF'));

        // ROC Certificate
        if (sessionStorage.getItem('certificatenoROC'))
            setCertificatenoROC(sessionStorage.getItem('certificatenoROC'));
        if (sessionStorage.getItem('issuedateROC'))
            setIssuedateROC(sessionStorage.getItem('issuedateROC'));
        if (sessionStorage.getItem('expirydateROC'))
            setExpirydateROC(sessionStorage.getItem('expirydateROC'));
        if (sessionStorage.getItem('issuingauthorityROC'))
            setIssuingauthorityROC(sessionStorage.getItem('issuingauthorityROC'));

        // ARPA Certificate
        if (sessionStorage.getItem('certificatenoARPA'))
            setCertificatenoARPA(sessionStorage.getItem('certificatenoARPA'));
        if (sessionStorage.getItem('issuedateARPA'))
            setIssuedateARPA(sessionStorage.getItem('issuedateARPA'));
        if (sessionStorage.getItem('expirydateARPA'))
            setExpirydateARPA(sessionStorage.getItem('expirydateARPA'));
        if (sessionStorage.getItem('issuingauthorityARPA'))
            setIssuingauthorityARPA(sessionStorage.getItem('issuingauthorityARPA'));

        // GMDSS Certificate
        if (sessionStorage.getItem('certificatenoGMDSS'))
            setCertificatenoGMDSS(sessionStorage.getItem('certificatenoGMDSS'));
        if (sessionStorage.getItem('issuedateGMDSS'))
            setIssuedateGMDSS(sessionStorage.getItem('issuedateGMDSS'));
        if (sessionStorage.getItem('expirydateGMDSS'))
            setExpirydateGMDSS(sessionStorage.getItem('expirydateGMDSS'));
        if (sessionStorage.getItem('issuingauthorityGMDSS'))
            setIssuingauthorityGMDSS(sessionStorage.getItem('issuingauthorityGMDSS'));

        // RANSCO Certificate
        if (sessionStorage.getItem('certificatenoRANSCO'))
            setCertificatenoRANSCO(sessionStorage.getItem('certificatenoRANSCO'));
        if (sessionStorage.getItem('issuedateRANSCO'))
            setIssuedateRANSCO(sessionStorage.getItem('issuedateRANSCO'));
        if (sessionStorage.getItem('expirydateRANSCO'))
            setExpirydateRANSCO(sessionStorage.getItem('expirydateRANSCO'));
        if (sessionStorage.getItem('issuingauthorityRANSCO'))
            setIssuingauthorityRANSCO(sessionStorage.getItem('issuingauthorityRANSCO'));

        // NC Certificate
        if (sessionStorage.getItem('certificatenoNC'))
            setCertificatenoNC(sessionStorage.getItem('certificatenoNC'));
        if (sessionStorage.getItem('issuedateNC'))
            setIssuedateNC(sessionStorage.getItem('issuedateNC'));
        if (sessionStorage.getItem('expirydateNC'))
            setExpirydateNC(sessionStorage.getItem('expirydateNC'));
        if (sessionStorage.getItem('issuingauthorityNC'))
            setIssuingauthorityNC(sessionStorage.getItem('issuingauthorityNC'));

        // CRC Certificate
        if (sessionStorage.getItem('certificatenoCRC'))
            setCertificatenoCRC(sessionStorage.getItem('certificatenoCRC'));
        if (sessionStorage.getItem('issuedateCRC'))
            setIssuedateCRC(sessionStorage.getItem('issuedateCRC'));
        if (sessionStorage.getItem('expirydateCRC'))
            setExpirydateCRC(sessionStorage.getItem('expirydateCRC'));
        if (sessionStorage.getItem('issuingauthorityCRC'))
            setIssuingauthorityCRC(sessionStorage.getItem('issuingauthorityCRC'));

        // ST Certificate
        if (sessionStorage.getItem('certificatenoST'))
            setCertificatenoST(sessionStorage.getItem('certificatenoST'));
        if (sessionStorage.getItem('issuedateST'))
            setIssuedateST(sessionStorage.getItem('issuedateST'));
        if (sessionStorage.getItem('expirydateST'))
            setExpirydateST(sessionStorage.getItem('expirydateST'));
        if (sessionStorage.getItem('issuingauthorityST'))
            setIssuingauthorityST(sessionStorage.getItem('issuingauthorityST'));

        // BTM Certificate
        if (sessionStorage.getItem('certificatenoBTM'))
            setCertificatenoBTM(sessionStorage.getItem('certificatenoBTM'));
        if (sessionStorage.getItem('issuedateBTM'))
            setIssuedateBTM(sessionStorage.getItem('issuedateBTM'));
        if (sessionStorage.getItem('expirydateBTM'))
            setExpirydateBTM(sessionStorage.getItem('expirydateBTM'));
        if (sessionStorage.getItem('issuingauthorityBTM'))
            setIssuingauthorityBTM(sessionStorage.getItem('issuingauthorityBTM'));

        // ECDIS Certificate
        if (sessionStorage.getItem('certificatenoECDIS'))
            setCertificatenoECDIS(sessionStorage.getItem('certificatenoECDIS'));
        if (sessionStorage.getItem('issuedateECDIS'))
            setIssuedateECDIS(sessionStorage.getItem('issuedateECDIS'));
        if (sessionStorage.getItem('expirydateECDIS'))
            setExpirydateECDIS(sessionStorage.getItem('expirydateECDIS'));
        if (sessionStorage.getItem('issuingauthorityECDIS'))
            setIssuingauthorityECDIS(sessionStorage.getItem('issuingauthorityECDIS'));

        // LVHSC Certificate
        if (sessionStorage.getItem('certificatenoLVHSC'))
            setCertificatenoLVHSC(sessionStorage.getItem('certificatenoLVHSC'));
        if (sessionStorage.getItem('issuedateLVHSC'))
            setIssuedateLVHSC(sessionStorage.getItem('issuedateLVHSC'));
        if (sessionStorage.getItem('expirydateLVHSC'))
            setExpirydateLVHSC(sessionStorage.getItem('expirydateLVHSC'));
        if (sessionStorage.getItem('issuingauthorityLVHSC'))
            setIssuingauthorityLVHSC(sessionStorage.getItem('issuingauthorityLVHSC'));

        // ERS Certificate
        if (sessionStorage.getItem('certificatenoERS'))
            setCertificatenoERS(sessionStorage.getItem('certificatenoERS'));
        if (sessionStorage.getItem('issuedateERS'))
            setIssuedateERS(sessionStorage.getItem('issuedateERS'));
        if (sessionStorage.getItem('expirydateERS'))
            setExpirydateERS(sessionStorage.getItem('expirydateERS'));
        if (sessionStorage.getItem('issuingauthorityERS'))
            setIssuingauthorityERS(sessionStorage.getItem('issuingauthorityERS'));

        // ICE Certificate
        if (sessionStorage.getItem('certificatenoICE'))
            setCertificatenoICE(sessionStorage.getItem('certificatenoICE'));
        if (sessionStorage.getItem('issuedateICE'))
            setIssuedateICE(sessionStorage.getItem('issuedateICE'));
        if (sessionStorage.getItem('expirydateICE'))
            setExpirydateICE(sessionStorage.getItem('expirydateICE'));
        if (sessionStorage.getItem('issuingauthorityICE'))
            setIssuingauthorityICE(sessionStorage.getItem('issuingauthorityICE'));

        // OTF Certificate
        if (sessionStorage.getItem('certificatenoOTF'))
            setCertificatenoOTF(sessionStorage.getItem('certificatenoOTF'));
        if (sessionStorage.getItem('issuedateOTF'))
            setIssuedateOTF(sessionStorage.getItem('issuedateOTF'));
        if (sessionStorage.getItem('expirydateOTF'))
            setExpirydateOTF(sessionStorage.getItem('expirydateOTF'));
        if (sessionStorage.getItem('issuingauthorityOTF'))
            setIssuingauthorityOTF(sessionStorage.getItem('issuingauthorityOTF'));

        // TASCO Certificate
        if (sessionStorage.getItem('certificatenoTASCO'))
            setCertificatenoTASCO(sessionStorage.getItem('certificatenoTASCO'));
        if (sessionStorage.getItem('issuedateTASCO'))
            setIssuedateTASCO(sessionStorage.getItem('issuedateTASCO'));
        if (sessionStorage.getItem('expirydateTASCO'))
            setExpirydateTASCO(sessionStorage.getItem('expirydateTASCO'));
        if (sessionStorage.getItem('issuingauthorityTASCO'))
            setIssuingauthorityTASCO(sessionStorage.getItem('issuingauthorityTASCO'));


        //for company1 


        if (win.getItem('company1'))
            setCompany1(win.getItem('company1'));

        if (win.getItem('comapny1vessel'))
            setCompany1vessel(win.getItem('company1vessel'));

        if (win.getItem('company1type'))
            setCompany1type(win.getItem('company1type'));

        if (win.getItem('company1flag'))
            setCompany1flag(win.getItem('company1flag'));


        if (win.getItem('company1grt'))
            setCompany1grt(win.getItem('company1grt'));

        if (win.getItem('comapny1bhp'))
            setCompany1bhp(win.getItem('company1bhp'));

        if (win.getItem('company1rank'))
            setCompany1rank(win.getItem('company1rank'));

        if (win.getItem('company1from'))
            setCompany1from(win.getItem('company1from'));

        if (win.getItem('company1to'))
            setCompany1to(win.getItem('company1to'));

        if (win.getItem('company1reasonforsignoff'))
            setCompany1reasonforsignoff(win.getItem('company1reasonforsignoff'));

        //for company2


        if (win.getItem('company2'))
            setCompany2(win.getItem('company2'));

        if (win.getItem('comapny2vessel'))
            setCompany2vessel(win.getItem('company2vessel'));

        if (win.getItem('company2type'))
            setCompany2type(win.getItem('company2type'));

        if (win.getItem('company2flag'))
            setICompany2flag(win.getItem('company2flag'));


        if (win.getItem('company2grt'))
            setCompany2grt(win.getItem('company2grt'));

        if (win.getItem('comapny2bhp'))
            setCompany2bhp(win.getItem('company2bhp'));

        if (win.getItem('company2rank'))
            setCompany2rank(win.getItem('company2rank'));

        if (win.getItem('company2from'))
            setCompany2from(win.getItem('company2from'));

        if (win.getItem('company2to'))
            setCompany2to(win.getItem('company2to'));

        if (win.getItem('company2reasonforsignoff'))
            setCompany2reasonforsignoff(win.getItem('company2reasonforsignoff'));


        //for company3


        if (win.getItem('company3'))
            setCompany3(win.getItem('company3'));

        if (win.getItem('comapny3vessel'))
            setCompany3vessel(win.getItem('company3vessel'));

        if (win.getItem('company3type'))
            setCompany3type(win.getItem('company3type'));

        if (win.getItem('company3flag'))
            setCompany3flag(win.getItem('company3flag'));


        if (win.getItem('company3grt'))
            setCompany3grt(win.getItem('company3grt'));

        if (win.getItem('comapny3bhp'))
            setCompany3bhp(win.getItem('company3bhp'));

        if (win.getItem('company3rank'))
            setCompany3rank(win.getItem('company3rank'));

        if (win.getItem('company3from'))
            setCompany3from(win.getItem('company3from'));

        if (win.getItem('company3to'))
            setCompany3to(win.getItem('company3to'));

        if (win.getItem('company3reasonforsignoff'))
            setCompany3reasonforsignoff(win.getItem('company3reasonforsignoff'));


        //    //for company4


        if (win.getItem('company4'))
            setCompany4(win.getItem('company4'));

        if (win.getItem('comapny4vessel'))
            setCompany4vessel(win.getItem('company4vessel'));

        if (win.getItem('company4type'))
            setCompany4type(win.getItem('company4type'));

        if (win.getItem('company4flag'))
            setCompany4flag(win.getItem('company4flag'));


        if (win.getItem('company4grt'))
            setCompany4grt(win.getItem('company4grt'));

        if (win.getItem('comapny4bhp'))
            setCompany4bhp(win.getItem('company4bhp'));

        if (win.getItem('company4rank'))
            setCompany4rank(win.getItem('company4rank'));

        if (win.getItem('company4from'))
            setCompany4from(win.getItem('company4from'));

        if (win.getItem('company4to'))
            setCompany4to(win.getItem('company4to'));

        if (win.getItem('company4reasonforsignoff'))
            setCompany4reasonforsignoff(win.getItem('company4reasonforsignoff'));


        //  //for company5


        if (win.getItem('company5'))
            setCompany5(win.getItem('company5'));

        if (win.getItem('comapny5vessel'))
            setCompany5vessel(win.getItem('company5vessel'));

        if (win.getItem('company5type'))
            setCompany5type(win.getItem('company5type'));

        if (win.getItem('company5flag'))
            setCompany5flag(win.getItem('company5flag'));


        if (win.getItem('company5grt'))
            setCompany5grt(win.getItem('company5grt'));

        if (win.getItem('comapny5bhp'))
            setCompany5bhp(win.getItem('company5bhp'));

        if (win.getItem('company5rank'))
            setCompany5rank(win.getItem('company5rank'));

        if (win.getItem('company5from'))
            setCompany5from(win.getItem('company5from'));

        if (win.getItem('company5to'))
            setCompany5to(win.getItem('company5to'));

        if (win.getItem('company5reasonforsignoff'))
            setCompany5reasonforsignoff(win.getItem('company5reasonforsignoff'));

        //  //for company4


        if (win.getItem('company6'))
            setCompany6(win.getItem('company6'));

        if (win.getItem('comapny6vessel'))
            setCompany6vessel(win.getItem('company6vessel'));

        if (win.getItem('company6type'))
            setCompany6type(win.getItem('company6type'));

        if (win.getItem('company6flag'))
            setCompany6flag(win.getItem('company6flag'));


        if (win.getItem('company6grt'))
            setCompany6grt(win.getItem('company6grt'));

        if (win.getItem('comapny6bhp'))
            setCompany6bhp(win.getItem('company6bhp'));

        if (win.getItem('company6rank'))
            setCompany6rank(win.getItem('company6rank'));

        if (win.getItem('company6from'))
            setCompany6from(win.getItem('company6from'));

        if (win.getItem('company6to'))
            setCompany6to(win.getItem('company6to'));

        if (win.getItem('company6reasonforsignoff'))
            setCompany6reasonforsignoff(win.getItem('company6reasonforsignoff'));


        if (win.getItem('chemco'))
            setCHEMCO(win.getItem('chemco'));




        if (win.getItem('chemcogrt'))
            setCHEMCOgrt(win.getItem('chemcogrt'));

        if (win.getItem('chemcobhp'))
            setCHEMCObhp(win.getItem('chemcobhp'));

        if (win.getItem('chemcorank'))
            setCHEMCOrank(win.getItem('chemcorank'));

        if (win.getItem('chemcofrom'))
            setCHEMCOfrom(win.getItem('chemcofrom'));

        if (win.getItem('chemcoto'))
            setCHEMCOto(win.getItem('chemcoto'));

        if (win.getItem('chemcoreasonforsignoff'))
            setCHEMCOreasonforsignoff(win.getItem('chemcoreasonforsignoff'));

        if (win.getItem('chemco'))
            setCHEMCO(win.getItem('chemco'));



        if (win.getItem('gasco'))
            setGASCO(win.getItem('gasco'));

        if (win.getItem('gasco'))
            setGASCOgrt(win.getItem('gascogrt'));

        if (win.getItem('gascobhp'))
            setGASCObhp(win.getItem('gascobhp'));

        if (win.getItem('gascorank'))
            setGASCOrank(win.getItem('gascocorank'));

        if (win.getItem('gascofrom'))
            setGASCOfrom(win.getItem('gascofrom'));

        if (win.getItem('gasco'))
            setGASCOto(win.getItem('gasco'));

        if (win.getItem('gascoreasonforsignoff'))
            setGASCOreasonforsignoff(win.getItem('gascoreasonforsignoff'));




        if (win.getItem('dce'))
            setDCE(win.getItem('dce'));

        if (win.getItem('dce'))
            setDCEgrt(win.getItem('dcegrt'));

        if (win.getItem('dcebhp'))
            setDCEbhp(win.getItem('dcebhp'));

        if (win.getItem('dcerank'))
            setDCErank(win.getItem('dcecorank'));

        if (win.getItem('dcefrom'))
            setDCEfrom(win.getItem('dcefrom'));

        if (win.getItem('dceto'))
            setDCEto(win.getItem('dceto'));

        if (win.getItem('dcereasonforsignoff'))
            setDCEreasonforsignoff(win.getItem('dcereasonforsignoff'));


        if (win.getItem('huet'))
            setHUET(win.getItem('huet'));

        if (win.getItem('huetgrt'))
            setHUETgrt(win.getItem('huetgrt'));

        if (win.getItem('huetbhp'))
            setHUETbhp(win.getItem('huetbhp'));

        if (win.getItem('huetrank'))
            setHUETrank(win.getItem('huetrank'));

        if (win.getItem('huetfrom'))
            setHUETfrom(win.getItem('huetfrom'));

        if (win.getItem('huetto'))
            setDCEto(win.getItem('huetto'));

        if (win.getItem('huetreasonforsignoff'))
            setHUETreasonforsignoff(win.getItem('huetreasonforsignoff'));



        if (win.getItem('sso'))
            setSSO(win.getItem('sso'));

        if (win.getItem('ssogrt'))
            setSSOgrt(win.getItem('ssogrt'));

        if (win.getItem('ssobhp'))
            setSSObhp(win.getItem('ssobhp'));

        if (win.getItem('ssorank'))
            setSSOrank(win.getItem('ssorank'));

        if (win.getItem('ssofrom'))
            setSSOfrom(win.getItem('ssofrom'));

        if (win.getItem('ssoto'))
            setSSOto(win.getItem('ssoto'));

        if (win.getItem('ssoreasonforsignoff'))
            setSSOreasonforsignoff(win.getItem('ssoreasonforsignoff'));



        if (win.getItem('soc'))
            setSOC(win.getItem('soc'));

        if (win.getItem('socgrt'))
            setSOCgrt(win.getItem('socgrt'));

        if (win.getItem('socbhp'))
            setSOCbhp(win.getItem('socbhp'));

        if (win.getItem('socrank'))
            setSOCrank(win.getItem('socrank'));

        if (win.getItem('socfrom'))
            setSOCfrom(win.getItem('socfrom'));

        if (win.getItem('socto'))
            setSOCto(win.getItem('socto'));

        if (win.getItem('socreasonforsignoff'))
            setSOCreasonforsignoff(win.getItem('socreasonforsignoff'));


        if (win.getItem('wc'))
            setWC(win.getItem('wc'));

        if (win.getItem('wcgrt'))
            setWCgrt(win.getItem('wcgrt'));

        if (win.getItem('wcbhp'))
            setWCbhp(win.getItem('wcbhp'));

        if (win.getItem('wcrank'))
            setWCrank(win.getItem('wcrank'));

        if (win.getItem('wcfrom'))
            setWCfrom(win.getItem('wcfrom'));

        if (win.getItem('wcto'))
            setWCto(win.getItem('wcto'));

        if (win.getItem('wcreasonforsignoff'))
            setWCreasonforsignoff(win.getItem('wcreasonforsignoff'));

        // experience
        if (win.getItem('experienceText')) setExperienceText(win.getItem('experienceText'));
        if (win.getItem('seminar')) setSeminar(win.getItem('seminar'));

        const savedValues = JSON.parse(win.getItem("checkboxes"));
        if (savedValues) {
            setCheckboxes(savedValues);
        }


    }, []);

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

            <div style="border: 1px solid black; width: 100%; display: flex;">
            <!-- Left side of the form -->
            <div style="flex: 3; padding: 10px;">
                <h5 style="text-align: center; margin: 0;">APPLICATION FORM / PERSONAL DATA UPDATE FORM</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr>
                        <td style="background-color: #d3d3d3; padding: 5px 5px; border: 1px solid black; width: 50%;">PRESENT RANK</td>
                        <td style="border: 1px solid black;">${presentrank}</td>
                        <td style="background-color: #d3d3d3; padding: 5px 5px; border: 1px solid black; width: 50%;">DATE OF APPLICATION</td>
                        <td style="border: 1px solid black;">${dateofapplication}</td>
                    </tr>
                    <tr>
                        <td style="background-color: #d3d3d3; padding: 5px 5px; border: 1px solid black;">RANK APPLIED</td>
                        <td style="border: 1px solid black;">${rankapplied}</td>
                        <td style="background-color: #d3d3d3; padding: 5px 5px; border: 1px solid black;">DATE OF AVAILABILITY</td>
                        <td style="border: 1px solid black;">${dateofavailability}</td>
                    </tr>
                </table>
            </div>
            <!-- Right side for the photograph -->
            <div style="flex: 1; border-left: 1px solid black; display: flex; align-items: center; justify-content: center;">
                <div style="text-align: center;">${reader.result}</div>
            </div>
        </div>
    
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
    
    
            <header style="margin-top:25%">
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
                    <td style="padding: 8px; border: 1px solid #000;">${indianumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${indiaissueplace}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${indiaissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${indiaexpiredate}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #000;"><b>PANAMA</b></td>
                    <td style="padding: 8px; border: 1px solid #000;">${panamanumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${panamaissueplace}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${panamaissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${panamaexpiredate}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #000;"><b>OTHERS</b></td>
                    <td style="padding: 8px; border: 1px solid #000;">${othernumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${otherissueplace}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${otherissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${otherexpiredate}</td>
                </tr>
            </table>

            <header>
                <div style="margin-top: 90px; width: 100%; padding: 10px 0;">
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

            <h5 style="margin-top:20px;">5. Licence/Certificates of Competency</h5>
            <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
                <tr>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Issue Authority</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Grade</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Number</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Issue</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Expire</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Revalidation Date</th>
                    <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">STCW 95</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #000;"><b>INDIAN</b></td>
                    <td style="padding: 8px; border: 1px solid #000;">${grade}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${licencenumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${licenceissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${licenceexpirydate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${licencerevalidationdate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${stc95}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #000;"><b>PANAMA</b></td>
                     <td style="padding: 8px; border: 1px solid #000;">${pgrade}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${plicencenumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${plicenceissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${plicenceexpirydate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${plicencerevalidationdate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${pstc95}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #000;"><b>OTHERS</b></td>
                 <td style="padding: 8px; border: 1px solid #000;">${ograde}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${olicencenumber}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${olicenceissuedate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${olicenceexpirydate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${olicencerevalidationdate}</td>
                    <td style="padding: 8px; border: 1px solid #000;">${ostc95}</td>
                </tr>
            </table>

                    <h5 style="margin-top:20px;">6. STCW And Other Certificates</h5>
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; font-family: Arial, sans-serif;">
        <tr style="background-color: #d3d3d3; text-align: center;">
          <th style="border: 1px solid black; padding: 8px;">STCW Courses</th>
          <th style="border: 1px solid black; padding: 8px;">Certificate No</th>
          <th style="border: 1px solid black; padding: 8px;">Date of Issue</th>
          <th style="border: 1px solid black; padding: 8px;">Date of Expiry</th>
          <th style="border: 1px solid black; padding: 8px;">Place of Issue</th>
          <th style="border: 1px solid black; padding: 8px;">Issuing Authority/INSTITUTE</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">PRE SEA-TRAINING</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoSTCW}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateSTCW}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateSTCW}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueSTCW}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthoritySTCW}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Personal Safety and Social Responsibility (PSSR)</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoPSSR}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedatePSSR}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydatePSSR}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissuePSSR}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityPSSR}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Medical First Aid (MFA)</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoMFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateMFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateMFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueMFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityMFA}</td>
        </tr>
        <!-- Repeat similar rows for each certificate -->
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Elementary First Aid (EFA)</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoEFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateEFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateEFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueEFA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityEFA}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Personal Survival Techniques (PST)</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoPST}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedatePST}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydatePST}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissuePST}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityPST}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Proficiency in Survival Craft and Rescue Boats (PSCRB)</td>
           <td style="border: 1px solid black; padding: 8px;">${certificatenoFPFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateFPFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateFPFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueFPFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityFPFF}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Fire Prevention and Fire Fighting (FPFF)
        </td>
              <td style="border: 1px solid black; padding: 8px;">${certificatenoMED}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateMED}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateMED}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueMED}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityMED}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Advanced Fire Fighting (AFF)</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoAFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateAFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateAFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueAFF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityAFF}</td>
        </tr>
        <tr>
        <td style="border: 1px solid black; padding: 8px;">Radar Observer Simulator Course (ROC)</td>
             <td style="border: 1px solid black; padding: 8px;">${certificatenoROC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateROC}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateROC}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueROC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityROC}</td>
        </tr>
   
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Automatic Radar Plotting Aids (ARPA)</td>
                    <td style="border: 1px solid black; padding: 8px;">${certificatenoARPA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateARPA}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateARPA}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueARPA}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityARPA}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Global Maritime Distress and Safety System (GMDSS)</td>
                 <td style="border: 1px solid black; padding: 8px;">${certificatenoGMDSS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateGMDSS}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateGMDSS}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueGMDSS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityGMDSS}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">GMDSS Endorsement</td>
                    <td style="border: 1px solid black; padding: 8px;">${certificatenoGM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateGM}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateGM}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueGM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityGM}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Radar ARPA and Navigation Simulation Course (RANSCO/NARAS</td>
                     <td style="border: 1px solid black; padding: 8px;">${certificatenoRANSCO}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateRANSCO}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateRANSCO}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueRANSCO}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityRANSCO}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Navigational Control</td>
          <td style="border: 1px solid black; padding: 8px;">${certificatenoNC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateNC}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateNC}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueNC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityNC}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Certificate Revel Course</td>
        <td style="border: 1px solid black; padding: 8px;">${certificatenoCRC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateCRC}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateCRC}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueCRC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityCRC}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Simulator Training</td>
            <td style="border: 1px solid black; padding: 8px;">${certificatenoST}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateST}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateST}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueST}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityST}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Bridge Team Management (BTM)</td>
            <td style="border: 1px solid black; padding: 8px;">${certificatenoBTM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateBTM}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateBTM}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueBTM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityBTM}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Electronic Chart Display and Information System (ECDIS)</td>
 <td style="border: 1px solid black; padding: 8px;">${certificatenoECDIS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateECDIS}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateECDIS}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueECDIS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityECDIS}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Bridge Resource Management (BRM/ERM/VRM)</td>
         <td style="border: 1px solid black; padding: 8px;">${certificatenoBRM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateBRM}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateBRM}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueBRM}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityBRM}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Large Vessel Handling Simulator Course</td>
 <td style="border: 1px solid black; padding: 8px;">${certificatenoLVHSC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateLVHSC}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateLVHSC}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueLVHSC}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityLVHSC}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Engine Room Simulator</td>
           <td style="border: 1px solid black; padding: 8px;">${certificatenoERS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateERS}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateERS}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueERS}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityERS}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">ICE Navigation</td>
         <td style="border: 1px solid black; padding: 8px;">${certificatenoICE}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateICE}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateICE}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueICE}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityICE}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Oil Tanker Familiarization</td>
  <td style="border: 1px solid black; padding: 8px;">${certificatenoOTF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuedateOTF}</td>
          <td style="border: 1px solid black; padding: 8px;">${expirydateOTF}</td>
          <td style="border: 1px solid black; padding: 8px;">${placeofissueOTF}</td>
          <td style="border: 1px solid black; padding: 8px;">${issuingauthorityOTF}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Specialized Training Programmed on Oil Tanker</td>
 <td style="border: 1px solid black; padding: 8px;">${certificatenoTASCO}</td>
          <td style="border: 1px solid black; padding: 0px 8px;">${issuedateTASCO}</td>
          <td style="border: 1px solid black; padding: 0px 8px;">${expirydateTASCO}</td>
          <td style="border: 1px solid black; padding: 0px 8px;">${placeofissueTASCO}</td>
          <td style="border: 1px solid black; padding: 0px 8px;">${issuingauthorityTASCO}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 0px 8px;">Operation (TASCO)</td>
          <td style="border: 1px solid black; padding: 0px 8px;"></td>
          <td style="border: 1px solid black; padding: 0px 8px;"></td>
          <td style="border: 1px solid black; padding: 0px 8px;"></td>
          <td style="border: 1px solid black; padding: 0px 8px;"></td>
          <td style="border: 1px solid black; padding: 0px 8px;"></td>
        </tr>
      </table>

    <header style="margin-top:145%">
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
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; font-family: Arial, sans-serif;">
        <tr style="background-color: #d3d3d3; text-align: center;">
          <th style="border: 1px solid black; padding: 8px;">COMPANY</th>
          <th style="border: 1px solid black; padding: 8px;">VESSEL</th>
          <th style="border: 1px solid black; padding: 8px;">TYPE</th>
          <th style="border: 1px solid black; padding: 8px;">FLAG</th>
          <th style="border: 1px solid black; padding: 8px;">GRT</th>
          <th style="border: 1px solid black; padding: 8px;">BHP</th>
          <th style="border: 1px solid black; padding: 8px;">RANK</th>
          <th style="border: 1px solid black; padding: 8px;">FROM</th>
          <th style="border: 1px solid black; padding: 8px;">TO</th>
          <th style="border: 1px solid black; padding: 8px;">REASON FOR SIGN-OFF</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">${company1}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company1reasonforsignoff}</td>
        </tr>
        <!-- Repeat similar empty rows for additional entries as needed -->
        <tr>
   <td style="border: 1px solid black; padding: 8px;">${company2}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company2reasonforsignoff}</td>
        </tr>
        <tr>
        <td style="border: 1px solid black; padding: 8px;">${company3}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company3reasonforsignoff}</td>
        </tr>
        <tr>
  <td style="border: 1px solid black; padding: 8px;">${company4}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company4reasonforsignoff}</td>
        </tr>
        <tr>
     <td style="border: 1px solid black; padding: 8px;">${company5}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company5reasonforsignoff}</td>
        </tr>
     <td style="border: 1px solid black; padding: 8px;">${company6}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6vessel}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6type}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6flag}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6grt}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6bhp}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6rank}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6from}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6to}</td>
          <td style="border: 1px solid black; padding: 8px;">${company6reasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">Specialized Training Programmed on Chemical Tanker Operations (CHEMCO)</td>
        
        <td style="border: 1px solid black; padding: 8px;">${chemcogrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${chemcobhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${chemcorank}</td>
        <td style="border: 1px solid black; padding: 8px;">${chemcofrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${chemcoto}</td>
        <td style="border: 1px solid black; padding: 8px;">${chemcoreasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">Specialized Training Programmed on Liquefied Gas Tanker Operations (GASCO)</td>
        
        <td style="border: 1px solid black; padding: 8px;">${gascogrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${gascobhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${gascorank}</td>
        <td style="border: 1px solid black; padding: 8px;">${gascofrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${gascoto}</td>
        <td style="border: 1px solid black; padding: 8px;">${gascoreasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">Dangerous Cargo Endorsement (DCE) GAS/CHEM/OIL</td>
       
        <td style="border: 1px solid black; padding: 8px;">${dcegrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${dcebhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${dcerank}</td>
        <td style="border: 1px solid black; padding: 8px;">${dcefrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${dceto}</td>
        <td style="border: 1px solid black; padding: 8px;">${dcereasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">Helicopter Underwater Escape Techniques</td>
       
        <td style="border: 1px solid black; padding: 8px;">${huetgrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${huetbhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${huetrank}</td>
        <td style="border: 1px solid black; padding: 8px;">${huetfrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${huetto}</td>
        <td style="border: 1px solid black; padding: 8px;">${huetreasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">Ship Security Officer (SSO) / STS DSD</td>
      
        <td style="border: 1px solid black; padding: 8px;">${ssogrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${ssobhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${ssorank}</td>
        <td style="border: 1px solid black; padding: 8px;">${ssofrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${ssoto}</td>
        <td style="border: 1px solid black; padding: 8px;">${ssoreasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">International Ship and Port Facility Security ISPS (SOC)</td>
       
        <td style="border: 1px solid black; padding: 8px;">${socgrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${socbhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${socrank}</td>
        <td style="border: 1px solid black; padding: 8px;">${socfrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${socto}</td>
        <td style="border: 1px solid black; padding: 8px;">${socreasonforsignoff}</td>
        </tr>
        <tr>
        <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold;">6G, 3G, 2G, Welder Certificate</td>
        
        <td style="border: 1px solid black; padding: 8px;">${wcgrt}</td>
        <td style="border: 1px solid black; padding: 8px;">${wcbhp}</td>
        <td style="border: 1px solid black; padding: 8px;">${wcrank}</td>
        <td style="border: 1px solid black; padding: 8px;">${wcfrom}</td>
        <td style="border: 1px solid black; padding: 8px;">${wcto}</td>
        <td style="border: 1px solid black; padding: 8px;">${wcreasonforsignoff}</td>
        </tr>

      </table>


 <header style="margin-top:35%">
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

            
       <h5 style="margin-top:20px;">7. Sea Experience:</h5>
        <br>
       <p style="border: 2px solid black; padding: 5px 10px">${experienceText}</p>

       <br>
       <h5 style="margin-top:20px;">8. How did you know about us?</h5>
    <table style="width: 100%; border-collapse: collapse; border: 1px solid black; font-family: Arial, sans-serif;">
        <tr style="background-color: #d3d3d3; text-align: center;">
          <th  style="border: 1px solid black; padding: 8px;">Resources</th>
          <th style="border: 1px solid black; padding: 8px;">YES / NO</th>

        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><B>Company presentation/seminar</B></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.company}</td>
     
        </tr>
        <!-- Repeat similar empty rows for additional entries as needed -->
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><b>Marine Club Notice Board</b></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.club}</td>
       
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><b>Marine Magazine Advertisement</b></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.magazine}</td>
         
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><b>News Paper Advertisement</b></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.news}</td>

        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><b>Told by Seagoing Friend</b></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.friend}</td>
      
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;"><b>Direct Mail From Company</b></td>
          <td style="border: 1px solid black; padding: 8px;">${checkboxes.mail}</td>
    
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
        navigate("/physicaldetails"); // Navigate to the previous form (Form 1)
    };

    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>11. Space For Official USE:</h5>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <div className="name-field">
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Personality</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="personality"
                                            placeholder=""
                                            value={personality} onChange={(e) => setPersonality(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Attitude</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="attitude"
                                            placeholder=""
                                            value={attitude} onChange={(e) => setAttitude(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Technical Knowledge</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="technicalknowledge"
                                            placeholder=""
                                            value={technicalknowledge} onChange={(e) => setTechnicalknowledge(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="name-field">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <p className='text-start' style={{ marginBottom: '0' }}>English Knowledge</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="englishknowledge"
                                            placeholder=""
                                            value={englishknowledge} onChange={(e) => setEnglishknowledge(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <p className='text-start' style={{ marginBottom: '0' }}>Over All Assessment</p>
                                        <input
                                            type="text"
                                            id="height"
                                            name="overall"
                                            placeholder=""
                                            value={overall} onChange={(e) => setOverall(e.target.value)}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                            <p className='text-start mt-2'>(Grade: A - Excellent, B - Good, C - Satisfactory, D - Average, E - Poor)</p>
                        </div>



                        {/* // buttons */}

                        <div className="form-group text-start">
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
                                        <button type="submit" className="btn-submit" onClick={getContentInPDF}>
                                            Submit
                                        </button>
                                        {/* <button type="submit" className="btn-submit">
                                            Next
                                        </button> */}
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
