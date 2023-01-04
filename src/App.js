

import './App.css';
import CartContainer from './Componenets/CartContainer/CartContainer';
import ABCFooter from './Componenets/Footer/ABCFooter';
import HeaderLogo from './Componenets/HeaderNav/HeaderLogo';

function App() {
  return (
    <>
    <div className='App'>
<HeaderLogo/>
<CartContainer/>
<ABCFooter/>
</div>
    </>
  );
}

export default App;
