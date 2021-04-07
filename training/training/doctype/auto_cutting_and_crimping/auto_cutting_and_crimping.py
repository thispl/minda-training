# -*- coding: utf-8 -*-
# Copyright (c) 2019, Minda Sai Pvt LTd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class AutoCuttingandCrimping(Document):
    def autoname(self):
        if self.employee_code and self.month_of_evaluation:
            self.name = self.employee_code+"-"+self.month_of_evaluation

@frappe.whitelist()
def update_mis(employee,line):
    doc = frappe.get_doc("Employee", employee)
    doc.update({
        "line": line
    })
    doc.save(ignore_permissions=True)
    frappe.db.commit()

@frappe.whitelist()
def update_latest(emp):
    list1 = frappe.db.sql("select name from `tabAuto Cutting and Crimping` where employee_code = %s order by date_of_skill_evaluatation",emp,as_dict=True)
    if list1:
        frappe.db.set_value('Auto Cutting and Crimping',list1[-1].name,'is_latest',0)
