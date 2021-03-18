import React from 'react'
import VKIcon from '../../public/img/icons/vk.svg'
import InstIcon from '../../public/img/icons/instagram.svg'
import FacebookIcon from '../../public/img/icons/facebook.svg'
import TwitterIcon from '../../public/img/icons/twitter.svg'
import LinkedInIcons from '../../public/img/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-social">
                    <ul className="social-list">
                        <li className="social-link"><a href=""><img src={VKIcon}></img></a></li>
                        <li className="social-link"><a href=""><img src={InstIcon}></img></a></li>
                        <li className="social-link"><a href=""><img src={FacebookIcon}></img></a></li>
                        <li className="social-link"><a href=""><img src={TwitterIcon}></img></a></li>
                        <li className="social-link"><a href=""><img src={LinkedInIcons}></img></a></li>
                        {/*<li className="social-link social-link-vk"><a href=""></a></li>
                        <li className="social-link social-link-inst"><a href=""></a></li>
                        <li className="social-link social-link-fac"><a href=""></a></li>
                        <li className="social-link social-link-tw"><a href=""></a></li>
    <li className="social-link social-link-in"><a href=""></a></li>*/}
                    </ul>
                </div>
                <div className="footer-text">
                    <p>Pistapool @ 2021</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
