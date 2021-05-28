import Company from "../models/Company";

export interface ICompanyValidator {
    isValid(company: Company): boolean;
}