marks1 = int(input("Enter marks of Subject 1: "))
marks2 = int(input("Enter marks of Subject 2: "))
marks3 = int(input("Enter marks of Subject 3: "))
marks4 = int(input("Enter marks of Subject 4: "))
marks5 = int(input("Enter marks of Subject 5: "))

total = marks1 + marks2 + marks3 + marks4 + marks5
percentage = total / 5

print("Total Marks =", total)
print("Percentage =", percentage)

if percentage >= 90:
    print("Grade = A+")

elif percentage >= 80:
    print("Grade = A")

elif percentage >=70:
    print("Grade = B")

elif percentage >=60:
    print("Grade = C")

else:
    print("Grade D")

if marks1 >= 40 and marks2 >= 40 and marks3 >= 40 and marks4 >= 40 and marks5 >= 40:
    print("Result == PASS")

else:
    print("Result == FAIL")


