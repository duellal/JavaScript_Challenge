// import {makePlusFunction,
//     filterArray,
//     getSecondLargest,
//     Person,} from './index'
// const {makePlusFunction,
//         filterArray,
//         getSecondLargest,
//         Person,} = require('./solution')
    
describe('makePlusFunction', ()=>{
    it('returns a new function', ()=>{
        expect(typeof makePlusFunction()).toBe('function')
    })
    
    it('returns a new function that takes an input and returns the result when adding 5 to it', ()=>{
        const plusFive = makePlusFunction(5)
        
        expect(plusFive(2)).toBe(7)
        expect(plusFive(-8)).toBe(-3)
    })
    
    it('returns a new function that takes an input and returns the result when adding 10 to it', ()=>{
        const plusTen = makePlusFunction(10)
        
        expect(plusTen(0)).toBe(10)
        expect(plusTen(188)).toBe(198)
    })
    
    it('returns a new function that takes an input and returns the result', ()=>{
        const plusFive = makePlusFunction(5)
        const plusTen = makePlusFunction(10)
        
        expect(plusFive(plusTen(0))).toBe(15)
    })
})

describe('filterArray', ()=>{
    it('returns new array without strings', ()=>{
        let newArr = filterArray([1, 2, 'a', 'b'])
        expect(newArr).toEqual([1, 2])
        
        newArr = filterArray([1, 'a', 'b', 0, 15])
        expect(newArr).toEqual([1, 0, 15])
        
        newArr = filterArray([1, 2, 'assd', '1', '123', 123])
        expect(newArr).toEqual([1, 2, 123])
        
        newArr = filterArray(['one', 1, 'ten', 10, 15, 'two', 2])
        expect(newArr).toEqual([1, 10, 15, 2])
    })
})

describe('getSecondLargest', ()=>{
    it('returns second largest number in array', ()=>{
        expect(getSecondLargest([2, 3, 6, 6, 5])).toBe(5)
        expect(getSecondLargest([15, 20, 3, 1, 100])).toBe(20)
        expect(getSecondLargest([5, 10, -1, 0, 100])).toBe(10)
        expect(getSecondLargest([-1, 0, 1, -5])).toBe(0)
    })
})

describe.only('Person class', ()=>{
    let diana;
    let p1;
    let p2;
    let p3;
    
    beforeEach(() => {
        diana = new Person('Diana', 20)   
        p1 = new Person("Samuel", 36)
        p2 = new Person("Joel", 5)
        p3 = new Person("Lily", 20)
    })

    console.log(diana)
    
    it('Person class initialized with name', ()=>{
        expect(diana.name).toBe('Diana')
    })
    
    it('Person class initialized with age', ()=>{
        expect(diana.age).toBe(20)
    })
    
    it('Person class has compareAge method', ()=>{
        expect(diana.__proto__.compareAge).not.toBeUndefined()
    })
    
    it('Person compareAge returns string comparing age', ()=>{
        expect(diana.compareAge(p1)).toBe('Samuel is older than me.')
        
        expect(diana.compareAge(p2)).toBe('Joel is younger than me.')
        
        expect(diana.compareAge(p3)).toBe('Lily is the same age as me.')
    })
})