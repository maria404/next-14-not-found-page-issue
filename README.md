## Issue

During SSG, Next 14 builds the 404 page once for every other page generated, thus doubling the build time of the project.

The not-found page and other pages work correctly otherwise.

Next version: 14.2.3
Routing: App router

## Steps to reproduce

Set up the project locally with

```
npm install
```

### Case 1: not-found.tsx is in the catch-all route

This is the default case setup here. Just run the build with

```
npm run build
```

Observe the logs that the not-found page is being built once for every other page page.

### Case 2: not-found.tsx is in the root app folder

Move the not-found file into the root of the app folder, Again run the build with:

```
npm run build
```

Observe the logs that the not-found page is being built once for every other page page.
