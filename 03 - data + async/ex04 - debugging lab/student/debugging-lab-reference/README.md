# Debugging Lab Reference App

This is the lesson-11 instructor reference project.

## Recovery use during class
- This project is a known-good comparison app for the debugging lab.
- If a student is blocked, the fallback path is to inspect these files with the instructor:
  - `src/app/_layout.tsx`
  - `src/app/index.js`
  - `src/app/details.js`
- The preferred recovery loop is compare and repair:
  1. compare your own `src/app/details.js` to this reference
  2. compare imports
  3. compare state values and handlers
  4. compare render output
- Blocked students do not need to install and run this app themselves during class unless the instructor explicitly chooses that path.

## Run
From this folder:

1. Install dependencies:
   - `npm install`
2. Add dev-client support:
   - `npx expo install expo-dev-client`
3. Create and install a development build:
   - `npm run android:dev`
   - or `npm run ios:dev`
4. Start Expo:
   - `npm run start`
5. Open the app on one working path:
   - Android emulator with the installed development build
   - iOS simulator on macOS with the installed development build
   - a prepared device path with the installed development build if already available

## Tooling note
- Use the course development-build path for this lesson if DevTools is part of the debugging workflow.
- Expo Go can be shown as a comparison runtime, but it should not be the primary path for the lesson-11 debugging lab.

## What this app demonstrates
- a working lesson-10 dynamic-list baseline
- one add-item path
- one clear-list path
- one empty-state branch
- one stable comparison path during debugging

## What is not required for lesson success
- Students do not need advanced native debugging in this lesson.
- Students do not need performance profiling in this lesson.
- Students do not need API debugging yet.

## Suggested demo sequence
1. Show the working lesson-10 baseline.
2. Introduce one small bug from `debug-scenarios.md`.
3. Reproduce the symptom.
4. Inspect evidence with logs or tools.
5. Fix and retest.
