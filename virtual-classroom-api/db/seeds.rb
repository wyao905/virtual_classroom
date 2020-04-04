# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Instructors
minerva = Instructor.create(name: "Minerva McGonagall")
severus = Instructor.create(name: "Severus Snape")

# Students
ron = Student.create(name: "Ron Weasley")
hermoine = Student.create(name: "Hermoine Granger")
harry = Student.create(name: "Harry Potter")

# Subjects
transfiguration = Subject.create(name: "Transfiguration", instructor: minerva)
potions = Subject.create(name: "Potions", instructor: severus)
occlumency = Subject.create(name: "Occlumency", instructor: severus)