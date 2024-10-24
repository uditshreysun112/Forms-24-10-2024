import logo from "./assets/logo_of_forms.png";
import logo1 from "./assets/Euro+BAR.png";

export const Header = () => {
    return (
        <> 
        <header >
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Logo on the left */}
                    <div className="col-12 col-md-3 text-center text-md-start">
                        <img src={logo} className="img-fluid" alt="Logo" style={{ height: '200px' }} />
                    </div>
                    
                    {/* Right section with ISO and company info */}
                    <div className="col-12 col-md-9">
                        <div className="row align-items-center">
                            <div className="col-6 d-flex justify-content-center justify-content-md-end">
                                <img src={logo1} className="img-fluid" style={{ height: '80px', width: '200px' }} alt="Euro+BAR Logo" />
                            </div>
                            <div className="col-6 text-center text-md-start">
                                <p className="text-primary fw-bold mb-0" style={{ fontSize: '20px' }}>IOS: 9001 : 2015</p>
                            </div>
                        </div>

                        <div className="mt-3 text-md-start">
                            <h1 style={{width:'100%'}} className="text-primary fw-bold">SHREYSUN GLOBAL SHIPPING PVT.LTD.</h1>
                            <p className="text-primary fw-bold mb-0">RSPL-MUM-16118 Valid Till: 21.10.2027 & Compliance MLC: 2006 CIN: U6303UP2021PTC141179</p>
                            <p className="mb-0">
                                <span style={{ fontSize: '18px' }}>C-69 SIKARWAR TOWER VIBHUTI KHAND GOMTI NAGAR LUCKNOW UP-INDIA-226010.</span>
                                <br />
                                <span>Email: info@shreysunglobal.com - Website: www.shreysunglobal.com - Tel: 0522-4305897</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hrline" />
        </header>
        </>
    );
};
