export default function () {

	document.addEventListener('click', (event) => {
		let exploreProducts = document.getElementById('exploreProducts');
		let headerNavContainer = document.getElementsByClassName('header-nav-container');
		let headerClassList = headerNavContainer[0].classList

		let lowerLevelSubNav = document.getElementsByClassName('lower-level-sub-nav');
		let singleSubNav = lowerLevelSubNav[0];

		if (exploreProducts.contains(event.target)) {
			if ( headerClassList.contains('active-sub-nav') ) {
				return headerClassList.remove('active-sub-nav');
			}
			return headerClassList.add('active-sub-nav');
		}

		if (!exploreProducts.contains(event.target) && !singleSubNav.contains(event.target)) {
			return headerClassList.remove('active-sub-nav');
		}
	});
}