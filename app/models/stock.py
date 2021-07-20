from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Stock(db.Model):
    __tablename__ = 'Stocks'

    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.String(5), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    about = db.Column(db.Text, nullable=False)
    ceo = db.Column(db.String(50), nullable=False)
    employees = db.Column(db.Integer, nullable=False)
    headquarters = db.Column(db.String(100), nullable=False)
    founded = db.Column(db.Integer, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'symbol': self.symbol,
            'name': self.name,
            'about': self.about,
            'ceo': self.ceo,
            'employees': self.employees,
            'headquarters': self.headquarters,
            'founded': self.founded
        }
