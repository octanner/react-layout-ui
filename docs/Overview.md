# Overview

## API Design

1. Element is like a div but can only accept 1 child element. In order to render more than one element must use either row or Column components (this keeps layouts explicit).

2. Layouts should be fully defined via jsx and disallowed via styled components
3. use styled components api with the exception that all layout css properties are ignored.

## Example usage

```javascript
<Column>
  <Row>
    <El>Text content</El>
  </Row>
  <Row>
    <El>More content</El>
  </Row>
</Column>
```
