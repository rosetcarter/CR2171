# Input Handling Reference App

This is the lesson-07 instructor reference project.

## Recovery use during class
- This project is primarily an instructor-run reference app.
- If a student is blocked, the fallback path is to inspect these files with the instructor:
  - `src/app/_layout.tsx`
  - `src/app/index.js`
  - `src/app/details.js`
- The preferred recovery loop is compare and repair:
  1. compare your own `src/app/details.js` to this reference
  2. repair the `useState` import and temporary values
  3. repair the `TextInput`
  4. repair the `Pressable`
  5. repair the visible response area
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
- a working lesson-06 navigation flow
- one `TextInput` on the detail screen
- one `Pressable` action on the detail screen
- one visible response area after the interaction

## What is not required for lesson success
- Students do not need advanced validation rules in this lesson.
- Students do not need multiple inputs or complex forms.
- Students do not need formal state theory explanations yet.

## Suggested demo sequence
1. Show the lesson-06 detail screen briefly if needed.
2. Add or review the `TextInput`.
3. Review the `Pressable` action.
4. Type a short input and trigger the visible response.
5. Confirm navigation still works before leaving the app in a known-good state.
