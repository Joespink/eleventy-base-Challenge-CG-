---
layout: layouts/post.njk
title: Contact Us
templateClass: tmpl-post
eleventyNavigation:
  key: Contact Us
  order: 3
---

<style>

p {
  margin-left: 30px;
  text-align: center;}

p1 {
  margin-left: 40px;
  text-align: center;}

button{
  background-color: #0000ff;
  text-align: center;
  border: black;
  border-width: 2px;
}

</style>

<br>
<p1> We will contact You: </P>
<br>

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Mobile: <input type="Mobile" name="Mobile" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
