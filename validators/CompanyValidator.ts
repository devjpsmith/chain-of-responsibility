import { IChain } from "../interfaces/IChain";
import { ICompanyValidator } from "../interfaces/ICompanyValidator";
import Company from "../models/Company";

export default class CompanyValidator implements ICompanyValidator{
    constructor(private _validator: IChain<Company, boolean>) {

    }

    isValid(company: Company): boolean {
        return this._validator.handleRequest(company);
    }

}