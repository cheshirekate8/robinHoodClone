from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Transaction(db.Model):
    __tablename__ = 'Transactions'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)
    symbol = db.Column(db.String(5), nullable=False)
    shares = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Float, nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    user = db.relationship("User", back_populates="transactions")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'symbol': self.symbol,
            'shares': self.shares,
            'total': self.total,
            'time': self.time
        }
