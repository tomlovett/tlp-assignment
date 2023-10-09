import React from 'react'
import { useEffect, useState } from 'react'

export default function ImageDetail({ image }) {
	const formattedTags = tagString => tagString.replace(',', '')

	return (
		<>
			<img src={image.imageURL} alt={image.imageURL} />

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
