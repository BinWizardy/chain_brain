import requests

class CeramicService:
    def __init__(self, env=None):
        self._env = env

    def save_feedback_with_query(self, dashboard):
        try:
            requests.post(self._env, json=dashboard.to_dict())
        except:
            pass
