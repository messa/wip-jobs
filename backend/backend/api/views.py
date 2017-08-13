from flask import Blueprint, Response


bp = Blueprint('views', __name__)


@bp.route('/')
def index():
    return Response('This is backend API', mimetype='text/plain')
