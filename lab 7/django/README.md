# Django Student Management System

A complete Django web application for managing student information with a user-friendly interface.

## Features

- ✅ **Add Students** - Register new students with complete information
- ✅ **View Students** - Browse all students in an organized table
- ✅ **View Details** - See individual student information with timestamps
- ✅ **Edit Students** - Update student information anytime
- ✅ **Delete Students** - Remove student records with confirmation
- ✅ **Admin Panel** - Django admin interface for advanced management
- ✅ **Search & Filter** - Admin panel with search and filtering capabilities
- ✅ **Pagination** - Organize students across multiple pages
- ✅ **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
django/
├── manage.py                           # Django management script
├── requirements.txt                    # Python dependencies
├── db.sqlite3                          # SQLite database (created on first run)
├── student_management/                 # Project configuration
│   ├── __init__.py
│   ├── settings.py                     # Django settings
│   ├── urls.py                         # URL routing
│   ├── asgi.py
│   └── wsgi.py
├── students/                           # Students app
│   ├── migrations/
│   ├── __init__.py
│   ├── models.py                       # Database models
│   ├── views.py                        # View logic
│   ├── forms.py                        # Forms for data input
│   ├── urls.py                         # App URL routing
│   ├── admin.py                        # Admin configuration
│   └── apps.py
├── templates/                          # HTML templates
│   ├── base.html                       # Base template
│   └── students/
│       ├── student_list.html
│       ├── student_detail.html
│       ├── student_form.html
│       └── student_confirm_delete.html
└── README.md                           # This file
```

## Installation & Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Apply Migrations

Create the database and tables:

```bash
python manage.py migrate
```

### 3. Create Superuser (Optional - for Admin Access)

Create an admin account to access the Django admin panel:

```bash
python manage.py createsuperuser
```

Follow the prompts to create a username, email, and password.

### 4. Run the Development Server

```bash
python manage.py runserver
```

The application will start on `http://localhost:8000`

## Usage

### Home Page
- Go to `http://localhost:8000/` to see the student list
- View a summary of all registered students

### Adding a Student
1. Click "Add New Student" button on the home page or navbar
2. Fill in all required fields:
   - Roll Number (unique)
   - Full Name
   - Email (unique)
   - Phone (10 digits)
   - Course (select from dropdown)
   - Batch (e.g., 2024)
3. Click "Add Student" to save

### Viewing Student Details
1. Click "View" button on any student row
2. See complete student information including timestamps
3. Edit or delete from this page

### Editing a Student
1. Click "Edit" button on any student row in the list or detail view
2. Update the information
3. Click "Update Student" to save changes

### Deleting a Student
1. Click "Delete" button to remove a student
2. Confirm the deletion on the confirmation page
3. Student record will be permanently removed

### Admin Panel
1. Access admin at `http://localhost:8000/admin/`
2. Login with superuser credentials
3. Manage students with advanced features:
   - Bulk actions
   - Search by roll number, name, or email
   - Filter by course and batch
   - View creation and update timestamps

## Database Schema

### Student Model
- **id** - Primary key (auto-increment)
- **roll_no** - Unique roll number (CharField)
- **name** - Student's full name
- **email** - Unique email address
- **phone** - 10-digit phone number
- **course** - Course choice (B.Tech, M.Tech, BCA, MCA, BA, MA)
- **batch** - Admission batch/year
- **created_at** - Timestamp when record was created
- **updated_at** - Timestamp of last update

## Technologies Used

- **Django 4.2.7** - Python web framework
- **SQLite** - Database
- **Bootstrap 5** - Responsive UI framework
- **Jinja2** - Template engine (built into Django)
- **Class-Based Views** - Django's advanced view architecture

## Supported Courses

- B.Tech (Bachelor of Technology)
- M.Tech (Master of Technology)
- BCA (Bachelor of Computer Applications)
- MCA (Master of Computer Applications)
- BA (Bachelor of Arts)
- MA (Master of Arts)

## Key Features Explained

### Form Validation
- All fields are required
- Email is checked for uniqueness across records
- Roll number must be unique per student
- Phone number is limited to 10 digits
- Form helpers display error messages clearly

### Error Handling
- Duplicate email/roll number prevention with user-friendly messages
- Form validation with detailed error feedback
- Delete confirmation to prevent accidental removal

### User Interface
- Clean, modern design with purple gradient theme
- Responsive navigation bar
- Mobile-friendly table layout
- Bootstrap components for consistency
- Flash messages for user feedback

### Django Admin Interface
- Advanced search capabilities
- Filtering by course and batch
- Detailed student information display
- List display customization
- Organized fieldsets for better UX

## Customization

### Change Secret Key (Important for Production)
Edit `student_management/settings.py`:
```python
SECRET_KEY = 'your-new-secure-secret-key-here'
```

### Add New Courses
Edit `students/models.py` COURSE_CHOICES:
```python
COURSE_CHOICES = [
    ('B.Tech', 'B.Tech'),
    # Add new courses here
]
```

### Change Database Backend
By default, SQLite is used. To use PostgreSQL or MySQL, edit `settings.py`:

PostgreSQL example:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'student_db',
        'USER': 'username',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## Troubleshooting

### Database Errors
```bash
# Reset database
rm db.sqlite3
python manage.py migrate
```

### Port Already in Use
```bash
# Use a different port
python manage.py runserver 8001
```

### Static Files Issues
```bash
# Collect static files
python manage.py collectstatic
```

### Migrations Issues
```bash
# Create new migrations
python manage.py makemigrations
python manage.py migrate
```

## Useful Django Commands

```bash
# Create superuser
python manage.py createsuperuser

# Reset password for superuser
python manage.py changepassword <username>

# Create new migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic

# Interactive shell
python manage.py shell

# Run tests
python manage.py test
```

## Future Enhancements

- Student authentication/login system
- Grades and marks management
- Attendance tracking
- Course enrollment system
- Generate reports (CSV, PDF)
- Email notifications
- Advanced search and filtering
- Student performance dashboard
- Batch operations
- File uploads (profile pictures, documents)

## Security Notes

- Change the SECRET_KEY before deploying to production
- Set DEBUG = False in production
- Use environment variables for sensitive data
- Configure ALLOWED_HOSTS for your domain
- Use HTTPS in production
- Keep Django and dependencies updated

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, refer to:
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
