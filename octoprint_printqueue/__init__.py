# coding=utf-8
from __future__ import absolute_import

### (Don't forget to remove me)
# This is a basic skeleton for your plugin's __init__.py. You probably want to adjust the class name of your plugin
# as well as the plugin mixins it's subclassing from. This is really just a basic skeleton to get you started,
# defining your plugin as a template plugin.
#
# Take a look at the documentation on what other plugin mixins are available.

import octoprint.plugin

import flask

class PrintqueuePlugin(octoprint.plugin.StartupPlugin,
                       octoprint.plugin.TemplatePlugin,
                       octoprint.plugin.SettingsPlugin,
                       octoprint.plugin.AssetPlugin,
											 octoprint.plugin.SimpleApiPlugin):


	def get_assets(self):
		return dict(
			js=["js/printqueue.js"]
		)

	def get_api_commands(self):
		return dict(
			load_queue=[],
			save_queue=[]
		)
	
	def on_api_command(self, command, data):
		import flask
		if command == "load_queue":
			parameter = "unset"
			if "parameter" in data:
				parameter = "set"
			self._logger.info("load_queue called, parameter is {parameter}".format(**locals()))
		elif command == "save_queue":
			self._logger.info("save_queue called, some_parameter is {some_parameter}".format(**data))

	def on_api_get(self, request):
		return flask.jsonify(foo="bar")


__plugin_name__ = "Print Queue"

def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = PrintqueuePlugin()

	# global __plugin_hooks__
	# __plugin_hooks__ = {
	#    "some.octoprint.hook": __plugin_implementation__.some_hook_handler
	# }

