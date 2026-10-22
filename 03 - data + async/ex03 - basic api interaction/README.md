# Lesson 12: Fetching Remote Data

Today your list stops using hard-coded data and loads it from an API instead.

Everything happens in `src/app/details.js`. The finished version is in `reference-app/src/app/details.js`.

## Check your app first

Run your project from lesson 11 on your development build. Check that:

1. Home opens Details, and Go back returns to Home
2. The list shows your study steps
3. Add step and Clear list both work

If any of these fail, fix it before we start, or ask.

## Terms

| Term | Meaning |
| --- | --- |
| API | a server your app asks for data |
| endpoint | one URL on that server, for example `https://jsonplaceholder.typicode.com/todos?_limit=6` |
| JSON | the text format the data comes back in |
| `fetch` | sends the request and returns a Promise |
| `useEffect` | runs code after the screen renders. With `[]`, only after the first render |

## Step 1: Request the data and log it

Add `useEffect` to the React import:

```js
import { useEffect, useState } from 'react';
```

Below your `studySteps` state, add:

```js
const [remoteSteps, setRemoteSteps] = useState([]);

async function loadRemoteSteps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log('first item', data[0]);
  } catch (error) {
    console.error('request failed', error);
  }
}

useEffect(() => {
  loadRemoteSteps();
}, []);
```

Save and open Details. The terminal should show the first item: an object with `userId`, `id`, `title`, and `completed`. Your old list still shows on screen.

## Step 2: Store the data and show it

Below the `console.log`, add:

```js
setRemoteSteps(
  data.map((item) => ({
    id: String(item.id),
    label: item.title,
  }))
);
```

The API's items look like `{ userId, id, title, completed }`. Your list expects `{ id, label }` with `id` as a string. The `map` converts each item.

In the JSX, change `data={studySteps}` to `data={remoteSteps}`, and change `studySteps.length === 0` to `remoteSteps.length === 0`.

Save and open Details. The list shows six items from the API, starting with "delectus aut autem".

## Step 3: Remove the local list

Delete:

- the `draftStep` and `studySteps` state
- `handleAddStep` and `handleClearSteps`
- the `TextInput` and the Add step and Clear list buttons
- `TextInput` from the `react-native` import
- the `console.log` in `loadRemoteSteps`

Keep the list, the empty message, and Go back. Save and check that the list still loads.

## Test a failed request

Change `todos` to `todoz` in the URL and save. The server answers with a 404, so `response.ok` is `false`, the `throw` jumps to `catch`, and the terminal shows `request failed` with `Response status: 404`. The screen keeps showing "No study steps yet."

Change the URL back.

## Your turn: a different endpoint

Change the URL to `https://jsonplaceholder.typicode.com/users?_limit=5`.

1. Add a `console.log` of `data[0]` and find the property that holds the person's name
2. Map that property to `label`
3. Check: the list shows five names, starting with Leanne Graham

## Bug swap

You and your partner each get a bug card. Make the change on your partner's laptop while they look away, then save. Debug your own app with the lesson 11 loop: reproduce, describe, inspect, change one thing, retest. When you're both done, explain your bug to your partner.

## If you're stuck

| Problem | Try |
| --- | --- |
| No `first item` log appears | Is `loadRemoteSteps()` inside the `useEffect`? Did you open Details? |
| The terminal keeps printing, over and over | `loadRemoteSteps()` is outside the `useEffect`, or the `useEffect` is missing `[]` |
| `request failed` with `Response status: 404` | The URL is wrong. Compare it letter by letter |
| `request failed` with `Network request failed` | The device has no internet. Open a web page in the emulator's browser to check |
| The list shows rows with no text | `label` isn't set to a property that exists. Log `data[0]` and compare property names |
| The screen still shows the old local items | The `FlatList` `data` still points at `studySteps` |
| Still stuck | Compare your file with `reference-app/src/app/details.js`: imports, state, `loadRemoteSteps`, `useEffect`, then the JSX |

## Before you leave

1. Your list loads from the API, and Go back works
2. Delete any debugging logs
3. Record your status: **resolved** (your list loads from the API), **partial** (some of it works), or **blocked** (you couldn't continue)

You need this screen working for lesson 13.

## Exercise

Submit a write-up of 1 to 2 pages (Markdown or PDF) about your lesson 12 screen:

1. **The request:** which endpoint your screen requests, what data comes back, and why an app would load this from an API instead of hard-coding it
2. **Response and state:** what one API item looks like (include a log result), how you turned it into a list item, and which state value stores the list
3. **The trigger:** where the request starts, why it runs only once, and what would make it repeat
4. **Debugging:** one problem you hit or saw today, the clue that pointed to it, and the fix

Include one screenshot of your list with a caption naming the endpoint.

If you used the reference app because your own project wasn't working, say so, and say which parts are your own work.
