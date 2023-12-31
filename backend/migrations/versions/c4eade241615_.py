"""empty message

Revision ID: c4eade241615
Revises: 7e7a49b90c5f
Create Date: 2023-03-03 15:48:10.455211

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c4eade241615'
down_revision = '7e7a49b90c5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dashboard_query_result', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               type_=sa.Text(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dashboard_query_result', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.Text(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###
