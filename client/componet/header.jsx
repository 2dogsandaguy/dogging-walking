import dogFirst from '../public/blizzard-1st-place.jpg';
import buddyBowtie from '../public/buddy-bow.jpg'
import { Link } from 'react-router-dom';
/* import 'bootstrap-icons/font/bootstrap-icons.css';  */
const Header = () => {
  return (
    <header className="bg-dark text-light p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-4" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
              }}
            >
              <span 
              style={{ background: '#1130fc',
               padding: '0 10px',
                borderRadius: '5px', 
                color: "red",
                }}
                >
                  Blue Collar Dogs
                  </span>
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" 
                to="AboutMe" 
                style={{ background: '#11fc5f',
                padding: '10px',
                borderRadius: '5px',
                marginRight: '10px' 
                }}
                  >
                About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="MenuItem" 
                style={{ background: '#11fc57',
                 padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px' 
                }}
                  >
                    Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="OrderPage" 
                style={{ background: '#11fc9a',
                 padding: '10px', 
                 borderRadius: '5px',
                 marginRight: '10px' 
                }}
                 >
                  Order page
                  </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="/"  
                style={{ background: '#11fc57',
                 padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px' 
                }}
                  >
                    Home Page
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-right">
          <img className="img-fluid rounded-circle mt-4" style={{ width: '30%' }} 
              src={dogFirst}  // Update the path to match your file structure
              alt="Dog First place"/>
              <img className="img-fluid rounded-circle mt-4" style={{ width: '40%' }} 
              src={buddyBowtie }  // Update the path to match your file structure
              alt="Dog in Bowtie"/>
             
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;