"""create transactions table

Revision ID: efb7f0c1c27d
Revises: 98f84c1948dc
Create Date: 2021-07-18 15:20:58.293673

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'efb7f0c1c27d'
down_revision = '98f84c1948dc'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('Transactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('symbol', sa.String(length=5), nullable=False),
    sa.Column('shares', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('Transactions')
