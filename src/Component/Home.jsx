import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
function Home() {
    return (
        <div className='slider'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.webp?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk="
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-white '>
                        <h5>Travel</h5>
                        <p>When preparing to travel, lay out all your clothes and all your money. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk="
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-white '>
                        <h5>Explore</h5>
                        <p>Travel becomes a strategy for accumulating photographs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1465916031/photo/the-way-to-the-plane.webp?b=1&s=170667a&w=0&k=20&c=Q4p8NFFrbXGNL936zxGL9Pc8seDWEXg3Pz3JvFimnCU="
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-white '>
                        <h5>Enjoy</h5>
                        <p>
                            The most beautiful in the world is, of course, the world itself.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;