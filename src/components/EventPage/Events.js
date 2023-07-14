import youtube from "../img/youtube_grey.png";
import twitter from "../img/twitter_grey.png";
import instagram from "../img/instagram_image.png";
import './Events.css'

const Events = () => {
    return (

        <div className="eventpage">

            <div className='container-events'>
                <div className='card'>

                    <div className="img-events">
                        <img src={youtube} alt="Youtube" />
                    </div>

                    <div className="content-events">
                        <h2>Foss Overflow</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>

                    </div>


                </div>

                <div className='card'>

                    <div className="img-events">
                        <img src={twitter} alt="Twitter" />
                    </div>

                    <div className="content-events">
                        <h2>GSoC</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>

                    </div>



                </div>
                <div className='card'>

                    <div className="img-events">
                        <img src={instagram} alt="Instagram" />
                    </div>

                    <div className="content-events">
                        <h2>Code 4 GovTech</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Odio euismod lacinia at quis risus sed vulputate odio ut.</p>

                    </div>



                </div>

            </div>



        </div>

    );
}

export default Events;