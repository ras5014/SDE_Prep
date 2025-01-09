import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0,
        }
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    render() {
        // throw new Error("Error thrown from Carousel.tsx");

        const images = this.props.images;
        const active = this.state.active;

        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            onClick={() => this.setState({ active: index })}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;