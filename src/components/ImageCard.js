import React from 'react'

export default function ImageCard({ image }) {
	return (
		<a href={`http://localhost:3000/images/${image.id}`}>
			<img src={image.previewURL} alt={image.previewURL} />
		</a>
	)
}
