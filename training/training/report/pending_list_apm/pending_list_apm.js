// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Pending List APM"] = {
	"filters": [
        {
			"fieldname": "from",
			"label": __("Date of Joining From"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        },
        {
			"fieldname": "to",
			"label": __("Date of Joining To"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        },
    ],
}
