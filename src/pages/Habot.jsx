import Navbar from "../components/Navbar"
import SearchContent from "../components/SearchContent"
import SignUpToday from "../components/SignUpToday"
import VideoBuyer from "../components/VideoBuyer"
import GetVerified from "../components/GetVerified"
import HowItWorks from "../components/HowItWorks"
import Footer from "../components/Footer"

const Habot = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[124px] tracking-[normal] leading-[normal] mq450:gap-[15px] mq750:gap-[31px] mq1225:gap-[62px]">
      <Navbar />
      <img
        className="w-full h-[630px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt="Background Image"
        src="/divider@2x.png"
      />
      <SearchContent />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full">
        <div className="w-[1316px] flex flex-col items-end justify-start gap-[119px] max-w-full mq450:gap-[30px] mq750:gap-[59px]">
          <SignUpToday />
          <VideoBuyer />
        </div>
      </section>
      <GetVerified />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Habot
