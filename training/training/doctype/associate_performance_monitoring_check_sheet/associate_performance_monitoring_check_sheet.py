# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json
from datetime import datetime, date
from frappe.utils import flt, getdate

class AssociatePerformanceMonitoringCheckSheet(Document):
	def autoname(self):
		if self.employee_code:
			self.name = self.employee_code

@frappe.whitelist()
def associate_monitoring(date,line,shift):
	associates = frappe.get_list('Associate Performance Monitoring Check Sheet',{'skip_monitoring':0,'line_name':line,'shift':shift},['name','associate','shift','line_name','handover_date'])
	as_list = []
	for asso in associates:
		if frappe.db.exists('Attendance',{'employee':asso.name,'attendance_date':date}):
			child = frappe.get_all('Monitoring Table', fields=['*'], filters={'parenttype': 'Associate Performance Monitoring Check Sheet', 'parent': asso.name})
			date_list = []
			c1 = datetime.strptime(date, "%Y-%m-%d")
			c2 = c1.date()
			if c2 >= asso.handover_date:
				frappe.errprint(c2)
				frappe.errprint(asso.handover_date)
				if(child):
					for c in child:
						c1 = datetime.strptime(date, "%Y-%m-%d")
						c2 = c1.date()
						date_list.append(c.monitoring_date)
					if c2 not in date_list:
						as_list.append(asso)
				else:
					as_list.append(asso)
				
	return as_list

@frappe.whitelist()
def mark_monitoring(child,monitoring_date):
	table = json.loads(child)
	for t in table:
		monitoring = frappe.get_doc("Associate Performance Monitoring Check Sheet",t["employee"])
		monitoring.append('monitoring_table', {
			'process_name':t["process_name"],
			'production': t["production"],
			'monitoring_date': monitoring_date,
			'defect':t["defect"]
			})
		monitoring.save()
	return t

@frappe.whitelist()
def skip_monitoring():
	m_list = frappe.get_list('Associate Performance Monitoring Check Sheet',{'skip_monitoring':0})
	for m in m_list:
		child = frappe.get_all('Monitoring Table', fields=['*'], filters={'parenttype': 'Associate Performance Monitoring Check Sheet', 'parent': m.name})
		if child:
			frappe.errprint(m.name)
		if len(child) >= 15:
			frappe.db.set_value('Associate Performance Monitoring Check Sheet',m.name,'skip_monitoring',1)
