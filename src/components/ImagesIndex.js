import React from 'react'
import ImageCard from './ImageCard'

export default function ImagesIndex() {	
	return (
		<>
			<h3>Photos and Photos</h3>

			<p>Search bar</p>

			{dummyPhotos.map((photo) => <ImageCard image={photo} key={photo.imageURL}/>)

			}

		</>
	)
}

const dummyPhotos = [
	{ id: 1, img: 'img1', imageURL: 'https://img1.com' },
	{ id: 2, img: 'img2', imageURL: 'https://img2.com' },
	{ id: 3, img: 'img3', imageURL: 'https://img3.com' },
	{ id: 4, img: 'img4', imageURL: 'https://img4.com' },
]
