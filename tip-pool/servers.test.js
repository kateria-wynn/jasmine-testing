describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

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

  afterEach(function () {
    for (let server in allServers) {
      let serverNum = server.slice(-1);
      let currServer = document.querySelector(`#server${serverNum}`);
      currServer.parentElement.replaceChildren();
    }
    allServers = {};
  });
});
