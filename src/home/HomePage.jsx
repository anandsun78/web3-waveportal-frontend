import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Form, Button } from "react-bootstrap";
import abi from "../utils/WavePortal.json";
import { wavePortalConstants } from "../constants/contractConstants";
import wave from "../utils/functions/wave";
import connectWallet from "../utils/functions/connectWallet";
import getAllWaves from "../utils/functions/getAllWaves";
import checkIfWalletIsConnected from "../utils/functions/checkIfWalletIsConnected";

const HomePage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState([]);
  const [waveMessage, setWaveMessage] = useState("");

  const contractAddress = wavePortalConstants.ADDRESS;
  const contractABI = abi.abi;

  /**
   * Listen in for emitter events!
   */
  useEffect(() => {
    let wavePortalContract;

    const onNewWave = (from, timestamp, message) => {
      console.log("NewWave", from, timestamp, message);
      setAllWaves((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWaves();
      if (typeof data === "object" && data !== null) setAllWaves(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          Hey there!{" "}
          <span role="img" aria-label="Smile">
            👋
          </span>
        </div>

        <div className="bio">This is Anand</div>

        {!currentAccount && (
          <button
            className="waveButton"
            onClick={() => setCurrentAccount(connectWallet)}
          >
            Connect Wallet
          </button>
        )}
        <Form className="mt-5">
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(event) => setWaveMessage(event.target.value)}
          >
            <Form.Label>Wave message</Form.Label>
            <Form.Control placeholder="Set wave message" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => wave(waveMessage)}>
            Wave at Me
          </Button>
        </Form>
        {/*
         * If there is no currentAccount render this button
         */}

        {allWaves.map((wave, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "OldLace",
                marginTop: "16px",
                padding: "8px",
              }}
            >
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
