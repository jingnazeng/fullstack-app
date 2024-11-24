# src/routes.py

from src import app
from flask import jsonify

@app.route('/list-items', methods=['GET'])
def get_list_items():
    items = ["item1", "item2", "item3"]
    return jsonify(items)