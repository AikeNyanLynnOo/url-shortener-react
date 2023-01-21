## fronendmentor challenge - URL shortening app - using React

![Design Captured](https://github.com/AikeNyanLynnOo/url-shortener-react-api/blob/main/public/images/capture.png "Screen Capture")

### Used Technologies

 - [ReactJS](https://nextjs.org/)
 - Browser Storage
 - [CryptoJS](https://www.npmjs.com/package/crypto-js)
 - [TailwindCSS](https://tailwindcss.com/)
 - [URL shortening API](https://shrtco.de/ "Go Check")


### Features

- Shorten any long url
- Show different messages for loading, success, failed!
- Show clear message to user if the shortening process was failed (based on the situations supported by [API](https://shrtco.de/ "Go Check"))
- Support Responsive Design for all devices
- Store recent shortened links when user back to app using Browser Storage
- Store recent links in browser storage in encrypted string ([CryptoJS](https://www.npmjs.com/package/crypto-js))


### Run Locally

Clone the project

```bash
  git clone https://github.com/AikeNyanLynnOo/url-shortener-react-api.git
```

Go to the project directory

```bash
  cd url-shortener-react-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


### Demo

[Demo](https://url-shortener-a1k3.netlify.app/)

