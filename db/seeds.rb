# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(id: 2, rut: "12345678-9", email: "jp@correo.cl", fname: "Jaimito", lname: "Pérez", dob: "2000-05-25 00:00:00.000000000 +0000", created_at: "2022-09-29 14:34:15.472499000 +0000", updated_at: "2022-09-29 14:34:15.472499000 +0000")

Exam.create(id: 1, name: "Consulta General", author: nil, location: nil, analysis: nil, date: "2022-02-28 14:53:11.949473000 +0000", created_at: "2022-09-29 14:54:00.895386000 +0000", updated_at: "2022-09-29 14:54:00.895386000 +0000", user_id: 1)

Exam.create(id: 2, name: "Examen de Sangre", author: "Dr. Morbius", location: "Hospital DCC", analysis: "Sus resultados son preocupantes", date: "2022-09-29 14:54:53.703343000 +0000", created_at: "2022-09-29 14:55:23.311749000 +0000", updated_at: "2022-09-29 14:55:23.311749000 +0000", user_id: 1)
