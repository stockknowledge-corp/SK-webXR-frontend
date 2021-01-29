//Import required modules

const express = require('express');
const path = require('path');

// Create App 
const app = express();

//Setup some routing override
const accessRouteOverrideMapping = {
    '/login': [],
    '/register': [],
    '/dashboard': [],
    '/subject': ['biology', 'chemistry', 'physics', 'mathematics', 'earthscience'],
    '/subject/physics': ['em-wave', 'em-spectrum']
}

const accessPointOverride = accessPoint => {
    app.post(accessPoint, (req, res, next) => {
        req.method = 'GET';
        next();
    });
}

for (const key in accessRouteOverrideMapping) {
    const nodes = accessRouteOverrideMapping[key];

    if (nodes) {
        nodes.forEach(node => accessPointOverride(key + node));
    }

    accessPointOverride(key);
}

//Set static routers/resources
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/login', express.static(path.join(__dirname, 'public/routes/login')));
app.use('/register', express.static(path.join(__dirname, 'public/routes/register')));
app.use('/dashboard', express.static(path.join(__dirname, 'public/routes/dashboard')));

accessRouteOverrideMapping['/subject'].forEach(
    node => app.use('/subject/' + node, express.static(path.join(__dirname, 'public/assets/' + node)))
);


accessRouteOverrideMapping['/subject/physics'].forEach(
    node => app.use('/subject/physics/' + node, express.static(path.join(__dirname, 'public/assets/physics/' + node)))
)

//Set port
const PORT = process.env.PORT || 5000;

//start local server
app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}.`)
});