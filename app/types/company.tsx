export interface Company {
  id: string;
  created_at?: string;
  name: string;
  phone: string;
  address: string;
  user_id?: string;
}

export interface ApiResponse {
  data: Company[];
}