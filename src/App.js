import './App.css';
import ItemCell from './itemCell';

const productsList = [{nr: 1, name: "Słuchawki douszne XOMD 341", ratings: 4.5, desc: "Najwyższej jakości słuchawki douszne XOMD 341 gwarantują najlepszą jakość słuchania.", price: 90},
                      {nr: 2, name: "Słuchawki douszne ZIMBO 1000", ratings: 1.0, desc: "Najwyższej jakości słuchawki douszne ZIMBO 1000 gwarantują najlepszą jakość słuchania.", price: 50},
                      {nr: 3, name: "Słuchawki nauszne CRUMBS 310", ratings: 3.0, desc: "Najwyższej jakości słuchawki nauszne CRUMBS 310 gwarantują najlepszą jakość słuchania.", price: 150},
                      {nr: 4, name: "Słuchawki nauszne Sumgo v1.2", ratings: 5.0, desc: "Najwyższej jakości słuchawki nauszne Sumgo v1.2 gwarantują najlepszą jakość słuchania.", price: 250},
                      {nr: 5, name: "Słuchawki nauszne Plurgmurg Neo", ratings: 2.3, desc: "Najwyższej jakości słuchawki nauszne Plurgmurg Neo gwarantują najlepszą jakość słuchania.", price: 500},
                      {nr: 6, name: "Słuchawki douszne honkShoo o5", ratings: 3.5, desc: "Najwyższej jakości słuchawki douszne honkShoo o5 gwarantują najlepszą jakość słuchania.", price: 125},
                      {nr: 7, name: "Słuchawki nauszne xtango X1", ratings: 4.2, desc: "Najwyższej jakości słuchawki nauszne xtango X1 gwarantują najlepszą jakość słuchania.", price: 200},
                      {nr: 8, name: "Słuchawki douszne ZIMBO 1010", ratings: 4.8, desc: "Najwyższej jakości słuchawki douszne ZIMBO 1010 gwarantują najlepszą jakość słuchania.", price: 200},
                      {nr: 9, name: "Słuchawki douszne ZIMBO 1010S", ratings: 3.9, desc: "Najwyższej jakości słuchawki douszne ZIMBO 1010S gwarantują najlepszą jakość słuchania.", price: 1000},
];

function App() {
  return (
    <div className="App">
    <table>
      <td>
        <tr> <ItemCell product={productsList[0]}/> </tr>
        <tr> <ItemCell product={productsList[1]}/> </tr>
        <tr> <ItemCell product={productsList[2]}/> </tr>
      </td>
      <td>
        <tr> <ItemCell product={productsList[3]}/> </tr>
        <tr> <ItemCell product={productsList[4]}/> </tr>
        <tr> <ItemCell product={productsList[5]}/> </tr>
      </td>
      <td>
        <tr> <ItemCell product={productsList[6]}/> </tr>
        <tr> <ItemCell product={productsList[7]}/> </tr>
        <tr> <ItemCell product={productsList[8]}/> </tr>
      </td>
      </table>
    </div>
  );
}

export default App;
