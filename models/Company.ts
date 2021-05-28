import { CompanyType } from "../enums/CompanyType";

export default class Company {
    companyType?: CompanyType;
    name?: string;
    accredited?: boolean;
    companyNumber?: number;
    website?: string;
}