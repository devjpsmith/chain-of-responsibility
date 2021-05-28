import { CompanyType } from "../enums/CompanyType";
import Company from "../models/Company";
import ValidatorBase from "./ValidatorBase";

export default class XyzValidator extends ValidatorBase {
    handleRequest(request: Company): boolean {
        if (request.companyType === CompanyType.XYZ) {
            // an XYZ company should be accredited
            return request.accredited ? true : false;
        } else {
            return super.handleRequest(request);
        }
    }
}