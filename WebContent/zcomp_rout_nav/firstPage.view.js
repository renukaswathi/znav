sap.ui.jsview("zcomp_rout_nav.firstPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcomp_rout_nav.firstPage
	*/ 
	getControllerName : function() {
		return "zcomp_rout_nav.firstPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcomp_rout_nav.firstPage
	*/ 
	createContent : function(oController) {
		var oBut1 = new sap.m.Button({
			  text: "{i18n>but1}",
			  press: oController.handleclick
		  })
		return new sap.m.Page({
			title: "Routing and Navigation",
			content: oBut1	
		});
	}

});