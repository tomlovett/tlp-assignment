import { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { GIGAPAY_KEY } from '../superSecretFile'

export default function ImagesIndex() {
	const [ searchCriteria, setSearchCriteria ] = useState('')
	const [ imageList, setImageList ] = useState([])

	const requestImages = () => {
		const baseUrl = "https://pixabay.com/api/?image_type=photo"
		const fetchUrl = `${baseUrl}&key=${GIGAPAY_KEY }&q=${searchCriteria}`

		fetch(fetchUrl)
			.then(res => res.json())
			.then(body => { setImageList(body.hits) })
	}

	return (
		<>
			<h3>Photos and Photos</h3>

			<input value={searchCriteria} onChange={e => setSearchCriteria(e.target.value)} />
			<button onClick={requestImages}>Search</button>

			{ imageList.map((image) => <ImageCard image={image} key={image.id}/>) }

		</>
	)
}
