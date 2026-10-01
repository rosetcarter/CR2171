# State And Props Reference App

This is the lesson-09 instructor reference project.

## Recovery use during class
- This project is primarily an instructor-run reference app.
- If a student is blocked, the fallback path is to inspect these files with the instructor:
  - `src/app/_layout.tsx`
  - `src/app/index.js`
  - `src/app/details.js`
  - `src/components/StatePreviewCard.js`
- The preferred recovery loop is compare and repair:
  1. compare your own `src/app/details.js` to this reference
  2. repair the `useState` import and state values
  3. repair the handler that updates the parent state
  4. repair the props passed into the child component
  5. repair the child component rendering
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

## What this app demonstrates
- a working lesson-07 and lesson-08 navigation baseline
- one detail screen that owns local state
- one child component that receives props from the detail screen
- one visible UI update after the parent state changes

## What is not required for lesson success
- Students do not need global state in this lesson.
- Students do not need Context in this lesson.
- Students do not need nested state objects or reducers.
- Students do not need multiple child components for the core lesson target.

## Suggested demo sequence
1. Show the home screen briefly to confirm the previous navigation flow still works.
2. Open the detail screen and point out the parent-owned state values.
3. Review `src/components/StatePreviewCard.js` as the child component.
4. Type a short name and trigger the update action.
5. Confirm the child card re-renders with the latest props before leaving the app in a known-good state.
