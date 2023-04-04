#### Code review

1. Added Type Notation to make use TypeScript Advantage, to make "item" being of Type : <any> to "ReadingListItem". [FIXED][file: reading-list.component.ts, line:16]
2. Need to make the book search of async pipe to avoid memory leak because it didn't unsubscribe after subscribing. [FIXED][file: book-search.component.ts, lines: 19,35-37, 20; book-search.component.html lines: 18]
3. reducer were not available for failedAddToReadingList and failedRemoveFromReadingList actions, Need to be added.

#### Accessibility issues

## Issues from automated scan

1. Background and foreground colors do not have a sufficient contrast ratio.[FIXED]

## Manually found issues

1. Buttons should have aria-label where ever required.[FIXED]
2. Added alt tag for the all the images which is good practise incase images are links and browser understand them better and also helps the accessibility. [FIXED]

Test Cases Issue:
Fixed testcases as its missing few scenarios on reading-list.reducer file. [FIXED]
