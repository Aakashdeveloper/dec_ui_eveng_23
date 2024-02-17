# class Person:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
    


# John = Person("John",10)


# ///////////////

class Calc:
    def add(self,x,y):
        return x + y

    def sub(self,x,y):
        return x - y

    def mul(self,x,y):
        return x * y

    def div(self,x,y):
        if y == 0:
            raise ValueError("divide by 0")
        return x / y

calculator = Calc()
print(calculator.add(4,2))
print(calculator.sub(4,2))