APIs
1. Welcome message
GET: http://localhost:8080 

2. Login
POST /api/login HTTP/1.1
Host: localhost:8080
Content-Type: application/x-www-form-urlencoded

BODY: email=himanshu%40gmail.com&password=himanshu 

3. Signup
POST /api/signup HTTP/1.1
Host: localhost:8080
Content-Type: application/x-www-form-urlencoded

BODY: email=himanshu%40gmail.com&password=himanshu 

4. POST form
POST /api/admin/forms HTTP/1.1
Host: localhost:8080
Content-Type: application/x-www-form-urlencoded

BODY: firstname=<firstname>&lastname=<lastname>

5. GET forms
GET /api/admin/forms HTTP/1.1
Host: localhost:8080
Authorization: Bearer <TOKEN>


