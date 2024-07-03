import ImageHeadingSection from "./ImageHeadingSection"
import MainSection from "./MainSection"
import PropTypes from "prop-types"

const HowItWorks = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-0 px-5 pb-[73px] box-border max-w-full text-center text-18xl-3 text-gray-100 font-poppins ${className}`}
    >
      <div className="w-full max-w-[1200px] flex flex-col items-start justify-start gap-[73px]">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
          <div className="w-full flex flex-col items-center justify-start gap-[26px] max-w-full">
            <div className="self-stretch flex items-center justify-center py-0 px-5">
              <b className="w-[287px] relative leading-[48px] flex items-center justify-center shrink-0 sm:text-3xl sm:leading-[29px]">
                How it works?
              </b>
            </div>
            <div className="self-stretch relative text-mid-2 leading-[26px] text-black text-center">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with potential buyers, and build
              successful business relationships, sharing valuable feedback.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full text-xl text-black">
          <ImageHeadingSection
            imageSrc="/group-33.svg"
            headingText="Select Your Role and Sign Up"
          />
          <MainSection
            document11="/document-1-1.svg"
            heading330DaysMoneyBack="Buyers Post Your Requirements"
          />
          <MainSection
            document11="/layer-x0020-1.svg"
            heading330DaysMoneyBack="Review, Select, and Contact the Best Suppliers"
            propBackgroundColor="#e8fbff"
            propGap="24.5px"
            propPadding="55px 64px 44px 63px"
          />
          <MainSection
            document11="/edit-1-1@2x.png"
            heading330DaysMoneyBack="Suppliers Complete your profile and get notified for opportunities"
            propBackgroundColor="#fff"
            propGap="30px"
            propPadding="52px 66px 44px"
          />
          <MainSection
            document11="/quoterequest-1.svg"
            heading330DaysMoneyBack="Contact to Buyers and Share your Quote for the service"
            propBackgroundColor="#e8fbff"
            propGap="30px"
            propPadding="52px 50px 44px"
          />
          <MainSection
            document11="/group-1.svg"
            heading330DaysMoneyBack="Both the Parties can Connect and Make Business Leave a Feedback"
            propBackgroundColor="#fff"
            propGap="29px"
            propPadding="42.7px 47px 44px"
          />
        </div>
      </div>
    </section>
  )
}

HowItWorks.propTypes = {
  className: PropTypes.string,
}

export default HowItWorks
