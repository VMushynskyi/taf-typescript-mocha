class NumberGenerator {

    public generateNumber(startRange: number, endRange: number){
        return  Math.floor(Math.random() * (endRange - startRange)) + startRange;
    }
}

export default new NumberGenerator();