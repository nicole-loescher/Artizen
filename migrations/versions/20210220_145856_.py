"""empty message

Revision ID: e5faee5667df
Revises: a35b434d8e56
Create Date: 2021-02-20 14:58:56.712884

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e5faee5667df'
down_revision = 'a35b434d8e56'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('locations', 'title',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('locations', 'title',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
    # ### end Alembic commands ###