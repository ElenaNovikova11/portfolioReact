import React, { useState } from 'react'
import '../../style/portfolio/PortfolioCenter.css';
import Network1 from '../../img/img_portfolio/Posts/1.jpg';
import Network2 from '../../img/img_portfolio/Posts/2.jpg';
import Network3 from '../../img/img_portfolio/Posts/3.jpg';
import Network4 from '../../img/img_portfolio/Posts/4.jpg';
import Network5 from '../../img/img_portfolio/Posts/5.png';
import Network6 from '../../img/img_portfolio/Posts/6.png';
import Illustrator from '../../img/img_portfolio/illustrator/illustrator1.jpg';
import LoveIs1 from '../../img/img_portfolio/Love_is/1.jpg';
import LoveIs2 from '../../img/img_portfolio/Love_is/2.jpg';
import LoveIs3 from '../../img/img_portfolio/Love_is/3.jpg';
import DreamArt1 from '../../img/img_portfolio/Dream_art/dream_art1.jpg';
import DreamArt2 from '../../img/img_portfolio/Dream_art/dream_art2.jpg';
import DreamArt3 from '../../img/img_portfolio/Dream_art/dream_art3.jpg';
import DreamArt4 from '../../img/img_portfolio/Dream_art/dream_art4.jpg';
import DreamArt5 from '../../img/img_portfolio/Dream_art/dream_art5.jpg';
import DreamArt6 from '../../img/img_portfolio/Dream_art/dream_art6.jpg';
import OldPhotos1 from '../../img/img_portfolio/Old_photos/old_photos1.jpg';
import OldPhotos2 from '../../img/img_portfolio/Old_photos/old_photos2.jpg';
import OldPhotos3 from '../../img/img_portfolio/Old_photos/old_photos3.jpg';
import OldPhotos4 from '../../img/img_portfolio/Old_photos/old_photos4.jpg';
import BusinessCard1 from '../../img/img_portfolio/Business_card/business_card1.jpg';
import BusinessCard2 from '../../img/img_portfolio/Business_card/business_card2.jpg';
import BusinessCard3 from '../../img/img_portfolio/Business_card/business_card3.jpg';
import BusinessCard4 from '../../img/img_portfolio/Business_card/business_card4.png';
import BusinessCard5 from '../../img/img_portfolio/Business_card/business_card5.png';
import BusinessCard6 from '../../img/img_portfolio/Business_card/business_card6.jpg';
import Retouch1 from '../../img/img_portfolio/Retouch/retouch1.jpg';
import Retouch2 from '../../img/img_portfolio/Retouch/retouch2.jpg';
import Retouch3 from '../../img/img_portfolio/Retouch/retouch3.jpg';
import Retouch4 from '../../img/img_portfolio/Retouch/retouch4.jpg';
import Metrics1 from '../../img/img_portfolio/Metrics/metrics1.png';
import Metrics2 from '../../img/img_portfolio/Metrics/metrics2.jpg';
import Metrics3 from '../../img/img_portfolio/Metrics/metrics3.png';
import SiteWoman1 from '../../img/img_portfolio/Site_woman/site_woman_1.svg';
import SiteWoman2 from '../../img/img_portfolio/Site_woman/site_woman_2.svg';
import SiteWoman3 from '../../img/img_portfolio/Site_woman/site_woman_3.svg';
import SiteWoman4 from '../../img/img_portfolio/Site_woman/site_woman_4.svg';
import AboutMe1 from '../../img/img_portfolio/About_me/about_me_1.jpg';
import AboutMe2 from '../../img/img_portfolio/About_me/about_me_2.svg';
import AboutMe3 from '../../img/img_portfolio/About_me/about_me_3.jpg';
import Tilda1 from '../../img/img_portfolio/Tilda/medkids.JPG';
import Tilda2 from '../../img/img_portfolio/Tilda/elenanovikova.JPG';


const PortfolioComponent = () => {
  const [activeId, setActiveId] = useState(null);

  const buttons = [
    {
      id: 1, text: 'Работы, созданные в Photoshop', content: (<>
        <div className="portfolio-1 portfolio800 swing-in-top-fwd" id="a">
          <div className="skill2">
            Рисование картин в стиле Love is...
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={LoveIs1} className="d-block w-100" alt="Love_is" />
                </div>
                <div className="carousel-item">
                  <img src={LoveIs2} className="d-block w-100" alt="Love_is" />
                </div>
                <div className="carousel-item">
                  <img src={LoveIs3} className="d-block w-100" alt="Love_is" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-5 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Портреты в стиле Dream Art
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators5" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>


              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={DreamArt1} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={DreamArt2} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={DreamArt3} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={DreamArt4} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={DreamArt5} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={DreamArt6} className="d-block w-100" alt="site_woman" />
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-9 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Проекты, афиши
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators9" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={OldPhotos1} className="d-block w-100" alt="Old_photos" />
                </div>
                <div className="carousel-item">
                  <img src={OldPhotos2} className="d-block w-100" alt="Old_photos" />
                </div>
                <div className="carousel-item">
                  <img src={OldPhotos3} className="d-block w-100" alt="Old_photos" />
                </div>
                <div className="carousel-item">
                  <img src={OldPhotos4} className="d-block w-100" alt="Old_photos" />
                </div>


              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators9"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators9"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-7 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Метрики
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators7" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Metrics1} className="d-block w-100" alt="Metrics" />
                </div>
                <div className="carousel-item">
                  <img src={Metrics2} className="d-block w-100" alt="Metrics" />
                </div>
                <div className="carousel-item">
                  <img src={Metrics3} className="d-block w-100" alt="Metrics" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators7"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators7"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-6 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Визитки, прайс листы, вывески
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators6" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={BusinessCard1} className="d-block w-100" alt="Business_card" />
                </div>
                <div className="carousel-item">
                  <img src={BusinessCard2} className="d-block w-100" alt="Business_card" />
                </div>
                <div className="carousel-item">
                  <img src={BusinessCard3} className="d-block w-100" alt="Business_card" />
                </div>
                <div className="carousel-item">
                  <img src={BusinessCard4} className="d-block w-100" alt="Business_card" />
                </div>
                <div className="carousel-item">
                  <img src={BusinessCard5} className="d-block w-100" alt="Business_card" />
                </div>
                <div className="carousel-item">
                  <img src={BusinessCard6} className="d-block w-100" alt="Business_card" />
                </div>


              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-8 portfolio800  swing-in-top-fwd">
          <div className="skill2">
            Ретушь предметов, ретушь людей
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators8" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Retouch1} className="d-block w-100" alt="Retouch" />
                </div>
                <div className="carousel-item">
                  <img src={Retouch2} className="d-block w-100" alt="Retouch" />
                </div>
                <div className="carousel-item">
                  <img src={Retouch3} className="d-block w-100" alt="Retouch" />
                </div>
                <div className="carousel-item">
                  <img src={Retouch4} className="d-block w-100" alt="Retouch" />
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators8"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators8"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-2 portfolio800 swing-in-top-fwd">
          <div className="skill2 ">
            Посты в социальных сетях
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators2" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Network1} className="d-block w-100" alt="Posts" />
                </div>
                <div className="carousel-item">
                  <img src={Network2} className="d-block w-100" alt="Posts" />
                </div>
                <div className="carousel-item">
                  <img src={Network3} className="d-block w-100" alt="Posts" />
                </div>
                <div className="carousel-item">
                  <img src={Network4} className="d-block w-100" alt="Posts" />
                </div>
                <div className="carousel-item">
                  <img src={Network5} className="d-block w-100" alt="Posts" />
                </div>
                <div className="carousel-item">
                  <img src={Network6} className="d-block w-100" alt="Posts" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </>)
    },
    {
      id: 2, text: 'Работы, созданные в Figma', content: (<>
        <div className="portfolio-4 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Макет, сделанный с помощью Figma
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators4" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={SiteWoman1} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={SiteWoman2} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={SiteWoman3} className="d-block w-100" alt="site_woman" />
                </div>
                <div className="carousel-item">
                  <img src={SiteWoman4} className="d-block w-100" alt="site_woman" />
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <button className="portfolio-figma"><a className="portfolio-figma-text"
            href="https://www.figma.com/design/J0JW0rD5ZR3djHxuj2h0ob/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA?node-id=0-1&t=6LJ1qfm412mDXzTI-1" target="_blank" rel="noopener noreferrer">Перейти
            в Figma для просмотра макета</a></button>
        </div>

        <div className="portfolio-3 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Макет, сделанный с помощью Figma
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators3" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={AboutMe1} className="d-block w-100" alt="about_me" />
                </div>
                <div className="carousel-item">
                  <img src={AboutMe2} className="d-block w-100" alt="about_me" />
                </div>
                <div className="carousel-item">
                  <img src={AboutMe3} className="d-block w-100" alt="about_me" />
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <button className="portfolio-figma"><a className="portfolio-figma-text"
            href="https://www.figma.com/design/i55cxfV5lhQ42QGL5ZkI72/Untitled?node-id=183-185&t=1hdAkcC2hnSOIslU-1" target="_blank" rel="noopener noreferrer">Перейти
            в Figma для просмотра макета</a></button>
        </div>
      </>)
    },
    {
      id: 3, text: 'Работы, созданные в illustrator', content: (<>
        <div className="portfolio-10 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Работы, созданные в illustrator
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators10" className="carousel slide">

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Illustrator} className="d-block w-100" alt="Old_photos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>)
    },
    {
      id: 4, text: 'Работы, созданные в Tilda', content: (<>
        <div className="portfolio-11 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Сайт MedKids для мед. учреждения
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators11" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Tilda1} className="d-block w-100" alt="site_woman" />
                </div>
              </div>
            </div>
          </div>
          <button className="portfolio-figma"><a className="portfolio-figma-text" href="https://medkids74.tilda.ws"
            target="_blank" rel="noopener noreferrer">Перейти на сайт</a></button>
        </div>

        <div className="portfolio-12 portfolio800 swing-in-top-fwd">
          <div className="skill2">
            Сайт портфолио
          </div>
          <div className="portfolio-img">
            <div id="carouselExampleIndicators12" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Tilda2} className="d-block w-100" alt="portfolio" />
                </div>
              </div>
            </div>
          </div>
          <button className="portfolio-figma"><a className="portfolio-figma-text" href="https://elenanovikovawork.tilda.ws/"
            target="_blank" rel="noopener noreferrer">Перейти на сайт</a></button>
        </div>
      </>)
    },
    {
      id: 5, text: 'Все работы', content: (<>
        <div className='portfolioAll'>
        

          <img src={LoveIs1} className="d-block w-100 portfolioAll-img" alt="Love_is" />
          <img src={DreamArt1} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={DreamArt2} className="d-block w-100 portfolioAll-img" alt="site_woman" />

          <img src={DreamArt3} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={DreamArt4} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={DreamArt5} className="d-block w-100 portfolioAll-img" alt="site_woman" />

          <img src={Network3} className="d-block w-100 portfolioAll-img" alt="Posts" />
          <img src={Network4} className="d-block w-100 portfolioAll-img" alt="Posts" />
          <img src={Illustrator} className="d-block w-100 portfolioAll-img" alt="Illustrator" />

          <img src={Metrics1} className="d-block w-100 portfolioAll-img" alt="Metrics" />
          <img src={Metrics2} className="d-block w-100 portfolioAll-img" alt="Metrics" />
          <img src={Metrics3} className="d-block w-100 portfolioAll-img" alt="Metrics" />

            <img src={OldPhotos3} className="d-block w-100 portfolioAll-img" alt="Old_photos" />
          <img src={OldPhotos1} className="d-block w-100 portfolioAll-img" alt="Old_photos" />
          <img src={OldPhotos4} className="d-block w-100 portfolioAll-img" alt="Old_photos" />

          <img src={SiteWoman1} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={SiteWoman2} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={SiteWoman4} className="d-block w-100 portfolioAll-img" alt="site_woman" />

          <img src={Network2} className="d-block w-100 portfolioAll-img" alt="Posts" />
          <img src={Tilda1} className="d-block w-100 portfolioAll-img" alt="site_woman" />
          <img src={Tilda2} className="d-block w-100 portfolioAll-img" alt="site_woman" />

          <img src={OldPhotos2} className="d-block w-100 portfolioAll-img" alt="Old_photos" />
          <img src={AboutMe1} className="d-block w-100 portfolioAll-img" alt="about_me" />
          <img src={AboutMe3} className="d-block w-100 portfolioAll-img" alt="about_me" />

          <img src={Network5} className="d-block w-100 portfolioAll-img" alt="Posts" />
          <img src={BusinessCard4} className="d-block w-100 portfolioAll-img" alt="Business_card" />
          <img src={BusinessCard6} className="d-block w-100 portfolioAll-img" alt="Business_card" />

          <img src={BusinessCard1} className="d-block w-100 portfolioAll-img" alt="Business_card" />
          <img src={BusinessCard2} className="d-block w-100 portfolioAll-img" alt="Business_card" />
          <img src={BusinessCard3} className="d-block w-100 portfolioAll-img" alt="Business_card" />

          <img src={LoveIs3} className="d-block w-100 portfolioAll-img" alt="Love_is" />
          <img src={LoveIs2} className="d-block w-100 portfolioAll-img" alt="Love_is" />
          <img src={BusinessCard5} className="d-block w-100 portfolioAll-img" alt="Business_card" />
        </div>
      </>)
    },
  ];

  // Находим объект выбранной кнопки по её id
  const activeBtn = buttons.find(btn => btn.id === activeId);


  return (
    <div className='portfolio'>
      <div className="work">
        {buttons.map((btn) => (
          <button className='work-btn'
            key={btn.id}
            onClick={() => setActiveId(btn.id)}
            style={{
            
              backgroundColor: activeId === btn.id ? 'var(--color-violet)' : ' var(--color-green)',
              color: activeId === btn.id ? 'var(--color-site)' : 'var(--color-site)',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>

      <div className='portfolio-blocks'>
        {/* находим контент id=1 чтобы при загрузке странице выходила по умолчанию */}
        {activeBtn ? activeBtn.content : buttons.find(btn => btn.id === 5).content}
      </div>
    </div>

  );
}


export default PortfolioComponent;