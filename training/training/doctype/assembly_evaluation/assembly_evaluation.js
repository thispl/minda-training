// Copyright (c) 2019, Minda Sai Pvt LTd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assembly Evaluation', {
	after_save: function(frm) {
        if(frm.doc.employee_code){
            frm.add_custom_button(__('Update Employee MIS'), function () {
                frappe.call({
                    method: "minda_custom.minda_custom.doctype.assembly_evaluation.assembly_evaluation.update_mis",
                    args: { 
                        "employee": frm.doc.employee_code,
                        "line": frm.doc.line_name
                    },
                    freeze: true,
                    freeze_message: __("Updating"),
                    callback: function(r){
                        frappe.msgprint("Updated Successfully")
                    }
                })
            });
        }
    },
    refresh:function(frm){
        if (frappe.user.has_role("Training Manager")) {
            frm.add_custom_button(__('Send Mail to Supervisor'), function () {
                var d = new frappe.ui.Dialog({
                    title: __("Send Offer Mail"),
                    'fields': [
                        { 'fieldname': 'sp_name', 'fieldtype': 'Link', 'options': 'Employee', 'label': 'Supervisor Name'},
                        { 'fieldname': 'col_break', 'fieldtype': 'Column Break' },
                        { 'fieldname': 'email', 'fieldtype': 'Data', 'label': 'Email Id' },
                        { 'fieldname': 'sec_break', 'fieldtype': 'Section Break', 'label': 'Message' },
                        { 'fieldname': 'cc', 'fieldtype': 'Data', 'label': 'CC', 'options': 'Email' },
                        // { 'fieldname': 'message', 'fieldtype': 'Text Editor' }
                    ],
                    primary_action: function () {
                        d.hide();
                        var args = d.get_values()
                        args["test_score"] = frm.doc.test_score,
                        args["productivity"] = frm.doc.productivity151,
                        args["discipline"] = frm.doc.discipline51,
                        args["work_quality"] = frm.doc.work_quality1,
                        args["attendance"] = frm.doc.attendance51,
                        args["emp"] = frm.doc.associate,
                        args["date"] = frm.doc.date_of_skill_evaluation,
                        args["dt"] = frm.doc.doctype,
                        args["dn"] = frm.doc.name,
                        args["email"] = (d.get_values()).email
                        frappe.call({
                            method: "training.training.doctype.assembly_evaluation.assembly_evaluation.send_mail",
                            args: args,
                            callback: function (r) {
                                show_alert(__("Email sent to " + frm.doc.email))
                            }
                        })
                    },
                });
                d.fields_dict.sp_name.input.onclick = function () {
                    var employee = (d.get_values()).sp_name
                    if (employee){
                        frappe.call({
                            method: "frappe.client.get_value",
                            args: {
                                doctype:"Employee",
                                filters: {
                                    "name":employee,
                                },
                                fieldname:["prefered_contact_email"]
                            }, 
                            callback: function(r) {
                                console.log(r.message);
                                d.fields_dict.email.set_value(r.message)
                            }
                        })
                    }
                }
                d.show();
            })
        }
    }
});
