// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Pending List KVS"] = {
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
        // {
		// 	"fieldname": "type_of_verification",
		// 	"label": __("Type of Verification"),
        //     "fieldtype": "Select",
        //     "options": [
        //         "Komax Operator",
        //         "Parts fitting Operator",
        //         "Sub assy process",
        //         "Tapping Operator",
        //         "Checker Board Operator"],
		// 	"default": "Komax Operator",
		// 	"reqd": 1
        // },
    ],
    "formatter": function (row, cell, value, columnDef, dataContext, default_formatter) {
        if (columnDef.id == "Status") {
            value = dataContext.Status
            if(value == "Not Assigned"){
			columnDef.df.link_onclick =
				"frappe.query_reports['Pending List KVS'].open_att_adjust(" + JSON.stringify(dataContext) + ")";
            }
        }
        if (columnDef.id == "Training Observation") {
            value = dataContext['Training Observation']
            if(value == "Pending"){
            columnDef.df.link_onclick =
                "frappe.query_reports['Pending List KVS'].open_att_adjust1(" + JSON.stringify(dataContext) + ")";
            }
        }
        if (columnDef.id == "Production Observation") {
            value = dataContext['Production Observation']
            if(value == "Pending"){
            columnDef.df.link_onclick =
                "frappe.query_reports['Pending List KVS'].open_att_adjust2(" + JSON.stringify(dataContext) + ")";
            }
        }
        if (columnDef.id == "Quality Observation") {
            value = dataContext['Quality Observation']
            if(value == "Pending"){
            columnDef.df.link_onclick =
                "frappe.query_reports['Pending List KVS'].open_att_adjust3(" + JSON.stringify(dataContext) + ")";
            }
        }
        value = default_formatter(row, cell, value, columnDef, dataContext);
       
    return value;
    },
    "open_att_adjust": function (data) {
        frappe.set_route("Form","KVS Type Assignment","New KVS Type Assignment",{"employee": data["Employee"]});       
    },
    "open_att_adjust1": function (data) {
        // frappe.set_route("Form",data['KVS Type']+" Training Observation","New "+data['KVS Type']+" Training Observation",{"employee_code": data["Employee"]});
        var pp = frappe.model.make_new_doc_and_get_name(data['KVS Type']+" Training Observation");
        pp = locals[data['KVS Type']+" Training Observation"][pp];
        pp.employee_code = data["Employee"]
        frappe.set_route("Form",data['KVS Type']+" Training Observation",pp.name)
    },
    "open_att_adjust2": function (data) {
        var pp = frappe.model.make_new_doc_and_get_name(data['KVS Type']+" Production Observation");
        pp = locals[data['KVS Type']+" Production Observation"][pp];
        pp.employee_code = data["Employee"]
        frappe.set_route("Form",data['KVS Type']+" Production Observation",pp.name)
    },
    "open_att_adjust3": function (data) {
        var pp = frappe.model.make_new_doc_and_get_name(data['KVS Type']+" Quality Observation");
        pp = locals[data['KVS Type']+" Quality Observation"][pp];
        pp.employee_code = data["Employee"]
        frappe.set_route("Form",data['KVS Type']+" Quality Observation",pp.name)
    },
}
