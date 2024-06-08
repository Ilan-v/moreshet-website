from flask import Flask, jsonify, render_template
import random
import pandas as pd

app = Flask(__name__)
names = []

@app.route('/')
def index():
    global names
    names = pd.read_excel('names.xlsx')['name'].tolist()
    return render_template('index.html')

@app.route('/roll_name')
def roll_name():
    name = random.choice(names)
    names.remove(name)
    print(len(names))
    return jsonify(name=name)

if __name__ == '__main__':
    app.run(debug=True)
