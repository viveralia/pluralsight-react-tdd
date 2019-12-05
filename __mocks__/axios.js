// Fake axios request using mock data

const axiosMock = jest.genMockFromModule("axios");

const mockResponse = {
  data: {
    shops: [
      {
        location: "test location",
        address: "test address"
      }
    ]
  }
};

axiosMock.get.mockImplementation(req);

const req = () => {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
};

module.exports = axiosMock;
