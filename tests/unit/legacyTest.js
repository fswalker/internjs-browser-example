const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('Legacy', () => {

    describe('hello', () => {
        it('should return proper string', () => {
            assert.strictEqual(Legacy.hello(), 'Never use such legacy approach for modules!');
        });
    });

    describe('getMagicDate', () => {
        it('should return proper date', () => {
            assert.strictEqual(Legacy.getMagicDate(), '2018-07-05');
        });
    });

});
