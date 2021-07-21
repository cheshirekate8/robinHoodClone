from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Watch, Transaction, transaction, Stock

stock_routes = Blueprint('stocks', __name__)


@stock_routes.route('/')
def stocks():
    stocks = Stock.query.all()
    return { 'stocks': [stock.to_dict() for stock in stocks]}