from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def first_name(form, field):
    first_name = field.data
    if len(first_name) > 50:
        raise ValidationError('First Name cannot be greater than 50 characters.')
    elif not len(first_name):
        raise ValidationError('First Name is required')



class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    firstName = StringField('firstName', validators=[DataRequired(), first_name])
    lastName = StringField('lastName', validators=[DataRequired()])
    balance = SelectField('balance', validators=[DataRequired()], choices=[100000.00,10000.00,1000.00], coerce=float)
