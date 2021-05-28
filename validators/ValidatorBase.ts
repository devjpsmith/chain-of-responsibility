import { IChain } from "../interfaces/IChain";
import Company from "../models/Company";

export default abstract class ValidatorBase implements IChain<Company, boolean> {
    private nextChain?: IChain<Company, boolean>;
    
    setNextChain(chain: IChain<Company, boolean>): IChain<Company, boolean> {
        this.nextChain = chain;
        return chain;
    }

    handleRequest(request: Company): boolean {
        if (this.nextChain) {
            return this.nextChain.handleRequest(request);
        }
        throw new Error('Unable to validate company');
    }
    
}