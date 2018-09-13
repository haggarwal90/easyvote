1. User

Fields
--> id
--> name
--> password
--> email
--> mobile

Operations
--> Create new user
--> Edit User
--> Delete User
--> Get User

2. Question

Fields
--> id
--> question
--> options
--> type <single/multiple>
--> reason needed <boolean>
--> Answer option number/numbers

Operations
--> Create Question
--> Get Question
--> Delete Question
--> Edit Question

3. Form

Fields
--> id
--> Array of <Question> (Keep copy of question not reference)
--> Expiration date

Operations
--> Create Form
--> Delete Form (it will also delete matching responces)
--> Get form

4. Responce

Fields
--> Form id
--> user id
--> Array of Answered question with extra field (selected option number, reason of selection)

Operation
--> Create 
--> Get Response