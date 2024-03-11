# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.destroy_all
Fact.destroy_all
Location.destroy_all

20.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password,
  )
end

20.times do
  Location.create(
    latitude: Faker::Address.latitude.to_f,
    longitude: Faker::Address.longitude.to_f,
    label: %w(historic real_estate horror geography street_art bar_crawl).sample,
  )
end

20.times do
  Fact.create(
    label: %w(historic real_estate horror geography street_art bar_crawl).sample,
    text: Faker::Lorem.sentence,
    location: Location.all.sample,
  )
end
