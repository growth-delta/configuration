from django.contrib import sitemaps
from django.urls import reverse

# SiteMap
class SiteMap(sitemaps.Sitemap):
    """
    Sitemap. url 'website:landing_page' this adds the URL to the sitemap
    """
    def items(self):
        return [
            # Website
            'website:landing_page',
            # API
            'api:test_json',
            'api:test_excel',
            # Applications
            'website:react_app',
            'website:react_component',
            # Content
            'content:django',
            'content:react',
        ]
    def location(self, item):
        return reverse(item)
