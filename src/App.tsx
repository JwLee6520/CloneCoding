import facebook from './image/facebook-logo-button.png';
import instagram from './image/instagram.png';
import logo from './image/logo.jpeg';
import './App.css';


function App() {
  return (
    <div className="container">
      <header className='header'>

        <div className='sns'>
          <div id='language'>
            <select name="language" id="select">
              <option value="ko">KOR</option>
              <option value="en">ENG</option>
            </select>
          </div>
          <a href="https://www.facebook.com/"><img src={facebook} alt="sns" /></a>
          <a href="https://www.instagram.com/"><img src={instagram} alt="sns" /></a>
        </div>

        <div className='map'>
          <div id='first-child'><a href="#">HOME</a></div>
          <div id='second-child'><a href="#">SITE MAP</a></div>
          <div id='third-child'><a href="#">CONTACT AS</a></div>
        </div>
      </header>
      <nav className='nav'>
        <img src={logo} alt="logo" id='logo'/>
        <div className='dropdownContainer'>
          <ul>
            <li>모나미소개
              <ul>
                <li>CEO 메시지</li>
                <li>회사정보</li>
                <li>회사연혁</li>
                <li>윤리강령</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
        </div>
  );
}

export default App;
