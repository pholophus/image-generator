import {
    ImageGeneratorDef
} from './_aqua/image-generator'
import Web3 from 'web3'
import erc721ABI from "../src/data/erc721.json"

export class ImageService implements ImageGeneratorDef {
    
    async readTokenURI(tokenAddress: string, tokenId: number) : Promise<string> {

        const web3 = new Web3(Web3.givenProvider)
        let contract721 = await new web3.eth.Contract(erc721ABI as any, tokenAddress);

        let tokenURI: string = await contract721.methods.tokenURI(tokenId).call()

        // let tokenURI = "https://attributednft.projectoasis.io/1162.json"
        console.log(tokenURI)
        return tokenURI
    }

    async readMetadata (tokenURI: string) : Promise<string> {
        let respond = await fetch(tokenURI)
        return JSON.stringify(respond)
    }

    async mergedSpriteImages(json: string) : Promise<string> {
        return ''
    }
  
}