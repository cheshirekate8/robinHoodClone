from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Watch, Transaction, stock, transaction, Stock

stock_routes = Blueprint('stocks', __name__)


@stock_routes.route('/')
@login_required
def stocks():
    stocks = Stock.query.all()
    return { 'stocks': [stock.to_dict() for stock in stocks]}

@stock_routes.route('/<string:symbol>')
@login_required
def dbStock(symbol):
    stock = Stock.query.filter_by(symbol=symbol).first()
    return stock.to_dict()
