from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', hashed_password='password', firstName='Demo', lastName='User', balance=10000.00)
    marnie = User(
        username='marnie', email='marnie@aa.io', hashed_password='password', firstName='Marnie', lastName='Halloweentown', balance=1000.00)
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', hashed_password='password', firstName='Bob', lastName='Dylan', balance=100000.00)

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
