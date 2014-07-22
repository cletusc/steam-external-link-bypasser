var currentHost = null;
var currentURL = null;
var linkElement = $('#proceedButton').get(0);
var bypassButton = null;
var bypassedHosts = JSON.parse(getSetting(pkg.name + ':bypassedHosts', '{}'));
var manager = null;
var sortedHosts = null;

window.bypassedHosts = bypassedHosts;

// Figure out the current host.
currentURL = linkElement.href;
currentHost = linkElement.host;

// Add the style to the page.
addStyle(templates.styles());

// Check if we are on the management page.
if (currentURL === pkg.homepage + '/manager') {
	
	// Clear body.
	$(document.body).html('');

	// Sort the hosts.
	sortedHosts = Object.keys(bypassedHosts);
	sortedHosts.sort();

	// Add the manager HTML.
	manager = $(templates.manager({
		hosts: sortedHosts.map(function (host) {
			return {host: host};
		}),
		pkg: pkg
	})).appendTo(document.body);

	// Remove each host when clicked.
	manager.on('click', '.remove-host', function () {
		var element = $(this);
		var host = element.attr('data-host');
		unbypassHost(host);
		element.remove();
	});
}

// Check if the current host is bypassed.
if (isHostBypassed(currentHost)) {
	return redirect(currentURL);
}

// Add the button to the page.
bypassButton = $(templates.button({
	host: currentHost,
	url: currentURL
})).appendTo('#warningActions');

bypassButton.on('click', function (e) {
	bypassHost(currentHost);
});

// Script specific functions.
//---------------------------
function bypassHost(host) {
	bypassedHosts[host] = true;
	setSetting(pkg.name + ':bypassedHosts', JSON.stringify(bypassedHosts));
}

function unbypassHost(host) {
	delete bypassedHosts[host];
	setSetting(pkg.name + ':bypassedHosts', JSON.stringify(bypassedHosts));
}

function isHostBypassed(host) {
	return bypassedHosts[host] === true;
}

function redirect(url) {
	window.location.href = url;
}

// Generic functions.
//-------------------
/**
 * Adds a stylesheet to the document.
 * @param {string} text The styles to be added.
 */
function addStyle(text) {
	var style = document.createElement('style');
	style.textContent = text;
	document.querySelector('head').appendChild(style);
}

/**
 * Gets a storage value.
 * @param  {string} aKey     The key you want to get.
 * @param  {mixed}  aDefault The default value to return if there isn't anything in storage.
 * @return {mixed}           The value in storage or `aDefault` if there isn't anything in storage.
 */
function getSetting(aKey, aDefault) {
	var val = localStorage.getItem(aKey);
	if (val === null && typeof aDefault !== 'undefined') {
		return aDefault;
	}
	return val;
}
/**
 * Sets a storage value.
 * @param {string} aKey The key you want to set.
 * @param {mixed}  aVal The value you want to store.
 */
function setSetting(aKey, aVal) {
	localStorage.setItem(aKey, aVal);
}

/**
 * Deletes a storage key.
 * @param {string} aKey The key you want to set.
 */
function deleteSetting(aKey) {
	localStorage.removeItem(aKey);
}
