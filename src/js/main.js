const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
@@include('partial/header.js') 
@@include('partial/watermark.js')


// UTILS
@@include('util/fade-out.js')
@@include('util/smooth-scroll.js')
@@include('util/replace-broken-image.js')

document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	@@include('partial/format-tel-link.js')
	@@include('partial/external-link-norefer.js')
	@@include('partial/protect-image.js')
	/*@@include('partial/responsive-table.js') */
});
 


@@include('partial/init.js') 
@@include('partial/newsletter.js')
@@include('partial/block-multiple-slider.js')
@@include('partial/hero-slider.js')
@@include('partial/news-slider.js')
@@include('partial/detail-modal.js')
@@include('partial/products-slider.js')
@@include('partial/references-slider.js')
@@include('partial/why-us-slider.js')
@@include('partial/counter.js')
@@include('partial/history-slider.js')
@@include('partial/accordion.js')
@@include('partial/references-scroll.js')
@@include('partial/form-modal.js')
@@include('partial/video-modal.js')
@@include('partial/file-input.js')
@@include('partial/back-to-top.js')


