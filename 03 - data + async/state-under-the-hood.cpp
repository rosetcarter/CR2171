// pseudocode tutorial on how state works under the hood in responsive UI frameworks

// my top-level goal: responsive UI; changes with user input / data, without reloading page
// let's say my initial ingredients (I can make / rewire more) are: input elements, data sources


/* In order to achieve that top-level goal, I need to be able to:
    - re-render pieces of the UI (or the whole UI)
    - store data / input component changes persistently, somewhere, across re-renders
    - bind/automate the relationship between 1) data/input changing <--> 2) re-rendering UI
*/

// Let's say my component just renders text based on how many times some button (not present) was clicked.
class myComponent() {

    count = 0;

    render() {
        return `<p>You have pressed the button ${this.count} times.</p>`
    }  

}


// Let's say that every time some imaginary button is clicked, I want this component to update that.
c = myComponent();

c.count++;   // change the data,
c.render();  // then re-render (so the new data is also being displayed).
/*
    This is not enough — 
    it requires me to remember to manually fire the render() method every time data changes.
    
    If I had a more complex component with e.g. 10 stateful variables, any time *any* of them changes,
    I have to remember to *manually* fire the render() method as well. Not reasonable or good design —
    it will be forgotten, meaning data <--> display will get decoupled.
    
    Moreover, stuff *outside* this component, potentially many layers of logic/importing apart from the component,
    might change its values. Am I going to remember to fire a render() method in some completely different submodule
    on some scheduled automated task  blah blah? No.
*/

// So, I need some sort of way of *automatically* re-rendering the component every time data changes.
// (This is what React state does!)

// The trick is abusing privately scoped fields; we'll just set up that field first, without the trick.

class myComponent() {

    #count = 0;

    set count(n) {
        this.#count = n;
    }

}

// So far, I'm not using any cool tricks; this is exactly the same as what I had before
// with extra steps. TLDR, if I have a private field, I need at least a setter (I don't care about a getter,
// because I don't need anything else to happen when I read the variable.)

// Recall React state:
//   const [someValue, setSomeValue] = useState('initial value');
// That's exactly the same as what we have here (a restricted field/var, an exclusive setter for it)

class myComponent() {

    #count = 0;   // this becomes a private field so I can force updating it through a setter

    set count(n) {
        // I only care about this being a setter so that I can force updating to go through a function.
        this.#count = n;
        // Once I'm in a function, I can fire any *other* behaviour when updating the value,
        this.render();  // such as re-rendering the component.

        // Voila, that's the trick: I just need a sneaky/elegant way to update stateful data from inside some function,
        // so I can automatically call re-rendering when that happens. Private fields + setters just happen to be a
        // perfect tool for that.
    }

    render() {
        return `<p>You have pressed the button ${this.count} times.</p>`
    } 

}


// Summary: we *co-opt* private/public scope in order to engineer a situation where we always end up in a function
//          when we try to change data. If we can always end up in a function, we can fire any other behaviour while
//          changing that data. In front-end, that behaviour we want to automatically fire is: re-rendering.
//          -> now we have an automated relationship between data changing + UI responding.