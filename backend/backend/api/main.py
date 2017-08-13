from flask import Flask

# import Flask blueprints
from .views import bp as bp_views


_app = None

def app(environ, start_response):
    global _app
    if _app is None:
        _app = get_app()
    return _app(environ, start_response)



def get_app():
    app = Flask(__name__)
    register_blueprints(app)
    return app


def register_blueprints(app):
    app.register_blueprint(bp_views)
