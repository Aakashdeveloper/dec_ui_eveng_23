from flask import Flask, jsonify

app = Flask(__name__)

books = [
    {
        'name':'Atomic Habbits',
        'price':'$3.44',
        'isbn':353532534
    },
    {
        'name':'Green eggs and hams',
        'price':'$4.92',
        'isbn':453532534
    }
]

@app.route('/')
def welcome():
    return "Welcome to Book Store"

@app.route('/books')
def book_page():
    return jsonify({'books':books})


@app.route('/books', methods=['POST'])
def add_book():
    pass

@app.route('/books/<int:isbn>')
def get_book_by_isbn(isbn):
    return_value= {}
    for book in books:
        if book['isbn'] == isbn:
            return_value={
                'name':book['name'],
                'price':book['price'],
                'isbn':book['isbn']
            }
    return jsonify(return_value)



app.run(port=8811)