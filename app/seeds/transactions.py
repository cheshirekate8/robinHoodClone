from app.models import db, Transaction
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_transactions():
    one = Transaction(
        userId=3, symbol='AAPL', buy='yes', shares=100, total=389.46, time=datetime.now())
    two = Transaction(
        userId=2, symbol='MSFT', buy='yes', shares=50, total=115.09, time=datetime.now())
    three = Transaction(
        userId=1, symbol='V', buy='yes', shares=75, total=246.10, time=datetime.now())
    four = Transaction(
        userId=1, symbol='V',sell='yes', shares=65, total=246.10, time=datetime.now())
    five = Transaction(
        userId=1, symbol='V', buy='yes', shares=35, total=246.10, time=datetime.now())
    six = Transaction(
        userId=1, symbol='V', buy='yes', shares=95, total=246.10, time=datetime.now())
    seven = Transaction(
        userId=1, symbol='V',sell='yes', shares=85, total=246.10, time=datetime.now())
    eight = Transaction(
        userId=1, symbol='V', buy='yes', shares=55, total=246.10, time=datetime.now())
    nine = Transaction(
        userId=1, symbol='V', buy='yes', shares=25, total=246.10, time=datetime.now())
    ten = Transaction(
        userId=1, symbol='V',sell='yes', shares=15, total=246.10, time=datetime.now())
    eleven = Transaction(
        userId=1, symbol='V', buy='yes', shares=45, total=246.10, time=datetime.now())
    twelve = Transaction(
        userId=1, symbol='V', buy='yes', shares=75, total=246.10, time=datetime.now())
    thirteen = Transaction(
        userId=1, symbol='V',sell='yes', shares=35, total=246.10, time=datetime.now())
    fourteen = Transaction(
        userId=1, symbol='V',sell='yes', shares=65, total=246.10, time=datetime.now())
    fifteen = Transaction(
        userId=1, symbol='V', buy='yes', shares=95, total=246.10, time=datetime.now())
    sixteen = Transaction(
        userId=1, symbol='V', buy='yes', shares=85, total=246.10, time=datetime.now())
    seventeen = Transaction(
        userId=1, symbol='V',sell='yes', shares=55, total=246.10, time=datetime.now())
    eighteen = Transaction(
        userId=1, symbol='V', buy='yes', shares=25, total=246.10, time=datetime.now())
    nineteen = Transaction(
        userId=1, symbol='V', buy='yes', shares=15, total=246.10, time=datetime.now())
    twenty = Transaction(
        userId=1, symbol='V',sell='yes', shares=45, total=246.10, time=datetime.now())
    twentyone = Transaction(
        userId=1, symbol='V',sell='yes', shares=75, total=246.10, time=datetime.now())
    twentytwo = Transaction(
        userId=1, symbol='V', buy='yes', shares=95, total=246.10, time=datetime.now())
    twentythree = Transaction(
        userId=1, symbol='V', sell='yes', shares=200, total=246.10, time=datetime.now())
    

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.add(eleven)
    db.session.add(twelve)
    db.session.add(thirteen)
    db.session.add(fourteen)
    db.session.add(fifteen)
    db.session.add(sixteen)
    db.session.add(seventeen)
    db.session.add(eighteen)
    db.session.add(nineteen)
    db.session.add(twenty)
    db.session.add(twentyone)
    db.session.add(twentytwo)
    db.session.add(twentythree)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()