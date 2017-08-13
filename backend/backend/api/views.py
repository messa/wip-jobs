from flask import Blueprint, Response, request, jsonify


bp = Blueprint('views', __name__)


@bp.route('/')
def index():
    return Response('This is backend API', mimetype='text/plain')


@bp.route('/render-markdown', methods=['POST'])
def render_markdown():
    from markdown import markdown
    data = request.get_json()
    return jsonify({
        'html': markdown(data['markdownSource']),
    })
