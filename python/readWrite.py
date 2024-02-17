student = []
# def write_file(student):
#     try:
#         f = open("student.txt","a")
#         for a in student:
#             f.write(a + "\n")
#         f.close()
#         print("Written in the file")
#     except Exception:
#         print("Error in writting file")

def add_student(name):
    student.append(name)

def read_file():
    try:
        f = open('student.txt',"r")
        for data in f.readlines():
            add_student(data)
        f.close()
    except Exception:
        print("Error in reading file")


# student_name = input("enter your name")

# add_student(student_name)

# write_file(student)
read_file()
print(student)
