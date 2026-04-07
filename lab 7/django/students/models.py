from django.db import models


class Student(models.Model):
    COURSE_CHOICES = [
        ('B.Tech', 'B.Tech'),
        ('M.Tech', 'M.Tech'),
        ('BCA', 'BCA'),
        ('MCA', 'MCA'),
        ('BA', 'BA'),
        ('MA', 'MA'),
    ]

    roll_no = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    course = models.CharField(max_length=20, choices=COURSE_CHOICES)
    batch = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Students'

    def __str__(self):
        return f'{self.name} ({self.roll_no})'
