sap.ui.jsview("zcomp_rout_nav.secondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcomp_rout_nav.secondPage
	*/ 
	getControllerName : function() {
		return "zcomp_rout_nav.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcomp_rout_nav.secondPage
	*/ 
	createContent : function(oController) {
		return new sap.m.Page({
			title: "Secondpage",
			showNavButton: true,
			navButtonPress: oController.handleback,
			content: [
			
			]
		});
	}

});