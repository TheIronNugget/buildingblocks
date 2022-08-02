import './Popular.css';


let pic=[
    // Saturn
    'https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg',
    //Saturn Moons
    'https://media.npr.org/assets/img/2017/10/16/titan-41d62a75c7b7376fe8ff872bb1deec3bc24a4a14.jpeg',
    'https://solarsystem.nasa.gov/system/resources/list_images/2354_rhea_th.jpg',
    'https://solarsystem.nasa.gov/system/content_pages/main_images/896_PIA08400_768.jpg',
    'https://www.go-astronomy.com/images/moons/saturn-moon-prometheus.jpg',
    //Jupiter
    'https://cdn.mos.cms.futurecdn.net/yyonzpUYYkQNX8corCxeyD.jpeg',
    //Moons
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
    'https://scx2.b-cdn.net/gfx/news/2015/8-jupitersmoon.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg',

]

const Popular = () => {
  return (
    <div className='popular'>
        <h1 className='popular-text'>Popular Planets</h1>
        <p>Top planets voted on by the people worldwide</p>
        <div className='container'>
                <img className='order-2' src={pic[5]} alt='Jupiter' />
                <img className='order-3' src={pic[6]} alt='moon1' />

                <img className='span-3 image-grid-row-2 order-1' src={pic[7]} alt='moon2' />


                <img className='order-4' src={pic[8]} alt='moon3' />
                <img className='order-5' src={pic[9]} alt='moon4' />

                <div className='span-2 right-img-details order-7'>
                    <p>When viewed from a distance, Jupiter displays seven distinctive rings, according to NASA (opens in new tab). These are simply named as the first seven letters of the alphabet. This ordering doesn't correspond to their distance from the planet, but the order in which they were discovered. </p>
                    <button className='btn'>View Info</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>Jupiter</h2>
                        <p>A Gas Planet</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Moons:</p><p>53</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Rings:</p><p>4</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        <div className="container">
            <img src={pic[0]} alt='Saturn' />
            <img src={pic[1]} alt='moon1' />
            <img src={pic[2]} alt='moon2' />
            <img src={pic[3]} alt='moon3' />
            <img src={pic[4]} alt='moon4' />
            <div className="span-3 img-details">
                <div className="top">
                    <h2>Saturn</h2>
                    <p>A Gas Planet</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Moons:</p><p>82</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Rings:</p><p>7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>When viewed from a distance, Saturn displays seven distinctive rings, according to NASA (opens in new tab). These are simply named as the first seven letters of the alphabet. This ordering doesn't correspond to their distance from the planet, but the order in which they were discovered.</p>
                <button className='btn'>View Info</button>
            </div>


        </div>
        

    </div>
  )
}

export default Popular;