import json

import config


def add_user(username, password, account_type):
    with open(config.USERS_FILE_PATH, config.READ_FILE_MODE) as users_file:
        users = json.load(users_file)

        new_user = {
            "username": username,
            "password": password,
            "account_type": account_type
        }
        users.append(new_user)

    with open(config.USERS_FILE_PATH, config.WRITE_FILE_MODE) as users_file:
        json.dump(users, users_file)
