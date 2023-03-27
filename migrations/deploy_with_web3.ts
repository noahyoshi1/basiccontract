// This script can be used to deploy the "Storage" contract using ethers.js library.
// Please make sure to compile "./contracts/1_Storage.sol" file before running this script.
// And use Right click -> "Run" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S
require('dotenv').config()

import { deploy } from './ethers-lib'

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = proccess.env.PROVIDER_URL;

const provider = new ethers.providers.JsonRpcProvider(providerUrl);
const signer = new Wallet(privateKey, provider);

(async () => {
    try {
        const result = await deploy('Storage', [], signer)
        console.log(`address: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
  })()