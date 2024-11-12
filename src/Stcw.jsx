import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import logo from "./assets/logo_for_form.png";
import logo1 from "./assets/Euro+BAR.png";
// import { Seafeverdec } from './Seafeverdec';

export const Stcw = () => {
    const navigate = useNavigate();
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

    const [certificatenoNS , setCertificatenoNS ] = useState('');
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



    


    const win = window.sessionStorage;
 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save data in sessionStorage
       
        sessionStorage.setItem('certificatenoSTCW', certificatenoSTCW);
        sessionStorage.setItem('expirydateSTCW', expirydateSTCW);
        sessionStorage.setItem('placeofissueSTCW', placeofissueSTCW);
        sessionStorage.setItem('issuingauthoritySTCW', issuingauthoritySTCW);
        sessionStorage.setItem('issuedateSTCW', issuedateSTCW);

        sessionStorage.setItem('certificatenoPSSR', certificatenoPSSR);
        sessionStorage.setItem('expirydatePSSR', expirydatePSSR);
        sessionStorage.setItem('placeofissuePSSR', placeofissuePSSR);
        sessionStorage.setItem('issuingauthorityPSSR', issuingauthorityPSSR);
        sessionStorage.setItem('issuedatePSSR', issuedatePSSR);

        sessionStorage.setItem('certificatenoMFA', certificatenoMFA);
        sessionStorage.setItem('expirydateMFA', expirydateMFA);
        sessionStorage.setItem('placeofissueMFA', placeofissueMFA);
        sessionStorage.setItem('issuingauthorityMFA', issuingauthorityMFA);
        sessionStorage.setItem('issuedateMFA', issuedateMFA);

        sessionStorage.setItem('certificatenoEFA', certificatenoEFA);
        sessionStorage.setItem('expirydateEFA', expirydateEFA);
        sessionStorage.setItem('placeofissueEFA', placeofissueEFA);
        sessionStorage.setItem('issuingauthorityEFA', issuingauthorityEFA);
        sessionStorage.setItem('issuedateEFA', issuedateEFA);

        sessionStorage.setItem('certificatenoPST', certificatenoPST);
        sessionStorage.setItem('expirydatePST', expirydatePST);
        sessionStorage.setItem('placeofissuePST', placeofissuePST);
        sessionStorage.setItem('issuingauthorityPST', issuingauthorityPST);
        sessionStorage.setItem('issuedatePST', issuedatePST);

        sessionStorage.setItem('certificatenoFPFF', certificatenoFPFF);
        sessionStorage.setItem('expirydateFPFF', expirydateFPFF);
        sessionStorage.setItem('placeofissueFPFF', placeofissueFPFF);
        sessionStorage.setItem('issuingauthorityFPFF', issuingauthorityFPFF);
        sessionStorage.setItem('issuedateFPFF', issuedateFPFF);

        sessionStorage.setItem('certificatenoMED', certificatenoMED);
        sessionStorage.setItem('expirydateMED', expirydateMED);
        sessionStorage.setItem('placeofissueMED', placeofissueMED);
        sessionStorage.setItem('issuingauthorityMED', issuingauthorityMED);
        sessionStorage.setItem('issuedateMED', issuedateMED);

        sessionStorage.setItem('certificatenoAFF', certificatenoAFF);
        sessionStorage.setItem('expirydateAFF', expirydateAFF);
        sessionStorage.setItem('placeofissueAFF', placeofissueAFF);
        sessionStorage.setItem('issuingauthorityAFF', issuingauthorityAFF);
        sessionStorage.setItem('issuedateAFF', issuedateAFF);

        sessionStorage.setItem('certificatenoROC', certificatenoROC);
        sessionStorage.setItem('expirydateROC', expirydateROC);
        sessionStorage.setItem('placeofissueROC', placeofissueROC);
        sessionStorage.setItem('issuingauthorityROC', issuingauthorityROC);
        sessionStorage.setItem('issuedateROC', issuedateROC);

        sessionStorage.setItem('certificatenoARPA', certificatenoARPA);
        sessionStorage.setItem('expirydateARPA', expirydateMED);
        sessionStorage.setItem('placeofissueARPA', placeofissueARPA);
        sessionStorage.setItem('issuingauthorityARPA', issuingauthorityARPA);
        sessionStorage.setItem('issuedateARPA', issuedateARPA);

        sessionStorage.setItem('certificatenoGM', certificatenoGM);
        sessionStorage.setItem('expirydateGM', expirydateGM);
        sessionStorage.setItem('placeofissueGM', placeofissueGM);
        sessionStorage.setItem('issuingauthorityGM', issuingauthorityGM);
        sessionStorage.setItem('issuedateGM', issuedateGM);

        sessionStorage.setItem('certificatenoGMDSS', certificatenoGMDSS);
        sessionStorage.setItem('expirydateGMDSS', expirydateGMDSS);
        sessionStorage.setItem('placeofissueGMDSS', placeofissueGMDSS);
        sessionStorage.setItem('issuingauthorityGMDSS', issuingauthorityGMDSS);
        sessionStorage.setItem('issuedateGMDSS', issuedateGMDSS);


      // Setting session storage for RANSCO certificate
sessionStorage.setItem('certificatenoRANSCO', certificatenoRANSCO);
sessionStorage.setItem('expirydateRANSCO', expirydateRANSCO);
sessionStorage.setItem('placeofissueRANSCO', placeofissueRANSCO);
sessionStorage.setItem('issuingauthorityRANSCO', issuingauthorityRANSCO);
sessionStorage.setItem('issuedateRANSCO', issuedateRANSCO);

// Setting session storage for NS certificate
sessionStorage.setItem('certificatenoNS', certificatenoNS);
sessionStorage.setItem('expirydateNS', expirydateNS);
sessionStorage.setItem('placeofissueNS', placeofissueNS);
sessionStorage.setItem('issuingauthorityNS', issuingauthorityNS);
sessionStorage.setItem('issuedateNS', issuedateNS);


        sessionStorage.setItem('certificatenoCRC', certificatenoCRC);
        sessionStorage.setItem('expirydateCRC', expirydateCRC);
        sessionStorage.setItem('placeofissueCRC', placeofissueCRC);
        sessionStorage.setItem('issuingauthorityCRC', issuingauthorityCRC);
        sessionStorage.setItem('issuedateCRC', issuedateCRC);


        sessionStorage.setItem('certificatenoST', certificatenoST);
        sessionStorage.setItem('expirydateST', expirydateST);
        sessionStorage.setItem('placeofissueST', placeofissueST);
        sessionStorage.setItem('issuingauthorityST', issuingauthorityST);
        sessionStorage.setItem('issuedateST', issuedateST);


        sessionStorage.setItem('certificatenoBTM', certificatenoBTM);
        sessionStorage.setItem('expirydateBTM', expirydateBTM);
        sessionStorage.setItem('placeofissueBTM', placeofissueBTM);
        sessionStorage.setItem('issuingauthorityBTM', issuingauthorityBTM);
        sessionStorage.setItem('issuedateBTM', issuedateBTM);


        sessionStorage.setItem('certificatenoECDIS', certificatenoECDIS);
        sessionStorage.setItem('expirydateECDIS', expirydateECDIS);
        sessionStorage.setItem('placeofissueECDIS', placeofissueECDIS);
        sessionStorage.setItem('issuingauthorityECDIS', issuingauthorityECDIS);
        sessionStorage.setItem('issuedateECDIS', issuedateECDIS);

        sessionStorage.setItem('certificatenoBRM', certificatenoBRM);
        sessionStorage.setItem('expirydateBRM', expirydateBRM);
        sessionStorage.setItem('placeofissueBRM', placeofissueBRM);
        sessionStorage.setItem('issuingauthorityBRM', issuingauthorityBRM);
        sessionStorage.setItem('issuedateBRM', issuedateBRM);


        sessionStorage.setItem('certificatenoLVHSC', certificatenoLVHSC);
        sessionStorage.setItem('expirydateLVHSC', expirydateLVHSC);
        sessionStorage.setItem('placeofissueLVHSC', placeofissueLVHSC);
        sessionStorage.setItem('issuingauthorityLVHSC', issuingauthorityLVHSC);
        sessionStorage.setItem('issuedateLVHSC', issuedateLVHSC);


        sessionStorage.setItem('certificatenoERS', certificatenoERS);
        sessionStorage.setItem('expirydateERS', expirydateERS);
        sessionStorage.setItem('placeofissueERS', placeofissueERS);
        sessionStorage.setItem('issuingauthorityERS', issuingauthorityERS);
        sessionStorage.setItem('issuedateERS', issuedateERS);

        sessionStorage.setItem('certificatenoICE', certificatenoICE);
        sessionStorage.setItem('expirydateICE', expirydateICE);
        sessionStorage.setItem('placeofissueICE', placeofissueICE);
        sessionStorage.setItem('issuingauthorityICE', issuingauthorityICE);
        sessionStorage.setItem('issuedateICE', issuedateICE);

        
        sessionStorage.setItem('certificatenoOTF', certificatenoOTF);
        sessionStorage.setItem('expirydateOTF', expirydateOTF);
        sessionStorage.setItem('placeofissueOTF', placeofissueOTF);
        sessionStorage.setItem('issuingauthorityOTF', issuingauthorityOTF);
        sessionStorage.setItem('issuedateOTF', issuedateOTF);


        sessionStorage.setItem('certificatenoTASCO', certificatenoTASCO);
        sessionStorage.setItem('expirydateTASCO', expirydateTASCO);
        sessionStorage.setItem('placeofissueTASCO', placeofissueTASCO);
        sessionStorage.setItem('issuingauthorityTASCO', issuingauthorityTASCO);
        sessionStorage.setItem('issuedateTASCO', issuedateTASCO);

        sessionStorage.setItem('company1', company1);
        sessionStorage.setItem('company1vessel', company1vessel);
        sessionStorage.setItem('company1type', company1type);
        sessionStorage.setItem('company1flag', company1flag);
        sessionStorage.setItem('company1grt', company1grt);
        sessionStorage.setItem('company1bhp', company1bhp);
        sessionStorage.setItem('company1rank', company1rank);
        sessionStorage.setItem('company1from', company1from);
        sessionStorage.setItem('company1to', company1to);
        sessionStorage.setItem('company1reasonforsignoff', company1reasonforsignoff);


        sessionStorage.setItem('company2', company2);
        sessionStorage.setItem('company2vessel', company2vessel);
        sessionStorage.setItem('company2type', company2type);
        sessionStorage.setItem('company2flag', company2flag);
        sessionStorage.setItem('company2grt', company2grt);
        sessionStorage.setItem('company2bhp', company2bhp);
        sessionStorage.setItem('company21rank', company2rank);
        sessionStorage.setItem('company2from', company2from);
        sessionStorage.setItem('company2to', company2to);
        sessionStorage.setItem('company2reasonforsignoff', company2reasonforsignoff);


        sessionStorage.setItem('company3', company3);
        sessionStorage.setItem('company3vessel', company3vessel);
        sessionStorage.setItem('company3type', company3type);
        sessionStorage.setItem('company3flag', company3flag);
        sessionStorage.setItem('company3grt', company3grt);
        sessionStorage.setItem('company3bhp', company3bhp);
        sessionStorage.setItem('company3rank', company3rank);
        sessionStorage.setItem('company3from', company3from);
        sessionStorage.setItem('company3to', company3to);
        sessionStorage.setItem('company3reasonforsignoff', company3reasonforsignoff);


        sessionStorage.setItem('company4', company4);
        sessionStorage.setItem('company4vessel', company4vessel);
        sessionStorage.setItem('company4type', company4type);
        sessionStorage.setItem('company4flag', company4flag);
        sessionStorage.setItem('company4grt', company4grt);
        sessionStorage.setItem('company4bhp', company4bhp);
        sessionStorage.setItem('company4rank', company4rank);
        sessionStorage.setItem('company4from', company4from);
        sessionStorage.setItem('company4to', company4to);
        sessionStorage.setItem('company4reasonforsignoff', company4reasonforsignoff);


        sessionStorage.setItem('company5', company5);
        sessionStorage.setItem('company5vessel', company5vessel);
        sessionStorage.setItem('company5type', company5type);
        sessionStorage.setItem('company5flag', company5flag);
        sessionStorage.setItem('company5grt', company5grt);
        sessionStorage.setItem('company5bhp', company5bhp);
        sessionStorage.setItem('company5rank', company5rank);
        sessionStorage.setItem('company5from', company5from);
        sessionStorage.setItem('company5to', company5to);
        sessionStorage.setItem('company5reasonforsignoff', company5reasonforsignoff);


        sessionStorage.setItem('company6', company6);
        sessionStorage.setItem('company6vessel', company6vessel);
        sessionStorage.setItem('company6type', company6type);
        sessionStorage.setItem('company6flag', company6flag);
        sessionStorage.setItem('company6grt', company6grt);
        sessionStorage.setItem('company6bhp', company6bhp);
        sessionStorage.setItem('company6rank', company6rank);
        sessionStorage.setItem('company6from', company6from);
        sessionStorage.setItem('company6to', company6to);
        sessionStorage.setItem('company6reasonforsignoff', company6reasonforsignoff);


        sessionStorage.setItem('chemco', chemco);
        sessionStorage.setItem('chemcogrt', chemcogrt);
        sessionStorage.setItem('chemcobhp', chemcobhp);
        sessionStorage.setItem('chemcorank', chemcorank);
        sessionStorage.setItem('chemcofrom', chemcofrom);
        sessionStorage.setItem('chemcoto', chemcoto);
        sessionStorage.setItem('chemcoreasonforsignoff', chemcoreasonforsignoff);


        sessionStorage.setItem('gasco', gasco);
        sessionStorage.setItem('gascogrt', gascogrt);
        sessionStorage.setItem('gascobhp', gascobhp);
        sessionStorage.setItem('gascorank', gascorank);
        sessionStorage.setItem('gascofrom', gascofrom);
        sessionStorage.setItem('gascoto', gascoto);
        sessionStorage.setItem('gascoreasonforsignoff', gascoreasonforsignoff);


        sessionStorage.setItem('dce', dce);
        sessionStorage.setItem('dcegrt', dcegrt);
        sessionStorage.setItem('dcebhp', dcebhp);
        sessionStorage.setItem('dcerank', dcerank);
        sessionStorage.setItem('dcefrom', dcefrom);
        sessionStorage.setItem('dceto', dceto);
        sessionStorage.setItem('dcereasonforsignoff', dcereasonforsignoff);


        sessionStorage.setItem('huet', huet);
        sessionStorage.setItem('huetgrt', huetgrt);
        sessionStorage.setItem('huetbhp', huetbhp);
        sessionStorage.setItem('huetrank', huetrank);
        sessionStorage.setItem('huetfrom', huetfrom);
        sessionStorage.setItem('huetto', huetto);
        sessionStorage.setItem('huetreasonforsignoff', huetreasonforsignoff);


        sessionStorage.setItem('sso', sso);
        sessionStorage.setItem('ssogrt', ssogrt);
        sessionStorage.setItem('ssobhp', ssobhp);
        sessionStorage.setItem('ssorank', ssorank);
        sessionStorage.setItem('ssofrom', ssofrom);
        sessionStorage.setItem('ssoto', ssoto);
        sessionStorage.setItem('ssoreasonforsignoff', ssoreasonforsignoff);


        sessionStorage.setItem('soc', soc);
        sessionStorage.setItem('socgrt', socgrt);
        sessionStorage.setItem('socbhp', socbhp);
        sessionStorage.setItem('socrank', socrank);
        sessionStorage.setItem('socfrom', socfrom);
        sessionStorage.setItem('socto', socto);
        sessionStorage.setItem('socreasonforsignoff', socreasonforsignoff);

        sessionStorage.setItem('wc', wc);
        sessionStorage.setItem('wcgrt', wcgrt);
        sessionStorage.setItem('wcbhp', wcbhp);
        sessionStorage.setItem('wcrank', wcrank);
        sessionStorage.setItem('wcfrom', wcfrom);
        sessionStorage.setItem('wcto', wcto);
        sessionStorage.setItem('wcreasonforsignoff', wcreasonforsignoff);






        navigate('/experience'); // Adjust the navigation path as required
    };

   
        // Load data from sessionStorage when component mounts
        
        useEffect(() => {
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






    }, []);

    // Generate PDF content
//     const getContentInPDF = () => {
//         const element = document.createElement('div');
//         element.innerHTML = `
//         <header>
//             <div style="width: 100%; padding: 10px 0;">
//                 <div style="display: flex; align-items: center;">
//                     <div style="flex: 1; text-align: center;">
//                         <img src="${logo}" alt="Logo" style="height: 70px;" />
//                     </div>
//                     <div style="margin-left:300px">
//                         <img src="${logo1}" alt="Euro+BAR Logo" style="height: 60px; width: 150px;" />
//                     </div>
//                     <div style="text-align: left;">
//                         <p style="color: #0056b3; font-weight: bold; margin: 0; font-size: 15px;">ISO: 9001 : 2015</p>
//                     </div>
//                 </div>
//                 <div style="margin-top: 15px;">
//                     <h2 style="margin-left: 40px; color: #0056b3;letter-spacing: 2px; font-weight: bold;">SHREYSUN GLOBAL SHIPPING PVT.LTD.</h2>
//                     <p style="color: #0056b3; font-weight: bold; margin-left: 45px; font-size: 14px;">
//                         RSPL-MUM-16118 Valid Till: 21.10.2027 & Compliance MLC: 2006 CIN: U63030UP2021PTC141179
//                     </p>
//                     <p style="margin-left: 50px; font-size: 14px;">C-69 SIKARWAR TOWER VIBHUTI KHAND GOMTI NAGAR LUCKNOW U.P-INDIA-226010.</p>
//                     <p style="margin-left: 100px; font-size: 15px;">Email: admin@shreysun.com - Website: www.shreysun.com - Tel: 0522-4305897</p>
//                 </div>
//             </div>
//             <hr style="border: 2px solid blue; width: 100%; margin-top: 10px;">
//         </header>
//         <h5 style="margin-top:20px;">5. LICENCE/ CERTIFICATES OF COMPETENCY </h5>
//         <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
//             <tr>
//                 <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">STCW COURSES</th>
//                 <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">certificate no</th>
//                 <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">issue date</th>
//                 <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">Date of Expiry</th>
//                 <th style="padding: 8px; background-color: #f2f2f2; border: 1px solid #000;">issuing authority</th>
//             </tr>
//             <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Pre Sea-training</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoSTCW}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedateSTCW}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydateSTCW}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissueSTCW}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthoritySTCW}</td>
//             </tr>

//            <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Personal safety and Social Responsibility (PSSR)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoPSSR}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedatePSSR}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydatePSSR}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissuePSSR}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthorityPSSR}</td>
//             </tr>
//  <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Medical First Aid(MFA)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoMFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedateMFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydateMFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissueMFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthorityMFA}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Elementary First Aid(EFA)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoEFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedateEFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydateEFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissueEFA}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthorityEFA}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Personal Survival Techniques(PST) </b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoPST}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedatePST}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydatePST}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissuePST}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthorityPST}</td>
//             </tr>

//  <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Proficiency in Survival Craft and Rescue Boats(PSCRB)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificatenoPSCRB}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedatePSCRB}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydatePSCRB}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissuePSCRB}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthorityPSCRB}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Fire Prevention and Fire fighting (FPFF)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>
//  <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Medicare</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Advanced Fire Fighting(AFF)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Radar Observer Simulating Course(ROC)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Global Maritime Distress and Safty System (GMDSS)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>GMDSS Endorsement</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Radar ARPA and Navigation Simulation Course (RANSCO / NARAS)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>navigation Control</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>
//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Certificate Revel Course</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Simulator Training</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Bridge Team Management (BTM)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Electonic Chart Display and Information System (ECDIS)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Large Vessel Handling Simulator Course</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Engine Room Simulator</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>ICE Navigation</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Oil Tanker Familiarization</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>

//              <tr>
//                 <td style="padding: 8px; border: 1px solid #000;"><b>Specialized Training Programmed on Oil Tanker Operation(TASCO)</b></td>
//                 <td style="padding: 8px; border: 1px solid #000;">${certificateno}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuedate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${expirydate}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${placeofissue}</td>
//                 <td style="padding: 8px; border: 1px solid #000;">${issuingauthority}</td>
//             </tr>
//         </table>
//         `;

//         // Configure and generate the PDF with html2pdf
//         html2pdf()
//             .set({
//                 margin: [10, 10, 10, 10], // top, right, bottom, left (in mm)
//                 filename: 'Form_Data.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2, useCORS: true },
//                 jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//             })
//             .from(element)
//             .save()
//             .catch(err => console.error("Error generating PDF:", err));
//     };

    const handlePreviousClick = () => {
        navigate('/licence');
    };

    return (
        <div className="form-container">
            <div className="card">
                <h2>Registration Form</h2>
                <br />
                <h5 className="text-start">STCW AND CERTIFICATES:</h5>
                <form onSubmit={handleSubmit}>
                    {/* STCW Section */}
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoSTCW">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoSTCW"
                            value={certificatenoSTCW}
                            onChange={(e) => setCertificatenoSTCW(e.target.value)}
                            
                        />
                    </div>
                    
                    <div className="col-md-2 ">
                        <label htmlFor="issuedateSTCW">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateSTCW"
                            value={issuedateSTCW}
                            onChange={(e) => setIssuedateSTCW(e.target.value)}
                        
                        />
                    </div>
                    
                    <div className="col-md-2 ">
                        <label htmlFor="expirydateSTCW">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateSTCW"
                            value={expirydateSTCW}
                            onChange={(e) => setExpirydateSTCW(e.target.value)}
                            
                        />
                    </div>
                    
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissueSTCW">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueSTCW"
                            value={placeofissueSTCW}
                            onChange={(e) => setPlaceofissueSTCW(e.target.value)}
                            
                        />
                    </div>
                    
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthoritySTCW"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthoritySTCW"
                            value={issuingauthoritySTCW}
                            onChange={(e) => setIssuingauthoritySTCW(e.target.value)}
                            
                        />
                    </div>
</div>
</div>
                    {/* PSSR Section */}
                    <h5 className="text-start">Personal Safety and Social Responsibility (PSSR):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoPSSR"
                            value={certificatenoPSSR}
                            onChange={(e) => setCertificatenoPSSR(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedatePSSR"
                            value={issuedatePSSR}
                            onChange={(e) => setIssuedatePSSR(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydatePSSR"
                            value={expirydatePSSR}
                            onChange={(e) => setExpirydatePSSR(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissuePSSR"
                            value={placeofissuePSSR}
                            onChange={(e) => setPlaceofissuePSSR(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityPSSR"
                            value={issuingauthorityPSSR}
                            onChange={(e) => setIssuingauthorityPSSR(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <h5 className="text-start">Medical First Aid(MFA):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoMFA"
                            value={certificatenoMFA}
                            onChange={(e) => setCertificatenoMFA(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateMFA"
                            value={issuedateMFA}
                            onChange={(e) => setIssuedateMFA(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateMFA"
                            value={expirydateMFA}
                            onChange={(e) => setExpirydateMFA(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueMFA"
                            value={placeofissueMFA}
                            onChange={(e) => setPlaceofissueMFA(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityMFA"
                            value={issuingauthorityMFA}
                            onChange={(e) => setIssuingauthorityMFA(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    <h5 className="text-start">Elementary First Aid:</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoPSSR"
                            value={certificatenoPSSR}
                            onChange={(e) => setCertificatenoEFA(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateEFA"
                            value={issuedateEFA}
                            onChange={(e) => setIssuedateEFA(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateEFA"
                            value={expirydateEFA}
                            onChange={(e) => setExpirydateEFA(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueEFA"
                            value={placeofissueEFA}
                            onChange={(e) => setPlaceofissueEFA(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityEFA"
                            value={issuingauthorityEFA}
                            onChange={(e) => setIssuingauthorityEFA(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    <h5 className="text-start">Personal Survival Techniques (PST):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoPST"
                            value={certificatenoPST}
                            onChange={(e) => setCertificatenoPST(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedatePST"
                            value={issuedatePST}
                            onChange={(e) => setIssuedatePST(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydatePST"
                            value={expirydatePST}
                            onChange={(e) => setExpirydatePST(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissuePST"
                            value={placeofissuePST}
                            onChange={(e) => setPlaceofissuePST(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityPSSR"
                            value={issuingauthorityPST}
                            onChange={(e) => setIssuingauthorityPST(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    
                    <h5 className="text-start">Personal Survival Techniques (PST):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoPST"
                            value={certificatenoPST}
                            onChange={(e) => setCertificatenoPST(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedatePST"
                            value={issuedatePST}
                            onChange={(e) => setIssuedatePST(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydatePST"
                            value={expirydatePST}
                            onChange={(e) => setExpirydatePST(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissuePST"
                            value={placeofissuePST}
                            onChange={(e) => setPlaceofissuePST(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityPSSR"
                            value={issuingauthorityPST}
                            onChange={(e) => setIssuingauthorityPST(e.target.value)}
                        
                        />
                    </div>

                    </div>  
                    </div>

                    <h5 className="text-start">Medicare :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoMED"
                            value={certificatenoMED}
                            onChange={(e) => setCertificatenoMED(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateMED"
                            value={issuedateMED}
                            onChange={(e) => setIssuedateMED(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateMED"
                            value={expirydateMED}
                            onChange={(e) => setExpirydateMED(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueMED"
                            value={placeofissueMED}
                            onChange={(e) => setPlaceofissueMED(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityMED"
                            value={issuingauthorityMED}
                            onChange={(e) => setIssuingauthorityMED(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <h5 className="text-start">fire Prevention and Fire Fighting (FPFF):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoFPFF"
                            value={certificatenoFPFF}
                            onChange={(e) => setCertificatenoFPFF(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateFPFF"
                            value={issuedateFPFF}
                            onChange={(e) => setIssuedateFPFF(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateFPFF"
                            value={expirydateFPFF}
                            onChange={(e) => setExpirydateFPFF(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueFPFF"
                            value={placeofissueFPFF}
                            onChange={(e) => setPlaceofissueFPFF(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityFPFF"
                            value={issuingauthorityFPFF}
                            onChange={(e) => setIssuingauthorityFPFF(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    <h5 className="text-start">Advanced Fire fighting (AFF):</h5>
                    <br />                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoAFF"
                            value={certificatenoAFF}
                            onChange={(e) => setCertificatenoAFF(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateAFF"
                            value={issuedateAFF}
                            onChange={(e) => setIssuedateAFF(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateAFF"
                            value={expirydateAFF}
                            onChange={(e) => setExpirydateAFF(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueAFF"
                            value={placeofissueAFF}
                            onChange={(e) => setPlaceofissueAFF(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityAFF"
                            value={issuingauthorityAFF}
                            onChange={(e) => setIssuingauthorityAFF(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    <h5 className="text-start">Radar Observation Simulator Course (ROC):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoROC"
                            value={certificatenoROC}
                            onChange={(e) => setCertificatenoROC(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateROC"
                            value={issuedateROC}
                            onChange={(e) => setIssuedateROC(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateROC"
                            value={expirydateROC}
                            onChange={(e) => setExpirydateROC(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueROC"
                            value={placeofissueROC}
                            onChange={(e) => setPlaceofissueROC(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityROC"
                            value={issuingauthorityROC}
                            onChange={(e) => setIssuingauthorityROC(e.target.value)}
                    
                        />
                    </div>
                    </div>
                    </div>


                    
                    <h5 className="text-start">Automatic Radar Plotting Aids (ARPA):</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoARPAC"
                            value={certificatenoARPA}
                            onChange={(e) => setCertificatenoARPA(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateARPA"
                            value={issuedateARPA}
                            onChange={(e) => setIssuedateARPA(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateARPA"
                            value={expirydateARPA}
                            onChange={(e) => setExpirydateARPA(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueARPA"
                            value={placeofissueARPA}
                            onChange={(e) => setPlaceofissueARPA(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityARPA"
                            value={issuingauthorityARPA}
                            onChange={(e) => setIssuingauthorityARPA(e.target.value)}
                        
                        />
                    </div>
                    </div>
                    </div>


                    
                    <h5 className="text-start">GMDSS Endorsement:</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoGM"
                            value={certificatenoGM}
                            onChange={(e) => setCertificatenoGM(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateGM"
                            value={issuedateGM}
                            onChange={(e) => setIssuedateGM(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateGM"
                            value={expirydateGM}
                            onChange={(e) => setExpirydateGM(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueGM"
                            value={placeofissueGM}
                            onChange={(e) => setPlaceofissueGM(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityGM"
                            value={issuingauthorityGM}
                            onChange={(e) => setIssuingauthorityGM(e.target.value)}
            
                        />
                    </div>
                    </div>
                    </div>



                    
                    <h5 className="text-start">Global maritime Distress and Safety System (GMDSS) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoGMDSS"
                            value={certificatenoGMDSS}
                            onChange={(e) => setCertificatenoGMDSS(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateGMDSS"
                            value={issuedateGMDSS}
                            onChange={(e) => setIssuedateGMDSS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateGMDSS"
                            value={expirydateGMDSS}
                            onChange={(e) => setExpirydateGMDSS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueGMDSS"
                            value={placeofissueGMDSS}
                            onChange={(e) => setPlaceofissueGMDSS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityGMDSS"
                            value={issuingauthorityGMDSS}
                            onChange={(e) => setIssuingauthorityGMDSS(e.target.value)}
                    
                        />
                    </div>
                    </div>
                    </div>


                    <h5 className="text-start">Navigation Control :</h5>
                    <br />                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoNC"
                            value={certificatenoNC}
                            onChange={(e) => setCertificatenoNC(e.target.value)}
                        
                        />
                    </div>
                
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateNC"
                            value={issuedateNC}
                            onChange={(e) => setIssuedateNC(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateNC"
                            value={expirydateNC}
                            onChange={(e) => setExpirydateNC(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueNC"
                            value={placeofissueNC}
                            onChange={(e) =>  setPlaceofissueNC(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityNC"
                            value={issuingauthorityNC}
                            onChange={(e) => setIssuingauthorityNC(e.target.value)}
                    
                        />
                    </div>
                    </div>
                    </div>


                    <h5 className="text-start">Certificate Revel Course (CRC) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoCRC"
                            value={certificatenoCRC}
                            onChange={(e) => setCertificatenoCRC(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateCRC"
                            value={issuedateCRC}
                            onChange={(e) => setIssuedateCRC(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateCRC"
                            value={expirydateCRC}
                            onChange={(e) => setExpirydateCRC(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueCRC"
                            value={placeofissueCRC}
                            onChange={(e) => setPlaceofissueCRC(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityCRC"
                            value={issuingauthorityCRC}
                            onChange={(e) => setIssuingauthorityCRC(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <h5 className="text-start"> Simulator Training (ST) :</h5>
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoST"
                            value={certificatenoST}
                            onChange={(e) => setCertificatenoST(e.target.value)}
            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateST"
                            value={issuedateST}
                            onChange={(e) => setIssuedateST(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateST"
                            value={expirydateST}
                            onChange={(e) => setExpirydateST(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueST"
                            value={placeofissueST}
                            onChange={(e) => setPlaceofissuST(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityNC"
                            value={issuingauthorityNC}
                            onChange={(e) => setIssuingauthorityST(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    



                    <h5 className="text-start"> Bridge Team Management (BTM) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoBTM"
                            value={certificatenoBTM}
                            onChange={(e) => setCertificatenoBTM(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateBTM"
                            value={issuedateBTM}
                            onChange={(e) => setIssuedateBTM(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateBTM"
                            value={expirydateBTM}
                            onChange={(e) => setExpirydateBTM(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueBTM"
                            value={placeofissueBTM}
                            onChange={(e) => setPlaceofissueBTM(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityNC"
                            value={issuingauthorityNC}
                            onChange={(e) => setIssuingauthorityST(e.target.value)}
                        
                        />
                    </div></div></div>




                    <h5 className="text-start"> Electronic Chart Display and Information System (ECDIS) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoECDIS"
                            value={certificatenoECDIS}
                            onChange={(e) => setCertificatenoECDIS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateECDIS"
                            value={issuedateECDIS}
                            onChange={(e) => setIssuedateECDIS(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateECDIS"
                            value={expirydateECDIS}
                            onChange={(e) => setExpirydateECDIS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueECDIS"
                            value={placeofissueECDIS}
                            onChange={(e) => setPlaceofissueECDIS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityECDIS"
                            value={issuingauthorityECDIS}
                            onChange={(e) => setIssuingauthorityECDIS(e.target.value)}
                            
                        />
                    </div>
                    </div>

                    </div>



                    
                    <h5 className="text-start"> Bridge Resourse Management (BRM/ERM/VRM) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoBRM"
                            value={certificatenoBRM}
                            onChange={(e) => setCertificatenoBRM(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateBRM"
                            value={issuedateBRM}
                            onChange={(e) => setIssuedateBRM(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateBRM"
                            value={expirydateBRM}
                            onChange={(e) => setExpirydateBRM(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueBRM"
                            value={placeofissueBRM}
                            onChange={(e) => setPlaceofissueBRM(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                                           <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityBRM"
                            value={issuingauthorityBRM}
                            onChange={(e) => setIssuingauthorityBRM(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <h6 className="text-start"> Large Vessel Handling Simulator Course :</h6>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoLVHSC"
                            value={certificatenoLVHSC}
                            onChange={(e) => setCertificatenoLVHSC(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateLVHSC"
                            value={issuedateLVHSC}
                            onChange={(e) => setIssuedateLVHSC(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateLVHSC"
                            value={expirydateLVHSC}
                            onChange={(e) => setExpirydateLVHSC(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                                               <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueLVHSC"
                            value={placeofissueLVHSC}
                            onChange={(e) => setPlaceofissueLVHSC(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityLVHSC"
                            value={issuingauthorityLVHSC}
                            onChange={(e) => setIssuingauthorityLVHSC(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <h5 className="text-start"> Engine Room Simulator (ERS) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoERS"
                            value={certificatenoERS}
                            onChange={(e) => setCertificatenoERS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateERS"
                            value={issuedateERS}
                            onChange={(e) => setIssuedateERS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateERS"
                            value={expirydateERS}
                            onChange={(e) => setExpirydateERS(e.target.value)}
        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueERS"
                            value={placeofissueERS}
                            onChange={(e) => setPlaceofissueERS(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityERS"
                            value={issuingauthorityERS}
                            onChange={(e) => setIssuingauthorityERS(e.target.value)}
                    
                        />
                    </div>
                    </div>
                    </div>



                    <h5 className="text-start"> ICE Navigation  :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoICE"
                            value={certificatenoICE}
                            onChange={(e) => setCertificatenoICE(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateICE"
                            value={issuedateICE}
                            onChange={(e) => setIssuedateICE(e.target.value)}
                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateICE"
                            value={expirydateICE}
                            onChange={(e) => setExpirydateICE(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                      <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueICE"
                            value={placeofissueICE}
                            onChange={(e) => setPlaceofissueICE(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                                          <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityICE"
                            value={issuingauthorityICE}
                            onChange={(e) => setIssuingauthorityICE(e.target.value)}
                        
                        />
                    </div>
                    </div>
                    </div>


                    
                    <h5 className="text-start"> Oil Tanker Familiarization (OTF) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoOTF"
                            value={certificatenoOTF}
                            onChange={(e) => setCertificatenoOTF(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                                             <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateOTF"
                            value={issuedateOTF}
                            onChange={(e) => setIssuedateOTF(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateOTF"
                            value={expirydateOTF}
                            onChange={(e) => setExpirydateOTF(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueOTF"
                            value={placeofissueOTF}
                            onChange={(e) => setPlaceofissueOTF(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityOTF"
                            value={issuingauthorityOTF}
                            onChange={(e) => setIssuingauthorityOTF(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>

                    <h5 className="text-start"> Specialized Training Programmed On Oil Tanker Operation (TASCO) :</h5>
                    <br />
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Certificate No:</label>
                        <input
                            type="text"
                            id="certificatenoTASCO"
                            value={certificatenoTASCO}
                            onChange={(e) => setCertificatenoTASCO(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Date of Issue:</label>
                        <input
                            type="date"
                            id="issuedateTASCO"
                            value={issuedateTASCO}
                            onChange={(e) => setIssuedateTASCO(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Date of Expiry:</label>
                        <input
                            type="date"
                            id="expirydateTASCO"
                            value={expirydateTASCO}
                            onChange={(e) => setExpirydateTASCO(e.target.value)}
                    
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">Place of Issue:</label>
                        <input
                            type="text"
                            id="placeofissueTASCO"
                            value={placeofissueTASCO}
                            onChange={(e) => setPlaceofissueTASCO(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                      <label htmlFor="issuingauthorityPSSR"> Authority:</label>
                        <input
                            type="text"
                            id="issuingauthorityTASCO"
                            value={issuingauthorityTASCO}
                            onChange={(e) => setIssuingauthorityTASCO(e.target.value)}
                            
                        />
                    </div>
                    </div>

                    </div>


                    
                    <h3 className="text-start"> Company  :</h3>
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Company 1:</label>
                        <input
                            type="text"
                            id="company1"
                            value={company1}
                            onChange={(e) => setCompany1(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Vessel:</label>
                        <input
                            type="text"
                            id="company1vessel"
                            value={company1vessel}
                            onChange={(e) => setCompany1vessel(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Type:</label>
                        <input
                            type="text"
                            id="company1type"
                            value={company1type}
                            onChange={(e) => setCompany1type(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">flag:</label>
                        <input
                            type="text"
                            id="company1flag"
                            value={company1flag}
                            onChange={(e) => setCompany1flag(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="company1grt"
                            value={company1grt}
                            onChange={(e) => setCompany1grt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="company1bhp"
                            value={company1bhp}
                            onChange={(e) => setCompany1bhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="company1rank"
                            value={company1rank}
                            onChange={(e) => setCompany1rank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="company1from"
                            value={company1from}
                            onChange={(e) => setCompany1from(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="company1to"
                            value={company1to}
                            onChange={(e) => setCompany1to(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="text"
                            id="company1reasonforsignoff"
                            value={company1reasonforsignoff}
                            onChange={(e) => setCompany1reasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Company 2:</label>
                        <input
                            type="text"
                            id="company2"
                            value={company2}
                            onChange={(e) => setCompany2(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Vessel:</label>
                        <input
                            type="text"
                            id="company2vessel"
                            value={company2vessel}
                            onChange={(e) => setCompany2vessel(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Type:</label>
                        <input
                            type="text"
                            id="company2type"
                            value={company2type}
                            onChange={(e) => setCompany2type(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">flag:</label>
                        <input
                            type="text"
                            id="company2flag"
                            value={company2flag}
                            onChange={(e) => setCompany2flag(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="company2grt"
                            value={company2grt}
                            onChange={(e) => setCompany2grt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="company2bhp"
                            value={company2bhp}
                            onChange={(e) => setCompany2bhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="company2rank"
                            value={company2rank}
                            onChange={(e) => setCompany2rank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="company2from"
                            value={company2from}
                            onChange={(e) => setCompany2from(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="company2to"
                            value={company2to}
                            onChange={(e) => setCompany2to(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="company2reasonforsignoff"
                            value={company2reasonforsignoff}
                            onChange={(e) => setCompany2reasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    
                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-2 ">
                        <label htmlFor="certificatenoPSSR">Company 3:</label>
                        <input
                            type="text"
                            id="company3"
                            value={company3}
                            onChange={(e) => setCompany3(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">Vessel:</label>
                        <input
                            type="text"
                            id="company3vessel"
                            value={company3vessel}
                            onChange={(e) => setCompany3vessel(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="expirydatePSSR">Type:</label>
                        <input
                            type="text"
                            id="company3type"
                            value={company3type}
                            onChange={(e) => setCompany3type(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="placeofissuePSSR">flag:</label>
                        <input
                            type="text"
                            id="company3flag"
                            value={company3flag}
                            onChange={(e) => setCompany3flag(e.target.value)}
                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="company3grt"
                            value={company3grt}
                            onChange={(e) => setCompany3grt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="company3bhp"
                            value={company3bhp}
                            onChange={(e) => setCompany3bhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="company3rank"
                            value={company3rank}
                            onChange={(e) => setCompany3rank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="company3from"
                            value={company3from}
                            onChange={(e) => setCompany3from(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="company3to"
                            value={company3to}
                            onChange={(e) => setCompany3to(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="company3reasonforsignoff"
                            value={company3reasonforsignoff}
                            onChange={(e) => setCompany3reasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <label htmlFor="certificatenoPSSR">Specialized Training Programmed on Chemical Tanker OPerarion (CHEMCO):</label>
                        <input
                            type="text"
                            id="chemco"
                            value={chemco}
                            onChange={(e) => setCHEMCO(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="chemcogrt"
                            value={chemcogrt}
                            onChange={(e) => setCHEMCOgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="chemcobhp"
                            value={chemcobhp}
                            onChange={(e) => setCHEMCObhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="chemcorank"
                            value={chemcorank}
                            onChange={(e) => setCHEMCOrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="chemcofrom"
                            value={chemcofrom}
                            onChange={(e) => setCHEMCOfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="chemcoto"
                            value={chemcoto}
                            onChange={(e) => setCHEMCOto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="chemcoreasonforsignoff"
                            value={chemcoreasonforsignoff}
                            onChange={(e) => setCHEMCOreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <label htmlFor="certificatenoPSSR">Specialized Training Programmed on Liquefied Gas Tanker Operation (GASCO):</label>
                        <input
                            type="text"
                            id="gasco"
                            value={gasco}
                            onChange={(e) => setGASCO(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="gascocogrt"
                            value={gascogrt}
                            onChange={(e) => setGASCOgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="gascobhp"
                            value={gascobhp}
                            onChange={(e) => setGASCObhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="gascorank"
                            value={gascorank}
                            onChange={(e) => setGASCOrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="gascofrom"
                            value={gascofrom}
                            onChange={(e) => setGASCOfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="gascoto"
                            value={gascoto}
                            onChange={(e) => setGASCOto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="gascoreasonforsignoff"
                            value={gascoreasonforsignoff}
                            onChange={(e) => setGASCOreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>



                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <label htmlFor="certificatenoPSSR">Dangerous Cargo Endorsement (DCE):</label>
                        <input
                            type="text"
                            id="dce"
                            value={dce}
                            onChange={(e) => setDCE(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="dcegrt"
                            value={dcegrt}
                            onChange={(e) => setDCEgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="dcebhp"
                            value={dcebhp}
                            onChange={(e) => setDCEbhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="dcecorank"
                            value={dcerank}
                            onChange={(e) => setDCErank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="dcefrom"
                            value={dcefrom}
                            onChange={(e) => setDCEfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="dceto"
                            value={dceto}
                            onChange={(e) => setDCEto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="dcecoreasonforsignoff"
                            value={dcereasonforsignoff}
                            onChange={(e) => setDCEreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <label htmlFor="certificatenoPSSR">Helicopter Under Escape Techniques (HUET):</label>
                        <input
                            type="text"
                            id="HUET"
                            value={huet}
                            onChange={(e) => setHUET(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="huetgrt"
                            value={huetgrt}
                            onChange={(e) => setHUETgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="huetbhp"
                            value={huetbhp}
                            onChange={(e) => setHUETbhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="huetcorank"
                            value={huetrank}
                            onChange={(e) => setHUETrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="huetfrom"
                            value={huetfrom}
                            onChange={(e) => setHUETfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="huetto"
                            value={huetto}
                            onChange={(e) => setHUETto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="huetreasonforsignoff"
                            value={huetreasonforsignoff}
                            onChange={(e) => setHUETreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <label htmlFor="certificatenoPSSR">Ship Security Officer (SSO):</label>
                        <input
                            type="text"
                            id="sso"
                            value={sso}
                            onChange={(e) => setSSO(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="ssogrt"
                            value={ssogrt}
                            onChange={(e) => setSSOgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="ssobhp"
                            value={ssobhp}
                            onChange={(e) => setSSObhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="ssorank"
                            value={ssorank}
                            onChange={(e) => setSSOrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="ssofrom"
                            value={ssofrom}
                            onChange={(e) => setSSOfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="ssoto"
                            value={ssoto}
                            onChange={(e) => setSSOto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="ssoreasonforsignoff"
                            value={ssoreasonforsignoff}
                            onChange={(e) => setSSOreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <div className="form-group">
                        <br />
                    <div className='row mt-3'>
                        
                    <div className="col-md-6 ">
                        
                        <label htmlFor="certificatenoPSSR">International Ship and port Facility Security ISPS (SOC):</label>
                        <input
                            type="text"
                            id="soc"
                            value={soc}
                            onChange={(e) => setSOC(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="socgrt"
                            value={socgrt}
                            onChange={(e) => setSOCgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="socbhp"
                            value={socbhp}
                            onChange={(e) => setSOCbhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="socrank"
                            value={socrank}
                            onChange={(e) => setSOCrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="socfrom"
                            value={socfrom}
                            onChange={(e) => setSOCfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="socto"
                            value={socto}
                            onChange={(e) => setSOCto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="socreasonforsignoff"
                            value={socreasonforsignoff}
                            onChange={(e) => setSOCreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>


                    <div className="form-group">
                    <div className='row mt-3'>
                    <div className="col-md-6 ">
                        <br />
                        <label htmlFor="certificatenoPSSR">6G,3G,2G Welder Certificate (WC):</label>
                        <input
                            type="text"
                            id="wc"
                            value={wc}
                            onChange={(e) => setWC(e.target.value)}
                            
                        />
                    </div>
                  
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">GRT:</label>
                        <input
                            type="text"
                            id="wcgrt"
                            value={wcgrt}
                            onChange={(e) => setWCgrt(e.target.value)}
                    
                        />
                    </div>



                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuedatePSSR">BHP:</label>
                        <input
                            type="text"
                            id="wcbhp"
                            value={wcbhp}
                            onChange={(e) => setWCbhp(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                     <br />
                        <label htmlFor="expirydatePSSR">RANK:</label>
                        <input
                            type="text"
                            id="wcrank"
                            value={wcrank}
                            onChange={(e) => setWCrank(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="placeofissuePSSR">FROM:</label>
                        <input
                            type="date"
                            id="wcfrom"
                            value={wcfrom}
                            onChange={(e) => setWCfrom(e.target.value)}
                            
                        />
                    </div>
                    <div className="col-md-2 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">TO:</label>
                        <input
                            type="date"
                            id="wcto"
                            value={wcto}
                            onChange={(e) => setWCto(e.target.value)}
                            
                        />
                    </div>

                    <div className="col-md-3 ">
                        <br />
                        <label htmlFor="issuingauthorityPSSR">reason for sign off:</label>
                        <input
                            type="text"
                            id="wcreasonforsignoff"
                            value={wcreasonforsignoff}
                            onChange={(e) => setWCreasonforsignoff(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    </div>
                    

{/* 
                    
                    <button type="submit">Save</button>
                    <button type="button" onClick={getContentInPDF}>Generate PDF</button> */}
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
    );
};