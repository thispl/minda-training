import frappe
import json
from frappe.utils.data import today
from frappe import _
from frappe.utils import formatdate, getdate, cint, add_months, date_diff, add_days, flt, cstr
from frappe.utils.xlsxutils import make_xlsx
import requests
from erpnext.hr.doctype.employee.employee import get_holiday_list_for_employee


@frappe.whitelist()
def assign_kvs(employee,process):
    if process:
        if not frappe.db.exists("KVS Type Assignment",{"name":employee}):
            doc = frappe.get_doc("Employee",employee)
            kvs = frappe.new_doc("KVS Type Assignment")
            kvs.update({
                "employee": employee,
                "employee_name": doc.employee_name,
                "date_of_joining": doc.date_of_joining,
                "status": doc.status,
                "department": doc.department,
                "designation": doc.designation,
                "line": doc.line,
                "shift": doc.shift,
                "date_of_assign": today(),
                "knowledge_verification_type": process
            })
            kvs.save(ignore_permissions=True)
            frappe.db.commit()