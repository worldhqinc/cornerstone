export default function () {

	document.addEventListener('click', (event) => {
		let exploreProducts = document.getElementById('exploreProducts');
		let headerNavContainer = document.getElementsByClassName('header-nav-container');

		if (exploreProducts.contains(event.target)) {
			let headerClassList = headerNavContainer[0].classList

			if ( headerClassList.contains('active-sub-nav') ) {
				return headerClassList.remove('active-sub-nav');
			}
			return headerClassList.add('active-sub-nav');
		}


	});

	// $(document).on('click', '#exploreProducts', function(event) {

	// 	let $headerNavContainer = $('.header-nav-container');
	// 	console.log('test ', event);
	// 	if ( $headerNavContainer.hasClass('active-sub-nav') ) {
	// 		console.log('has class');
	// 		return $headerNavContainer.removeClass('active-sub-nav');
	// 	}

	// 	return $headerNavContainer.addClass('active-sub-nav');
	// });

	// $(document).click(function(e) {
	// 	let $lowerLevelSubNav = $('.lower-level-sub-nav');
	// 	let $exploreProducts = $('#exploreProducts');
	// 	// if the target of the click isn't the container nor a descendant of the container
	// 	if (!$lowerLevelSubNav.is(e.target) && $lowerLevelSubNav.has(e.target).length === 0) {
	// 		$('.header-nav-container').removeClass('active-sub-nav');
	// 	}
	// });
}