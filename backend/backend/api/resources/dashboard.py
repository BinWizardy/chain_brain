from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required
from backend.api.schemas import UserSchema
from backend.models import DashboardQueryResult
from backend.extensions import db
from backend.commons.pagination import paginate
from backend.controllers.api.v1 import APIV1Controller

DEFAULT_INPUT = "What proposal has the most votes?"
DEFAULT_SUBGRAPH = "aave-governance"
DEFAULT_ADDRESS = "-1"


class DashboardCreator(Resource):
    """Dashboard Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self):
        try:
            input_sentence = request.get_json().get("input")
            if input_sentence == "":
                raise
        except:
            input_sentence = DEFAULT_INPUT

        try:
            subgraph = request.get_json().get("subgraph")
            if subgraph == None or subgraph == "":
                raise
        except:
            subgraph = DEFAULT_SUBGRAPH

        try:
            wallet_address = request.get_json().get("wallet_address")
            if wallet_address == "":
                raise
        except:
            wallet_address = DEFAULT_ADDRESS

        print("==========user response:==========")
        print(input_sentence)
        print("==========user subgraph:==========")
        print(subgraph)
        controller = APIV1Controller()
        response = controller.handle_query_for_dashboard(
            input_sentence, subgraph, wallet_address
        )
        print("==========db result:==========")
        print(response)
        return response


class DashboardViewer(Resource):
    """DashboardViewer Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def get(self, dashboard_id):
        return APIV1Controller().get_dashboard(dashboard_id)


class DashboardSaver(Resource):
    """DashboardSaver Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self, dashboard_id):
        wallet_address = request.get_json().get("wallet_address")
        if wallet_address == "":
            return 400
  
        return APIV1Controller().save_dashboard_to_user(dashboard_id, wallet_address)


class DashboardForUser(Resource):
    """DashboardForUser Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def get(self, wallet_address):
        return APIV1Controller().get_dashboards(wallet_address)


class DashboardFeedback(Resource):
    """DashboardFeedback Resource
    """
    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self, dashboard_id, feedback):

        return APIV1Controller().save_dashboard_feedback(dashboard_id, feedback)
