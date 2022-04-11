import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {url: "https://nhsrcindia.org/sites/default/files/2021-06/DSC_1933_edited2.jpg"},
    {url: "https://pbs.twimg.com/media/E_eBrncWUBofToF.jpg"}
];

export default () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <SimpleImageSlider
                    width={1200}
                    height={600}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                /></div>
        </div>);
}
