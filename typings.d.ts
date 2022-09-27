type Customer={
    email:string;
    name: string;
}
type CustomerList={
    name: ID;
    value: Customer;
}

type TrackingItem= {
    customer_id: ID
    items: Item[]
    customer: Customer
}

type Item ={
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
  }

type CustomerResponse={
    name: ID
    value: Customer
}

type Order={
    carrier: String
    createdAt: string
    shippingCost: number
    trackingId: string
    City: String
    Lat: number
    Lng: number
    trackingItems: TrackingItem
    Address: string
    City: string
}
type OrderResponse={
    value: Order;
}

