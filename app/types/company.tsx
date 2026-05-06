export interface Address {
    id: number; city: string; country: string; // ... dst
}

export interface Contact {
    firstname: string; lastname: string; email: string; image: string;
}

export interface Company {
    id: number;
    name: string;
    email: string;
    country: string;
    website: string;
    image: string;
    contact: Contact;
}

export interface ApiResponse {
    data: Company[];
}