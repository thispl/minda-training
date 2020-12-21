// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Skill Evaluation Due Report"] = {
	"filters": [
        {
			"fieldname": "start_date",
			"label": __("Start Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        }
        // {
		// 	"fieldname": "date_of_joining_to",
		// 	"label": __("Date of Joining To"),
		// 	"fieldtype": "Date",
		// 	"default": frappe.datetime.get_today(),
		// 	"reqd": 1
        // }
    ]
}
