from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Transaction(db.Model, UserMixin):
    __tablename__ = 'Transactions'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    symbol = db.Column(db.string(5), nullable=False)
    shares = db.Column(db.Integer, nullable=False)
    time = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'symbol': self.symbol,
            'shares': self.shares, 
            'time': self.time
        }