import React, { useState } from "react"
import { Modal, Input, useNotification } from "web3uikit"
import nftAbi from "../constants/NftMarketplace.json"
import UpdateListingModal from "./UpdateListingModal"
import { ethers } from "ethers"
const UpdateListingModal = ({
    nftAddress,
    price,
    tokenId,
    isVisible,
    marketplaceAddress,
    onClose,
}) => {
    const [priceToUpdateListingWith, setPriceUpdateLisitingWith] = useState(0)
    const dispatch = useNotification()
    const handleUpdateListingSuccess = async (tx) => {
        await tx.wait(1)
        dispatch({
            type: "success",
            message: "Listing Updated",
            title: "Lisiting Updated please refresh (and move blocks)",
            position: "topR",
        })
        onClose
    }
    const { runContractFunction: updateListing } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: marketplaceAddress,
        functionName: "updateListing",
        params: {
            nftAddress,
            tokenId,
            newPrice: ethers.utils.parseEther(priceToUpdateListingWith || 0),
        },
    })
    return (
        <div>
            <Modal
                onCancel={onClose}
                onCloseButtonPressed={onClose}
                isVisible={isVisible}
                onOk={() =>
                    updateListing({
                        onError: (error) => {
                            console.log(error)
                        },
                        onSuccess: () => handleUpdateListingSuccess,
                    })
                }
            >
                <Input
                    label="Update Listing price in lI Currency (ETH)"
                    name="New listing Price"
                    type="number"
                    onChange={(event) => {
                        setPriceUpdateLisitingWith(event.target.value)
                    }}
                />
            </Modal>
        </div>
    )
}

export default UpdateListingModal
