"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[406],{8063:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"planning-feedback-component","metadata":{"permalink":"/portfolio/blog/planning-feedback-component","source":"@site/blog/2022-06-21-planning-feedback-component.mdx","title":"Planning A Feedback Component","description":"Introduction","date":"2022-06-21T00:00:00.000Z","formattedDate":"June 21, 2022","tags":[],"readingTime":1.865,"truncated":false,"authors":[{"name":"Jason Mortensen","title":"Technical Writer","url":"https://github.com/ingrey1/portfolio","imageURL":"https://media-exp2.licdn.com/dms/image/C4E03AQFZbme25h0hng/profile-displayphoto-shrink_400_400/0/1633321615286?e=1660780800&v=beta&t=5LlzlM6G6kcaJw9cccQjclGOo3sgt_WqPCC1YroJDTo","key":"jason"}],"frontMatter":{"slug":"planning-feedback-component","title":"Planning A Feedback Component","authors":["jason"]},"nextItem":{"title":"Welcome To My Blog","permalink":"/portfolio/blog/welcome-blog-post"}},"content":"import TOCInline from \'@theme/TOCInline\';\\n\\n\\n<TOCInline toc={toc} />\\n\\n## Introduction\\n\\nAn important part of improving the quality of online documentation involves soliciting feedback from the primary users of that documentation. One mechanism that can be used to acquire helpful feedback is a feedback component.\\n\\nBy placing a feedback component on each documentation page, it\'s possible to collect page-level feedback with minimal effort, once the initial component setup is complete.\\n\\nWhile the basic concepts behind the feedback component are technology agnostic, the implementation details will vary depending on the tech stack used to generate the online documentation. In this series of blog posts, I will explain how to create a custom React feedback component that can be used in any Docusaurus-generated documentation suite. \\n\\n## Feedback Component Design\\n\\n### Type Of User Feedback Collected\\n\\nThe purpose of the Feedback component is to collect relevant information about the user\'s experience with a given documentation page. Ideally, we want to know not only that a user had a positive, neutral, or negative experience, but also why that user had the particular experience they did. Let\'s consider two approaches to capturing user feedback, and then we can evaluate their pros and cons.\\n\\n- **The Textbox Feedback Model**\\n\\n  <div style={{display: \\"inline-block\\", border: \\"2px solid black\\"}}>\\n  <textarea id=\\"feedback\\" name=\\"feedback\\" rows=\\"10\\" cols=\\"30\\" style={{resize: \\"none\\", color: \\"blue\\", backgroundColor: \\"cyan\\"}}>\\n   ENTER FEEDBACK HERE\\n  </textarea>\\n  <br />\\n  <center><button type=\\"button\\" style={{margin: \\"10px\\", color: \\"blue\\"}}>Submit Feedback</button></center>\\n  </div>\\n\\n  - **Advantages**\\n    - Text feedback can provide more detailed insights into user behavior and satisfaction\\n    - More likely to receive feedback that is actionable\\n  - **Disadvantages**\\n    - Users are more likely to provide feedback if they don\'t have to type anything\\n    - Depending on context, volume of feedback may be too low to draw meaningful conclusions\\n\\n- **The Like/Neutral/Dislike Feedback Model**\\n\\n  <div style={{display: \\"inline-block\\", backgroundColor: \\"cyan\\", border: \\"2px solid black\\"}}>\\n   <p style={{margin: \\"5px\\", textAlign: \\"center\\", color: \\"blue\\"}}><b>Was This Page Helpful?</b></p>\\n   <br />\\n   <span>\\n    <button style={{margin: \\"10px\\", color: \\"blue\\"}}>Positive</button>\\n    <button style={{margin: \\"10px\\", color: \\"blue\\"}}>Negative</button>\\n    <button style={{margin: \\"10px\\", color: \\"blue\\"}}>Neutral</button>\\n   </span>\\n  </div>\\n\\n  - **Advantages**\\n    - Low barrier to use: users are more likely to click an emoji than type text\\n  - **Disadvantages**\\n    - Feedback may have limited use because of a lack of information about why users like or dislike the page"},{"id":"welcome-blog-post","metadata":{"permalink":"/portfolio/blog/welcome-blog-post","source":"@site/blog/2022-06-15-welcome.mdx","title":"Welcome To My Blog","description":"Welcome To My Blog. =)","date":"2022-06-15T00:00:00.000Z","formattedDate":"June 15, 2022","tags":[{"label":"docusaurus","permalink":"/portfolio/blog/tags/docusaurus"}],"readingTime":0.025,"truncated":false,"authors":[{"name":"Jason Mortensen","title":"Technical Writer","url":"https://github.com/ingrey1/portfolio","imageURL":"https://media-exp2.licdn.com/dms/image/C4E03AQFZbme25h0hng/profile-displayphoto-shrink_400_400/0/1633321615286?e=1660780800&v=beta&t=5LlzlM6G6kcaJw9cccQjclGOo3sgt_WqPCC1YroJDTo","key":"jason"}],"frontMatter":{"slug":"welcome-blog-post","title":"Welcome To My Blog","authors":["jason"],"tags":["docusaurus"]},"prevItem":{"title":"Planning A Feedback Component","permalink":"/portfolio/blog/planning-feedback-component"}},"content":"Welcome To My Blog. =)"}]}')}}]);