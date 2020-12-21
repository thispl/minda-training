# Copyright (c) 2013, Minda Sai Pvt LTd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
import math
from calendar import monthrange
from datetime import datetime,timedelta,date
from frappe.utils import add_days
from dateutil.rrule import * 

def execute(filters=None):
    if not filters:
        filters = {}
        
    columns = get_columns()

    data = []
    row = []
    employee = employee_details(filters)
    for e in employee:
        row = [e.biometric_id,e.employee_name,e.date_of_joining]
        att = att_details(e.biometric_id)
        ita = ita_details(e.biometric_id)
        itm = itm_details(e.biometric_id)
        st = st_details(e.biometric_id)
        cb = cb_details(e.biometric_id)
        pk = pk_details(e.biometric_id)

        if e.line == None:
            row += ["Pending"]
        else:
            row += [e.line]
        if e.shift not in ["A","B","C","G"]:
            row += ["Pending"]
        else:
            row += [e.shift]
        if att == 1:
            row += ["Active"]
        else:
            row += ["Continuous Absent"]
        if e.department not in ["HR", "Accounts","Finance & Accounts","Purchase"]:
            if cb == 1:
                row += ["Completed"]
            else:
                row += ["Pending"]
        else:
            row += ["NA"]
        if st == 1:            
            row += ["Completed"]
        else:
            row += ["Pending"]
        if e.department not in ["HR", "Accounts","Finance & Accounts","Purchase"]:
            if pk == 1:
                row += ["Completed"]
            else:
                row += ["Pending"]
        else:
            row += ["NA"]
        if e.department not in ["HR", "Accounts","Finance & Accounts","Purchase"]:
            if ita == 1:       
                row += ["Completed","NA"]
            elif itm == 1:
                row += ["NA","Completed"]
            else:
                row += ["Pending","Pending"]
        else:
            row += ["NA"]
        data.append(row)
    return columns, data




def get_columns():
    columns = [
        _("Employee") + ":Link/Employee:50",
        _("Employee Name") + ":Data:100",
        _("Date of Joining") + ":Date:100",
        _("Line") + ":Link/Line:100",
        _("Shift") + ":Link/Shift:100",
        _("Status") + ":Select:100",
        _("Color Blindness Test") + ":Link/Color Blindness Test:100",
        _("Selection Test") + ":Link/Selection Test:100",
        _("Practical Knowledge Verification") + ":Link/New Joinees Practical Knowledge Verification:100",
        _("Induction Test Assy") + ":Link/Induction Training Assembly Area:100",
        _("Induction Test Machine") + ":Link/Induction Training Machine Area Crimping:100",
        
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
        """select biometric_id,employee_name,shift,status,department,designation,date_of_joining,line from `tabEmployee` where date_of_joining between %s and %s and status = 'Active' """,(filters.get("date_of_joining_from"),filters.get("date_of_joining_to")),as_dict = 1)
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

def att_details(emp_id):
    today = date.today()
    yesterday = add_days(today,-1)
    day_before_yesterday = add_days(today,-2)
    if emp_id:
        att = frappe.db.sql(
            """select attendance_date from `tabAttendance` where employee = %s and attendance_date in (%s,%s,%s)  """,(emp_id,today,yesterday,day_before_yesterday),as_dict = 1)
        if len(att) > 0:
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

def cb_details(emp_id):
    if emp_id:
        cb = frappe.db.sql(
            """select * from `tabColor Blindness Test` where employee_code=%s """,(emp_id),as_dict = 1)
        if cb:
            return True
        else:
            return False

def pk_details(emp_id):
    if emp_id:
        pk = frappe.db.sql(
            """select * from `tabNew Joinees Practical Knowledge Verification` where employee_code=%s """,(emp_id),as_dict = 1)
        if pk:
            return True
        else:
            return False