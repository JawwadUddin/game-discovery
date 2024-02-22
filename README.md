# Game Discovery 

This project was built using React + Typescript + Third party APIs

## Description

Game Discovery allows users to search for games of different types of genres. It has features including the ability to search by genres, platforms as well as sorting functionality. It taps into the rawg.io API and utilises React + Typescript as technologies. It also utilises the react query library for powerful asynchronous state management.

## What Went Well
* Implemented caching, auto refetching, api calls on infinte scroll for optimisation, and more.
* Created a custom useData hook to handle fetching data, loading and error states, with typescript type assertions to enable the hook to be reusable.
* Created other hooks based on the useData hook.
* Utilised Chakra-UI for styling.
* Created services folder to abstract calls to the api client as well as a function to optimise image sizes.
* Utilised skeleton components improving UX when data is being fetched from the API.
* Added toggle for light/dark mode.

## Future Tasks
* Extend functionality to allow clickable game cards to redirect to another page.
* Utilise state management tools.
* Allow sign in for a tailored experience e.g. ability to save games to list of favourites.
