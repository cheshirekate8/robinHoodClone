from app.models import db, Watch


# Adds a demo user, you can add other users here if you want
def seed_watches():
    one = Watch(
        userId=3, stockId=4)
    two = Watch(
        userId=2, stockId=20)
    three = Watch(
        userId=1, stockId=21)
    four = Watch(
        userId=1, stockId=27)
    five = Watch(
        userId=1, stockId=28)
    six = Watch(
        userId=1, stockId=30)
    seven = Watch(
        userId=1, stockId=4)

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
