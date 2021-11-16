import Slider from "react-slick";
import feelityService from "../img/feelity-service.png";
import "../styles/services.css";

const SERVICES =[
    {
        imgUrl: feelityService
    },
    {
        imgUrl: feelityService
    },
    {
        imgUrl: feelityService
    },
    {
        imgUrl: feelityService
    },
]

export const ServicesCaroussel = () => {
    const settings = {
        speed: 900,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        infinite: true
    };
    return (
        <div className={"services-wrapper"}>
            <Slider {...settings}>
                {SERVICES.map((item, id) => (
                    <Item index={id+1} imgUrl={item.imgUrl}/>
                ))}
            </Slider>
        </div>
    )
}

const Item = (props) => {
    const {index, imgUrl} = props

    return(
        <div style={{ width: 270 }} className={"services-item"} key={`service-${index}`}>
            <img src={imgUrl} alt={"illustration d'un service"}/>
        </div>
    )
}

export default ServicesCaroussel;


