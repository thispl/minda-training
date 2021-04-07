# -*- coding: utf-8 -*-
# Copyright (c) 2020, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import add_days, add_months,get_first_day,get_last_day
import json
from datetime import datetime

class SemiAutoCrimpingMarks(Document):
    pass

@frappe.whitelist()
def submit(marks):
    mark = json.loads(marks)
    for d in mark:
        frappe.db.set_value('Semi Auto Crimping',d["id"],'crimp',d["crimp"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'usw_hs',d["usw_hs"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'jt_hst_pf',d["jt_hst_pf"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'midst_twist',d["midst_twist"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'mjh',d["mjh"])    
        frappe.db.set_value('Semi Auto Crimping',d["id"],'mark_obatained_i',d["productivity"]+d["work_quality"]+d["discipline"]+d["attendance"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'productivity',d["productivity"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'work_quality',d["work_quality"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'discipline',d["discipline"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'attendance',d["attendance"])
        doc = frappe.get_doc("Semi Auto Crimping",d["id"])
        frappe.db.set_value('Semi Auto Crimping',d["id"],'total_practical_mark_obtained',d["productivity"]+d["work_quality"]+d["discipline"]+d["attendance"]+doc.mark_obtained_a+doc.mark_obtained_b+doc.mark_obtained_c+doc.mark_obtained_d+doc.mark_obtained_e+doc.mark_obtained_f+doc.mark_obtained_g+doc.mark_obtained_h+doc.mark_obtained_j)        
        doc = frappe.get_doc("Semi Auto Crimping",d["id"])        
        if doc.total_practical_mark_obtained < 50.00:
            doc.legend = ""
        if (doc.total_practical_mark_obtained >= 50.00) and(doc.total_practical_mark_obtained <= 60.00):
            doc.legend = "L1-Trainee"
        elif (doc.total_practical_mark_obtained >= 60.01) and (doc.total_practical_mark_obtained <= 75.00):
            doc.legend = "L2-Can Work under Supervision"
        elif (doc.total_practical_mark_obtained >= 75.01) and(doc.total_practical_mark_obtained <= 90.00):
            doc.legend= "L3-Can Work Independently"
        elif (doc.total_practical_mark_obtained >= 90.01) and(doc.total_practical_mark_obtained <= 100.00):
            doc.legend="L4-Can Train Others"
        doc.save(ignore_permissions=True)
    return "ok"			

@frappe.whitelist()
def get_employees(from_date,to_date,line):
    acc = frappe.db.sql(
        """select name,employee_code,associate,line_name,date_of_joining,date_of_skill_evaluatation from `tabSemi Auto Crimping` where status = 'Active' and is_evaluate = '1' and date_of_skill_evaluatation between %s and %s and mark_obatained_i = '0' and line_name = %s """,(from_date,to_date,line),as_dict=True)
    return acc

@frappe.whitelist()
def sendmail(name,email):
    acc = frappe.get_doc('Semi Auto Crimping Marks',name)
    content = """ Dear Sir,<br>
    Please find the list of Employees Evaluation marks need to be given,<br><br>
    <table class='table table-bordered'>
                <tr>
                <th>S.No.</th>
                <th>Employee Code</th>
                <th>Employee Name</th>
                </tr>
    """
    data = ''
    for idx, l in enumerate(acc.evaluation_marks):
        data = """
        <tr>
        <td>%s</td>
        <td>%s</td>
        <td>%s</td>
        </tr>
        """ %(idx+1,l.employee_code,l.employee_name)
        content += data
    link = frappe.utils.get_url_to_form("Semi Auto Crimping Marks", name)
    link1 = """Please click the below link to submit Evaluation Marks<br>%s"""%link
    content +=link1
    frappe.sendmail(recipients=[email], message=content)
    return content

@frappe.whitelist()
def send_remainder():
    ac_list = frappe.get_all("Semi Auto Crimping Marks",{"status":"Pending"},["name","date"])
    for ac in ac_list:
        if ac.date:
            today = datetime.today().date()
            day3 = add_days(ac.date,3)
            if today > day3:
                acc = frappe.get_doc("Semi Auto Crimping Marks",ac.name)
                content = """ <b>REMAINDER</b><br><br>Dear Sir,<br><br>
                Please find the list of Employees Evaluation marks need to be given,<br><br>
                <table class='table table-bordered'>
                            <tr>
                            <th>S.No.</th>
                            <th>Employee Code</th>
                            <th>Employee Name</th>
                            </tr>
                """
                data = ''
                for idx, l in enumerate(acc.evaluation_marks):
                    data = """
                    <tr>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    </tr>
                    """ %(idx+1,l.employee_code,l.employee_name)
                    content += data
                link = frappe.utils.get_url_to_form("Semi Auto Crimping Marks", acc.name)
                link1 = """Please click <a href=%s> here</a> to submit Evaluation Marks</a>"""%link
                content += link1
                frappe.sendmail(recipients=[acc.supervisor_email,acc.manager_email],subject= "Remainder-Skill Evaluation Marks", message=content)
                return content