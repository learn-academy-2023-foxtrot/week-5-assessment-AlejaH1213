# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# name: single_word
# input: an array and a single letter
# output: an array with words that contain that letter
# process: 
# im going to create a function called single_word and im going to give it two parameters one of the array and the other one of the letter
# then im going to use the select method to filter the array according to the letter, so it is going to look in each word of the array for the words that have the letter and return them in a new array 
def single_word (array, letter)
    array.select do |word|
        word.include?(letter)
    end 
end

p single_word(beverages_array, filter_letter_o)
p single_word(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# name: alphabetical_array
# input: a hash
# output: an array with all the values in alphabetical order
# process:
# first i need to be able to access the values inside the hash so im going to use .values to return  all the values
# then im going to flatten the array so its only one array
# finally im going to sort the array so it is in alphabetical order
def alphabetical_array hash
   values = hash.values
   flat_array = values.flatten
   sorted_array = flat_array.sort
end

p alphabetical_array us_states
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# name:
# process:
# im going to create a class called bike
# ill use the initialize method and inside im only putting model because it is the only parameter that needs an argument, inside the method im going to put the model the wheels and the current speed according to the instructions
# then im going to create the bike info method with the string interpolation using model, wheels and current speed
# then im going to instantiate my class and give it the argument of 'Trek'
# finally im going to call the method 
class Bike 
    attr_accessor :model, :wheels, :current_speed
def initialize(model)
        @model= model
        @wheels= 2
        @current_speed= 0
    end
    def bike_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
    
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
# Pseudo code:
# first im going to add the attr_accessor to my class so the current speed can be updated 
# first im going to create the pedal faster method and give it a value as a parameter
# then im going to tell it to set the current speed plus or equal to the value
# then im going to create the brake method 
# im going to tell it to set the update the current speed minus or equal to the value
# then im going to add the [].max that is going to make sure that the value doesnt go below zero
    def pedal_faster value
        @current_speed += value 
    end
    def brake value
        @current_speed -=value 
        # so this is creating an array with two elements, the current speed and the number zero
        # then the max method looks for the maximum value in the array, if the current speed is greater than zero then it is going to return the current speed but if the current speed is zero or below zero it is only going to return a zero
        [@current_speed, 0].max
    end
end

new_bike = Bike.new('Trek')
p new_bike.pedal_faster(10)
# output: 10
p new_bike.pedal_faster(18)
# output: 28
p new_bike.brake(5)
# output: 23
p new_bike.brake(25)
# output: 0





