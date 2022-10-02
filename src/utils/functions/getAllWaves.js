import { ethers } from "ethers";
import { wavePortalConstants } from "../../constants/contractConstants";
import abi from "../WavePortal.json";

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
       * Call the getAllWaves method from your Smart Contract
       */
      const waves = await wavePortalContract.getAllWaves();
      console.log("Getting wave count");
      /*
       * We only need address, timestamp, and message in our UI so let's
       * pick those out
       */
      const wavesCleaned = waves.map((wave) => {
        return {
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message,
        };
      });
      /*
       * Store our data in React State
       */
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
