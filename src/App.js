import React from 'react';
import './App.css';
import logo from './images/safety-suit.png';
import InfoCard from './component/InfoCard/InfoCard'
import AllHospitalInfoCards from './component/AllHospitalInfoCards/AllHospitalInfoCards';

function App() {
  return (
    <div className="App">
      <div className = 'Header'>
        {/* We can add menu here */}
      </div>

      <div className="Dashboard">
          <div className = 'Logo'>
              <img src = {logo} alt = 'logo' width = '80px' height = '80px'/>
          </div>
          <div className = 'Heading'>
              <h1 className = 'Heading_1'>Health Guide</h1>
              <p className = 'Heading_2'>Hospital Information Hub</p>
          </div>

          <div>
              <h1 className = 'Sub_heading'>Collected Information</h1>
          </div>

          <div className = 'Information'>
            <InfoCard />
          </div>

          {/* <div>
            <form className = 'Form'>
              <input type='text' required placeholder = 'Enter State'/>
              <input type='text' required placeholder = 'Enter City'/>
              <button type='submit'> Search </button>
            </form>
          </div> */}

          <div>
            {/* Hospital Information Cards */}
            <AllHospitalInfoCards />
          </div>
      </div>

      <div className = 'Footer'>
        {/* We can add footer here */}
      </div>

    </div>
  );
}

export default App;
