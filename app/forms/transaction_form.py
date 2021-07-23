from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import User

# Need to create validators


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')

# only changed the name of the class and the names of the variables,
# needs to be completed.
class TransactionForm(FlaskForm):
    # userId = StringField('username', validators=[DataRequired(), username_exists])
    # symbol = StringField('email', validators=[DataRequired(), user_exists])
    shares = IntegerField('password', validators=[DataRequired()])
