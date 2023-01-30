// Controlled Component

// input type="text"

// textarea

// select
// *Note*
// You can pass an array into the value attribute
// allowing you to select multiple options in a select tag
<select multiple={true} value={['B', 'C']}></select>

// input type="file"
// It is an uncontrolled component in React

// Controlled Input Null Value
// <input value="hello"/> (This is not editable)
// <input value={null}/> (This is editable in case of undefined or null)