# API Design

Seperate Layout css and style css. Want to be able to get a full picture of layout by only looking at the JSX.

1. Layouts should be fully defined via jsx and disallowed via styled components
2. use styled components api with the exception that all layout css properties are ignored.

## Components

- [None](#None)
- [Text](#Text)
- [El](#El)
- [Row](#Row)
- [WrappedRow](#WrappedRow)
- [Column](#Column)
- [Paragraph](#Paragraph)
- [TextColumn](#TextColumn)

## Utility Functions

### fill

fill(opts?: Options): number;

- calculates width for element based on available space in parent in px.
- width is determined by assigning all elements with fill 1 portion of the parents width and returning 1/n portions.

### fillPortions

fillPortion(portions: number, opts?: Options): number;

- calculates width for element based on available space in parent in px.
- width is determined using the calculation portions/total parent portions.
- So, two elements, one with `width={fillPortion(2)}` and one with `width={fillPortion(3)}`. The first would get 2 portions of the available space, while the second would get 3.

### shrink

shrink(opts?: Options): number;

- returns size of child nodes content in pixels

## None

### Behavior

- render exactly nothing

## Text

### Behavior

- Renders text.
- Will only render a string anything else will log a warning and render nothing.
- text doesn't wrap. Must use `<Paragraph />` for text wrapping.

## El

### Behavior

- should only accept 1 child element
- renders any child it is given

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## Row

### Behavior

- container for multiple child elements
- renders child elements in a row
- items dont wrap

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply to container
- spacing: 'even' | number | number[] -> amount of space to apply between items
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## WrappedRow

### Behavior

- container for multiple child elements
- renders child elements horizontally
- items wrap to next line if necessary

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply to container
- spacing: 'even' | number | number[] -> amount of space to apply between items
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## Column

### Behavior

- container for multiple child elements
- renders child elements vertically
- items wrap to next line if necessary

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply to container
- spacing: 'even' | number | number[] -> amount of space to apply between items
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## Paragraph

### Behavior

- layout all children as wrapped inline elements
- intended for use with text
- children with `horizontalAlignment="left"` or `horizontalAlignment="right"` will be moved to that side and have text float around it.

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply to container
- spacing: 'even' | number | number[] -> number of pixels to apply between lines of text
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## TextColumn

### Behavior

- controls how a group of paragraphs are laid out
- child `Paragraph`'s will flow around child `El`'s the same way paragraphs do

### Props

- width: number -> amount of horizontal space to consume in px
- height: number -> amount of vertical space to consume in px
- padding: number | number[] -> amount of padding to apply to container
- spacing: 'even' | number | number[] -> number of pixels to apply between `Paragraph`'s
- horizontalAlignment: HorizontalAlignment -> horizontal positioning of child
- verticalAlignment: VerticalAlignment -> vertical poitioning of child
- renderBelow: React.ChildNode -> renders below children
- renderAbove: React.ChildNode -> renders above children
- renderOnRight: React.ChildNode -> renders to right of children
- renderOnLeft: React.ChildNode -> renders to left of children
- renderInFront: React.ChildNode -> renders in front of children
- renderBehindContent: React.ChildNode -> renders between the background and content of an element

## Types

```TypeScript
interface Options {
  maximum: number;
  minimum: number;
}

type HorizontalAlignment = 'center' | 'left' | 'right'

type VerticalAlignment = 'center' | 'top' | 'bottom'
```
