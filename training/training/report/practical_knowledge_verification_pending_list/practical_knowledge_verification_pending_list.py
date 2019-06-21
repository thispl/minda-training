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
        pkv = pkv_details(e.biometric_id)
        if pkv == 1:  
            row += ["Completed"]
        else:          
            row += ["Pending"]
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

def pkv_details(emp_id):
    if emp_id:
        ita = frappe.db.sql(
            """select * from `tabNew Joinees Practical Knowledge Verification` where employee_code=%s """,(emp_id),as_dict = 1)
        if ita:
            return True
        else:
            return False


