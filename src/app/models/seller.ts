export interface IRoleDetails {
    gst_no:string
    }
export interface ISeller{
    username: string;
    password?: string;
    email: string;
    contact_number: string;
    address: string;
    role_id?: string;
    role:string;
    role_specific_details: IRoleDetails[];
    _id: string;
  
  }
  export interface IAllSellerResponses {
    statuscode: number;
    data: ISeller[];
    pagination: Pagination
  }
  export interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }