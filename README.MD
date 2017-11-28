# City Population

This is test task.
App holds user's login and registration. If user logged in than App gets list of cities from server and shows it as table. 
Also App shows Yandex map. When user clicks row in table appropriate city is marked on map.
When user clicks 'Chart' App shows chart instead of map. Chart represents cities population. User can hide chart to see map again.

App uses TypeScript, React, Bootstrap for front-end, Python's Django Framework and PostgreSQL for backend. For test used Jest, Enzyme.
For development purposes used Webpack's dev server which proxies some requests to Django webserver.

Webpack dev server uses localhost:4444, Django - localhost:4445.

<h3>HOW TO USE</h3>
<ol type='1'>
<li>1. Create DB 'citypopulation'. Project uses 'alex' as login and password. You can change it in citypopulation\cp_backend\cp_backend\settings.py.</li>
<li>2. in citypopulation/cp_backend run 'python3 manage.py makemigrations' than 'python3 manage.py migrate'.</li>
<li>3. Drop table citypopulation_citymodel and import it from cities.sql.</li>
<li>4. Run Django dev server by 'python3 manage.py runserver 4445'</li>
<li>5. Run 'npm start'.</li>
</ol>
For tests run 'npm test' - frontend, 'python3 manage.py test' - for backend.

<h3>Screenshots</h3>
<img src='https://github.com/iozheg/citypopulation/blob/master/cp1.PNG'></img>
<img src='https://github.com/iozheg/citypopulation/blob/master/cp2.PNG'></img>
<img src='https://github.com/iozheg/citypopulation/blob/master/cp3.PNG'></img>