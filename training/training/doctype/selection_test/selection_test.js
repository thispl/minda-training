// Copyright (c) 2019, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Selection Test', {
	refresh: function(frm) {

	},
	validate:function(frm){
		if (frm.doc.date_of_skill_evaluation) {
            var c = frappe.datetime.get_diff(frappe.datetime.nowdate(), frm.doc.date_of_skill_evaluation)
            if (c < 0) {
                frappe.msgprint({
                    title: __('Notification'),
                    indicator: 'red',
                    message: __('Date of Evaluation Cannot be Future Date')
                })
                validated = false;
            }
        }
	},
	date_of_evaluation: function (frm) {
        if (frm.doc.date_of_evaluation) {
            var c = frappe.datetime.get_diff(frappe.datetime.nowdate(), frm.doc.date_of_evaluation)
            if (c < 0) {
                frappe.msgprint({
                    title: __('Notification'),
                    indicator: 'red',
                    message: __('Date of Evaluation Cannot be Future Date')
                })
            }
        }
    },
});
