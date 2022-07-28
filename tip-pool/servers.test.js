describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });
  describe('submitServerInfo tests', function () {
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
    it('should not add a new server to allServers if the serverName is empty', function () {
      serverNameInput.value = '';

      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(0);
    });
  });
  describe('updateServerTable tests', function () {
    it('should not create a new table row if allServers is empty', function () {
      const serverTable = document.querySelector('#serverTable');
      submitServerInfo();
      allServers = {};

      expect(Object.keys(allServers).length).toEqual(0);
      // expect server table to not have children
      expect(serverTable.hasChildNodes()).toBe(true);
    });
    it('should update servertable on updateServerTable()', function () {
      submitServerInfo();
      updateServerTable();

      let curTdList = document.querySelectorAll('#serverTable tbody tr td');

      expect(curTdList.length).toEqual(3);
      expect(curTdList[0].innerText).toEqual('Alice');
      expect(curTdList[1].innerText).toEqual('$0.00');
      expect(curTdList[2].innerText).toEqual('X');
    });
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
