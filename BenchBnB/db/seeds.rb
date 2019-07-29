# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
benches = Bench.create(
  [
    { description: "Great thinking bench", lat: 37.804591, lng: -122.251423 },
    { description: "Bench isn't long enough", lat: 37.805307, lng: -122.257329 },
    { description: "Perfect bench for eating tacos", lat: 32.749135, lng: -117.129316 }
  ]
)