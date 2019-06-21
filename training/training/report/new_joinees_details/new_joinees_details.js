// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["New Joinees Details"] = {
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
        if (columnDef.id == "IT Assembly Area") {
            value = dataContext['IT Assembly Area']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "IT Machine Area") {
            value = dataContext['IT Machine Area']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust1(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "Selection Test") {
            value = dataContext['Selection Test']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust3(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "Line") {
            value = dataContext['Line']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust2(" + JSON.stringify(dataContext) + ")"; 
        }
        value = default_formatter(row, cell, value, columnDef, dataContext);
        
    return value;
    },
    "open_att_adjust": function (data) {
        if(data['IT Assembly Area'] == "Pending"){
            frappe.set_route("Form","Induction Training Assembly Area","New Induction Training Assembly Area",{"employee_code": data["Employee"]});
        }
        if(data['IT Assembly Area'] == "Completed"){
            frappe.set_route("Form","Induction Training Assembly Area",data["Employee"]);
        }
    },
    "open_att_adjust1": function (data) {
        if(data['IT Machine Area'] == "Pending"){
            frappe.set_route("Form","Induction Training Machine Area Crimping","New Induction Training Machine Area Crimping",{"employee_code": data["Employee"]});
        } 
        if(data['IT Machine Area'] == "Completed"){
            frappe.set_route("Form","Induction Training Machine Area Crimping",data["Employee"]);
        }
    },
    "open_att_adjust3": function (data) {
        if(data['Selection Test'] == "Pending"){
            frappe.set_route("Form","Selection Test","New Selection Test",{"employee_code": data["Employee"]});
        }
        if(data['Selection Test'] == "Completed"){
            frappe.set_route("Form","Selection Test",data["Employee"]);
        }
    },
    "open_att_adjust2": function (data) {
        if(data['Line'] == "NEW"){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
    }
}
