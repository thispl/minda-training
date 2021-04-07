# -*- coding: utf-8 -*-
# Copyright (c) 2019, Minda Sai Pvt LTd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json

class QualityEvaluation(Document):
    def autoname(self):
        if self.employee_code and self.month_of_evaluation:
            self.name = self.employee_code+"-"+self.month_of_evaluation


@frappe.whitelist()
def create_quality_evaluation(frm):
    data = json.loads(frm)
    doc = frappe.new_doc("Quality Evaluation")
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
    doc.answer11 = data["answer11"]
    doc.answer12 = data["answer12"]
    doc.answer13 = data["answer13"]
    doc.answer14 = data["answer14"]
    doc.answer15 = data["answer15"]
    doc.answer16 = data["answer16"]
    doc.answer17 = data["answer17"]
    doc.answer18 = data["answer18"]
    doc.answer19 = data["answer19"]
    doc.answer20 = data["answer20"]
    doc.answer21 = data["answer21"]
    doc.answer22 = data["answer22"]
    doc.answer23 = data["answer23"]
    doc.answer24 = data["answer24"]
    doc.answer25 = data["answer25"]
    doc.answer26 = data["answer26"]
    doc.answer27 = data["answer27"]
    doc.answer28 = data["answer28"]
    doc.answer29 = data["answer29"]
    doc.answer30 = data["answer30"]     
    doc.save(ignore_permissions=True)
    frappe.db.commit()