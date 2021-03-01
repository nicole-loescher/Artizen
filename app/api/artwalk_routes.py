from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import ArtWalk, db
import json

artwalk_routes = Blueprint('artwalks', __name__)


@artwalk_routes.route('/<int:id>')
@login_required
def artwalk(id):
    artwalk = ArtWalk.query.get(id)
    data = artwalk.to_dict()
    res = json.dumps(data)
    return res


@artwalk_routes.route("/delete/<int:id>", methods=["DELETE"])
@login_required
def delete_artwalk(id):
    artwalk = ArtWalk.query.get(id)

    db.session.delete(artwalk)
    db.session.commit()

    return "it worked"
