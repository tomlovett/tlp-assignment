import React from 'react'

export default function ImageCard({ image }) {
	// Image attributes:
	// id, pageURL, type, tags, previewURL-195893_150.jpg", previewWidth, previewHeight, webformatURL, webformatWidth, webformatHeight, largeImageURL, fullHDURL, imageURL, imageWidth, imageHeight, imageSize, views, downloads, likes, comments, user_id, user,

	return (
		<div> {/* TODO: Limit size */}
			<img src={image.imageURL} alt={image.imageURL} />
		</div>
	)
}
