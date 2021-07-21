from .db import db

class Watch(db.Model):
    __tablename__ = "Watches"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)
    stockId = db.Column(db.Integer, db.ForeignKey("Stocks.id"), nullable=False)
    symbol = db.Column(db.String(5), nullable=False)
    user = db.relationship("User", back_populates="watches")


    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "stockId": self.stockId,
            "symbol": self.symbol
        }
