from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *


class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        # print('get')
        # if(React.objects.exists()):
        # print('this')
        # detail = [{"query":detail.query,"response":detail.response}
        # for detail in React.objects.all()]
        # React.objects.all().delete()
        # return Response(detail)
        # else:
        # 	print('that')
        detail = [{"query": "", "response": "Hello sir ! how may I assist you"}]
        return Response(detail)

    def post(self, request):
        # print('post')
        dic = request.data

        for i in range(10000000):
            print("", end="")

        print("doc = ", dic)
        dic["response"] = "hello how are you"
        # print(request.data)
        # serializer = ReactSerializer(data=dic)
        # print('request = ',serializer)
        # if serializer.is_valid(raise_exception=True):
        # 	# serializer.save()
        return Response(dic)
