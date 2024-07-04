import PropTypes from "prop-types"
import { useState } from "react"
import "./VideoBuyer.css" // Import CSS file for media queries

const VideoBuyer = ({ className = "" }) => {
  const [isSupplier, setIsSupplier] = useState(false)

  return (
    <div
      className={`self-stretch rounded-8xs bg-darkslateblue overflow-hidden flex flex-col lg:flex-row items-start lg:items-start justify-start pt-[137px] pb-[136px] lg:pb-[136px] pr-[50px] pl-[72px] box-border gap-[65px] max-w-full text-left text-7xl text-coral font-poppins ${className} video-buyer`}
    >
      <style>
        {`
          @media (max-width: 460px) {
            .video-buyer {
              padding-right: 20px;
              padding-left: 10px;
            }
            .youtube-logo {
              max-width: 100%;
              height: auto;
            }
            .buyer-supplier-details {
              font-size: 0.875rem; /* Adjust font size for smaller details */
            }
          }
          @media (max-width: 432px) and (min-height: 778px) {
            .video-buyer {
              font-size: 0.875rem; /* Adjust font size for smaller details */
            }
            .youtube-logo {
              max-width: 300px; /* Adjust the size of YouTube logo */
            }
            .vector-image {
              max-width: 80%; /* Adjust the size of vector image */
              height: auto;
            }
            .buyer-supplier-details {
              font-size: 0.875rem; /* Adjust font size for smaller details */
            }
            .buyer-supplier-heading {
              font-size: 1.25rem; /* Adjust font size for Buyer and Supplier headings */
            }
          }
        `}
      </style>
      <div className="flex-1 flex flex-col lg:flex-row items-start justify-start relative min-w-[416px] lg:max-w-full">
        <img
          className="h-[350px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover youtube-logo"
          alt=""
          src="/youtube-post.png"
        />
        <div className="h-[75.2px] w-[106.3px] absolute !m-[0] top-[137px] right-[266.7px] z-[1] lg:top-[137px] lg:right-[266.7px]">
          <div className="absolute top-[17.5px] left-[19.1px] rounded-8xs bg-white w-[53.7px] h-[40.1px]" />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full z-[1] vector-image"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="w-489px flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-489px lg:min-w-489px lg:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full">
          <div className="w-402px flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-row">
            <div className="w-[202px] flex flex-col items-start justify-start gap-[11px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[63px] pl-[60px]">
                <h2
                  className={`m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[79px] cursor-pointer ${!isSupplier ? "text-coral buyer-supplier-heading" : "text-white buyer-supplier-heading"}`}
                  onClick={() => setIsSupplier(false)}
                >
                  Buyer
                </h2>
              </div>
              {!isSupplier && (
                <div className="self-stretch h-1 relative rounded-12xs bg-coral" />
              )}
            </div>
            <div className="w-[202px] flex flex-col items-start justify-start gap-[11px] lg:ml-auto">
              <div className="flex flex-row items-start justify-start py-0 pr-[45px] pl-[47px]">
                <h2
                  className={`m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[112px] cursor-pointer ${isSupplier ? "text-coral buyer-supplier-heading" : "text-white buyer-supplier-heading"}`}
                  onClick={() => setIsSupplier(true)}
                >
                  Supplier
                </h2>
              </div>
              {isSupplier && (
                <div className="self-stretch h-1 relative rounded-12xs bg-coral" />
              )}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-lg-8 text-white lg:flex-wrap buyer-supplier-details">
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/checked-2-1.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/checked-2-1.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/checked-2-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[39px] font-medium inline-block min-w-[300px] max-w-full">
              {isSupplier ? (
                <>
                  <p className="m-0 buyer-supplier-details">
                    Complete your profile and get verified.
                  </p>
                  <p className="m-0 buyer-supplier-details">
                    Select service tags for relevant opportunities.
                  </p>
                  <p className="m-0 buyer-supplier-details">
                    Reach out to buyers and expand your business.
                  </p>
                </>
              ) : (
                <>
                  <p className="m-0 buyer-supplier-details">
                    Post your requirements.
                  </p>
                  <p className="m-0 buyer-supplier-details">
                    Sit back for multiple suppliers to contact you.
                  </p>
                  <p className="m-0 buyer-supplier-details">
                    Choose among the suppliers based on the ratings and reviews.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

VideoBuyer.propTypes = {
  className: PropTypes.string,
}

export default VideoBuyer
