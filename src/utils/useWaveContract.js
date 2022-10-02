import { useEffect, useState } from "react";
import connectWallet from "./functions/connectWallet";
import getAllWaves from "./functions/getAllWaves";

export default function useWaveContract() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState([]);
  const [waveMessage, setWaveMessage] = useState("");

  useEffect(() => {
    setCurrentAccount(connectWallet());
    setAllWaves(getAllWaves());
    setWaveMessage("HHi");
  }, []);

  return {
    currentAccount,
    allWaves,
    waveMessage,
  };
}
