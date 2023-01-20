// $('.multiple-items').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// });

const $jq = jQuery.noConflict();

$jq(document).ready(function () {
	$jq('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
	});
});
