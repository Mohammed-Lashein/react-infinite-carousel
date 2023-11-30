import { useState, useRef } from 'react'

const Carousel = () => {
	const [current, setCurrent] = useState(0)
	const [transitionValue, setTransitionValue] = useState(0)
	const carousel = useRef(null)
	const imgsArray = ['/img-1.jpg', '/img-2.jpg', '/img-3.jpg', '/img-4.jpg', '/img-5.jpg']


	const handleIncrement = () => {
		carousel.current.style.transitionDuration = '500ms'
		const updatedCurrent = current === imgsArray.length - 1 ? 0 : current + 1
		console.log('The updated current from the handleIncrement')
		console.log(updatedCurrent)
		setCurrent(updatedCurrent)
		console.log('#########')
		setTransitionValue(carousel.current.clientWidth * updatedCurrent)
	}

	const handleDecrement = () => {
		carousel.current.style.transitionDuration = '500ms'
		const updatedCurrent = current === 0 ? imgsArray.length - 1 : current - 1
		setCurrent(updatedCurrent)
		console.log('The updated current from decrement')
		console.log(updatedCurrent)
		console.log('#######')
		setTransitionValue(carousel.current.clientWidth * updatedCurrent)
		/* The above logic worked by using storing the latest value of current in a variable . This solution was suggested by chatGPT but I didn't understand why so I asked for further explanation for the following inquiry: 
    Since react updates the state values asynchronously, how will the variable get the latest value of the state variable ?
    >> React will create these functions from scratch during every re-render, so the updatedCurrent variable will have access to the latest value of the current variable . */
	}


	return (
		<>
			<ul
				ref={carousel}
				style={{ transform: `translateX(-${transitionValue}px)` }}
			>
				{imgsArray.map((imgSource) => (
					<li key={imgSource}>
						<img
							src={imgSource}
							alt={imgSource.slice(0, -4)}
						/>
					</li>
				))}
			</ul>
			<button
				className='left-arrow'
				onClick={handleDecrement}
			>
				&#8249;
			</button>
			<button
				className='right-arrow'
				onClick={handleIncrement}
			>
				&#8250;
			</button>
		</>
	)
}
export default Carousel
