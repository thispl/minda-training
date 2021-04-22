# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import add_days,today
import json

class InductionTrainingAssemblyArea(Document):
    def autoname(self):
        if self.employee_code:
            self.name = self.employee_code

@frappe.whitelist()
def validate_test_score(doc,method):
        s = 0
        if (doc.answer1 == "ஆ") :
            s = s + 1
        if (doc.answer2 == "ஆ") :
            s = s + 1
        if (doc.answer3 == "ஆ") :
            s = s + 1
        if (doc.answer4 == "இ") :
            s = s + 1
        if (doc.answer5 == "ஈ") :
            s = s + 1
        if (doc.answer6 in ["அ","இ"] ) :
            s = s + 1
        if (doc.answer7 == "அ") :
            s = s + 1
        if (doc.answer8 == "ஆ") :
            s = s + 1
        if (doc.answer9 == "ஆ") :
            s = s + 1
        if (doc.answer10 == "அ") :
            s = s + 0.5
        if (doc.answer102 == "ஈ") :
            s = s + 0.5
        if (doc.answer11 == "இ") :
            s = s + 1
        if (doc.answer12 == "அ") :
            s = s + 1
        if (doc.answer13 == "ஈ") :
            s = s + 1
        if (doc.answer14 == "ஆ") :
            s = s + 0.3
        if (doc.answer142 == "இ") :
            s = s + 0.3
        if (doc.answer143 == "அ") :
            s = s + 0.4
        if (doc.answer15 == "ஆ") :
            s = s + 1
        if (doc.answer16 == "அ") :
            s = s + 0.5
        if (doc.answer162 == "ஆ") :
            s = s + 0.5
        if (doc.answer17 == "ஈ") :
            s = s + 1
        if (doc.answer18 == "ஈ") :
            s = s + 1
        if (doc.answer19 == "அ") :
            s = s + 1
        if (doc.answer20 == "இ") :
            s = s + 1
        if (doc.answer21 == "ஈ") :
            s = s + 1
        if (doc.answer22 == "அ") :
            s = s + 1
        if (doc.answer233 == "ஆ") :
            s = s + 0.25
        if (doc.answer234 == "இ") :
            s = s + 0.25
        if (doc.answer24 == "ஈ") :
            s = s + 1
        if (doc.answer25 == "ஆ") :
            s = s + 1
        if (doc.answer26 == "இ") :
            s = s + 1
        if (doc.answer27 == "இ") :
            s = s + 1
        if (doc.answer28 == "ஆ") :
            s = s + 1
        if (doc.answer29 == "அ") :
            s = s + 1
        if (doc.answer30 == "ஆ") :
            s = s + 0.25
        if (doc.answer302 == "அ") :
            s = s + 0.25
        if (doc.answer303 == "ஈ") :
            s = s + 0.25
        if (doc.answer304 == "இ") :
            s = s + 0.25
        frappe.db.set_value("Induction Training Assembly Area",doc.name,"total_score", s)


@frappe.whitelist()
def update_apms(employee_code,associate,status,shift,line_name,date_of_joining):
    if employee_code:
        cq = frappe.db.get_value("Associate Performance Monitoring Check Sheet", {"name": employee_code})
        if cq:
            exist_cq = frappe.get_doc("Associate Performance Monitoring Check Sheet", cq)
        else:
            exist_cq = frappe.new_doc("Associate Performance Monitoring Check Sheet")
        exist_cq.update({
		"employee_code":employee_code,
        "associate": associate,
        "status": status,
        "shift": shift,
        "line_name": line_name,
        "date_of_joining": date_of_joining,
        "handover_date": add_days(today(),1)
        })
        exist_cq.save(ignore_permissions=True)
        frappe.db.commit()
        return "OK"

@frappe.whitelist()
@frappe.whitelist()
def create_ita(frm):
    data = json.loads(frm)
    doc = frappe.new_doc("Induction Training Assembly Area")
    doc.employee_code = data["employee_code"]
    doc.associate = data["associate"]
    doc.status = data["status"]
    doc.shift = data["shift"]
    doc.line_name = data["line_name"]
    doc.date_of_joining = data["date_of_joining"]
    doc.date_of_skill_evaluatation = data["date_of_skill_evaluatation"]
    doc.month_of_evaluation = data["month_of_evaluation"]
    doc.answer1 = data["answer1"]
    doc.answer2 = data["answer2"]
    doc.answer3 = data["answer3"]
    doc.answer4 = data["answer4"]
    doc.answer5 = data["answer5"]
    doc.answer6 = data["answer6"]
    doc.answer7 = data["answer7"]
    doc.answer8 = data["answer8"]
    doc.answer9 = data["answer9"]
    doc.answer10 = data["answer10"]
    doc.answer102 = data["answer102"]    
    doc.answer11 = data["answer11"]
    doc.answer12 = data["answer12"]
    doc.answer13 = data["answer13"]
    doc.answer14 = data["answer14"]
    doc.answer142 = data["answer142"]
    doc.answer143 = data["answer143"]    
    doc.answer15 = data["answer15"]
    doc.answer16 = data["answer16"]
    doc.answer162 = data["answer162"]
    doc.answer17 = data["answer17"]
    doc.answer18 = data["answer18"]
    doc.answer19 = data["answer19"]
    doc.answer20 = data["answer20"]
    doc.answer21 = data["answer21"]
    doc.answer22 = data["answer22"]
    doc.answer23 = data["answer23"]
    doc.answer232 = data["answer232"]
    doc.answer233 = data["answer233"]
    doc.answer234 = data["answer234"]
    doc.answer24 = data["answer24"]
    doc.answer25 = data["answer25"]
    doc.answer26 = data["answer26"]
    doc.answer27 = data["answer27"]
    doc.answer28 = data["answer28"]
    doc.answer29 = data["answer29"]
    doc.answer30 = data["answer30"]
    doc.answer302 = data["answer302"] 
    doc.answer303 = data["answer303"]
    doc.answer304 = data["answer304"]
    doc.save(ignore_permissions=True)
    frappe.db.commit()