import { CompanyType } from "./enums/CompanyType";
import CompanyValidatorFactory from "./factories/CompanyValidatorFactory";

const validator = CompanyValidatorFactory.getCompanyValidator();

var isValid = validator.isValid({
    companyType: CompanyType.ABC,
    website: 'wesell.com'
});

console.log(`First company is valid: ${isValid}`);

isValid = validator.isValid({
    companyType: CompanyType.ABC,
});

console.log(`Second company is valid: ${isValid}`);

isValid = validator.isValid({
    companyType: CompanyType.XYZ,
    accredited: true
});

console.log(`Third company is valid: ${isValid}`);

isValid = validator.isValid({
    companyType: CompanyType.XYZ,
})

console.log(`Fourth company is valid: ${isValid}`);