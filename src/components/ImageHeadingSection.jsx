import PropTypes from "prop-types"

const ImageHeadingSection = ({ imageSrc, headingText }) => {
  return (
    <div className="bg-azure flex flex-col items-center justify-start py-11 px-5 box-border gap-[38.6px]">
      <div className="flex flex-row items-start justify-end py-0 pr-[65px] pl-[66px] sm:pr-5 sm:pl-5">
        <img
          className="h-[75px] w-[75px] relative"
          loading="lazy"
          alt=""
          src={imageSrc}
        />
      </div>
      <h3 className="m-0 w-[206px] text-xl relative leading-[26px] font-medium font-inherit flex items-center justify-center sm:text-xl sm:leading-[21px]">
        {headingText}
      </h3>
    </div>
  )
}

ImageHeadingSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
}

export default ImageHeadingSection
