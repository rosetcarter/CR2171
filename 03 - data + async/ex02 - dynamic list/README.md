# Lesson 10: Lists and Dynamic Data

In lesson 09 the details screen showed **one** value from state. Today it shows **many**: an array in state, rendered as a list, with a message when the list is empty.

Everything happens in **`src/app/details.js`**.

The finished version is [`example/dynamic-list-reference/src/app/details.js`](example/dynamic-list-reference/src/app/details.js). Look at it when you get stuck.

---

## Before you start

Run your lesson-09 project and check:

- home screen → details screen → back works
- typing and pressing the button updates the preview card

If that doesn't work, fix it first (or ask me).

---

## The idea

```
array in state  →  FlatList renders one row per item  →  change the array  →  list re-renders
                                                         array is empty?  →  show a message instead
```

| Piece | Job |
| --- | --- |
| array in state | holds all the items, e.g. `[{ id: '1', label: 'Charge laptop' }, ...]` |
| `.map()` | turns each item into JSX. Good for seeing how repetition works |
| `FlatList` | React Native's list component. This is what we'll actually use |
| `renderItem` | describes what **one** row looks like |
| `keyExtractor` | gives each row a unique id so React can track it |
| empty state | what the screen shows when the array has no items |

---

## Build it (test after every step)

### Step 1: Clear out the lesson-09 preview

In `src/app/details.js`, remove:

- the `<StatePreviewCard ... />` line and its `import`
- `profileName`, `statusText` and `handleUpdateCard`

**Keep** your `TextInput`, but rename its state from `draftName` to `draftStep`:

```js
const [draftStep, setDraftStep] = useState('');
```

```jsx
<TextInput
  value={draftStep}
  onChangeText={setDraftStep}
  placeholder="Type one study step"
/>
```

✅ **Test:** the app runs, you can type, and the back button still works.

### Step 2: Add an array and render it with `map`

```js
const [studySteps, setStudySteps] = useState([
  { id: '1', label: 'Charge laptop' },
  { id: '2', label: 'Pack notebook' },
  { id: '3', label: 'Review key terms' },
]);
```

In the JSX, under the input:

```jsx
{studySteps.map((step) => (
  <Text key={step.id}>{step.label}</Text>
))}
```

✅ **Test:** three rows appear. Add a fourth object to the array and a fourth row appears. That's the whole idea: **one item → one row**.

### Step 3: Switch to `FlatList`

Add `FlatList` to your `react-native` import, then replace the `map` with:

```jsx
<FlatList
  data={studySteps}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.label}</Text>}
/>
```

✅ **Test:** it looks the same as before. That's expected. `FlatList` does the same job, but scales to long lists.

### Step 4: Add and Clear buttons

Above the `return`:

```js
function handleAddStep() {
  const trimmedStep = draftStep.trim();

  if (trimmedStep.length === 0) {
    return;
  }

  setStudySteps((currentSteps) => [
    ...currentSteps,
    { id: String(Date.now()), label: trimmedStep },
  ]);
  setDraftStep('');
}

function handleClearSteps() {
  setStudySteps([]);
}
```

In the JSX, under the input:

```jsx
<Pressable onPress={handleAddStep}>
  <Text>Add step</Text>
</Pressable>
<Pressable onPress={handleClearSteps}>
  <Text>Clear list</Text>
</Pressable>
```

`[...currentSteps, newItem]` makes a **new** array: everything already there, plus one more item. You have to give React a new array. Pushing onto the old one won't update the screen.

✅ **Test:** type a step and press **Add**, and it appears at the bottom and the box clears. Press **Clear** and everything disappears (and the screen just goes blank, which is the problem Step 5 fixes).

### Step 5: Add an empty state

Wrap your `FlatList` in a condition:

```jsx
{studySteps.length === 0 ? (
  <Text>No study steps yet. Add one to build the list.</Text>
) : (
  <FlatList
    data={studySteps}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.label}</Text>}
  />
)}
```

Read it as: *if the array is empty, show the message, otherwise show the list.*

✅ **Test:** press **Clear** and the message shows. Add a step and the list comes back. Then check that **Go back** still works.

### Try this if you finish early

- Number the rows: `renderItem` also gets `index`, so try `({ item, index }) => <Text>{index + 1}. {item.label}</Text>`.
- Show a count above the list: `<Text>{studySteps.length} steps</Text>`.
- Style the rows (padding, a border between them).
- Harder: delete a single item when you tap its row. Hint: `setStudySteps((current) => current.filter((step) => step.id !== item.id))`.

---

## If it's not working

Check in this order: **array state → `FlatList` data → `renderItem` → empty-state condition.**

| What you see | Most likely cause |
| --- | --- |
| Red screen: `FlatList` doesn't exist | Missing from the `react-native` import |
| Red screen mentioning `StatePreviewCard`, `profileName` or `statusText` | You left a piece of lesson 09 behind. Search the file for it and remove it |
| Nothing shows at all | `data=` points at the wrong variable, or `renderItem` is missing |
| Rows are blank | `renderItem` reads the wrong field (e.g. `item.name` instead of `item.label`), or you forgot `({ item })` and wrote `(item)` |
| Warning about unique "key" | `keyExtractor` is missing, or two items share an `id` |
| Pressing **Add** does nothing | You pushed onto the old array (`studySteps.push(...)`) instead of making a new one with `[...currentSteps, newItem]` |
| **Clear** leaves a blank screen | The empty-state condition from Step 5 is missing or checks the wrong thing |
| Can't get back to home | You deleted the back button while removing the lesson-09 code. Put it back |

Still stuck? Compare your file to `example/dynamic-list-reference/src/app/details.js` one piece at a time, in the order above.

---

## Before you leave

You should be able to demo: **list shows → add an item → clear → message shows → add again → go back.**

And answer:

1. Which state value stores the items?
2. What does `renderItem` do?
3. What condition switches between the list and the empty message?

Record your status: **configured** (all working), **partial** (something's still broken, so note what), or **blocked** (couldn't get going, so note your next step). You need to be *configured* before lesson 11, where we'll debug this same screen.

---

## After class: exercise

Submit a short write-up (1–2 pages, Markdown or PDF) with **one screenshot** of your list (or empty state). Label the list or empty-state area and one row (or the message), either on the image or in captions underneath.

1. **Array:** Which state value stores the items? What does one item object look like? Why is an array better than a single value here? (4–6 sentences)
2. **Rendering:** Walk through how one row gets on screen: what's in the array, what `renderItem` displays, and what makes the whole list appear.
3. **Empty state:** When does your screen show the message instead of the list? What condition does it check, and why is a message better than a blank area?
4. **Debugging:** Pick one row from the "If it's not working" table. Explain the cause, the first fix you'd try, and how you'd know it worked.

If your own project wasn't working and you used the example app, say so, say which parts are your own work, and write one sentence on your next step to get your own project working.
