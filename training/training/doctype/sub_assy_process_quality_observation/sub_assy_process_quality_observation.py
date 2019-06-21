# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ramya and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class SubassyprocessQualityObservation(Document):
	def autoname(self):
		if self.employee_code:
			self.name = self.employee_code
