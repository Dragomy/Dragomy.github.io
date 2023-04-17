const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const googleResults = document.querySelector('.google');
const bingResults = document.querySelector('.bing');
const youtubeResults = document.querySelector('.youtube');

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
	}
}
