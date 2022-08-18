import { Fluence, KeyPair  } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import {
  registerImageGenerator,
//   getMetadata,
//   getTokenURI
testingNft
} from "./_aqua/image-generator"; // (2)
import erc721ABI from "../src/data/erc721.json"
import Web3 from 'web3'
import {ImageService} from "./image-service"

async function main() {
    const skBytes = "vjUi0PXOkuPfxp13c/eqr5cXAP502l9fkX1r93ezB1I=";

    const relay = krasnodar[5]

    await Fluence.start({ 
        connectTo: relay, 
        KeyPair: await KeyPair.fromEd25519SK(Buffer.from(skBytes, 'base64')),
    }); // (3)

    // (4)
    registerImageGenerator(new ImageService());

    console.log('application started');
    console.log('peer id is: ', Fluence.getStatus().peerId);
    console.log('relay address: ', relay.multiaddr);
    console.log('relay is: ', Fluence.getStatus().relayPeerId);
    // //ATTRIBUTED NFT TESTNET
    // let nftAddress = "0x42f82A40908755d192615DCd02E6718348B50b09";

    // try{
    //     let tokenURI = await getTokenURI(nftAddress, 1162); // (4)

    //     let metadata = await getMetadata(tokenURI);

    //     console.log(metadata)

    // }catch(e){
    //     return e

    // }

    // try{
    //   let result =  await testingNft("0x42f82A40908755d192615DCd02E6718348B50b09", 1126);
    //   console.log(result)
    //   console.log(await testingNft("0x42f82A40908755d192615DCd02E6718348B50b09", 1126));
    // }catch(e){
    //   return e
    // }

    // await Fluence.stop(); // (7)
}

main();