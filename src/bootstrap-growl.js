/*global angular */
/*
 jQuery UI Datepicker plugin wrapper

 @note If ≤ IE8 make sure you have a polyfill for Date.toISOString()
 @param [ui-date] {object} Options to pass to $.fn.datepicker() merged onto uiDateConfig
 */

// The `$growlProvider` can be used to configure global defaults for your
// `$growl` service.
var growlModule = angular.module('ui.bootstrap.growl', []);

growlModule.controller('GrowlController', ['$scope', 'growl', 'model', function($scope, growl, model) { } ]);

growlModule.provider("$growl", function(){
  // The default options for all dialogs.
  var defaults = {
    /* other options: template, templateUrl, controller */
  };

  var globalOptions = {};

  // The `options({})` allows global configuration of all dialogs in the application.
  //
  //      var app = angular.module('App', ['ui.bootstrap.growl'], function($growlProvider){
  //        // don't close dialog when backdrop is clicked by default
  //        $growlProvider.options({backdropClick: false});
  //      });
  this.options = function(value){
    globalOptions = value;
  };

  // Returns the actual `$dialog` service that is injected in controllers
  this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition", "$injector",
  function ($http, $document, $compile, $rootScope, $controller, $templateCache, $q, $transition, $injector) {

    // var body = $document.find('body');

    // function createElement(clazz) {
    //   var el = angular.element("<div>");
    //   el.addClass(clazz);
    //   return el;
    // }

    // The `Dialog` class represents a modal dialog. The dialog class can be invoked by providing an options object
    // containing at lest template or templateUrl and controller:
    //
    //     var d = new Dialog({templateUrl: 'foo.html', controller: 'BarController'});
    //
    // Dialogs can also be created using templateUrl and controller as distinct arguments:
    //
    //     var d = new Dialog('path/to/dialog.html', MyDialogController);
    function Growl(message, opts) {
      var self = this, options = this.options = angular.extend({}, defaults, globalOptions, opts);

      $.bootstrapGrowl(message, opts);
    }

    // The actual `$growl` service that is injected in controllers.
    return {
      // Creates a new `Growl` with the specified options.
      growl: function(message, opts){
        return new Growl(message, opts);
      }
    };
  }];
});
