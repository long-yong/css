// your test functions

describe('test1:',function(){
    it('test showName',function(){
       var a='ck';
        var exp='my name is ck';
        expect(exp).toEqual(showName(a));
    });
});

describe('test2:',function(){
    it('test showAddr',function(){
       var a='6524 126th';
        var exp='my addr is 6524 126th';
        expect(exp).toEqual(showAddr(a));
    });
});

