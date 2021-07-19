from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Watch(db.Model, UserMixin):
    __tablename__ = 'Watches'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    symbol = db.Column(db.string(5), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'symbol': self.symbol
        }