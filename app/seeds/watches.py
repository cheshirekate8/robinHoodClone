from app.models import db, Watch


# Adds a demo user, you can add other users here if you want
def seed_watches():
    one = Watch(
        userId=3, symbol='AAPL')
    two = Watch(
        userId=2, symbol='MSFT')
    three = Watch(
        userId=1, symbol='TSLA')
    four = Watch(
        userId=1, symbol='SNAP')
    five = Watch(
        userId=1, symbol='NFLX')
    six = Watch(
        userId=1, symbol='FB')
    seven = Watch(
        userId=1, symbol='AAPL')

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_watches():
    db.session.execute('TRUNCATE watches RESTART IDENTITY CASCADE;')
    db.session.commit()