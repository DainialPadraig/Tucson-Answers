<?php

/**
 * @file
 * Default theme implementation for displaying search results.
 *
 * This template collects each invocation of theme_search_result(). This and
 * the child template are dependent to one another sharing the markup for
 * definition lists.
 *
 * Note that modules may implement their own search type and theme function
 * completely bypassing this template.
 *
 * Available variables:
 * - $search_results: All results as it is rendered through
 *   search-result.tpl.php
 * - $module: The machine-readable name of the module (tab) being searched, such
 *   as "node" or "user".
 *
 *
 * @see template_preprocess_search_results()
 *
 * @ingroup themeable
 */
?>
<?php if ($search_results): ?>
  <h2><?php print t('Search results');?></h2>
  <ol class="search-results <?php print $module; ?>-results">
    <?php print $search_results; ?>
  </ol>
  <?php print $pager; ?>
<?php else : ?>
  <h2><?php print t('Your search yielded no results');?></h2>
  <?php print search_help('search#noresults', drupal_help_arg()); ?>
<?php endif; ?>
<style>
h1.city{ margin:1em 0 0.5em }
.search-snippet b{ background-color:#ffde4d;padding:0 2px }
</style>
  <h1 class="city">Top 10 Results from searching all City of Tucson sites:</h1>
  <?php
	$path = explode('/', $_GET['q'], 3);
	$sContent = file('http://www4.tucsonaz.gov/gsearch/' .  str_replace(' ', '+', $path[2]));
	$list = false;
	for ($i = 0; $i <= count($sContent); $i++){
		if (strpos($sContent[$i], '<ol class="search-results google-appliance-results">')) $list = true;
		if ($list) echo str_replace('<b>...</b>', '...', $sContent[$i]);
		if (strpos($sContent[$i], '</ol>')) $list = false;
	}
	?>
  <h3 style="margin-bottom:10px">Still can't find what you're looking for? Show all City of Tucson results:</h3>
  <div id="search">
    <form name="search" method="get" action="http://sahuaro.tucsonaz.gov/www4-search.php">
      <input name="qu" class="search" id="search3" size="5" type="text" style="width:50%;" class="form-text" value="<?php echo $path[2]; ?>">
      <input type="submit" value="Search tucsonaz.gov" class="form-submit">
    </form>
  </div>

