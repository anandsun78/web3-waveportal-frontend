import { ethers } from "ethers";
import { wavePortalConstants } from "../../constants/contractConstants";
import abi from "../WavePortal.json";

// function to interact with smart contract and retrieve all the current waves
const getAllWaves = async () => {
  const contractAddress = wavePortalConstants.ADDRESS;
  const contractABI = abi.abi;

  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      /*
       * Call the getAllWaves method
       */
      const waves = await wavePortalContract.getAllWaves();
      console.log("Getting wave count");
      /*
       * Only need address, timestamp, and message in the UI
       */
      const wavesCleaned = waves.map((wave) => {
        return {
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message,
        };
      });

      return wavesCleaned;
    } else {
      console.log("Ethereum object doesn't exist!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllWaves;
