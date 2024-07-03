import PropTypes from "prop-types"
import "./GetVerified.css"

const GetVerified = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col lg:flex-row items-center justify-center pt-0 px-0 pb-3.5 box-border max-w-full text-left text-18xl-3 text-black font-poppins ${className}`}
    >
      <div className="flex-1 bg-azure overflow-hidden flex flex-col lg:flex-row items-center lg:items-end justify-between pt-[39px] pb-[93px] px-5 lg:px-[166px] lg:pr-[236px] box-border max-w-full gap-[20px] lg:gap-[20px]">
        <div className="w-full lg:w-[563px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border min-w-[563px] lg:min-w-[563px] max-w-full lg:max-w-full">
          <div className="self-stretch h-[118px] relative max-w-full">
            <div className="absolute top-[68px] left-0 w-full flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="self-stretch relative leading-[40px] font-semibold text-3xl xs:text-11xl lg:text-18xl-3 responsive-text">
                Let Suppliers Find You
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-5 lg:pl-[120px] box-border">
                <div className="h-1 w-[159px] relative bg-coral" />
              </div>
            </div>
            <div className="absolute top-0 left-[529px] w-[57px] h-[57px] overflow-hidden transform rotate-90 hidden lg:block" />
          </div>
        </div>
        <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end lg:mt-[-10px]">
          {/* Adjusted margin top */}
          <button className="cursor-pointer border-none py-[19px] px-[52px] bg-coral w-full lg:w-[216px] lg:h-[54px] rounded-8xs overflow-hidden flex items-center justify-center box-border whitespace-nowrap hover:bg-tomato">
            <b className="relative text-lg leading-[16px] font-poppins text-white text-center min-w-[112px]">
              Get Verified
            </b>
          </button>
        </div>
      </div>
    </section>
  )
}

GetVerified.propTypes = {
  className: PropTypes.string,
}

export default GetVerified
