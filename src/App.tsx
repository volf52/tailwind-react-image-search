import React, { useState, useEffect } from "react";
import ImageCard, { ImageHit } from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([] as ImageHit[]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.error(err));
    }, [term]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(txt) => setTerm(txt)} />
            {!isLoading && images.length === 0 && (
                <h1 className="text-5xl text-center mx-auto mt-32">
                    No Images Found
                </h1>
            )}
            {isLoading ? (
                <h1 className="text-6xl text-center mx-auto mt-32">
                    Loading...
                </h1>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((img) => (
                        <ImageCard key={img.id} img={img} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
