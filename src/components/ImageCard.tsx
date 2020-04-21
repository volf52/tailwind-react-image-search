import React from "react";

export interface ImageHit {
    comments: number;
    downloads: number;
    favorites: number;
    id: number;
    imageHeight: number;
    imageSize: number;
    imageWidth: number;
    largeImageURL: string;
    likes: number;
    pageURL: string;
    previewHeight: number;
    previewURL: string;
    previewWidth: number;
    tags: string;
    type: string;
    user: string;
    userImageURL: string;
    user_id: number;
    views: number;
    webformatHeight: number;
    webformatURL: string;
    webformatWidth: number;
}

const ImageCard: React.FC<{ img: ImageHit }> = ({ img }) => {
    const tags = img.tags.split(",");

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={img.webformatURL} alt={""} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {img.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong> {img.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong> {img.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong> {img.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, idx) => (
                    <span
                        key={`${img.id}_${idx}`}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
