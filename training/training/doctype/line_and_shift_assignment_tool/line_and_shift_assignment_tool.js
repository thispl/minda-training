// Copyright (c) 2019, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Line and Shift Assignment Tool', {
	refresh: function(frm) {
        frm.disable_save();
    },
    line_assign: function(frm){
        if(frm.doc.new_line){
            frappe.call({
                "method": "training.training.doctype.line_and_shift_assignment_tool.line_and_shift_assignment_tool.assign_line",
                args:{
                    "employee": frm.doc.employee,
                    "line": frm.doc.new_line,
                    "date_of_assign": frm.doc.date_of_assign
                },
                callback: function(frm){
                    frappe.msgprint("Line Updated Successfullly")
                }
            })
        }
    },
    shift_assign: function(frm){
        if(frm.doc.new_line){
            frappe.call({
                "method": "training.training.doctype.line_and_shift_assignment_tool.line_and_shift_assignment_tool.assign_shift",
                args:{
                    "employee": frm.doc.employee,
                    "line": frm.doc.new_line,
                    "date_of_assign": frm.doc.date_of_assign
                },
                callback: function(frm){
                    frappe.msgprint("Shift Updated Successfullly")
                }
            })
        }
    },
    line_and_shift_assign: function(frm){
        if(frm.doc.new_line){
            frappe.call({
                "method": "training.training.doctype.line_and_shift_assignment_tool.line_and_shift_assignment_tool.assign_shift_and_line",
                args:{
                    "employee": frm.doc.employee,
                    "line": frm.doc.new_line,
                    "shift": frm.doc.new_shift,
                    "date_of_assign": frm.doc.date_of_assign
                },
                callback: function(frm){
                    frappe.msgprint("Line and Shift Updated Successfullly")
                }
            })
        }
    }
});
