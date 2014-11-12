(function ($) {
	Drupal.behaviors.mysiteSearch = {
		attach: function() {
			// Apply the default text to the search block's text field.
			$('#block-search-form .form-text')
			// Add default text options on blur.
			.blur(function () {
				$(this).addClass('gray');
				$(this).attr('value', Drupal.t ('Search...'))
				.keypress(function(){
					/* keep what's typed */
					$(this).unbind('blur');
					})
				.focusin(function () {
					$(this).attr('value', '');
					$(this).removeClass('gray');
					$(this).unbind('focusin');
				});
			})
			// Trigger the blur event to set things up.
			.blur();
		}
	};
	Drupal.behaviors.frontSearch = {
		attach: function() {
			// Apply the default text to the search block's text field.
			$('.front #block-search-form .form-type-textfield .form-text')
			// Add default text options on blur.
			.blur(function () {
				$(this).addClass('gray');
				$(this).attr('value', Drupal.t ('Try jobs, water bill, or parking...'))
				.keypress(function(){
					/* keep what's typed */
					$(this).unbind('blur');
					$(this).attr('value', '');
					$(this).removeClass('gray');
					$(this).unbind('keypress');	
					});
			})
			// Trigger the blur event to set things up.
			.blur().focus();
		}
	};
}(jQuery));