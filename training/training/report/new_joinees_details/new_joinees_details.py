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
        ita = ita_details(e.biometric_id)
        itm = itm_details(e.biometric_id)
        st = st_details(e.biometric_id)
        if st == 1:            
            row += ["Completed"]
        else:
            row += ["Pending"]
        if ita == 1:            
            row += ["Completed","NA"]
        elif itm == 1:            
            row += ["NA","Completed"]
        else:
            row += ["Pending","Pending"]
        data.append(row)
    return columns, data




def get_columns():
    columns = [
        _("Employee") + ":Link/Employee:150",
        _("Employee Name") + ":Data:150",
        _("Line") + ":Link/Line:150",
        _("Shift") + ":Link/Shift:150",
        _("Date of Joining") + ":Date:150",
        _("Selection Test") + ":Link/IT Status:150",
        _("IT Assembly Area") + ":Link/IT Status:150",
        _("IT Machine Area") + ":Link/IT Status:150",
        
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
        """select biometric_id,employee_name,shift,department,designation,date_of_joining,line from `tabEmployee` where date_of_joining=%s and status = "Active" """,(filters.get("date_of_joining")),as_dict = 1)
    return employee

def ita_details(emp_id):
    if emp_id:
        ita = frappe.db.sql(
            """select * from `tabInduction Training Assembly Area` where employee_code=%s """,(emp_id),as_dict = 1)
        if ita:
            return True
        else:
            return False

def itm_details(emp_id):
    if emp_id:
        ita = frappe.db.sql(
            """select * from `tabInduction Training Machine Area Crimping` where employee_code=%s """,(emp_id),as_dict = 1)
        if ita:
            return True
        else:
            return False

def st_details(emp_id):
    if emp_id:
        st = frappe.db.sql(
            """select * from `tabSelection Test` where employee_code=%s """,(emp_id),as_dict = 1)
        if st:
            return True
        else:
            return False