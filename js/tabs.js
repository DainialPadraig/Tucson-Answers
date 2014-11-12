jQuery(document).ready(function(){
	jQuery("#myTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
  jQuery("#myTabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
	jQuery("#myTabs a").click(function() {
		jQuery("#nexttab").removeClass("disabled");
		jQuery("#prevtab").removeClass("disabled");
	});
	jQuery("#nexttab").click(function() {
    var selected = jQuery("#myTabs").tabs("option", "selected");
    jQuery("#myTabs").tabs("option", "selected", selected + 1 );
		jQuery("#prevtab").removeClass("disabled");
		if (selected >= jQuery(".ui-tabs-nav").children().size() - 2 ) {
			jQuery("#nexttab").addClass("disabled");
		} else jQuery("#nexttab").removeClass("disabled");
	});
	jQuery("#prevtab").click(function() {
    var selected = jQuery("#myTabs").tabs("option", "selected");
    jQuery("#myTabs").tabs("option", "selected", selected - 1 );
		jQuery("#nexttab").removeClass("disabled");
		if (selected <= 1 ) {
			jQuery("#prevtab").addClass("disabled");
		} else jQuery("#prevtab").removeClass("disabled");
	}).addClass("disabled");
})