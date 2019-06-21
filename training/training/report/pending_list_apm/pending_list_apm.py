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
        ita = details(e.biometric_id)
        if ita == 1:            
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
        _("Status") + ":Data:150",
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

def details(emp_id):
    if frappe.db.exists("Associate Performance Monitoring Check Sheet",emp_id):
        return True
    else:
        return False


