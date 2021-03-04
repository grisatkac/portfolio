import React from 'react'
import { NavLink } from 'react-router-dom'
import ToDo from './ToDo'

const Home = () => {
    return (
        <main className="main">
            <div className="main-container">
                <section className="hero">
                    <div className="hero-container">
                        <div className='hero-text'>
                            <p>Web development project</p>
                            <p>Very suitable to support all web development projects</p>
                        </div>
                        
                        <div className="hero-buttons">
                            <button>OUR SERVICES</button>
                            <button>HIRE IS NOW</button>
                        </div>
                    </div>
                </section>

                <section className="about">
                    <div className="about-container">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="about-button">

                            <NavLink to='about'>
                                <button>
                                    Learn more
                                </button>
                            </NavLink>

                        </div>
                    </div>
                </section>

                <section className="portfolio">
                    <div className="portfolio-container">
                        <div className="portfolio-text">
                            <h2>Portfolio</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="portfolio-button">
                            <NavLink to='/tasks'>
                                <button>
                                    Learn more
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="contact-container">
                        <div className="contact-text">
                            <h2>Contact Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="contact-button">

                            <NavLink to='contact'>
                                <button>
                                    Learn more
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/*<div className="todo">
                    <div className="todo-container">
                        <div>Здесь вы можете можете составлять планы</div>
                    </div>
                </div>
                <div>
                    <NavLink to="/tasks"><p>Планировщик задач</p></NavLink>
                </div>
                <div>
                    <NavLink to="/messages">Сообщения</NavLink>
    </div>*/}
            </div>
        </main>
    )
}

export default Home
