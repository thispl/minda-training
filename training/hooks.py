# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "training"
app_title = "Training"
app_publisher = "Ramya"
app_description = "Training"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "ramya.a@voltechgroup.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/training/css/training.css"
# app_include_js = "/assets/training/js/training.js"

# include js, css files in header of web template
# web_include_css = "/assets/training/css/training.css"
# web_include_js = "/assets/training/js/training.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "training.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "training.install.before_install"
# after_install = "training.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "training.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

scheduler_events = {
# 	"all": [
# 		"training.tasks.all"
# 	],
	"daily": [
		"training.training.doctype.auto_cutting_and_crimping_marks.auto_cutting_and_crimping_marks.send_remainder",
		"training.training.doctype.semi_auto_crimping_marks.semi_auto_crimping_marks.send_remainder",
		"training.training.doctype.assembly_evaluation_marks.assembly_evaluation_marks.send_remainder",
		"training.training.doctype.quality_evaluation_marks.quality_evaluation_marks.send_remainder"      
        
	],
# 	"hourly": [
# 		"training.tasks.hourly"
# 	],
# 	"weekly": [
# 		"training.tasks.weekly"
# 	]
# 	"monthly": [
# 		"training.tasks.monthly"
# 	]
}

# Testing
# -------

# before_tests = "training.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "training.event.get_events"
# }
fixtures = ['Custom Script']
