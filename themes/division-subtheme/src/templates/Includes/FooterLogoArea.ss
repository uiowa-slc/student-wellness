<%-- footer logo area, used only in a few sites, override in division-subtheme if necessary --%>
<footer class="footer-logo-area" role="contentinfo">
	<div class="row">
<%-- 		<div class="columns medium-6 large-4">
			<p>helol</p>
			<% include LastEditedNote %>
			<p>
				<a href="appointments/" class="button text-center">Make an Appointment</a>
			</p>
			$SiteConfig.Hours

			<a href="{$BaseHref}"><img class="footer-logo-area__logo" alt="Student Health & Wellness Logo" src="{$ThemeDir}/dist/images/Student-Wellness_Stacked.png" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></a>
			</div> --%>
			<div class="show-for-large columns large-5 large-centered">

					<a href="{$BaseHref}"><img class="footer-logo-area__logo" alt="Student Health & Wellness Logo" src="{$ThemeDir}/dist/images/Student-Wellness_Stacked.png" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></a>

					<% include LastEditedNote %>
			<p>
				<a href="appointments/" class="button text-center">Make an Appointment</a>
			</p>
			$SiteConfig.Hours

		
					</div>
<%-- 
					<div class="large-5 columns">
						
					</div> --%>

			

			</div>
			<%-- <div class="columns large-3">
				<p>
					Medical services: <br />
					<a href="http://www.aaahc.org/" target="_blank"><img class="footer-logo-area__accred" alt="Accredited by the Accreditation Association for Ambulatory Health Care, Inc." src="{$ThemeDir}/dist/images/aaahc.jpg"/></a>
				</p>
			</div> --%>
		</div>
	</footer>
