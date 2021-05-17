export function isDecimal(value: number): boolean{
    if(value % 1 != 0){
        return true;
    }
    return false;
}