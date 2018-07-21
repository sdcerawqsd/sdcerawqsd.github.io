(function() {
	Object.defineProperties(window, {
		adblock2: { value: false },
		OlPopup: { value: null },
		preserve: {
			get: function() { return true; },
			set: function() {}
		},
		turnoff: { value: true }
	});
})();