# coding=utf-8
from __future__ import absolute_import

### (Don't forget to remove me)
# This is a basic skeleton for your plugin's __init__.py. You probably want to adjust the class name of your plugin
# as well as the plugin mixins it's subclassing from. This is really just a basic skeleton to get you started,
# defining your plugin as a template plugin.
#
# Take a look at the documentation on what other plugin mixins are available.

import octoprint.plugin

class PrintqueuePlugin(octoprint.plugin.StartupPlugin,
                       octoprint.plugin.TemplatePlugin,
                       octoprint.plugin.SettingsPlugin,
                       octoprint.plugin.AssetPlugin):
	def get_assets(self):
		return dict(
			js=["js/printqueue.js"]
		)

__plugin_name__ = "Print Queue"

def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = PrintqueuePlugin()

	# global __plugin_hooks__
	# __plugin_hooks__ = {
	#    "some.octoprint.hook": __plugin_implementation__.some_hook_handler
	# }

