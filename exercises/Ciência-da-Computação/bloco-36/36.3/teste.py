from Employee import Employee
from HashMap import HashMap


employees_data = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
employees = []

registery = HashMap()

for id_num, name in employees_data:
    new_employee = Employee(id_num, name)
    registery.insert(new_employee)

print(registery.get_value(23))
