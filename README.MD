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
<li>Create DB 'citypopulation'. Project uses <code>'alex'</code> as login and password. You can change it in citypopulation\cp_backend\cp_backend\settings.py.</li>
<li>In citypopulation/cp_backend run <code>'python3 manage.py makemigrations'</code> than <code>'python3 manage.py migrate'</code>.</li>
<li>Drop table citypopulation_citymodel and import it from cities.sql.</li>
<li>Run Django dev server by <code>'python3 manage.py runserver 4445'</code></li>
<li>Run 'npm start'.</li>
</ol>
For tests run <code>'npm test'</code> - frontend, <code>'python3 manage.py test'</code> - for backend.

<h3>Screenshots</h3>
<img src='https://github.com/iozheg/citypopulation/blob/master/screenshots/cp1.PNG'></img>
<img src='https://github.com/iozheg/citypopulation/blob/master/screenshots/cp2.PNG'></img>
<img src='https://github.com/iozheg/citypopulation/blob/master/screenshots/cp3.PNG'></img>