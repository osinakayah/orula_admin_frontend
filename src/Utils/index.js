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
            return "Pending";
        case config.DELIVERY_ITEM_PICKED:
            return "Picked Up";
        case config.DELIVERY_STARTED:
            return "In Transit";
        case  config.DELIVERY_COMPLETED:
            return "Completed";
        default:
            return "Unknown status"
    }
}