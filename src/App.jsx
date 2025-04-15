//Example of Material UI
// //  import './App.css'

// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

// function App() {
//     let handleClick = () => {
//       console.log("Button Was Clicked");
//     }
//   return (
//     <>
//       <h1>Material UI Demo</h1>
//       <Button variant="contained" onClick = {handleClick}>
//         Click me !
//         </Button>
//         <Button variant="contained" onClick = {handleClick} disabled>
//         Click me 2 !
//         </Button>
//         <Button variant="contained" onClick = {handleClick} color="error" size="large">
//         Click me 2 !
//         </Button>
//         <Button variant="contained" onClick = {handleClick} color="success" size="small">
//         Click me 2 !
//         </Button>
           
//         <Button variant="outlined"  onClick = {handleClick} startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       {/* Alert is remaining */}
//     </>
//   );
// }

// export default App




//App.jsx File 

import WeatherApp from "./WeatherApp";
function App() {
  return(
    <div>
       <WeatherApp />
    </div>
  );
}

export default App;