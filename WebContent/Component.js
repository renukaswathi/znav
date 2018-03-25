jQuery.sap.declare("sap.demo.cart.Component");

sap.ui.core.UIComponent.extend("sap.demo.cart.Component", {

	metadata : {
		routing : {
			config : {
				viewType : "JS",
				viewPath : "zcomp_rout_nav",
			    targetControl: "app",
				//clearTarget : true
			},

			routes : [ 
			{
				pattern : "",
				name : "First",
				view : "firstPage",
				clearTarget : true,
				targetAggregation : "pages",
			},
			{
				
				pattern: "Insecondpage",
				name:"second",
				view:"secondPage",
				targetAggregation : "pages",
				clearTarget:true
		
			}
			]

		}
	},

	init : function() {
		 //debugger;
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		var router = this.getRouter();
		router.register("appRouter");
		router.initialize();

		debugger;
		var i18nmodel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "./i18n/i18n.properties",
			bundleLocale : "en"
		})
		this.setModel(i18nmodel, "i18n");
		
		// call overridden destroy
		 // sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);

	},

	createContent : function() {
		// debugger;
		//create rootview
		var oView = sap.ui.view({
			viewName : "zcomp_rout_nav.App",
			type : "JS",
			viewData : {
				component : this
			}
		});

		return oView;
	},
	
	 destroy : function () {
		  if (this.routeHandler) {
		  this.routeHandler.destroy();
		  }}

})
