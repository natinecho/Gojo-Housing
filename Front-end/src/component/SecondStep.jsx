const SecondStep = () => {
  return (
    <>
      <div className="flex gap-10 items-center mb-6">
        <div className="flex flex-col w-[45%] ">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
              Rooms
            </label>
          </div>
          <input
            type="number"
            className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
            placeholder="Rooms"
          />
        </div>
        <div className="flex flex-col w-[45%]  ">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
              Bed Rooms
            </label>
          </div>
          <input
            type="number"
            className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
            placeholder="Bed Rooms"
          />
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
          City
        </label>
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
          placeholder="Name of the city"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
          Sub City
        </label>
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
          placeholder="Name of Sub City"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
          Exact Location
        </label>
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
          placeholder="Exact Location"
        />
      </div>

    </>
  );
};

export default SecondStep;



// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: -3.745, 
//   lng: -38.523,
// };

// function SecondStep() {
//   const [marker, setMarker] = useState(null);

//   const handleMapClick = (event) => {
//     setMarker({
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted location:", marker);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="text-sm font-medium text-gray-600 pl-3 mb-1">Select Location on Map</label>
//         <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={10}
//             center={center}
//             onClick={handleMapClick}
//           >
//             {marker && <Marker position={marker} />}
//           </GoogleMap>
//         </LoadScript>
//         <p className="text-gray-500 mt-2">
//           {marker ? `Lat: ${marker.lat}, Lon: ${marker.lng}` : 'Click on the map to select a location'}
//         </p>
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
//     </form>
//   );
// }

// export default SecondStep;
