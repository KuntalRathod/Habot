import PropTypes from "prop-types"
import "./hover.css"

const SignUpToday = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-px pl-1 box-border max-w-full text-left text-3xl md:text-4xl lg:text-5xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 md:gap-4 lg:gap-5 flex-wrap">
        <div className="w-full md:w-[624px] flex flex-col items-start justify-start gap-9 md:gap-4 lg:gap-9 min-w-full md:min-w-[624px] flex-1">
          <b className="w-full relative leading-10 md:leading-8 lg:leading-10 flex items-center max-w-full text-[37.34px] md:text-[37.34px] lg:text-[37.34px]">
            <span className="w-full">
              <span>Ready to dive into </span>
              <span className="text-midnightblue">HABOT?</span>
            </span>
          </b>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-gray-600">
            <div className="h-auto flex-1 relative leading-7 font-light flex items-center max-w-full">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </div>
          </div>
          <button className="cursor-pointer pt-4 pb-1 pr-7 pl-10 bg-darkgreen w-[317px] h-[54px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start gap-2 border border-solid border-darkgreen">
            <b className="flex-1 relative text-lg leading-4 font-poppins text-white text-center">
              Sign up Today!
            </b>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img className="w-8 h-4 relative z-10" alt="" src="/group.svg" />
            </div>
          </button>
        </div>
        <div className="w-full md:w-[541px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-full md:min-w-[541px] max-w-full text-center text-lg text-darkslategray-100 font-inter flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-start justify-start gap-5 flex-wrap">
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] whitespace-nowrap border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Abu Dhabi
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Dubai
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-5 flex-wrap">
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] whitespace-nowrap border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Sharjah & Ajman
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Fujairah
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-5 flex-wrap">
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] whitespace-nowrap border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Ras Al Khaimah
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="location-box flex-1 rounded-md bg-white box-border flex flex-row items-center justify-between pt-4 px-4 pb-3.5 min-w-[169px] whitespace-nowrap border border-solid border-chocolate">
                <div className="flex-1 relative leading-8 font-medium">
                  Umm Al Quwain
                </div>
                <img
                  className="location-icon w-8 h-4 relative z-10"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUpToday.propTypes = {
  className: PropTypes.string,
}

export default SignUpToday
