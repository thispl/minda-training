# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class InductionTrainingAssemblyArea(Document):
    def autoname(self):
        if self.employee_code:
            self.name = self.employee_code




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
        "date_of_joining": date_of_joining
        })
        exist_cq.save(ignore_permissions=True)
        frappe.db.commit()
        return "OK"