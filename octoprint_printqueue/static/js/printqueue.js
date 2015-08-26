$(function() {
    function PrintQueueViewModel(parameters) {
        var self = this;

				self.move_up = function() {

				};

				self.move_down = function() {

				};

				self.remove = function() {

				};

				self.print_all = function() {

				};

				self.change_spool = function() {

				};



    // This is how our plugin registers itself with the application, by adding some configuration
    // information to the global variable OCTOPRINT_VIEWMODELS
    OCTOPRINT_VIEWMODELS.push([
        // This is the constructor to call for instantiating the plugin
        PrintQueueViewModel,

        // This is a list of dependencies to inject into the plugin, the order which you request
        // here is the order in which the dependencies will be injected into your view model upon
        // instantiation via the parameters argument
        ["settingsViewModel"],

        // Finally, this is the list of selectors for all elements we want this view model to be bound to.
        ["#tab_plugin_printqueue"]
    ]);
});
