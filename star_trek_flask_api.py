from flask import Flask, request

app = Flask(__name__)

memory_alpha_database = {
    "USS Voyager": {'ship_name':'USS Voyager', 'captain': 'Katheryn Janeway', 'century': 24},
    "USS Enterprice D": {'ship_name':'USS Enterprice D', 'captain': 'Jean-Luc Picard', 'century': 24},
    "USS Enterprice E": {'ship_name':'USS Enterprice E', 'captain': 'Jean-Luc Picard', 'century': 24},
    "USS Discovery": {'ship_name':'USS Discovery', 'captain': 'Michael Burnham', 'century': 23},
    "USS Discovery 32": {'ship_name':'USS Discovery 32', 'captain': 'Michael Burnham', 'century': 32},
}

@app.route('/starships', methods=['GET', 'POST'])
def starships_route():
    if request.method == 'GET':
        return {"memory_alpha_database": memory_alpha_database}
    elif request.method == "POST":
        new_starship = request.get_json(force=True)
        shipname = new_starship['ship_name']
        memory_alpha_database[shipname] = new_starship
        return new_starship


@app.route('/starships/<starship_name>', methods=['GET', 'PUT', 'DELETE'])
def starship_route(starship_name):
    if request.method == 'GET':
        return memory_alpha_database[starship_name]
    elif request.method == 'PUT':
        updating_ship = memory_alpha_database[starship_name]
        updating_ship.update(request.get_json(force=True))
        return updating_ship
    elif request.method == "DELETE":
        delete_starship = memory_alpha_database[starship_name]
        del memory_alpha_database[starship_name]
        return memory_alpha_database


if __name__ == "__main__":
    app.run(port=8888, debug=True, host='0.0.0.0')

