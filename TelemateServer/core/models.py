from django.db import models

class React(models.Model):
	query = models.CharField(max_length=300,default="")
	response = models.CharField(max_length=1000,default="Sorry ! your Request Cannot be processed")
