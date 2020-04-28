import React, { useState } from 'react';

interface ImageSearchProps {
	searchText: (txt: string) => void;
}

const ImageSearch: React.FC<ImageSearchProps> = ({ searchText }) => {
	const [ text, setText ] = useState('');

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
						placeholder="Search Term..."
						value={text}
					/>
					{text.length > 0 && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							className="fill-current w-4 h-4 mr-2"
							onClick={() => setText('')}
							cursor="pointer"
						>
							<path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
						</svg>
					)}
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
