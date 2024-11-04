import React from "react";
import Image from "next/image";

function Hero() {
  return (
    
    <div className="mx-[107.49px] mb-[134.15] flex justify-between">
      {/*left side */}
      <div >
        <h1 className="text-[37.84px] font-bold h-[162.53px]  w-[472.97px] mt-[165.97] font-serif">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="mt-[60.2px] text-[29.24px] font-[500px] text-[#787054] h-[144px] w-[798.9px] font-serif ">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="font-serif  px-[47.33px] py-[8.6px] rounded-[8.6px] text-[25.8px] font-[500px] mt-[42.61px] bg-[#A29875] text-[#FFFFFF] ">
          Explore Now
        </button>
      </div>
      {/*right side */}
      <div className="relative flex ">
        {/* SVG Frame */}
        <svg
          width="381"
          height="527"
          viewBox="0 0 381 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M1.19688 129.898C1.19688 58.8946 58.7565 1.33501 129.76 1.33501H380.436V397.344C380.436 468.347 322.877 525.907 251.873 525.907H1.19688V129.898Z"
              stroke="white"
              strokeWidth="0.859954"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                d="M0.766907 129.898C0.766907 58.6572 58.5191 0.905029 129.76 0.905029H380.866V397.344C380.866 468.585 323.114 526.337 251.873 526.337H0.766907V129.898Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Image with clip-path */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src={"/l.jfif"}
            alt="demo"
            width={381}
            height={527}
            className="object-cover"
            style={{
              clipPath: "url(#clip0)",
            }}
          />
        </div>
      </div>
    </div>
    
  );
}

export default Hero;
