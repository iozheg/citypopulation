from django.test import TestCase, RequestFactory
from django.contrib.auth.models import User
from django.contrib.auth import login

from .views import get_cities

class GetCitiesViewTests(TestCase):

    def test_anonymous_cant_get_cities(self):
        """
        Anonymous user can't get list of cities.
        """
        response = self.client.get('/cities/')
        self.assertEqual(response.status_code, 302)

    def test_user_can_get_cities(self):
        """
        Logged in user can get list of cities.
        """
        user = User.objects.create_user(username='name', password='pass')
        factory = RequestFactory()
        request = factory.get('/cities/')
        request.user = user
        response = get_cities(request)
        self.assertEqual(response.status_code, 200)
