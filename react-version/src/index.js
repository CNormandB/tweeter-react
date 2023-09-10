import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
$("form").on("submit", function(event) {
  event.preventDefault();
  let post_length = $("#tweet-text-box").val().length;
  const error_div = $("#error-message");

  if (post_length !== undefined) {
    if (post_length == 0) {
      
      error_div.slideDown("slow", function() {
        error_div.text("Your tweet is empty! Cannot submit!");
        error_div.css("display: block");
      });
      return;
    }
    if (post_length > 140) {
      error_div.slideDown("slow", function() {
        error_div.text("Tweet is over 140 characters. Cannot submit!");
        error_div.css("display: block");
      });
      return;
    }
    error_div.slideUp("slow", function() {
      error_div.css("display: none");
    });  
  }
  // async await
  $.ajax({
    method: 'POST',
    url: '/tweets',
    data: $("form").serialize()
  }).then(loadTweets);

  $("#tweet-text-box").val('');
  $(".counter").val(140);
});
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
