from flask import jsonify, make_response
from flask_restful import Resource

class User(Resource):
    users = [
        {
            "id": 1,
            "name": "Himanshu",
            "place": "Delhi"
        },
        {
            "id": 2,
            "name": "Ankit",
            "place": "Punjab"
        }
    ]
    def get(self, id=None):
        if id:
            for user in User.users:
                if user['id'] == id:
                    return make_response(jsonify({"status": "ok", "data": user}), 200)
                    break
            
            return make_response(jsonify({"status": "failed", "message": "No such user exist"}), 404)
        else:
            return make_response(jsonify({"status": "ok", "data": User.users}), 200)


