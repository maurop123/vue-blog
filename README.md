So far this is just one of my favorite setups, now with vue 2.0

Some of the features are:

### crazy simple wiring
index is what gets bundled. it imports components.js which registers all components. components are just objects that follow vue convention and import html templates as string. that's it.

### super flat source tree. i.e. no folders inside of source. that means...

 - everything has equal access to everything else. i.e. no require('../../../../file.js')
 - no refactor impact from moving files cause files have nowhere to move
 - it's not pretty to scroll through files in source (machines don't care about pretty) so use Ctrl-P to fuzzy find files

### really explicit filenames
e.g. super.cool.radio.button.html; you know it's a radio button and that it's the super cool one. this makes the super flat source tree work

### really easy to onboard new devs
since the wiring is simple, and there is no confusing file structure, it doesn't take more than a couple hours to onboard new devs.

### super unopinionated and flexible
used in this way, the vue framework has minimal convention imposed in the component and template files, and any actual vue api calls are limited to index.js and components.js. filters.js, too (not currently seen).

### can add routing and statemanagement without increasing complexity
i've added vue-router to another version of this same structure without any additional impact. few extra lines in index.js, that's all.

i'm guessing the same can be done with vuex. if not state management can be done with others like redux, mobx, or rxjs.

### watchify and browserify hot module reload in npm scripts
name of the game is "Keep It Simple"

## install

- npm i
- npm run watch

#### todo

- security
- tests!
- dockerize. keep this simple too
