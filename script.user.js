// ==UserScript==
// @name Steam External Link Bypasser
// @namespace https://github.com/cletusc
// @version 0.0.1
// @description Adds ability to bypass certain hosts on the Steam external site warning page.
// @copyright 2014+, Ryan Chatham <ryan.b.chatham@gmail.com> (https://github.com/cletusc)
// @author Ryan Chatham <ryan.b.chatham@gmail.com> (https://github.com/cletusc)
// @icon http://www.gravatar.com/avatar.php?gravatar_id=6875e83aa6c563790cb2da914aaba8b3&r=PG&s=48&default=identicon
// @license MIT; https://github.com/cletusc/steam-external-link-bypasser/blob/master/LICENSE
// @homepage https://github.com/cletusc/steam-external-link-bypasser
// @supportURL https://github.com/cletusc/steam-external-link-bypasser/issues
// @grant none
// @include https://steamcommunity.com/linkfilter/?url=*
// ==/UserScript==

// This script was generated using an automated build script.
// See project build guide linked at https://github.com/cletusc/steam-external-link-bypasser for more info.

// Start wrapper.
(function wrapper(window, undefined) {
	'use strict';

	// The package.json.
	var pkg = {"name":"steam-external-link-bypasser","version":"0.0.1","homepage":"https://github.com/cletusc/steam-external-link-bypasser","bugs":"https://github.com/cletusc/steam-external-link-bypasser/issues","author":"Ryan Chatham <ryan.b.chatham@gmail.com> (https://github.com/cletusc)","repository":{"type":"git","url":"https://github.com/cletusc/steam-external-link-bypasser.git"},"userscript":{"name":"Steam External Link Bypasser","namespace":"https://github.com/cletusc","version":"{{{pkg.version}}}","description":"Adds ability to bypass certain hosts on the Steam external site warning page.","copyright":"2014+, {{{pkg.author}}}","author":"{{{pkg.author}}}","icon":"http://www.gravatar.com/avatar.php?gravatar_id=6875e83aa6c563790cb2da914aaba8b3&r=PG&s=48&default=identicon","license":"MIT; https://github.com/cletusc/steam-external-link-bypasser/blob/master/LICENSE","homepage":"{{{pkg.homepage}}}","supportURL":"{{{pkg.bugs}}}","grant":"none","include":"https://steamcommunity.com/linkfilter/?url=*"},"devDependencies":{"gulp":"^3.8.3","hogan.js":"^3.0.2","gulp-concat":"^2.2.0","gulp-conflict":"^0.1.2","gulp-css-base64":"^1.1.0","gulp-minify-css":"^0.3.5","gulp-header":"^1.0.2","gulp-hogan-compile":"^0.2.1","vinyl-map":"^1.0.1","gulp-rename":"^1.2.0","gulp-uglify":"^0.3.1"}};
	var $ = null;
	var jQuery = null;

	$ = jQuery = window.jQuery;

// Start vendor JS.
/**
 * Minified file. Third-party version information can be found in /package.json.
 * Original filename: \node_modules\hogan.js\lib\template.js
 */
var Hogan={};!function(t){function i(t,i,s){var e;return i&&"object"==typeof i&&(void 0!==i[t]?e=i[t]:s&&i.get&&"function"==typeof i.get&&(e=i.get(t))),e}function s(t,i,s,e,n,r){function o(){}function u(){}o.prototype=t,u.prototype=t.subs;var a,c=new o;c.subs=new u,c.subsText={},c.buf="",e=e||{},c.stackSubs=e,c.subsText=r;for(a in i)e[a]||(e[a]=i[a]);for(a in e)c.subs[a]=e[a];n=n||{},c.stackPartials=n;for(a in s)n[a]||(n[a]=s[a]);for(a in n)c.partials[a]=n[a];return c}function e(t){return String(null===t||void 0===t?"":t)}function n(t){return t=e(t),h.test(t)?t.replace(r,"&amp;").replace(o,"&lt;").replace(u,"&gt;").replace(a,"&#39;").replace(c,"&quot;"):t}t.Template=function(t,i,s,e){t=t||{},this.r=t.code||this.r,this.c=s,this.options=e||{},this.text=i||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(){return""},v:n,t:e,render:function(t,i,s){return this.ri([t],i||{},s)},ri:function(t,i,s){return this.r(t,i,s)},ep:function(t,i){var e=this.partials[t],n=i[e.name];if(e.instance&&e.base==n)return e.instance;if("string"==typeof n){if(!this.c)throw new Error("No compiler available.");n=this.c.compile(n,this.options)}if(!n)return null;if(this.partials[t].base=n,e.subs){i.stackText||(i.stackText={});for(key in e.subs)i.stackText[key]||(i.stackText[key]=void 0!==this.activeSub&&i.stackText[this.activeSub]?i.stackText[this.activeSub]:this.text);n=s(n,e.subs,e.partials,this.stackSubs,this.stackPartials,i.stackText)}return this.partials[t].instance=n,n},rp:function(t,i,s,e){var n=this.ep(t,s);return n?n.ri(i,s,e):""},rs:function(t,i,s){var e=t[t.length-1];if(!f(e))return void s(t,i,this);for(var n=0;n<e.length;n++)t.push(e[n]),s(t,i,this),t.pop()},s:function(t,i,s,e,n,r,o){var u;return f(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ms(t,i,s,e,n,r,o)),u=!!t,!e&&u&&i&&i.push("object"==typeof t?t:i[i.length-1]),u)},d:function(t,s,e,n){var r,o=t.split("."),u=this.f(o[0],s,e,n),a=this.options.modelGet,c=null;if("."===t&&f(s[s.length-2]))u=s[s.length-1];else for(var h=1;h<o.length;h++)r=i(o[h],u,a),void 0!==r?(c=u,u=r):u="";return n&&!u?!1:(n||"function"!=typeof u||(s.push(c),u=this.mv(u,s,e),s.pop()),u)},f:function(t,s,e,n){for(var r=!1,o=null,u=!1,a=this.options.modelGet,c=s.length-1;c>=0;c--)if(o=s[c],r=i(t,o,a),void 0!==r){u=!0;break}return u?(n||"function"!=typeof r||(r=this.mv(r,s,e)),r):n?!1:""},ls:function(t,i,s,n,r){var o=this.options.delimiters;return this.options.delimiters=r,this.b(this.ct(e(t.call(i,n)),i,s)),this.options.delimiters=o,!1},ct:function(t,i,s){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(i,s)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,i,s,e,n,r,o){var u,a=i[i.length-1],c=t.call(a);return"function"==typeof c?e?!0:(u=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(c,a,s,u.substring(n,r),o)):c},mv:function(t,i,s){var n=i[i.length-1],r=t.call(n);return"function"==typeof r?this.ct(e(r.call(n)),n,s):r},sub:function(t,i,s,e){var n=this.subs[t];n&&(this.activeSub=t,n(i,s,this,e),this.activeSub=!1)}};var r=/&/g,o=/</g,u=/>/g,a=/\'/g,c=/\"/g,h=/[&<>\"\']/,f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan);
// End vendor JS.

	// Template files.
	var templates = (function () {
		// Start templates.
    var templates = {};
    templates['button'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<a id=\"steam-external-link-bypasser-bypass-host\" href=\"");t.b(t.t(t.f("url",c,p,0)));t.b("\" class=\"btn_grey_white_innerfade btn_medium\">\r");t.b("\n" + i);t.b("	<span>Always bypass ");t.b(t.v(t.f("host",c,p,0)));t.b("</span>\r");t.b("\n" + i);t.b("</a>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['manager'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"steam-external-link-bypasser-manager\">\r");t.b("\n" + i);t.b("	<h1>Steam External Link Bypasser: Manager</h1>\r");t.b("\n" + i);t.b("	<p>You are able to manage previously bypassed hosts here. Click on a host to not bypass it anymore. You can learn more about this script at the <a href=\"");t.b(t.t(t.d("pkg.homepage",c,p,0)));t.b("\">the script homepage</a>.</p>\r");t.b("\n" + i);if(t.s(t.f("hosts",c,p,1),c,p,0,316,415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<a class=\"remove-host\" data-host=\"");t.b(t.t(t.f("host",c,p,0)));t.b("\"><span class=\"close\">&times;</span>");t.b(t.v(t.f("host",c,p,0)));t.b("</a>\r");t.b("\n" + i);});c.pop();}t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['styles'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("/**");t.b("\n" + i);t.b(" * Minified file. Third-party version information can be found in /package.json.");t.b("\n" + i);t.b(" * Original filename: \\src\\styles\\style.css");t.b("\n" + i);t.b(" */");t.b("\n" + i);t.b("#steam-external-link-bypasser-bypass-host{margin-top:10px}.steam-external-link-bypasser-manager{padding-top:50px;font-size:150%}.steam-external-link-bypasser-manager .remove-host{display:block;text-decoration:none!important;width:300px;text-align:left;margin:0 auto}.steam-external-link-bypasser-manager .close{color:#a00;margin-right:20px}");return t.fl(); },partials: {}, subs: {  }});
		// End templates.
		
		var data = {};
		var key = null;

		// Convert templates to their shorter "render" form.
		for (key in templates) {
			if (!templates.hasOwnProperty(key)) {
				continue;
			}
			data[key] = render(key);
		}

		// Shortcut the render function. All templates will be passed in as partials by default.
		function render(template) {
			template = templates[template];
			return function (context, partials, indent) {
				return template.render(context, partials || templates, indent);
			};
		}

		return data;
	})();

	// Start script.
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

	// End script.

// End wrapper.
})(window);
