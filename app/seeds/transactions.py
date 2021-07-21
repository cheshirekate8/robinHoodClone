from app.models import db, Transaction
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_transactions():
    one = Transaction(
        userId=3, symbol='AAPL', shares=100, total=389.46, time=datetime.now())
    two = Transaction(
        userId=2, symbol='MSFT', shares=50, total=115.09, time=datetime.now())
    three = Transaction(
        userId=1, symbol='TSLA', shares=75, total=246.10, time=datetime.now())

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()