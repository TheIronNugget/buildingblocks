import {AiOutlineSearch} from 'react-icons/ai';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-wrapper">
            <h1>Visit Our Distant Neighbors</h1>
            <p className="hsub-text">Join us in learning about the Celestial Bodies that watch over our Solar System! Each one is unique in its own way and each one will be visited in the future. So learn about them now to be able to choose a Galatic Home you will never regret.</p>
            <form action="" className="search">
                <div>
                    <input type='text' placeholder='Enter Keyword...' />
                </div>
                <div className="radio">
                    <input type='radio' checked />
                    <label>Rings</label>
                    <input type='radio' />
                    <label>Ringless</label>
                    <button type='submit'><AiOutlineSearch className='icon' /> </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero;