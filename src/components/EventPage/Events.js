import FossOver from "../img/fossoverflow.png";
import GSOC from "../img/gsoc.png";
import Code4Gov from "../img/code4govtech.png";
import './Events.css'

const Events = () => {
    return (

        <div className="eventpage">
            <div className='events-heading'>
                Events
                <hr className='events-hr'></hr>
            </div>
            <div className='container-events'>
                <div className='card'>
                    <div className="img-events">
                        <img src={FossOver} alt="Foss OverFlow" />
                    </div>
                    <div className="content-events">
                        <h2><a href="https://fossoverflow.dev/" target="_blank">Foss Overflow</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="img-events">
                        <img src={GSOC} alt="GSOC" />
                    </div>
                    <div className="content-events">
                        <h2><a href="https://summerofcode.withgoogle.com/" target="_blank">GSoC</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="img-events">
                        <img src={Code4Gov} alt="Code 4 GovTech" />
                    </div>
                    <div className="content-events">
                        <h2><a href="https://www.codeforgovtech.in/" target="_blank">Code 4 GovTech</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Events;