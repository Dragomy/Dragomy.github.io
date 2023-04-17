const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const googleResults = document.querySelector('.google');
const bingResults = document.querySelector('.bing');
const youtubeResults = document.querySelector('.youtube');
const resultsContainer = document.querySelector('.results');

searchButton.addEventListener('click', search);
searchInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		search();
	}
});

function search() {
	const query = searchInput.value;

	if (query.trim() !== '') {
		const googleUrl = 'https://www.google.com/search?q=' + query;
		const bingUrl = 'https://www.bing.com/search?q=' + query;
		const youtubeUrl = 'https://www.youtube.com/results?search_query=' + query;

		googleResults.innerHTML = '<iframe src="' + googleUrl + '"></iframe>';
		bingResults.innerHTML = '<iframe src="' + bingUrl + '"></iframe>';
		youtubeResults.innerHTML = '<iframe src="' + youtubeUrl + '"></iframe>';

		// Add click event listener to each result container
		const resultContainers = document.querySelectorAll('.results div');
		resultContainers.forEach(container => {
			container.addEventListener('click', function(event) {
				event.stopPropagation(); // Prevent event from bubbling up to the results container
				// Remove active class from other containers
				resultContainers.forEach(c => c.classList.remove('active'));
				// Toggle active class on clicked container
				this.classList.toggle('active');
			});
		});
	}
}

// Add click event listener to results container to remove active class on click outside of containers
resultsContainer.addEventListener('click', function(event) {
	if (event.target === resultsContainer) {
		const activeContainer = document.querySelector('.results div.active');
		if (activeContainer) {
			activeContainer.classList.remove('active');
		}
	}
});

// Add click event listener to document to remove active class on click outside of results container
document.addEventListener('click', function(event) {
	const activeContainer = document.querySelector('.results div.active');
	if (activeContainer && !activeContainer.contains(event.target)) {
		activeContainer.classList.remove('active');
	}
});
