from django.contrib import admin
from .models import Student


class StudentAdmin(admin.ModelAdmin):
    list_display = ('roll_no', 'name', 'email', 'phone', 'course', 'batch', 'created_at')
    list_filter = ('course', 'batch')
    search_fields = ('roll_no', 'name', 'email')
    ordering = ('-created_at',)
    
    fieldsets = (
        ('Student Information', {
            'fields': ('roll_no', 'name', 'email', 'phone')
        }),
        ('Academic Details', {
            'fields': ('course', 'batch')
        }),
    )


admin.site.register(Student, StudentAdmin)
