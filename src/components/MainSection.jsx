import { useMemo } from "react"
import PropTypes from "prop-types"

const MainSection = ({
  className = "",
  document11,
  heading330DaysMoneyBack,
  propBackgroundColor,
  propGap,
  propPadding,
}) => {
  const mainSectionSectionStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      gap: propGap,
      padding: propPadding,
    }
  }, [propBackgroundColor, propGap, propPadding])

  return (
    <div
      className={`w-[400px] bg-white flex flex-col items-center justify-start pt-[52px] px-5 pb-11 box-border gap-[30px] max-w-full ml-[-2px] text-center text-xl text-black font-poppins ${className}`}
      style={mainSectionSectionStyle}
    >
      <div className="flex flex-row items-start justify-end py-0 pr-[63px] pl-[68px]">
        <img
          className="h-[75px] w-[75px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={document11}
        />
      </div>
      <h3 className="m-0 w-[206px] relative text-inherit leading-[26px] font-medium font-inherit flex items-center justify-center mq450:text-base mq450:leading-[21px]">
        {heading330DaysMoneyBack}
      </h3>
    </div>
  )
}

MainSection.propTypes = {
  className: PropTypes.string,
  document11: PropTypes.string,
  heading330DaysMoneyBack: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
}

export default MainSection
