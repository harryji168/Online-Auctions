# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
User.delete_all
Auction.delete_all
Bid.delete_all

NUM_AUCTIONS = 15
NUM_USER = 10

PASSWORD='123'
super_user= User.create(
    first_name: 'Harry',
    last_name:'Ji',
    email: 'jiharry@hotmail.com',
    password: PASSWORD,
)

NUM_USER.times do
    first_name= Faker::Name.first_name 
    last_name= Faker::Name.last_name 
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}.#{last_name}@example.com",
        password: PASSWORD
    )
end
users=User.all

NUM_AUCTIONS.times do 
    created_at=Faker::Date.backward(days: 365*5),
    reserve_price=rand(30..500),
    a = Auction.create(
        title: Faker::Commerce.product_name,
        description: Faker::Quote.famous_last_words,
        ends_at: Faker::Date.forward(days: 100),
        reserve_price: reserve_price,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if a.valid?
        a.bids = rand(1..6).times.map do
            random_date = Faker::Date.backward(days:30 )
            Bid.new(
                price: Faker::Number.within(range: 10..500),
                created_at: random_date,
                updated_at: random_date,
                user: users.sample
            )
        end
    end

   # puts reserve_price
    # if a.valid?
    #     current_date =Date.today-30
    #     last_price =reserve_price
    #     #puts last_price
       
    #     a.bids = rand(1..5).times.map do
    #        # back_date=rand(1..10)
    #        # puts back_date
    #         #current_date=total_date+back_date
    #        # current_date=Date.today
    #       #  puts current_date
    #       #  total_date=current_date
    #         random_date = Faker::Date.between(from: current_date ,to: Date.today)    

    #         random_date =Now()
    #          puts random_date
    #        # current_date=random_date
    #       #  current_date=random_date
    #        # this_price = Faker::Number.within(range: 10..100),
    #         #random_date = Date.today 
    #         #puts random_date
    #         this_price=Faker::Number.within(range: 10..500)
    #         #  increase_price=rand(1..100)
    #         #  this_price=last_price+increase_price
    #         #  last_price =this_price
    #         #  puts this_price
    #         Bid.new(
    #             price: this_price,
    #             created_at:  random_date,
    #             updated_at:  random_date,
    #             user: users.sample                
    #         )
    #         puts "------"
           
    #     end
    #     puts "================================="
    #    # byebug
    # end
end

auction = Auction.all
bid = Bid.all

puts Cowsay.say("Generated #{auction.count} auctions.",:Dragon)
puts Cowsay.say("Generated #{bid.count} bid.",:Turtle)
puts Cowsay.say("Generated #{users.count} users.",:Stegosaurus)
puts Cowsay.say("Login with  #{super_user.email} and password:#{PASSWORD}.",:Turkey)
