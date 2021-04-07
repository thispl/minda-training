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
	],
	"formatter": function (row, cell, value, columnDef, dataContext, default_formatter) {
        if (columnDef.id == "Auto Cutting and Crimping") {
            value = dataContext['Auto Cutting and Crimping']
            columnDef.df.link_onclick =
				"frappe.query_reports['Skill Evaluation Due Report'].new_acc(" + JSON.stringify(dataContext) + ")"; 
		}
		if (columnDef.id == "Semi Auto Crimping") {
            value = dataContext['Semi Auto Crimping']
            columnDef.df.link_onclick =
				"frappe.query_reports['Skill Evaluation Due Report'].new_sac(" + JSON.stringify(dataContext) + ")"; 
		}
		if (columnDef.id == "Assembly Evaluation") {
            value = dataContext['Assembly Evaluation']
            columnDef.df.link_onclick =
				"frappe.query_reports['Skill Evaluation Due Report'].new_ae(" + JSON.stringify(dataContext) + ")"; 
		}
		if (columnDef.id == "Quality Evaluation") {
            value = dataContext['Quality Evaluation']
            columnDef.df.link_onclick =
				"frappe.query_reports['Skill Evaluation Due Report'].new_qe(" + JSON.stringify(dataContext) + ")"; 
        }
        value = default_formatter(row, cell, value, columnDef, dataContext);
    return value;
    },
    "new_acc": function (data) {
        if(data['Auto Cutting and Crimping'] =="Pending"){
				var acc = frappe.model.make_new_doc_and_get_name('Auto Cutting and Crimping');
				acc = locals['Auto Cutting and Crimping'][acc];
				acc.employee_code = data["Employee"];
				frappe.set_route("Form","Auto Cutting and Crimping",acc.name)
        }
        if(data['Auto Cutting and Crimping'] == "Completed"){
            // frappe.set_route("Form","Auto Cutting and Crimping",data["Employee"]);
		}
	},
	"new_sac":function(data){
		if(data['Semi Auto Crimping'] =="Pending"){
			var sac = frappe.model.make_new_doc_and_get_name('Semi Auto Crimping');
			sac = locals['Semi Auto Crimping'][sac];
			sac.employee_code = data["Employee"];
			frappe.set_route("Form","Semi Auto Crimping",sac.name)
	}
	if(data['Semi Auto Crimping'] == "Completed"){
		// frappe.set_route("Form","Semi Auto Crimping",data["Employee"]);
	}
	},
	"new_ae":function(data){
		if(data['Assembly Evaluation'] =="Pending"){
			var ae = frappe.model.make_new_doc_and_get_name('Assembly Evaluation');
			ae = locals['Assembly Evaluation'][ae];
			ae.employee_code = data["Employee"];
			frappe.set_route("Form","Assembly Evaluation",ae.name)
		}
		if(data['Assembly Evaluation'] == "Completed"){
			// frappe.set_route("Form","Assembly Evaluation",data["Employee"]);
		}
	},
	"new_qe":function(data){
		if(data['Quality Evaluation'] =="Pending"){
			var ae = frappe.model.make_new_doc_and_get_name('Quality Evaluation');
			ae = locals['Quality Evaluation'][ae];
			ae.employee_code = data["Employee"];
			frappe.set_route("Form","Quality Evaluation",ae.name)
		}
		if(data['Quality Evaluation'] == "Completed"){
			// frappe.set_route("Form","Quality Evaluation",data["Employee"]);
		}
	}
}
