from flask import Flask
from flask_restful import Api

from user import User

app = Flask(__name__)

# @app.route("/")
# def hello():
#    return "Hello World!"

api = Api(app)
api.add_resource(User, "/api/user", endpoint="users")
api.add_resource(User, "/api/user/<int:id>", endpoint="userById")

if __name__ == '__main__':
    app.run(debug=True)