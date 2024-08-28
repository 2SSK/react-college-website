import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/certificate.jpg" alt="" />
          <h2>Our Certificate &&apos; Online Programs For 2025</h2>
          <p>
            Discover a world of opportunities with our diverse range of
            certificate and online programs tailored for 2025. At our
            institution, we&apos;re dedicated to providing enriching educational
            experiences that empower individuals for success in their chosen
            fields.
          </p>
          <br />
          <p>
            Whether you&apos;re interested in business analytics, data science,
            machine learning, computer science, AutoCAD, journalism, or commerce
            - our programs cater to a wide array of interests and industries.
            Join us on a transformative journey as you delve into the latest
            trends and advancements in your chosen field.
          </p>
          <br />
          <p>
            Our commitment is to create a vibrant learning community where
            knowledge meets innovation. Embrace the future of education with us
            and gain valuable insights that will shape your professional path.
          </p>
          <br />
          <p>
            Ready to take the next step? Feel free to share your thoughts and
            questions in the comments below. Your journey towards academic and
            personal growth begins here!
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCAD</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
