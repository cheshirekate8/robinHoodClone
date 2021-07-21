from flask.cli import AppGroup
from .users import seed_users, undo_users
from .watches import seed_watches, undo_watches
from .transactions import seed_transactions, undo_transactions
from .stocks import seed_stocks, undo_stocks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_stocks()
    seed_users()
    seed_watches()
    seed_transactions()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_watches()
    undo_transactions()
    undo_stocks()
    # Add other undo functions here
