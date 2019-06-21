// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Practical Knowledge Verification Pending List"] = {
	"filters": [
        {
			"fieldname": "date_of_joining",
			"label": __("Date of Joining"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        },
    ],
    "formatter": function (row, cell, value, columnDef, dataContext, default_formatter) {
        if (columnDef.id == "Status") {
            value = dataContext['Status']
            columnDef.df.link_onclick =
				"frappe.query_reports['Practical Knowledge Verification Pending List'].open_att_adjust(" + JSON.stringify(dataContext) + ")"; 
        }
        
        value = default_formatter(row, cell, value, columnDef, dataContext);
        
    return value;
    },
    "open_att_adjust": function (data) {
        if(data['Status'] == "Pending"){
            frappe.set_route("Form","New Joinees Practical Knowledge Verification","New New Joinees Practical Knowledge Verification",{"employee_code": data["Employee"]});
        }
    },
}
