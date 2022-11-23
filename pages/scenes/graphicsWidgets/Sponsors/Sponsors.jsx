import { useEffect, useState } from "react";
import logo1 from "../../../../resources/images/sponsors/logo.jpg"
import logo2 from "../../../../resources/images/sponsors/logo2.png"
import logo3 from "../../../../resources/images/sponsors/logo3.png"
import logo4 from "../../../../resources/images/sponsors/logo4.png"

export const Sponsors = () => {
    const imageStyle = {maxWidth: '300px', maxHeight: '200px', opacity: "90%"};

    // Needs to be remade so all images from folder would be auto imported here
    const images = [logo1, logo2, logo3, logo4];
    const [currentImage, setCurrentImage] = useState(images[0]);

    // change image every 5 seconds
    useEffect(() => {
        let i = 0;
        const intervalCall = setInterval(() => {
            if (i === images.length) {
                i = 0;
            }
            setCurrentImage(images[i]);
            i++;
        }, 5000);
        return () => {
            clearInterval(intervalCall);
        };
    }, []);

    return (
        <div style={{right: "0", top: "50%", position: "absolute"}}>
            <img src={currentImage} style={imageStyle}></img>
        </div>
    );
};
