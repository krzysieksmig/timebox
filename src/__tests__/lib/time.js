import convertSecondsToTimer from '../../lib/time'
describe("convertSecondsToTimer", ()=>{
    test('works for 30 seconds', ()=>{
        expect(
            convertSecondsToTimer(30)
        ).toEqual([0,0,30,0])
    })

    test('works for 60 seconds', ()=>{
        expect(
            convertSecondsToTimer(60)
        ).toEqual([0,1,0,0])
    })

    test('works for 120 seconds', ()=>{
        expect(
            convertSecondsToTimer(120)
        ).toEqual([0,2,0,0])
    })

    test('works for 7200 seconds', ()=>{
        expect(
            convertSecondsToTimer(7200)
        ).toEqual([2,0,0,0])
    })

    test('works for 5400 seconds', ()=>{
        expect(
            convertSecondsToTimer(5400)
        ).toEqual([1,30,0,0])
    })

    test('works for 14400 seconds', ()=>{
        expect(
            convertSecondsToTimer(14400)
        ).toEqual([4,0,0,0])
    })

})
