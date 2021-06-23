import wikipedia
from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *

import datetime


class ReactView(APIView):
    serializer_class = ReactSerializer
    def get(self, request):
        details = []
        hour = int(datetime.datetime.now().hour)
        if hour >= 0 and hour < 12:
            details.append(
                {
                    "query": "",
                    "response": "A very Good morning to you ! I'm Jarvis. how may I assist you ? 😊",
                }
            )
        elif hour >= 12 and hour < 18:
            details.append(
                {
                    "query": "",
                    "response": "A very Good Afternoon to you ! I'm Jarvis. how may I assist you ? 😊",
                }
            )
        else:
            details.append(
                {
                    "query": "",
                    "response": "A very Good Evening to you ! I'm Jarvis. how may I assist you ? 😊",
                }
            )
        return Response(details)

    def post(self, request):
        dic = request.data
        print(dic)
        query = str( dic['query']).lower()
        print('query = ',query)
        try:
            dic["response"] ="According to Wikipedia : "+ wikipedia.summary(query,sentences=1)
        except:
            print('error')
            dic["response"] = "sorry your request cannot be processed ! 😥 "
        return Response(dic)
