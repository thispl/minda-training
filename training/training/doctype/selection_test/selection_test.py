# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json

class SelectionTest(Document):
    def autoname(self):
        if self.employee_code:
            self.name = self.employee_code

@frappe.whitelist()
def create_selection_test(frm):
    data = json.loads(frm)
    doc = frappe.new_doc("Selection Test")
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
    doc.answer41 = data["answer41"]    
    doc.answer5 = data["answer5"]
    doc.answer51 = data["answer51"]    
    doc.answer6 = data["answer6"]
    doc.answer6 = data["answer61"]    
    doc.answer7 = data["answer7"]
    doc.answer8 = data["answer8"]
    doc.answer9 = data["answer9"]
    doc.answer10 = data["answer10"]
    doc.answer11 = data["answer11"]
    doc.answer12 = data["answer12"]
    doc.answer13 = data["answer13"]
    doc.answer14 = data["answer14"]
    doc.answer15 = data["answer15"]
    doc.save(ignore_permissions=True)
    frappe.db.commit()