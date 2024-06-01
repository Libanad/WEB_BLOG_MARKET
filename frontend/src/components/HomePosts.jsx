const HomePost = (posts) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */ }
      <div className="w-[30%] h-[200px] flex justify-center items-center">
        <img src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1715509344~exp=1715512944~hmac=0eea5b7738b6e3077e46e84358740873135dff6aed51c59a671084fdeebee400&w=1060" alt="" className="h-full w-full object-cover" />
      </div>
      {/* right */ }
      <div className="flex flex-col w-[70%]">
        <h1 className="text-xl font-bold md:mb-2 ab-1 md:text-2xl">
          10 uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between md:mb-4">
          <p>@libanadr</p>  
          <div className="flex space-x-2">
            <p>16/06/2024</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Artificial Intelligence (AI) is developing and advancing right before our very eyes. It has aggressively integrated into our society as it contributes heavily to a plethora of fields such as medical, legal, military, and government. Although AI is used universally as a resource and tool, it is less certain how advanced and dependable it will become. Likewise, society is still determining the implications it will have on the global dynamic.</p>
      </div>
    </div>
  )
}

export default HomePost
