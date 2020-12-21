// Copyright (c) 2016, Ramya and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["New Joinees Details"] = {
	"filters": [
        {
			"fieldname": "date_of_joining_from",
			"label": __("Date of Joining From"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        },
        {
			"fieldname": "date_of_joining_to",
			"label": __("Date of Joining To"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
        },
    ],
    "formatter": function (row, cell, value, columnDef, dataContext, default_formatter) {
        if (columnDef.id == "Induction Test Assy") {
            value = dataContext['Induction Test Assy']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "Induction Test Machine") {
            value = dataContext['Induction Test Machine']
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
        if (columnDef.id == "Shift") {
            value = dataContext['Shift']
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust4(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "Color Blindness Test") {
            value = dataContext["Color Blindness Test"]
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust5(" + JSON.stringify(dataContext) + ")"; 
        }
        if (columnDef.id == "Practical Knowledge Verification") {
            value = dataContext["Practical Knowledge Verification"]
            columnDef.df.link_onclick =
				"frappe.query_reports['New Joinees Details'].open_att_adjust6(" + JSON.stringify(dataContext) + ")"; 
        }
        value = default_formatter(row, cell, value, columnDef, dataContext);
    return value;
    },
    "open_att_adjust": function (data) {
        if(data['Induction Test Assy'] =="Pending"){
            frappe.set_route("Form","Induction Training Assembly Area","New Induction Training Assembly Area",{"employee_code": data["Employee"]});
        }
        if(data['Induction test Assy'] == "Completed"){
            frappe.set_route("Form","Induction Training Assembly Area",data["Employee"]);
        }
    },

    "open_att_adjust1": function (data) {
        if(data['Induction Test Machine'] == "Pending"){
            frappe.set_route("Form","Induction Training Machine Area Crimping","New Induction Training Machine Area Crimping",{"employee_code": data["Employee"]});
        } 
        if(data['Induction Test Machine'] == "Completed"){
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
        // console.log(data)
        if(data['Line'] == "Pending"){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
        if(data['Line'] == "new"){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
        else if(data['Line']){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
    },
    "open_att_adjust4": function (data) {
        if(data['Shift'] == "Pending"){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
        else if(data['Shift']){
            frappe.set_route("Form","Line and Shift Assignment Tool","New Line and Shift Assignment Tool",{"employee": data["Employee"]});
        }
    },
    "open_att_adjust5": function (data) {
        if(data['Color Blindness Test'] == "Pending"){
            frappe.set_route("Form","Color Blindness Test","New Color Blindness Test",{"employee_code": data["Employee"]});
        }
        if(data['Color Blindness Test'] == "Completed"){
            frappe.set_route("Form","Color Blindness Test",data["Employee"]);
        }
    },
    "open_att_adjust6": function (data) {
        if(data['Practical Knowledge Verification'] == "Pending"){
            frappe.set_route("Form","New Joinees Practical Knowledge Verification","New New Joinees Practical Knowledge Verification",{"employee_code": data["Employee"]});
        }
        if(data['Practical Knowledge Verification'] == "Completed"){
            frappe.set_route("Form","New Joinees Practical Knowledge Verification",data["Employee"]);
        }
    }
}




l
