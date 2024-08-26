const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form action="">
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter email address" required />
        <input type="text" placeholder="Enter your subject" required />
        <textarea rows="8" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
