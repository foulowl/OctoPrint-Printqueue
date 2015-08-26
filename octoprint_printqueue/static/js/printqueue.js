$(function() {
    function PrintQueueViewModel(parameters) {
        var self = this;

				self.move_up = function() {
					var sel = document.getElementById("queued_files");
					var i1=0, i2=1;
					while (i2 < sel.options.length) {
						swapIf(sel,i1++,i2++);
					}
				};

				self.move_down = function() {
					var sel = document.getElementById("queued_files");
					var i1=sel.options.length-1, i2=i1-1;
					while (i1 > 0) {
						swapIf(sel,i1--,i2--);
					}
				};

				self.remove = function() {
					var x = document.getElementById("queued_files");
					x.remove(x.selectedIndex);
				};

				self.print_all = function() {

				};

				self.change_spool = function() {

				};

		}

	var swapVar = '';
	function swapIf(sel,i1,i2) {
		if ( ! sel[i1].selected && sel[i2].selected) {
			swapVar = sel[i2].text;
			sel[i2].text = sel[i1].text;
			sel[i1].text = swapVar;
			swapVar = sel[i2].value;
			sel[i2].value = sel[i1].value;
			sel[i1].value = swapVar;
			sel[i1].selected = true;
			sel[i2].selected = false;
		}
	}


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

$(document).ready(function(){
    $('input[type="button"]').click(function(){
        var $op = $('#select2 option:selected'),
            $this = $(this);
        if($op.length){
            ($this.val() == 'Up') ? 
                $op.first().prev().before($op) : 
                $op.last().next().after($op);
        }
    });
});
