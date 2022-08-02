import './planets.scss';


let imgs = [
    'https://ecdn.teacherspayteachers.com/thumbitem/The-Terrestrial-Planets-Bundle-3263253-1561207509/original-3263253-1.jpg',
    'https://qph.fs.quoracdn.net/main-qimg-bd34a9a587054fd014e0e82439a94b78-lq'
]


const Planets = () => {
  return (
    <div className='planets'>
        <h1>Planetary Center</h1>
        <div className='container'>
            <p><span className='bold'>All</span></p>
            <p>Giants</p>
            <p>Terrestrial</p>
        </div>
        <div className="container2">
            <img src={imgs[1]} width="350px" alt='' />
            <img src={imgs[0]} width="380px" alt='' />
            
        </div>
        <button className="btn">View All</button>
    </div>
  )
}

export default Planets;