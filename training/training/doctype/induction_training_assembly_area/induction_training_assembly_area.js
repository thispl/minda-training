// Copyright (c) 2019, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Induction Training Assembly Area', {
	refresh: function(frm) {
        // frm.add_custom_button(__('Back'), function () {
        //     frappe.set_route("query-report", "New Joinees Details")
        // });
    },
    validate: function(frm){
        if(frm.doc.do_you_want_monitoring_sheet == 1){
            frappe.call({
                "method":"training.training.doctype.induction_training_assembly_area.induction_training_assembly_area.update_apms",
                args:{
                    "employee_code": frm.doc.employee_code,
                    "associate": frm.doc.associate,
                    "status": frm.doc.status,
                    "shift": frm.doc.shift,
                    "line_name": frm.doc.line_name,
                    "date_of_joining": frm.doc.date_of_joining
                },
                callback: function(frm){
                    frappe.msgprint("Monitoring Sheet Created Successfully")
                }
            })
        }
    }
});
