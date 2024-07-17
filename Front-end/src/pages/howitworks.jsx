import Navbar from "../component/Navbar";
import joinus from "../asset/joinus.jpg";
import logo from "../asset/Gojo-logo.png";
import subscribe from "../asset/subscribe.avif";
import selecthouse from "../asset/selecthouse.avif";
import contactowner from "../asset/contactowner.jpg";
import deal from "../asset/deal.jpg";
import uploadimage from "../asset/uploadimage.jpg";
import Footer from "../component/Footer";

const Card =({image})=>{
    console.log(image)
    return(
        <>
        <div className="flex flex-col items-center justify-center w-2/5 p-6 bg-[#0e2865d3] text-white rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={image[0]} alt="Select House" className="w-16 h-16 rounded-full" />
          </div>
        
          <div className="text-center">
            <p className="text-lg font-semibold w-3/4">{image[1]}</p>
          </div>
        </div>
        </>
    )
}

const howitworks = ()=>{
    const images = [
        [joinus,"Register and join our community"],
        [selecthouse,"Select your dream house"],
        [contactowner,"contact the  owner"],
        [deal,"negotiate and get your dream house"],
        [joinus,"Register and join our community"],
        [subscribe,"subscribe our package"],
        [uploadimage,"upload your house"],
        [deal,"negotiate and get your dream house"],
]
    return (
        <>
            <Navbar/>
            <div className="flex bg-[#cbd2f87e] my-10 p-3 items-center">
                <img src={logo} alt="" className="w-2/5 h-[250px]" />
                <div className="w-3/5 text-[#0e286581]">Welcome to Gojo, your destination for hassle-free house rentals. 
                    Our user-friendly platform connects renters and landlords, offering 
                    a wide range of verified properties to suit all preferences and budgets.
                    With advanced search filters and detailed listings, finding the perfect home 
                    is easy. We prioritize security, reliability, and provide robust customer 
                    support for an efficient and enjoyable rental experience.</div>

            </div>
            <div className="font-bold text-3xl text-center underline m-6">For tentants</div>

            <div className="flex items-center justify-center py-8">

                <div className="flex items-center space-x-4">
                {images && images.slice(0, 4).map((item, index) => (
                    <Card key={index} image={item} />
                ))
                }
                </div>

                </div>
            
                <div className="font-bold text-3xl text-center underline m-6">For landlords</div>

                    <div className=" flex items-center justify-center py-8">

                        <div className="flex items-center space-x-4">
                        {images && images.slice(4,8).map((item, index) => (
                            <Card key={index} image={item} />
                        ))
                        }
                        </div>

    </div>
                <div className="font-bold text-5xl p-6 text-center m-6">Gojo Pricing</div>

                <div className="flex items-center justify-center gap-8 py-8  ">
                        <div className="flex flex-col items-center justify-center bg-[#0e2865a5]">
                            <div className="text-white bg-[#0e2865] px-10 py-3">Monthly package</div>
                            <div className="m-10 "><span className="font-bold text-4xl">$5</span>/month</div>
                            <button className="m-2 w-3/4 py-2 bg-[#0E2865] text-white hover:bg-white hover:text-[#0E2865] border  border-[#0E2865] rounded-3xl font-bold">
                subscribe
              </button>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-[#0e2865a5]">
                            <div className="text-white bg-[#0e2865] px-10 py-3">6 Month package</div>
                            <div className="m-10 "><span className="font-bold text-4xl">$10</span>/month</div>
                            <button className="m-2 w-3/4 py-2 bg-[#0E2865] text-white hover:bg-white hover:text-[#0E2865] border  border-[#0E2865] rounded-3xl font-bold">
                subscribe
              </button>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-[#0e2865a5]">
                            <div className="text-white bg-[#0e2865] px-10 py-3">yearly package</div>
                            <div className="m-10 "><span className="font-bold text-4xl">$20</span>/month</div>
                            <button className="m-2 w-3/4 py-2 bg-[#0E2865] text-white hover:bg-white hover:text-[#0E2865] border  border-[#0E2865] rounded-3xl font-bold">
                subscribe
              </button>
                        </div>
                </div>

                 
            <Footer/>


        </>
    );

}

export default  howitworks;