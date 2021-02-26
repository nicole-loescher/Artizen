from flask_wtf import FlaskForm
from wtforms import TextField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    comment = TextField("What do you think?", validators=[DataRequired()])
