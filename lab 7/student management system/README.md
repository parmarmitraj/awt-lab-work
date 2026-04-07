# Student Management System

A complete Flask-based web application for managing student information with a user-friendly interface.

## Features

- ✅ **Add Students** - Register new students with complete information
- ✅ **View Students** - Browse all students in an organized table
- ✅ **View Details** - See individual student information
- ✅ **Edit Students** - Update student information anytime
- ✅ **Delete Students** - Remove student records
- ✅ **Search Functionality** - Quick access to student data
- ✅ **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
student management system/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── students.db           # SQLite database (created on first run)
├── README.md             # This file
└── templates/
    ├── base.html         # Base template with navigation
    ├── index.html        # Home page with student list
    ├── add_student.html  # Add new student form
    ├── edit_student.html # Edit student form
    └── view_student.html # View student details
```

## Installation & Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run the Application

```bash
python app.py
```

The application will start on `http://localhost:5000`

## Usage

### Adding a Student
1. Click "Add New Student" button
2. Fill in all required fields (Roll Number, Name, Email, Phone, Course, Batch)
3. Click "Add Student" to save

### Viewing Students
1. The home page displays a table of all students
2. Each row shows basic student information
3. Use action buttons to View, Edit, or Delete

### Editing a Student
1. Click "Edit" button on any student row
2. Update the information as needed
3. Click "Update Student" to save changes

### Deleting a Student
1. Click "Delete" button on any student row
2. Confirm the deletion
3. Student record will be removed from the database

## Database Schema

### Student Table
- **id** - Primary key (auto-increment)
- **roll_no** - Unique roll number (string)
- **name** - Student's full name
- **email** - Unique email address
- **phone** - 10-digit phone number
- **course** - Course/Degree (B.Tech, M.Tech, BCA, MCA, BA, MA)
- **batch** - Admission batch/year

## Technologies Used

- **Flask** - Python web framework
- **SQLAlchemy** - Object-relational mapping (ORM)
- **SQLite** - Lightweight database
- **Bootstrap 5** - Responsive UI framework
- **Jinja2** - Template engine

## Features Explanation

### Form Validation
- All fields are required
- Email is checked for uniqueness before adding
- Phone number is limited to 10 digits
- Roll number must be unique

### Error Handling
- Duplicate email/roll number prevention
- User-friendly error messages
- Flash messages for successful operations

### User Interface
- Modern gradient design with purple theme
- Responsive navigation bar
- Mobile-friendly table layout
- Easy-to-use forms with clear labels

## Customization

### Change Secret Key
Edit `app.py` line with `SECRET_KEY`:
```python
app.config['SECRET_KEY'] = 'your-own-secret-key-here'
```

### Add New Courses
Edit `templates/add_student.html` and `templates/edit_student.html` course select options.

### Change Database Location
Modify the `SQLALCHEMY_DATABASE_URI` in `app.py`:
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///path/to/database.db'
```

## Troubleshooting

### Database errors
- Delete `students.db` and restart the app to reset the database

### Port already in use
- Change port in `app.py`: `app.run(debug=True, port=5000)` to another port number

### Import errors
- Ensure all packages from `requirements.txt` are installed

## Future Enhancements

- Search and filter functionality
- Student grades/marks management
- Attendance tracking
- Export to CSV/PDF
- User authentication/login system
- Email notifications
- Advanced reporting

## License

This project is open source and available for educational purposes.
