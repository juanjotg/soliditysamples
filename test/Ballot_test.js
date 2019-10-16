const Ballot = artifacts.require('Ballot');

contract('Ballot', function (accounts) {

    async function expectThrow (promise) {
        try {
          await promise;
        } catch (error) {
            return;
        }
        
        assert.fail('Expected throw not received');
      }

    const members = [ accounts[0], accounts[1], accounts[2]]

    // se ejecuta antes de cada test
    beforeEach(async function () {

        this.ballot = await Ballot.new(members);
    });

    it('no voto for new proposal', async function () {

        const novotes = await this.ballot.noVotes(1);

        assert.equal(novotes, 0);
    });

    it('vote proposal', async function () {
        
        await this.ballot.vote(1);

        const novotes = await this.ballot.noVotes(1);
        
            assert.equal(novotes, 1);
    });

    it('vote proposal twice', async function () {
        
        await this.ballot.vote(1, {from: accounts[0]});
        await this.ballot.vote(1, {from: accounts[1]});

        const novotes = await this.ballot.noVotes(1);
        
            assert.equal(novotes, 2);
    });    

    it('cannot vote twice with the same account', async function () {
        
        await this.ballot.vote(1); // manda la cuenta cero como asumida
        await this.ballot.vote(1);

        const novotes = await this.ballot.noVotes(1);
        
            assert.equal(novotes, 1);
    });           
    
    it('non member cannot vote', async function () {
        
        await expectThrow(this.ballot.vote(1, {from: accounts[4]}));
        
    });    

});
