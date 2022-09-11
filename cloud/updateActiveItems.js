const { default: Moralis } = require("moralis/types")


Moralis.Cloud.afterSave("ItemListed", async (request) => {
    const confirmed = request.object.get("confirmed")
    const logger = Moralis.Cloud.getLogger()
    logger.info("Looking for confimed Tx")
    if(confirmed){
        logger.info('Found Them')
        const ActiveItems = Moralis.Object.extend('ActiveItem')
        const activeItem = new ActiveItems()
        activeItem.set('marketplaceAddress', re )
    }
})
