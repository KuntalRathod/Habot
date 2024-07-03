import { useState } from "react"
import PropTypes from "prop-types"

const Navbar = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header
      className={`w-full shadow-[0px_9px_26px_rgba(115,_115,_115,_0.1)] bg-white flex flex-row items-center justify-between py-4 px-5 box-border sticky top-0 z-50 text-base-3 text-dimgray font-poppins ${className}`}
    >
      <img
        className="h-10 w-36 object-contain"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <nav className="hidden md:flex flex-row items-center justify-end gap-8">
        <a className="text-inherit">Find Suppliers</a>
        <div className="relative flex items-center gap-1">
          <a className="text-inherit">Find Service Tags</a>
          <img className="w-4 h-4" src="/svg.svg" alt="Arrow" />
        </div>
        <button className="px-4 py-2 bg-transparent border border-darkgreen rounded hover:bg-mediumseagreen-200 hover:border-mediumseagreen-100">
          <span className="text-darkgreen font-bold">Login / Sign Up</span>
        </button>
      </nav>
      <button
        className="md:hidden flex items-center justify-center w-10 h-10"
        onClick={toggleMenu}
      >
        <img className="h-6 w-6" alt="Menu" src="/hamburger-icon.svg" />
      </button>
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          <a className="text-inherit py-2 w-full text-center border-b">
            Find Suppliers
          </a>
          <a className="text-inherit py-2 w-full text-center border-b">
            Find Service Tags
          </a>

          <button className="px-4 py-2 bg-transparent border border-darkgreen rounded hover:bg-mediumseagreen-200 hover:border-mediumseagreen-100 w-full text-center mt-2">
            <span className="text-darkgreen font-bold">Login / Sign Up</span>
          </button>
        </nav>
      )}
    </header>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

export default Navbar
