export type Order = {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    products: Product[];
    total: number;
}
