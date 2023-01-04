
import "./Headernav.css"
import HeaderSearch from './HeaderSearch'

const HeaderLogo = () => {
 
  return (
    <>
    <header className='header-nav'>

    <div className='header-logo-img' >
          <img src='./images/logo.png'></img>
          </div>
        
      <HeaderSearch/>
    
    </header>
    </>
  )
}

export default HeaderLogo
