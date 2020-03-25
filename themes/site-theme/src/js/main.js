import styles from './../css/main.css';

// Scroll anchor links

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

// END

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let products = document.querySelectorAll("#product");

for (let i = 0; i < products.length; i++) {
    let productHtml = product[i];
    let productUpdate = productHtml.querySelector("button");
    productUpdate.addEventListener('click', function() { 
        let productHtmlName = productHtml.querySelector("#title").innerText;
        let getQuoteForm = document.getElementById(productHtmlName + "-quote");
        let getVisualQuote = document.getElementById(productHtmlName + "-quote-visual");
        let productArrayID = quoteQuans.find( ({ productName }) => productName === productHtmlName );
        let productDes = productHtml.querySelector("#des").innerText;
        let productQuan = productHtml.querySelector("#quantity").value;
		let productSize = productHtml.querySelector("#size").value;
		let productAddedAlert = productHtml.querySelector("#item-add-notif");
		let productUpdatedAlert = productHtml.querySelector("#item-updated-notif");
    if (productArrayID.sizeNeeded !== productSize || productArrayID.quanNeeded !== productQuan) {
        productArrayID.quanNeeded = productQuan
        productArrayID.sizeNeeded = productSize
        getQuoteForm.innerHTML = '<input type="hidden" name="' + productHtmlName.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') + '-needed" value="' + productQuan + '"><input type="hidden" name="' + productHtmlName.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') + '-size" value="' + productSize + '">'
		getVisualQuote.innerHTML = '<div class="flex flex-wrap w-full py-5 border-b border-black"><div class="w-1/4 text-center"><span class="border border-black py-1 px-3">' + productQuan + '</span></div><div class="w-1/2 font-ibm-conds text-xl">' + productHtmlName + '<br><p class="pt-2 font-ibm-mono text-xs">' + productDes + '</p></div><div class="w-1/4 text-center"><button class="border border-black py-1 px-3" onclick="' + productHtmlName.split(" ").join("-").split("-").join("").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') + 'removeQuote()">X</button></div></div>'

		if (productAddedAlert.classList.contains('revealed')) {
			productUpdatedAlert.classList.remove("opacity-0", "-mt-6");
			productUpdatedAlert.classList.add("revealed");
			productAddedAlert.classList.add("opacity-0", "-mt-6");
			productAddedAlert.classList.remove("revealed");
		} else if (productUpdatedAlert.classList.contains('revealed')) {
			productUpdatedAlert.classList.add("-mt-6");
			sleep(500).then(() => { productUpdatedAlert.classList.remove("-mt-6"); });
		} else {
			productAddedAlert.classList.add("revealed");
			productAddedAlert.classList.remove("opacity-0", "-mt-6");
		}
	}
    }, false);
}