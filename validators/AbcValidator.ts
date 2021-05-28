import { CompanyType } from "../enums/CompanyType";
import Company from "../models/Company";
import ValidatorBase from "./ValidatorBase";

export default class AbcValidator extends ValidatorBase {
    handleRequest(request: Company): boolean {
        console.log('in AbcValidator');
        if (request.companyType === CompanyType.ABC) {
            // abc company should have a website
            return request.website ? true : false;
        } else {
            return super.handleRequest(request);
        }
    }
}