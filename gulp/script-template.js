// This script was generated using an automated build script.
// See project build guide linked at {{pkg.homepage}} for more info.

// Start wrapper.
(function wrapper(window, undefined) {
	'use strict';

	// The package.json.
	var pkg = {{{pkgJSON}}};
	var $ = null;
	var jQuery = null;

	$ = jQuery = window.jQuery;

// Start vendor JS.
{{{vendorJS}}}
// End vendor JS.

	// Template files.
	var templates = (function () {
		// Start templates.
{{{templates}}}
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
{{{script}}}
	// End script.

// End wrapper.
})(window);
