import React from 'react'

export default function ImageCard({ image }) {
	return (
		<a href={'https://google.com'}> {/* TODO: Limit size */}
			<img src={image.previewURL} alt={image.previewURL} />
		</a>
	)
}
