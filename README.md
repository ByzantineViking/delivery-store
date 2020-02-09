A webstore front-end for food delivery from multiple restaurants. Focus on being able to compare different kinds of restaurants with ease, and being able to save promising restaurants before making a decision between them.

## Project Structure
```
Project Root
├── src
    ├── components              // Packaged with stylesheets and tests.
        ├── Tile
            ├── Tile.js
            ├── Tile.css
            └── Tile.test.js
        └── ...
    ├── resources
        └── restaurants.json    // Data about 50 restaurants
    ├── App.js
    ├── App.css
    ├── App.test.js
    ├── base.css                // CSS styles set to inherit from the top
    ├── index.js
    └──setupTests.js
├── .eslintrc.js                // Javascript style checking
├── .stylelintrc.json           // CSS style checking
└── ...
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
