import PropTypes from "prop-types"
import "tailwindcss/tailwind.css"
import "./custom.css"

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`bg-darkslategray-200 flex flex-col items-end justify-center py-12 px-12 ${className}`}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10 border-t border-b border-gray-200 py-6 md:px-8 items-end">
        <div className="flex flex-col md:flex-row w-full md:justify-between md:space-x-10">
          <div className="flex flex-col space-y-3 md:w-[50%]">
            <img src="/div-2naf1tmz.svg" alt="Logo" className="w-[276px]" />
            <div className="text-white font-poppins">© R Singhania</div>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10">
            <div>
              <b className="text-white font-poppins">Company</b>
              <ul className="list-none p-0 space-y-1">
                <li>
                  <a className="text-inherit font-poppins text-white">About</a>
                </li>
                <li>
                  <a className="text-inherit font-poppins text-white ">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <b className=" font-poppins text-white">Terms</b>
              <ul className="list-none p-0 space-y-1">
                <li>
                  <a className="text-inherit font-poppins text-white">
                    Data Privacy
                  </a>
                </li>
                <li>
                  <a className="text-inherit font-poppins text-white">Terms</a>
                </li>
                <li>
                  <a className="text-inherit font-poppins text-white">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <b className="font-poppins text-white">Related</b>
              <ul className="list-none p-0 space-y-1">
                <li>
                  <a className="text-inherit font-poppins text-white">
                    Find Buyer
                  </a>
                </li>
                <li>
                  <a className="text-inherit font-poppins text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <img
            src="/item--link--linkedin.svg"
            alt="LinkedIn"
            className="h-10 w-10 rounded-xl"
          />
          <img
            src="/item--link--twitter.svg"
            alt="Twitter"
            className="h-10 w-10 rounded-xl"
          />
          <img
            src="/item--link--facebook.svg"
            alt="Facebook"
            className="h-10 w-10 rounded-xl"
          />
          <img
            src="/item--link--instagram.svg"
            alt="Instagram"
            className="h-10 w-10 rounded-xl"
          />
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
