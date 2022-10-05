import { ethers } from "ethers";
import { wavePortalConstants } from "../../constants/contractConstants";
import abi from "../WavePortal.json";

// function to send waves using the wave smart contract
const wave = async (waveMessage) => {
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

      let count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());

      /*
       * Execute the wave in the wave smart contract
       */
      const waveTxn = await wavePortalContract.wave(waveMessage, {
        gasLimit: 300000,
      });
      console.log("Mining...", waveTxn.hash);

      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);

      count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default wave;
