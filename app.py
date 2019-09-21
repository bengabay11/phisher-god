from flask import Flask
from flask_restful import Api

import config
from resources.gmail.controller import Gmail
from resources.instagram.controller import Instagram

app = Flask(__name__, static_folder=config.STATIC_FOLDER)
api = Api(app)

api.add_resource(Gmail, config.GMAIL_ROUTE)
api.add_resource(Instagram, config.INSTAGRAM_ROUTE)


def main():
    app.run(host=config.HOST, port=config.PORT)


if __name__ == '__main__':
    main()
