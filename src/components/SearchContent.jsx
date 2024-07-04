import PropTypes from "prop-types"

const SearchContent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1494px] flex flex-row items-start justify-center pt-0 px-5 pb-[79px] box-border max-w-full text-center text-36xl text-white font-poppins mq450:pb-[51px] mq450:box-border ${className}`}
    >
      <div className="w-[937.9px] flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[47px] max-w-full mq750:gap-[23px]">
          <h1 className="m-0 self-stretch h-[122px] relative text-inherit leading-[66px] flex items-center shrink-0 z-[1] font-inherit mq450:text-14xl mq450:leading-[40px] mq750:text-25xl mq750:leading-[53px] mq600:text-14xl mq600:leading-[40px]">
            <span>
              <p className="m-0">
                <b>Are You a Supplier?</b>
              </p>
              <p className="m-0 font-poppins font-normal text-36xl mq600:text-14xl">
                Explore Matching Opportunities.
              </p>
            </span>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center gap-[10px] max-w-full text-left text-base-1 text-slategray mq1050:flex-wrap mq1000:flex-col">
            <div className="flex-[0.9121] rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-2 pb-1 pr-[17px] pl-[18px] min-w-[260px] max-w-full z-[1] border-[1px] border-solid border-lightgray mq1050:flex-1 mq1000:w-full">
              <div className="flex-1 bg-white flex flex-row items-end justify-start pt-[9px] px-px pb-2.5 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                <img
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 min-h-[21px] z-[1]"
                  alt=""
                  src="/suitcase-1.svg"
                />
                <input
                  className="w-[calc(100%_-_23px)] [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 overflow-hidden flex flex-row items-start justify-start pt-px px-[22px] pb-0.5 box-border font-poppins font-light text-base-1 text-slategray min-w-[220px] max-w-full ml-[-6px] mq450:ml-0"
                  placeholder="Search your required service here"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-[0.9121] rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-2 pb-1 pr-[17px] pl-[18px] min-w-[260px] max-w-full z-[1] border-[1px] border-solid border-lightgray mq1050:flex-1 mq1000:w-full">
              <div className="flex-1 bg-white flex flex-row items-end justify-start pt-[9px] px-px pb-2.5 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                <img
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 min-h-[21px] z-[1]"
                  alt=""
                  src="/placeholder-1.svg"
                />
                <input
                  className="w-[calc(100%_-_23px)] [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 overflow-hidden flex flex-row items-start justify-start pt-px px-[22px] pb-0.5 box-border font-poppins font-light text-base-1 text-slategray min-w-[220px] max-w-full ml-[-6px] mq450:ml-0"
                  placeholder="Search your required service here"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[117.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border mq1000:w-full">
              <button className="cursor-pointer pt-[14px] pb-[13px] pr-[31px] pl-[33px] bg-darkgreen self-stretch rounded-8xs overflow-hidden flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-darkgreen hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen-100">
                <b className="flex-1 relative text-base-1 leading-[24px] inline-block font-inter text-white text-center min-w-[52.1px]">
                  Search
                </b>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[920px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg">
          <div className="h-9 w-[642px] relative flex items-center shrink-0 max-w-full z-[1]">
            <span className="w-full">
              <b className="whitespace-pre-wrap">{`Are you a buyer?   `}</b>
              <span className="[text-decoration:underline]">
                Click here if you are looking to post a requirements
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

SearchContent.propTypes = {
  className: PropTypes.string,
}

export default SearchContent
