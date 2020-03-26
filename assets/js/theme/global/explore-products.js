export default function () {
	let $headerNavContainer = $('.header-nav-container');
	$(document).on('click','#exploreProducts', (event) => {
		event.preventDefault();
		console.log();
        $headerNavContainer.toggleClass('active-sub-nav');
    });
}