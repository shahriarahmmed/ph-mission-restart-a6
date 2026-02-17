## 1. What is the difference between null and undefined?
#### null হলো এসাইন করা ভ্যালু যা দ্বারা বুঝানো হয় কোনো ভ্যালু নেই এখানে। আর undefined হলো ভ্যারিয়েবল ডিকলার করা হয়েছে কিন্তু কোনো ভ্যালু এসাইন করা হয় নি।

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
#### map() ফাংশন এক্সিটিং কোনো array থেকে নতুন একটা array তৈরি করে। এক্সিটিং array কে কোনো মডিফিকেশন করা ছাড়া। map() ফাংশন ডাটা ট্রান্সফরমেশন, array of objects ম্যানুপুলেশন, UI তে ডাটা রেন্ডার করার জন্য ব্যাবহার করা হয়। map() যেখানে এক্সিটিং array থেকে কোনো মডিফিকেশন ছাড়াই নতুন array রিটান করে সেখানে forEach() প্রতিটি আইটেমের জন্য একটা ফাংশন এক্সিকিউট এর কাজ করে কোনো array রিটান করে না।


## 3. What is the difference between == and ===?
#### জাভাস্ক্রিপ্টে == ২ টা সমান চিহ্ণ দ্বারা loosely equal বুঝানো হয়। মানে 1 == "1" => TRUE রিটার্ন করবে। আর === ৩ টা সমান চিহ্ণ দ্বরা Strictly Equal বুঝানো হয়। মানে 1 === "1" => FALSE রিটার্ন করবে।


## 4. What is the significance of async/await in fetching API data?
#### async/await ব্যবহার করে asynchronous কোড লেখা যায় কিন্তু সেটা synchronous স্টাইলে দেখা যায়। async হলো একটা ফাংশনকে asynchronous ভাবে কাজ করতে সাহায্য করে এবং এটা একটি promise রিটার্ন করে। await অংশ কোড এক্সিকিউশন থামিয়ে রাখে যতক্ষন না পর্যন্ত promise টি resove হয়। 

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
####  Scope দ্বারা বুঝানো হয় কোনো variable, function কিংবা object এর কোডের কোন অংশটুকুর একসেস আছে।  Scope সাধারনত তিন ধরনের হয়। Global Scope, Functional or Local Scope and Block Scope. Global Scope এ একটি ভ্যারিয়েবল কোডের যেকোনো জায়গা থেকে একসেস করা যায়। Functional or Local Scope এ ভ্যারিয়েবল ফাংশন এর মধ্যে ডিকলার করা হয় যা শুধু ঐ ফাংশনের মধ্যেই একসেস করা যায় এর বাইরে একসেস করা যায় না। Block Scope এ ভ্যারিয়েবল ডিকলার করা হয় let or const দ্বারা। এটা { } এর মধ্যে ডিকলার করা হয় এবং ওই ব্লকের মধ্যেই একসেস করা যায়।