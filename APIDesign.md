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
- [Table](#Table)
- [Link](#Link)
- [Image](#Image)
- [Above](#Above)
- [Below](#Below)
- [OnRight](#OnRight)
- [OnLeft](#OnLeft)
- [InFront](#InFront)
- [BehindContent](#BehindContent)

## Utility Functions

```TypeScript
interface Options {
  maximum: number;
  minimum: number;
}
```

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

## Row

## WrappedRow

## Column

## Paragraph

## TextColumn

## Table

## Link

## Image

## Above

## Below

## OnRight

## OnLeft

## InFront

## BehindContent
