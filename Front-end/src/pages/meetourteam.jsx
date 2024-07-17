import Navbar from "../component/Navbar";
import logo from "../asset/Gojo-logo.png";
import Footer from "../component/Footer";



const Meetourteam = ()=>{

    return (
        <>
            <Navbar/>
    
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex items-center justify-center gap-5">

                    <div className="w-1/5 flex flex-col p-2 font-bold items-center justify-center  bg-[#F2F0F2] rounded-2xl">


                    <div className="w-1/2 p-4 bg-white rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> mistre danel</p>
                    <p>team lead</p>
                    <p>back-end developer</p>
                    </div>

                    <div className="w-1/5 flex flex-col font-bold items-center justify-center bg-[#F2F0F2] rounded-2xl">


                    <div className="w-1/2 p-4 bg-white  rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> Natnael necho</p>
                    <p>UI/UX designer</p>
                    <p>Front-end developer</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">

                    <div className="w-1/5 flex flex-col p-2 font-bold items-center justify-center  bg-[#F2F0F2] rounded-2xl">


                    <div className="w-1/2 p-4 bg-white rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> abenezer mulugeta</p>
                    <p>back-end developer</p>
                    </div>

                    <div className="font-bold text-4xl m-20 text-center"> our team</div>
                    <div className="w-1/5 flex flex-col font-bold items-center justify-center bg-[#F2F0F2] rounded-2xl">


                    <div className="w-1/2 p-4 bg-white  rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> abenezer.mulugeta</p>
                    <p>front-end developer</p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5">

                    <div className="w-1/5 flex flex-col p-2 font-bold items-center justify-center  bg-[#F2F0F2] rounded-2xl">


                    <div className="w-1/2 p-4 bg-white rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> keiredin aman</p>
                    <p>core-dev back-end developer</p>
                    </div>


                    <div className="w-1/5 flex flex-col font-bold items-center justify-center bg-[#F2F0F2] rounded-2xl">

                    <div className="w-1/2 p-4 bg-white  rounded-full">
                    <img
                        src={logo}
                        className="rounded-full"
                    />
                    </div>
                    <p> natnael tafesse</p>
                    <p>head of education</p>
                    </div>
                </div>

            </div>
                 
            <Footer/>
        </>
    );

}

export default  Meetourteam;