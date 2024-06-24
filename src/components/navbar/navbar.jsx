
import './style.css'

const NavBar = () => {


   

    

    return ( 
        <nav className="navbar">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="nav-container container">
                <div className="nav-logo">
                    <div className="nav-logo-text">
                        seimoro
                    </div>
                </div>
                <div className="nav-row">
                    <div className="nav-links">
                        <div className="nav-link">Главная</div>
                        <div className="nav-link">Обо мне</div>
                        <div className="nav-link">Проекты</div>
                        <div className="nav-link">Контакты</div>
                    </div>
                    <div className="icons">
                        <div className="dark-mode-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.2vw" viewBox="0 -1060 960 960" width="1.2vw" fill="#e8eaed"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30ZM516-170q117-14 196.5-101.72T792-480q0-120.56-79.5-208.28T516-790v620Z"/></svg>
                    
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;