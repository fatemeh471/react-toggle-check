React Toggle Checked
react-toggle-checked is a customizable React component that provides an elegant toggle switch. It allows you to create switches with flexible styles and sizes, making it easy to integrate into your React applications.

#Installation
```
npm install react-toggle-checked
import './style.css

```

#Usage
```
<ToggleSwitch
size="medium"
onBackgroundColor="#40679E"
offBackgroundColor="#ccc"
onColor="#1B3C73"
offColor="#F6F5F2"
checked={true}
onChange={(e) => console.log(e.target.checked)}
/>
```

| Prop                 | Type          |  Default      |  Description
| -------------        | ------------- |  ------       |  ------------
| size                 |  "small"      |  "medium"     | Sets the size of the toggle switch.
|                      |  "medium"     |               |
|                      |  "large"      |               |
|                      |               |               |
| onBackgroundColor    | string        |  "#40679E"    | Background color when the switch is in the "on" state.
|                      |               |               |
| offBackgroundColor   | string        |  "#ccc"       | Background color when the switch is in the "off" state.
|                      |               |               |
| onColor              | string        | "#1B3C73"     | Color of the toggle handle in the "on" state.
|                      |               |               |
| offColor             | string        | "#F6F5F2"     | Color of the toggle handle in the "off" state.
|                      |               |               |
| checked              | boolean       |   false       | If true, the toggle is checked (controlled component).
|                      |               |               |  
| onChange             | function(e)   |               |  Callback function that triggers when the switch is toggled
|                      |               |               | 
| disabled             |  boolean      |               | If true, disables the toggle.
|                      |               |               |
| ...props             |  any          |               | Any additional props are passed to the underlying <input> element.
