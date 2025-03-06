# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open("requirements.txt") as f:
    install_requires = f.read().strip().split("\n")


# get version from __version__ variable in training/__init__.py
from training import __version__ as version

setup(
	name='training',
	version=version,
	description='Training',
	author='TEAMPRO',
	author_email='erp@groupteampro.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
