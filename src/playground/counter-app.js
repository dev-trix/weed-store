// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }
// const user = {
//   name: "Dev-Trix",
//   age: 26,
//   location: "AFRIICAAA"
// };

// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const resetBut = () => {
//   count = 0;
//   renderCounterApp();
// };

// // Create a template two var JSX expression
// //div
// //  h1 -> Ovie Trix
// //  p-> Age:29
// //  P -> location: non you business
// // Render Template Two instead of template

// //Get the Id of the ELEMENT you want to render to.
// const appRoot = document.getElementById("app");
// const appRoot2 = document.getElementById("app2");

// //Renders template variable to the appRoot variable ID and then renders to webpage.
// ReactDOM.render(template, appRoot);

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="Button">
//         +1
//       </button>
//       <button onClick={minusOne} className="addButton">
//         -1
//       </button>
//       <button onClick={resetBut} className="resetButton">
//         reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(template2, appRoot2);
// };

// renderCounterApp();
