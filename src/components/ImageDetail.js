import React from 'react'

export default function ImageDetail({ id, image }) {
	const formattedTags = tagString => tagString.replace(',', '')

	return (
		<>
			<h3>{dummyImage.img}</h3>

			<p>{formattedTags(dummyImage.tags)}</p>
		</>
	)
}

const dummyImage = {
	id: 1,
	pageUrl: 'https://google.com',
	img: 'nice pretty image',
	tags: 'big pretty spooky'
}
