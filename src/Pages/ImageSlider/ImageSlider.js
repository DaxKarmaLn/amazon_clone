import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import './styles.css';

// number of images you want to display and scroll according screen size
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];

export default function ImageSlider() {

    // hooks for fetch data
    const [image, setImage] = useState(null);
    // api for data fetching
    const url = "http://localhost:3001/api/image_sliders?limit=1000";

    // fetch data using axios
    useEffect(() => {
        axios.get(url).then((response) => {
            setImage(response)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // if data is not available return null
    if (!image) return null;

    return(
        <>
            <div className="index" style={{ cursor: "pointer"}} >
                <Carousel breakPoints={breakPoints}
                  pagination={false}
                  enableAutoPlay={true}
                  autoPlaySpeed={5000}
                  showArrows={false}
                >
                    {
                        image.data.items.map(img => {
                            return(
                                <img src={img.image} className="sliderImg" alt="" key={img.image} />
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}
