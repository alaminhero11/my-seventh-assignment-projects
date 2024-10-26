import { useState } from "react";
import CartContainer from "./assets/Components/CartContainer/CartContainer";
import Header from "./assets/Components/Header/Header";
import Banner from "./assets/Components/Banner/Banner";
import Footer from "./assets/Components/Footer/Footer";
import Newsletter from "./assets/Components/Newsletter/Newsletter";


const App = () => {
  // -----useState-1-----
  const [isActive, setIsActive] = useState({
    AllPlayers: true,
    status: "AllPlayers"
  })
  // -----useState-2-----
  const [selectPlayers, setSelectPlayers] = useState([])

  // -----useState-2-----
  const [price, setPrice] = useState(0);

  //----------Handle Claim Price----------
  const handleClaimPrice = (pr) => {
    setPrice(price + 50000)
  }

  //----------Handle Price----------
  const handleIncreasePrice = (pr) => {
    if (price > 0) {
      setPrice(price - pr)
    }
    else {
      alert("Influence Balance !")
    }
  }
  const handleDeletePrice = (id) => {
    const player = setSelectPlayers.find((p) => p.id == id);
    setPrice(price + player.price)
  }


  //----------Handle Delete----------
  const handleDelete = (id) => {

    const newDeletePlayer = selectPlayers.filter((p) => p.id != id);
    setSelectPlayers(newDeletePlayer);
  }

  //----------handleSelectPlayer----------
  const handleSelectPlayer = (player) => {
    const isExist = selectPlayers.find((p) => p.id == player.id);

    if (isExist) {
      alert("already isExist");
    }
    else {
      handleIncreasePrice(player.price);
      const newSelectPlayer = [...selectPlayers, player]
      setSelectPlayers(newSelectPlayer);
    }
  }


  // --------------handleActiveStatus----------------
  const handleActiveStatus = (status) => {
    if (status == "AllPlayers") {
      setIsActive({
        AllPlayers: true,
        status: "AllPlayers"
      })
    }
    else {
      setIsActive({
        AllPlayers: false,
        status: "SelectPlayers"
      })
    }
  }

  // ---------------Return()-------------------//
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Header price={price}></Header>
        <Banner handleClaimPrice={handleClaimPrice}></Banner>
        <div className="">
          <CartContainer handleDelete={handleDelete} isActive={isActive} handleActiveStatus={handleActiveStatus} handleSelectPlayer={handleSelectPlayer} selectPlayers={selectPlayers}></CartContainer>
        </div>
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
