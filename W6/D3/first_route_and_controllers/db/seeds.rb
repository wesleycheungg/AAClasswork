# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

wesley = User.new(username: 'wcheung')
joseph = User.new(username: 'jkomp')
justin = User.new(username: 'jlin')
daniel = User.new(username: 'dcheung')
michael = User.new(username: 'mkim')


mona_lisa = Artwork.new(title: 'mona_lisa', image_url: '12345', artist_id: 1)