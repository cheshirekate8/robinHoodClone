from .models import db

student_lessons = db.Table(
    "watches_stocks",
    db.Column(
        "stockId",
        db.Integer,
        db.ForeignKey("Stocks.id"),
        primary_key=True
    ),
    db.Column(
        "watchId",
        db.Integer,
        db.ForeignKey("Watches.id"),
        primary_key=True
    )
)
