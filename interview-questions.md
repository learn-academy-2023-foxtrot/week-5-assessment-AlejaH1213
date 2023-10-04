# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AH

1. Why would super be used in a Ruby class?

Your answer: super would be used in a Ruby class if we are creting a subclass and want to connect parts of the bigger class that we want inherited to the subclass. for example if we have a class of Vehicles and a subclass of Bike we can give the subclass Bike values that are in the bigger or super class
class Vehicles
    def initialize(type,model,year)
        @type = type
        @model = model
        @year = year
    end
end

and then we have a subclass of bikes
class Bike < Vehicles
    def initialize
        super(type) <- example
end


Researched answer: superclasses can pass information down to subclasses, the super method calls the initialized method in the superclass. The arguments passed to the new instance of the subclass will be the same arguments passed to super.

2. What is a relational database? Are there other kinds of databases?

Your answer: a relational database is the kind of database that has rows and columns and different types of variables

Researched answer: relational databases have a structure of rows and columns. the columns give the table the structure of the database and the rows are the entries in that database

3. What are primary keys? Why purpose does a primary key serve?

Your answer: the primary keys are unique identifiers of each row in a database. the purpose of a primary key is to ensure that each row of data has a unique identifier that allows us to call on that row of data

Researched answer: the primary key is a column that contains a unique identifier for each row, the primary key ensures that every database entry is unique. In Ruby, the primary key is called "id" and even if we delete the entry the id wont be reusable, that id also gets deleted and it wont be used in any other entry 

4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Create, Read, and Update. 

Researched answer: the five HTTP verbs are:
get request - the equivalent in CRUD is read because the get request is to display content 
post request - the equivalent in CRUD is create because this is to create content
put request - the equivalent in CRUD is update because this is to modify content
patch request - the equivalent in CRUD is also update because it also modifies content
delete request- the equivalent in CRUD is update because it removes or modifies content 

5. STRETCH: What is a JOIN table in SQL?

Your answer: a join table is a custom table created by manually selecting two specific columns of one table. For example if we have a table that has three columns: NAME, WEIGHT and HEIGHT we can create a new table with the WEIGHT and HEIGHT called BMI and we do that with the JOIN

Researched answer: the purpose of JOIN is to access data from multiple tables based on logical relationships between them 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: validations are used to ensure that only clean and valid data gets into the database

2. Params: URL parameters or query strings are ways to pass additional information into a controller method 

3. API: Application Programming Interface is an application that transmits data in the form of JSON
