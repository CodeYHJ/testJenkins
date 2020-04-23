const chai = require('chai')

const sinon = require('sinon')

const sinonChai = require('sinon-chai')

chai.use(sinonChai);

const a = require('../index')

const assert = chai.assert

describe('test',()=>{
    it('is string',()=>{
        assert.isTrue(typeof a === 'string')
    })
    it('is function',()=>{
        assert.isTrue(typeof a === 'function')
    })
})