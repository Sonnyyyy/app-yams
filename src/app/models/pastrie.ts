export class Pastrie {
    id: string;
    ref: string;
    name: string;
    description: string;
    url?: string;
    quantity: number;
    order: number;
    tags?: string[];
    like?: string;
    constructor(id: string, ref: string, name: string, description: string, url: string, quantity: number, order: number, tags: string[], like: string){
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.url = url;
        this.quantity = quantity;
        this.order = order;
        this.tags = tags;
        this.like = like;
    }
}