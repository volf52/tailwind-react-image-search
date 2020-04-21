import React, { useState } from "react";
import CloseIcon from "../assets/icon-x-circle.svg";

interface ImageSearchProps {
    searchText: (txt: string) => void;
}

const ImageSearch: React.FC<ImageSearchProps> = ({ searchText }) => {
    const [text, setText] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Image Term..."
                    />
                    <svg
                        className="h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        {" "}
                        <path d={CloseIcon}></path>{" "}
                    </svg>
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;
