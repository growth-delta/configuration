import os
from django.shortcuts import render
import markdown


def Docs(request):
    # Read the Markdown file
    markdown_file = os.path.join('ReadMe.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/docs.html', {'content': content})


def ContentPage_Django(request):
    # Read the Markdown file
    markdown_file = os.path.join(os.path.dirname(__file__), 'cms', 'article_django.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/content_django.html', {'content': content})


def ContentPage_React(request):
    # Read the Markdown file
    markdown_file = os.path.join(os.path.dirname(__file__), 'cms', 'article_react.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/content_react.html', {'content': content})
