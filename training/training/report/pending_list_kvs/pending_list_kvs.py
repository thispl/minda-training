# Copyright (c) 2013, Minda Sai Pvt LTd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
import math
from calendar import monthrange
from datetime import datetime,timedelta,date
from dateutil.rrule import * 

def execute(filters=None):
    if not filters:
        filters = {}
        

    columns = get_columns()

    data = []
    row = []
    employee = employee_details(filters)
    for e in employee:
        row = [e.biometric_id,e.employee_name,e.line,e.shift,e.date_of_joining]
        if frappe.db.exists("KVS Type Assignment",{"employee":e.biometric_id}):
            doc = frappe.get_doc("KVS Type Assignment",{"employee":e.biometric_id})
            row += ["Assigned",doc.knowledge_verification_type]
            if doc.knowledge_verification_type:
                kvs_type = doc.knowledge_verification_type
                emp_id = e.biometric_id
                t = training(emp_id,kvs_type)
                if t == 1:
                    row += ["Completed"]
                else:
                    row += ["Pending"]
                t = production(emp_id,kvs_type)
                if t == 1:
                    row += ["Completed"]
                else:
                    row += ["Pending"]
                t = quality(emp_id,kvs_type)
                if t == 1:
                    row += ["Completed"]
                else:
                    row += ["Pending"]    
        else:
            row += ["Not Assigned","-","-","-"]    
        data.append(row)
    return columns, data




def get_columns():
    columns = [
        _("Employee") + ":Link/Employee:150",
        _("Employee Name") + ":Data:150",
        _("Line") + ":Link/Line:150",
        _("Shift") + ":Link/Shift:150",
        _("Date of Joining") + ":Date:150",
        _("Status") + ":Link/IT Status:150",
        _("KVS Type") + "::150",
        _("Training Observation") + ":Link/IT Status:150",
        _("Production Observation") + ":Link/IT Status:150",
        _("Quality Observation") + ":Link/IT Status:150",
        
    ]
    return columns


# def get_conditions(filters):
#     conditions = ""
#     # if filters.get("employee"):conditions += "AND att.employee = '%s'" % filters["employee"]
#     if filters.get("from_date"): conditions += "and c.date_of_skill_evaluatation >= %(from_date)s"
#     if filters.get("to_date"): conditions += " and c.date_of_skill_evaluatation <= %(to_date)s"    
#     return conditions, filters


def employee_details(filters):
    employee = frappe.db.sql(
        """select biometric_id,employee_name,shift,department,designation,date_of_joining,line from `tabEmployee` where status = "Active" and date_of_joining between %s and %s """,(filters.get("from"),filters.get("to")),as_dict = 1)
    return employee


def training(emp_id,kvs_type):
    type_list = ["Komax Operator","Parts fitting Operator","Tapping Operator","Checker Board Operator","Sub assy process"]
    for tl in type_list:
        if tl == kvs_type:
            if frappe.db.exists(tl+" Training Observation",emp_id):
                return True
            else:
                return False
    
def production(emp_id,kvs_type):
    type_list = ["Komax Operator","Parts fitting Operator","Tapping Operator","Checker Board Operator","Sub assy process"]
    for tl in type_list:
        if tl == kvs_type:
            if frappe.db.exists(tl+" Production Observation",emp_id):
                return True
            else:
                return False
    
def quality(emp_id,kvs_type):
    type_list = ["Komax Operator","Parts fitting Operator","Tapping Operator","Checker Board Operator","Sub assy process"]
    for tl in type_list:
        if tl == kvs_type:
            if frappe.db.exists(tl+" Quality Observation",emp_id):
                return True
            else:
                return False


    
