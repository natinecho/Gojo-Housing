import { useState } from "react";

import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import FirstStep from "../component/FirstStep";
import SecondStep from "../component/SecondStep";

import RentImage from "../asset/rentHouse.svg";

// function ImageUploader() {
//     const [selectedImages, setSelectedImages] = useState([]);

//     const handleImageChange = (e) => {
//       const files = Array.from(e.target.files);

//       // Limit to 5 images
//       if (files.length + selectedImages.length > 5) {
//         alert('You can only upload a maximum of 5 images');
//         return;
//       }

//       const newImages = files.map((file) => URL.createObjectURL(file));
//       setSelectedImages((prevImages) => [...prevImages, ...newImages]);
//     };

//     const removeImage = (index) => {
//       setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     };

//     return (
//       <div className="flex flex-col mb-4">
//         <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
//           Images
//         </label>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef] file:bg-[#d0d3d5] file:p-1 file:rounded-full file:border-none"
//         />

//         <div className="flex flex-wrap gap-4 mt-4">
//           {selectedImages.map((image, index) => (
//             <div key={index} className="relative">
//               <img
//                 src={image}
//                 alt={`preview ${index + 1}`}
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => removeImage(index)}
//                 className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

const Rent = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    if (step === 1) {
      return <FirstStep />;
    } else {
      return <SecondStep />;
    }
  };

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row  mt-20 items-center justify-center  min-h-screen ">
        <img
          src={RentImage}
          alt=""
          className="hidden md:block lg:w-[45%] md:w-[40%]"
        />
        <div className="flex  flex-col items-center justify-center w-full md:w-1/2">
          <div className="w-4/5 lg:w-3/5 rounded-2xl shadow-lg p-6 border ">
            {renderStep()}
            {/* Login Button */}
            <div className="flex items-center justify-center ">
              {step == 1 ? (
                <button
                  className="p-3 w-1/2 rounded-3xl bg-[#0e2865ef] hover:bg-[#0e2865d1] text-white font-medium transition"
                  onClick={handleNext}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="p-3 w-1/2 rounded-3xl bg-[#0e2865ef] hover:bg-[#0e2865d1] text-white font-medium transition"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Rent;
