# Utility Functions

## fill

fill(): number;

- calculates width for element based on available space in parent in px.
- width is determined by assigning all elements with fill 1 portion of the parents width and returning 1/n portions.

## fillPortions

fillPortion(portions: number): number;

- calculates width for element based on available space in parent in px.
- width is determined using the calculation portions/total parent portions.
- So, two elements, one with `width={fillPortion(2)}` and one with `width={fillPortion(3)}`. The first would get 2 portions of the available space, while the second would get 3.

## shrink

shrink(): number;

- returns size of child nodes content in pixels
