from django import forms
from .models import Student


class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['roll_no', 'name', 'email', 'phone', 'course', 'batch']
        widgets = {
            'roll_no': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Roll Number'
            }),
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Full Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Email Address'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Phone Number',
                'maxlength': '10'
            }),
            'course': forms.Select(attrs={
                'class': 'form-control'
            }),
            'batch': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Batch (e.g., 2024)'
            }),
        }
