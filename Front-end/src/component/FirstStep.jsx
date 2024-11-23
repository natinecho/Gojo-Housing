const FristStep = () => {
    return(
        <>
                    <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                Name
              </label>
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
                placeholder="Name of the Place"
              />
            </div>

            <div className="flex gap-10 items-center mb-6">
              <div className="flex flex-col w-[45%] ">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                    Price
                  </label>
                </div>
                <input
                  type="number"
                  className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
                  placeholder="price"
                />
              </div>
              <div className="flex flex-col w-[45%]  ">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                    Size
                  </label>
                </div>
                <input
                  type="number"
                  className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
                  placeholder="size"
                />
              </div>
            </div>


            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                Images
              </label>
              <input
                type="file"
                className="border border-gray-300 p-1 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef] file:bg-[#ccdee863] file:p-2 file:rounded-full file:border-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                Discription
              </label>
              <textarea
                type="text"
                className="border border-gray-300 p-1 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef] resize-none h-32"
              />
            </div>

        </>
    )
}

export default FristStep;