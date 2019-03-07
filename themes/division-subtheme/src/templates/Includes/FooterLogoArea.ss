<%-- footer logo area, used only in a few sites, override in division-subtheme if necessary --%>
<footer class="footer-logo-area" role="contentinfo">
	<div class="row">

			<div class="show-for-large columns large-5 large-centered">

				<% include LastEditedNote %>
				<a href="{$BaseHref}"><img class="footer-logo-area__logo" alt="Student Health & Wellness Logo" src="{$ThemeDir}/dist/images/Student-Wellness_Stacked.png" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></a>

				
				<p><a href="appointments/" class="button text-center">Make an Appointment</a></p>
				$SiteConfig.Hours
			</div>

	</div>
</footer>
