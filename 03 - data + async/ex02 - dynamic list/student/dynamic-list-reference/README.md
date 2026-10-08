# Dynamic List Reference App

This is the lesson-10 instructor reference project.

## Recovery use during class
- This project is primarily an instructor-run reference app.
- If a student is blocked, the fallback path is to inspect these files with the instructor:
  - `src/app/_layout.tsx`
  - `src/app/index.js`
  - `src/app/details.js`
- The preferred recovery loop is compare and repair:
  1. compare your own `src/app/details.js` to this reference
  2. repair the array state
  3. repair `renderItem`
  4. repair `FlatList`
  5. repair the empty-state condition
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
- a working lesson-09 navigation baseline
- one detail screen backed by array state
- one `FlatList` rendering repeated rows
- one visible empty-state message when the list is cleared

## What is not required for lesson success
- Students do not need remote API data in this lesson.
- Students do not need nested lists or sections.
- Students do not need advanced filtering or sorting.
- Students do not need performance tuning beyond basic stable keys.

## Suggested demo sequence
1. Show the home screen briefly to confirm the navigation flow still works.
2. Open the detail screen and point out the array state and repeated row pattern.
3. Add one item to the list.
4. Clear the list and show the empty-state message.
5. Confirm navigation still works before leaving the app in a known-good state.
