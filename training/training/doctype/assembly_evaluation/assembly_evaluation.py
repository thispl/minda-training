# -*- coding: utf-8 -*-
# Copyright (c) 2019, Minda Sai Pvt LTd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import add_months
from frappe.utils.background_jobs import enqueue

class AssemblyEvaluation(Document):
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
def send_mail(**args):
    args = frappe._dict(args)
    next_date = add_months(args.date, 3)
    next_d = frappe.utils.formatdate(next_date, "dd. MMMM YYYY")
    message = """ Dear Supervisor,<br>
    Kindly find the Test Score of the Employee (%s)"""%(args.emp)
 
    table = """<table class='table table-bordered'>
                <tr>
                <th>Productivity (15)</th>
                <th>Discipline (5)</th>
                <th>Work Quality (15)</th>
                <th>Attendance (5)</th>
                </tr>
                <tr>
                <td>%s</td>
                <td>%s</td>
                <td>%s</td>
                <td>%s</td>
                </tr><br>
                """%(args.productivity,args.discipline,args.work_quality,args.attendance)
    # table1 = """<table class='table table-bordered'>
    #             <tr>
    #             <th>Test Score (30)</th>
    #             <th>Practical Score (30)</th>
    #             <th>Work Quality (15)</th>
    #             <th>Attendance (5)</th>
    #             </tr>
    #             <tr>
    #             <td>%s</td>
    #             <td>%s</td>
    #             <td>%s</td>
    #             <td>%s</td>
    #             </tr>"""
    message1 = """Waiting for your Observation Scores, Result of the Evaluation is subjected to your Observation Scores.<br>Next Level Evaluation will be on %s"""%(next_d)
    message = message + '\n' + table + '\n' + message1
    # frappe.msgprint(message)
    email_args = {
        "recipients": args.email,
        "subject": "Reg:Observation Marks",
        "message": message,
        "now": True,
        }
    if args.cc:
        cc = { "cc":args.cc }
        email_args.update(cc)
    enqueue(method=frappe.sendmail, queue='short', timeout=300, async=True, **email_args)(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name(d.get_values()).sp_name