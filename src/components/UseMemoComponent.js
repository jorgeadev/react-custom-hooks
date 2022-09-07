import React, { useState, useMemo } from 'react';

function UseMemoComponent() {
	// State for our counter
	const [count, setCount] = useState(0);

	// State to keep track of current word in array we want to show
	const [wordIndex, setWordIndex] = useState(0);

	// Words we can flip through and view letter count
	const words = ['hey', 'this', 'is', 'cool'];
	const word = words[wordIndex];

	// Returns number of letters in a word
	// We make it slow by including a large and complexity unnecessary loop
	const computeLetterCount = word => {
		let i = 0;
		while (i < 1000000000) i++;
		return word.length;
	}

	// Memorize computeLetterCount, so it uses cached return value if input array ...
	// ... values are the same as last time the function was run.
	const letterCount = useMemo(() => computeLetterCount(word), [word]);

	// This would result in lag when incrementing the counter because ...
	// ... we'd have to wait for expensive function when re-rendering.
	//const letterCount = computeLetterCount(word);

	return (
		<div style={{ padding: "15px" }}>
			<h2>Compute number of letter (slow 🐌)</h2>
			<p>"{ word }" has { letterCount } letters</p>
			<button
				onClick={
					() => {
						const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
						setWordIndex(next);
					}
				}
			>
				Next word
			</button>
			<br />
			<br />
			<h2>Increment a counter (fast ⚡️)</h2>
			<p>Counter: { count }</p>
			<button onClick={ () => setCount(count + 1) }>Increment</button>
		</div>
	);
}

export default UseMemoComponent;