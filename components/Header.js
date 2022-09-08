import Link from "next/link"
import React from "react"
import { ConnectButton } from "web3uikit"
const Header = () => {
    //The moralisAuth means that we are not trying to connect to a server
    return (
        <nav>
            <h1 className="py-4 px-4 font-bold text-3xl">Home</h1>
            <div>
            <Link href="/">
                <a>NFT Marketplace</a>
            </Link>{" "}
            <Link href="/sell-nft">
                <a>Sell NFT</a>
            </Link>
            <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}

export default Header
