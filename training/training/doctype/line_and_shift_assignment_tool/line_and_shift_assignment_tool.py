# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class LineandShiftAssignmentTool(Document):
	pass



@frappe.whitelist()
def assign_line(employee,line,date_of_assign):
    if line:
        doc= frappe.get_doc("Employee",employee)
        # frappe.errprint(line)
        doc.update({
            "line":line
        })
        doc.save(ignore_permissions=True)
        frappe.db.commit()
        if frappe.db.exists("Line and Shift Assignment Details", {
                                        "employee":employee,"date_of_assign":date_of_assign}):
            lsa = frappe.db.get_value("Line and Shift Assignment Details", {
                                            "employee":employee,"date_of_assign":date_of_assign})
            if lsa:
                ls = frappe.get_doc("Line and Shift Assignment Details", lsa)
        else:
            ls = frappe.new_doc("Line and Shift Assignment Details")
        ls.update({
            "employee": doc.employee,
            "employee_name": doc.employee_name,
            "date_of_assign": date_of_assign,
            "department": doc.department,
            "date_of_joining": doc.date_of_joining,
            "status": doc.status,
            "designation": doc.designation,
            "current_line": doc.line,
            "new_line": line,
            # "current_shift": doc.shift,
            # "new_shift": shift,
        })
        ls.save(ignore_permissions=True)
        frappe.db.commit()
    return "OK"


@frappe.whitelist()
def assign_shift(employee,shift,date_of_assign):
    if shift:
        doc= frappe.get_doc("Employee",employee)
        # frappe.errprint(line)
        doc.update({
            "shift":shift
        })
        doc.save(ignore_permissions=True)
        frappe.db.commit()
        if frappe.db.exists("Line and Shift Assignment Details", {
                                        "employee":employee,"date_of_assign":date_of_assign}):
            lsa = frappe.db.get_value("Line and Shift Assignment Details", {
                                            "employee":employee,"date_of_assign":date_of_assign})
            if lsa:
                ls = frappe.get_doc("Line and Shift Assignment Details", lsa)
        else:
            ls = frappe.new_doc("Line and Shift Assignment Details")
        ls.update({
            "employee": doc.employee,
            "employee_name": doc.employee_name,
            "date_of_assign": date_of_assign,
            "date_of_joining": doc.date_of_joining,
            "status": doc.status,
            "department": doc.department,
            "designation": doc.designation,
            # "current_line": doc.line,
            # "new_line": line,
            "current_shift": doc.shift,
            "new_shift": shift,
        })
        ls.save(ignore_permissions=True)
        frappe.db.commit()
    return "OK"


@frappe.whitelist()
def assign_shift_and_line(employee,line,shift,date_of_assign):
    if shift:
        doc= frappe.get_doc("Employee",employee)
        # frappe.errprint(line)
        doc.update({
            "line":line,
            "shift":shift
        })
        doc.save(ignore_permissions=True)
        frappe.db.commit()
        if frappe.db.exists("Line and Shift Assignment Details", {
                                        "employee":employee,"date_of_assign":date_of_assign}):
            lsa = frappe.db.get_value("Line and Shift Assignment Details", {
                                            "employee":employee,"date_of_assign":date_of_assign})
            if lsa:
                ls = frappe.get_doc("Line and Shift Assignment Details", lsa)
        else:
            ls = frappe.new_doc("Line and Shift Assignment Details")
        ls.update({
            "employee": doc.employee,
            "employee_name": doc.employee_name,
            "date_of_assign": date_of_assign,
            "date_of_joining": doc.date_of_joining,
            "status": doc.status,
            "department": doc.department,
            "designation": doc.designation,
            "current_line": doc.line,
            "new_line": line,
            "current_shift": doc.shift,
            "new_shift": shift,
        })
        ls.save(ignore_permissions=True)
        frappe.db.commit()
    return "OK"








