import config from '../config'
export function formatNumberAsCurency (num){
    if (!isNaN(num)){
        num = parseFloat(num);
        num = num.toFixed(2);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export function parseDeliveryStatus(status) {
    switch (status) {
        case config.DELIVERY_INITIATED:
            return config.DELIVERY_INITIATED;
        case config.DELIVERY_ITEM_PICKED:
            return config.DELIVERY_ITEM_PICKED;
        case config.DELIVERY_STARTED:
            return config.DELIVERY_STARTED;
        case  config.DELIVERY_COMPLETED:
            return config.DELIVERY_COMPLETED;
        default:
            return "Unknown status"
    }
}
