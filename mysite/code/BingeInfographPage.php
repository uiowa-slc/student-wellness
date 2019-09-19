<?php
use SilverStripe\Assets\Image;
use SilverStripe\CMS\Model\SiteTree;

class BingeInfographPage extends Page {

	private static $db = array(

	);

	private static $has_one = array(
	
	);

	private static $many_many = array(
	);

	private static $many_many_extraFields = array(
	);


	public function getCMSFields() {
		$f = parent::getCMSFields();

		return $f;
	}
}
