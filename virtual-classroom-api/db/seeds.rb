# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Instructors
minerva = Instructor.create(
    name: "Minerva McGonagall",
    password: "gryffindor",
    email: "mcgonagall@hogwarts.com"
)
severus = Instructor.create(
    name: "Severus Snape",
    password: "halfbloodprince",
    email: "potionmaster@hogwarts.com"
)

# Students
ron = Student.create(
    name: "Ron Weasley",
    password: "ron",
    email: "keeper@hogwarts.com"
)
hermoine = Student.create(
    name: "Hermoine Granger",
    password: "hermoine",
    email: "genius@hogwarts.com"
)
harry = Student.create(
    name: "Harry Potter",
    password: "harry",
    email: "thechosenone@hogwarts.com"
)

# Subjects
transfiguration = Subject.create(name: "Transfiguration", instructor: minerva)
potions = Subject.create(name: "Potions", instructor: severus)
occlumency = Subject.create(name: "Occlumency", instructor: severus)

# Enrollments
e_ron_1 = Enrollment.create(student: ron, subject: transfiguration)
e_ron_2 = Enrollment.create(student: ron, subject: potions)
e_her_1 = Enrollment.create(student: hermoine, subject: transfiguration)
e_her_2 = Enrollment.create(student: hermoine, subject: potions)
e_har_1 = Enrollment.create(student: harry, subject: transfiguration)
e_har_2 = Enrollment.create(student: harry, subject: potions)
e_har_3 = Enrollment.create(student: harry, subject: occlumency)

# Lectures
pot_lec_1 = Lecture.create(title: "Intro To Potions", content: "Lecture notes 1.", subject: potions)
pot_lec_2 = Lecture.create(title: "Polyjuice", content: "How to make polyjuice potion.", subject: potions)
pot_lec_3 = Lecture.create(title: "Felix Felicis", content: "It's your lucky day.", subject: potions)
tra_lec_1 = Lecture.create(title: "Intro To Transfiguration", content: "History of transfiguration.", subject: transfiguration)
tra_lec_2 = Lecture.create(title: "Cats", content: "How to be a cat.", subject: transfiguration)
occ_lec_1 = Lecture.create(title: "Intro To Occlumency", content: "Clearing your mind.", subject: occlumency)

# Messages
msg_1 = Message.create(content: "My potion smells bad.", sender: "student", instructor: severus, student: ron, lecture: pot_lec_2)
msg_a = Message.create(content: "You are hopeless.", sender: "instructor", instructor: severus, student: ron, lecture: pot_lec_2)
msg_2 = Message.create(content: "I think I made a bad luck potion.", sender: "student", instructor: severus, student: ron, lecture: pot_lec_3)
msg_3 = Message.create(content: "Professor, I turned my ears into dog ears.", sender: "student", instructor: minerva, student: harry, lecture: tra_lec_2)
msg_b = Message.create(content: "Potter please pay attention next time.", sender: "instructor", instructor: minerva, student: harry, lecture: tra_lec_2)
msg_4 = Message.create(content: "Look I'm a cat!", sender: "student", instructor: minerva, student: hermoine, lecture: tra_lec_2)