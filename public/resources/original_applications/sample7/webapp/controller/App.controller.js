sap.ui.define([
	'jquery.sap.global',
	'sap/ui/demo/bulletinboard/controller/BaseController',
	'sap/ui/model/json/JSONModel'
], function (jQuery, BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.demo.bulletinboard.controller.App", {

		onInit: function () {
			var oViewModel = new JSONModel({
					busy: true,
					delay: 0
				});

			this.setModel(oViewModel, "appView");

			this.getOwnerComponent().getModel().metadataLoaded().then(function () {
				oViewModel.setProperty("/busy", false);
			});

			jQuery.sap.storage(jQuery.sap.storage.Type.local).clear();
		}
	});

});
