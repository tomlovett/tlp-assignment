import React from 'react'
import { useEffect, useState } from 'react'

export default function ImageDetail({ id }) {
	const [image, setImage] = useState({})

	useEffect(() => {
		// Gigapay does not work like this, but if this was an actual app it would have API routes for "/images/:id"
		setImage(dummyImage)
		return

		fetch(`https://www.ourwebsite.com/api/images/${id}`)
			.then(res => res.json())
			.then(body => setImage(body.image))
	})

	const formattedTags = tagString => tagString.replaceAll(',', '')

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
	imageURL: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_150.jpg',
	tags: 'big, spooky, doggo'
}
