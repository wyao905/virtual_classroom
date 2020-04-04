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