# Import the required libraries
from flask import Flask
from flask_cors import CORS, cross_origin


# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow
cors = CORS()


def create_app():
    """Application-factory pattern"""
    app = Flask(__name__)
    cors.init_app(app)

    return app
