"""all migrations one file

Revision ID: 2f4d4ac09029
Revises:
Create Date: 2021-07-21 18:39:38.859010

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2f4d4ac09029'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Stocks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('symbol', sa.String(length=5), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('about', sa.Text(), nullable=False),
    sa.Column('ceo', sa.String(length=50), nullable=False),
    sa.Column('employees', sa.Integer(), nullable=False),
    sa.Column('headquarters', sa.String(length=100), nullable=False),
    sa.Column('founded', sa.Integer(), nullable=False),
    sa.Column('imgUrl', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('firstName', sa.String(length=50), nullable=False),
    sa.Column('lastName', sa.String(length=50), nullable=False),
    sa.Column('balance', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('Transactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('symbol', sa.String(length=5), nullable=False),
    sa.Column('buy', sa.String(length=5)),
    sa.Column('sell', sa.String(length=5)),
    sa.Column('shares', sa.Integer(), nullable=False),
    sa.Column('total', sa.Float(), nullable=False),
    sa.Column('time', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Watches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('stockId', sa.Integer(), nullable=False),
    sa.Column('symbol', sa.String(length=5), nullable=False),
    sa.ForeignKeyConstraint(['stockId'], ['Stocks.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Watches')
    op.drop_table('Transactions')
    op.drop_table('Users')
    op.drop_table('Stocks')
    # ### end Alembic commands ###
