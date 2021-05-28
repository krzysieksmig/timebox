import convertSecondsToTimer from '../../lib/time'
describe("convertSecondsToTimer", ()=>{
    test('returns 30 seconds for 30 seconds', ()=>{
        expect(
            convertSecondsToTimer(30)
        ).toEqual([0,0,30,0])
    })

    test('returns 1 minute for 60 seconds', ()=>{
        expect(
            convertSecondsToTimer(60)
        ).toEqual([0,1,0,0])
    })

    test('returns 0 hours 2 minutes 0 seconds 0 mseconds for 120 seconds', ()=>{
        expect(
            convertSecondsToTimer(120)
        ).toEqual([0,2,0,0])
    })

    test('returns 2 hours 0 minutes 0 seconds 0 mseconds for 7200 seconds', ()=>{
        expect(
            convertSecondsToTimer(7200)
        ).toEqual([2,0,0,0])
    })

    test('returns 1 hours 30 minutes 0 seconds 0 mseconds for 5400 seconds', ()=>{
        expect(
            convertSecondsToTimer(5400)
        ).toEqual([1,30,0,0])
    })

    test('returns 4 hours 0 minutes 0 seconds 0mseconds for 14400 seconds', ()=>{
        expect(
            convertSecondsToTimer(14400)
        ).toEqual([4,0,0,0])
    })

})
