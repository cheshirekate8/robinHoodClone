from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Watch, Transaction, transaction
import datetime


user_routes = Blueprint('users', __name__)


# <<<<<<<<User Specific>>>>>>>>>


# get all users
@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# get one user
@user_routes.route('/<int:userId>')
@login_required
def user(userId):
    user = User.query.get(userId)
    return user.to_dict()


# update a user's balance
@user_routes.route('/<int:userId>', methods=['PATCH'])
@login_required
def user_patch(userId):
    data = request.get_json()
    newBalance = float(data)
    user = User.query.get(userId)
    user.balance = newBalance
    db.session.commit()
    return user.to_dict()


# <<<<<<<<User Watches>>>>>>>>>


def get_all_watches(userId):
    return Watch.query.where(Watch.userId == userId).all()


# Get all watches for a user
@user_routes.route('/<int:userId>/watches')
@login_required
def watches(userId):
    watches = get_all_watches(userId)
    return {'watches': [watch.to_dict() for watch in watches]}


# add a new stock to user's watchlist
@user_routes.route('/<int:userId>/watches', methods=['POST'])
@login_required
def watches_post(userId):

    data = request.get_json()

    new_watch = Watch(userId=data['userId'], stockId=data['stockId'], symbol=data['watch'])
    db.session.add(new_watch)
    db.session.commit()
    watches = get_all_watches(userId)
    return {'watches': [watch.to_dict() for watch in watches]}


# delete a stock from user's watchlist
@user_routes.route('/<int:userId>/watches/<int:watchId>', methods=['DELETE'])
@login_required
def watches_delete(userId, watchId):
    watch = Watch.query.where(Watch.id == watchId).first()
    db.session.delete(watch)
    db.session.commit()
    watches = get_all_watches(userId)
    return {'watches': [watch.to_dict() for watch in watches]}


# <<<<<<<<User Transactions>>>>>>>>>

def get_all_transactions(userId):
    return Transaction.query.where(Transaction.userId == userId).all()

# get all transaction history for a user
@user_routes.route('/<int:userId>/transactions')
@login_required
def transactions(userId):
    transactions = get_all_transactions(userId)
    return {'transactions': [transaction.to_dict() for transaction in transactions]}


# post a new transaction for this user
@user_routes.route('/<int:userId>/transactions', methods=['POST'])
# @login_required
def transactions_post(userId):
    data = request.get_json()

    new_transaction = Transaction(userId=userId, symbol=data['symbol'], shares=data['shares'], total=data['total'], time=datetime.datetime.now())

    db.session.add(new_transaction)
    db.session.commit()
    transactions = get_all_transactions(userId)
    return {'transactions': [transaction.to_dict() for transaction in transactions]}



# delete a stock from user's transactions
@user_routes.route('/<int:userId>/transactions/<int:transactionId>', methods=['DELETE'])
@login_required
def transactions_delete(userId, transactionId):
    transaction = Transaction.query.where(Transaction.id == transactionId).first()
    db.session.delete(transaction)
    db.session.commit()
    transactions = get_all_transactions(userId)
    return {'transactions': [transaction.to_dict() for transaction in transactions]}
