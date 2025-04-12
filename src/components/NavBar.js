import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar({ title = "set title", aboutText = "about", mode, toggleMode }) {
  const [sty, setSty] = useState({
    backgroundColor: '#212529',
    color: 'white'
  });
  const handleStyleMode = () => {
    if (mode === 'light') {
      setSty({
        backgroundColor: '#5f396f',
        color: 'black'
      });
      setModeText('Enable Light Mode');
    }
    else {

      setSty({
        backgroundColor: '#212529',
        color: 'white'
      });

      setModeText('Enable Dark Mode');

    }
  }
  const [modeText, setModeText] = useState('Enable Dark Mode');

  // const [selected, setSelected] = useState("btnradio1");

  // const handleChange=(event)=>{
  //   setSelected(event.target.value);
  //   console.log(selected);
  // }

  const [selectedOption, setSelectedOption] = useState("option1"); // Default selected

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if ( mode!=='light' && selectedOption === "option1"  ) {
      setSty({
        backgroundColor: '#5f396f',
      });
      document.body.style.backgroundColor='#1a161b';

    } else if (mode!=='light' && selectedOption === "option2") {
      setSty({
        backgroundColor: '#5b86ab',
      });
      document.body.style.backgroundColor='#28323b';
    } else if (mode!=='light' && selectedOption === "option3") {
      setSty({
        backgroundColor: '#4aa953',

      });
      document.body.style.backgroundColor='#2e342e';

    }
  }, [selectedOption,mode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-dark" style={sty}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        {/* <a className="navbar-brand" href="#">{title}</a> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
              {/* <a className="nav-link" href="/about">{aboutText}</a> */}

            </li>
            
          </ul>

          {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ display: mode === 'dark' ? 'block' : 'none', marginRight: '30px' }}>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked={selected === "btnradio1"}
              

              onChange={handleChange}

            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Lavender
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              checked={selected === "btnradio2"}

              onChange={handleChange}

            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Cyan
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
              checked={selected === "btnradio3"}

              onChange={handleChange}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </div>  */}

          {/* <div className="">

            <div className="d-flex">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="option1"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleChange}
                  onClick={print}
                />
                <label className="form-check-label text-light" htmlFor="option1">
                  Lavender
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="option2"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleChange}
                  onClick={print}
                />
                <label className="form-check-label  text-light" htmlFor="option2">
                  Cyan
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="option3"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleChange}
                  onClick={print}
                />
                <label className="form-check-label  text-light" htmlFor="option3">
                  Green
                </label>
              </div>
            </div>

          </div>
 */}

          <div style={{display: `${mode==='light'?'none':'flex'}`,color:'white',marginRight:'30px',gap:'15px'}}>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
              // onClick={console.log(selectedOption)}
              />
              <label className="form-check-label" htmlFor="option1">
                Lavender
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option2"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
              // onClick={console.log(selectedOption)}

              />
              <label className="form-check-label" htmlFor="option2">
                Blue
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option3"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleChange}
              // onClick={console.log(selectedOption)}

              />
              <label className="form-check-label" htmlFor="option3">
                Green
              </label>
            </div>

            
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{
              backgroundColor: "grey",
              borderColor: "grey"
            }} onClick={() => {
              toggleMode();
              handleStyleMode();
            }} />
            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{modeText}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// NavBar.defaultProps = {
//   title: "set title",
//   aboutText: "About Text"
// };


export default NavBar;