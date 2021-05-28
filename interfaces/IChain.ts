export interface IChain<T,K> {
    setNextChain(chain: IChain<T,K>): IChain<T,K>;
    handleRequest(request: T): K;
}