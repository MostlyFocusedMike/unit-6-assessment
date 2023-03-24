# My Take on Unit 6 Assessment

I originally started doing it straight through, but wound up making some edits. I've included a few notes below on what I think the new version should look like.

## Proper HTML
We're real close with the HTML, and it may seem silly to be this picky, but I think we should reformat. Students should only see as close to best HTML practices as possible, we want them to internalize that.  Here are some ideas I had after doing this assessment, both what I changed and what we could change in the future.

- Let's avoid putting text in a div
- If something is expected to be clickable, it should be a button
  - We should isolate/label toggle button from temperature display
  - Maybe we can add some functionality to use a form too?
- I tried to add styles that looked nice and fit the theme
- Let's just move the two weather condition elements next to each other and add more descriptive text and a dynamic span.
- Let's move the script into the head and use the defer attribute in the future
- In bespoke HTML/CSS like ours, if there's only one item, let's use ids instead of classes
  - If we want to make a mini-css library we can use the "class for styles" conventions
- Somehow convey that decorative elements *don't* need an alt tag

## Code
- Let's *really* try to avoid ever letting students just pasting keys into their repos.
  - A quick solution is to throw them as a query param. I'm honestly not sure if we've told them how to do this though
- I also don't know if we told them how to convert a callback into a promise. But as you can see, it really makes the code easier
- Given how isolated each element is, the assignment doesn't super lend itself to the main elements pattern
  - we should steer the students into a runner/helper pattern
- I used closures to make the temp toggle isolated, but they don't have to. I just think it's a good pattern to show them
- Honestly not *sure* about the level of errors we want to catch.
  - I'm using a simplified ditch pattern, again, I'm not sure how in-depth we've currently gone so I don't know what's fair to judge.
  - The only thing I *know* I want to catch is mixing async with .catch properly
- Maybe we could ask them to make 1 additional fetch, which would more easily push them to a fetch helper
  - Though I like making one because even if functions are called once, they still help readability

## Short answers
Honestly these seem fine, I'd maybe lost the POST/GET one, because we explicitly focused on GETs in this unit.