
describe('FormData', function() {
  // Disabled: depends on the external httpbin.org service being reachable.
  xit('should allow FormData posting', function () {
    return axios.postForm('http://httpbin.org/post', {
      a: 'foo',
      b: 'bar'
    }).then(({data}) => {
      expect(data.form).toEqual({
        a: 'foo',
        b: 'bar'
      });
    });
  });
})
