import AbcValidator from "../validators/AbcValidator";
import CompanyValidator from "../validators/CompanyValidator";
import ValidatorBase from "../validators/ValidatorBase";
import XyzValidator from "../validators/XyzValidator";

export default class CompanyValidatorFactory {
    private static abcValidator: ValidatorBase = new AbcValidator();
    private static xyzValidator: ValidatorBase = new XyzValidator();

    static getCompanyValidator(): CompanyValidator {
        this.abcValidator
            .setNextChain(this.xyzValidator);
        return new CompanyValidator(this.abcValidator);
    }
}