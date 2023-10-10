const { expect } = require('chai');
const { mainMail } = require('./components/contact'); 

describe('Email Sending', () => {
  it('should send an email successfully', async () => {
    const name = 'John Doe';
    const email = 'john.doe@example.com';
    const phone = '123-456-7890';
    const subject = 'Test Subject';
    const message = 'Test Message';

    try {
      const result = await async function mainMail(name, email, phone, subject, message);
      expect(result).to.equal('Message Sent Successfully');
    } catch (error) {
      // Handle any errors here (e.g., log or fail the test)
      throw error;
    }
  });
  async function mainMail(name, email, phone, subject, message) {
    // implementation details
  }

  module.exports = { mainMail };
});