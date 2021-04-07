// Copyright (c) 2020, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on('Semi Auto Crimping Marks', {
	evaluation_marks_on_form_rendered:function(frm, cdt, cdn){
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-delete-row').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-duplicate-row').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-move-row').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-append-row').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-insert-row-below').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-insert-row').hide();
		},
	refresh: function(frm) {
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-remove-rows').hide();
		frm.fields_dict['evaluation_marks'].grid.wrapper.find('.grid-add-row').hide();
		if(frappe.user.has_role('Training Manager')){
			if(!frm.doc.__islocal){
		frm.add_custom_button(__('Send Mail to Supervisor'), function () {
			frm.set_value("date",frappe.datetime.get_today())
			frm.save()
			frappe.call({
				method: "training.training.doctype.semi_auto_crimping_marks.semi_auto_crimping_marks.sendmail",
				args: {
					"name": frm.doc.name,
					"email": frm.doc.supervisor_email
				},
				callback: function (r) {
					if(r){
						frappe.msgprint('Email Sent to Supervisor')
					}
				}
			})
		})
	}
	}
	},
	get_employees(frm){
		if((frm.doc.evaluation_marks).length==0){
		frappe.call({
			method: "training.training.doctype.semi_auto_crimping_marks.semi_auto_crimping_marks.get_employees",
			args: {
				"date": frm.doc.evaluation_date,
				"line":frm.doc.line_name
			},
			callback: function (r) {
				$.each(r.message,function(i,d){
					row =frm.add_child('evaluation_marks',{
						'employee_code':d.employee_code,
						'employee_name':d.associate,
						'id':d.name,
						'line_name':d.line_name,
						'date_of_joining':d.date_of_joining
					})
				})
				frm.refresh_field('evaluation_marks')
			}
		})
	}
	},
	submit(frm,cdt,cdn){
		if(frm.doc.status == "Pending"){
		frm.save()
		msg = 'Skill Evaluation Marks are not given for '
		msg1 = []
		check_msg = 'Process is not selected for '
		check_msg1 = []	
		$.each(frm.doc.evaluation_marks,function(i,d){
			var child = locals[cdt][cdn]
			list = [d.productivity,d.work_quality,d.discipline,d.attendance]
			check_list = [d.crimp,d.usw_sh,d.js_hst_pf,d.midst_twist,d.mjh]
			if(list.includes(0)){
				msg1.push(d.employee_name)
			}
			if(!check_list.includes(1)){
				check_msg1.push(d.employee_name)
			}
		})
		if(msg1.length != 0){
			frappe.throw(msg +"<b>"+ msg1+"</b>")
		}
		if(check_msg1.length != 0){
			frappe.throw(check_msg +"<b>"+ check_msg1+"</b>")		
		}
		frappe.call({
			method: "training.training.doctype.semi_auto_crimping_marks.semi_auto_crimping_marks.submit",
			args: {
				"marks": frm.doc.evaluation_marks
			},
			callback: function (r) {
				if(r){
					frappe.msgprint("Evaluation Skill Marks Submitted")
					frm.set_value("status","Completed")
					frm.save()
				}
			}
		})
	}
}
});


frappe.ui.form.on('Observation Marks SAC', {
	open(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		frappe.set_route("Form","Semi Auto Crimping",child.id)
	},
	productivity(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		if(child.productivity > 15){
			frappe.throw("Productivity Mark Can't be greater than 15")
		}
	},
	work_quality(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		if(child.work_quality > 15){
			frappe.throw("Work Quality Mark Can't be greater than 15")
		}
	},
	discipline(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		if(child.discipline > 5){
			frappe.throw("Discipline Mark Can't be greater than 5")
		}
	},
	attendance(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		if(child.attendance > 5){
			frappe.throw("Attendance Mark Can't be greater than 5")
		}
	}
	})