students = []

class Student:
    school_name = 'Sant Marry'

    def __init__(self,name,student_id = 20):
        self.name = name;
        self.student_id = student_id
        students.append(self)
    
    def __str__(self):
        return "Student "+self.name

    def get_name_capitalize(self):
        return self.school_name.capitalize()

    def get_school_name(self):
        return self.school_name

class HighSchoolStudent(Student):
    school_name = "little angle"


    def get_school_name(self):
        return "This is high School Student"

    def get_name_capitalize(self):
        original_value = super().get_name_capitalize()
        return original_value+ "-Python"


james = HighSchoolStudent("james")
mark = Student("mark")

print(james.get_name_capitalize())
print(james.get_school_name())
print(mark.get_school_name())