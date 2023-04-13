from django.shortcuts import render

def landing_page(request):
    return render(request, "website/landing_page.html")

def Example_React_App(request):
    return render(request, "applications/example_react/react_app.html")

def Example_React_Component(request):
    return render(request, "applications/example_react/react_component.html")
