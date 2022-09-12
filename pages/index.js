import Head from "next/head"
import { useMoralisQuery } from "react-moralis"
export default function Home() {
    const {data: listedNfts, isFetching: fetchingListedNfs} = useMoralisQuery(
        'ActiveItem',
        (query) => query.limit(10).descending('tokenId')
    )
    return (
      
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="Nft Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
          {fetchingListedNfs ? <div>Loading....</div> : listedNfts.map((nft) => {
            const {price, nftAddress, tokenId, marketplaceAddress, seller} = nft.attributes
            return(
                <div>Price: {price}, NftAddress: {nftAddress}. TokenId:{tokenId}, Seller: {seller}</div>
            )
})}
        </div>
    )
}
