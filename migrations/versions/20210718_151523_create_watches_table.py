"""create watches table

Revision ID: 98f84c1948dc
Revises: ffdc0a98111c
Create Date: 2021-07-18 15:15:23.234849

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '98f84c1948dc'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('Watches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('symbol', sa.String(length=5), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('Watches')
