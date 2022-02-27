# Bingo

"We know the game and we're gonna play it" - Rick Astley

### How to play

Visit `https://bingo-red.vercel.app/`

Or

Run `npm start`


### How to test

Run `npm test` to start the tests in you command line.


## Decisions Made

- `styled-components` was added as a dependency to enable style changes based on component props
- `lodash` was used for its `_shuffle` method to randomise the bingo boxes.
- `@testing-library/react` was used for testing

## Next steps
- Add visual end-to-end tests with `Cypress`
- improve the integration tests with`@testing-library/react`
- Add unit tests for the functions
- fix bingo box dimensions
- improve responsiveness for phone
- improve cross browser compatibility
- fix animations
- lock "Never gonna" to consistently be the center square and make it not clickable
